package pintomau.graal_article.spring.config;

import static org.springframework.beans.factory.config.ConfigurableBeanFactory.SCOPE_PROTOTYPE;

import java.io.IOException;
import java.net.URL;
import java.util.logging.Handler;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.slf4j.bridge.SLF4JBridgeHandler;
import org.springframework.aop.framework.ProxyFactoryBean;
import org.springframework.aop.target.ThreadLocalTargetSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import pintomau.graal_article.spring.greeter.GreetingService;
import pintomau.graal_article.spring.greeter.JsGreetingService;

@Configuration
public class GraalGreetingConfiguration {

  /**
   * Logging bridge so that console.logs will end up in SLF4J
   */
  private static final Handler GRAALJS_LOG_HANDLER = new SLF4JBridgeHandler();

  /**
   * @return the shared engine instance that defines the code cache scoping
   */
  @Bean
  public Engine jsEngineConfiguration() {
    return Engine.newBuilder().logHandler(GRAALJS_LOG_HANDLER)
        .option("js.strict", "true")
        .option("inspect", "localhost:4444")
        .option("inspect.Suspend", "false")
        .build();
  }

  /**
   * @return the contexts must also share the same HostAccess instance
   */
  @Bean
  public HostAccess hostAccess() {
    return HostAccess
        // allow access to classes, methods, etc...
        .newBuilder(HostAccess.ALL)
        .build();
  }

  /**
   * @param threadLocalJsContext the local threaded bean creator
   * @return the proxy bean that proxies the bean creation handling to the threaded bean creator
   */
  @Bean
  @Primary
  public ProxyFactoryBean proxiedThreadedJsContext(
      final ThreadLocalTargetSource threadLocalJsContext) {
    final ProxyFactoryBean proxyFactoryBean = new ProxyFactoryBean();
    proxyFactoryBean.setTargetSource(threadLocalJsContext);
    proxyFactoryBean.setInterfaces(GreetingService.class);
    return proxyFactoryBean;
  }

  /**
   * @return the facility that manages the thread local beans, creating a new bean if the current
   * executing thread does not yet have an instance
   */
  @Bean(destroyMethod = "destroy")
  public ThreadLocalTargetSource threadLocalJsContext() {
    final ThreadLocalTargetSource threadLocalTargetSource = new ThreadLocalTargetSource();
    threadLocalTargetSource.setTargetBeanName("jsGreetingService");
    return threadLocalTargetSource;
  }

  /**
   * @param jsEngineConfiguration the shared engine which scopes the code caching
   * @return the actual bean to be created for each thread executing it
   * @throws IOException in case the expected script doesn't exist
   */
  @Bean
  @Scope(SCOPE_PROTOTYPE)
  public GreetingService jsGreetingService(
      final Engine jsEngineConfiguration) throws IOException {
    final URL mappings =
        getClass().getClassLoader().getResource("js/index.js");
    final Source js = Source.newBuilder("js", mappings).build();

    final Context ctx =
        Context.newBuilder("js")
            .engine(jsEngineConfiguration)
            .allowAllAccess(true)
            .logHandler(GRAALJS_LOG_HANDLER)
            .build();

    ctx.eval(js);
    final Value jsFunc = ctx.getBindings("js").getMember("Greet").getMember("greet");
    return new JsGreetingService(jsFunc);
  }

}
