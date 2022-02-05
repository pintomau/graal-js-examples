package pintomau.graal_article.typescript_bundling;

import java.io.IOException;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.TypeLiteral;
import org.graalvm.polyglot.Value;

public class Mutithreaded {
  public static void main(String[] args) throws IOException, InterruptedException {
    // get js sources
    final Source
        js =
        Source.newBuilder("js", Main.class.getClassLoader().getResource("js/index.js")).build();

    // engine dictates the js code caching scope
    try (Engine engine = Engine.create()) {
      final int threads = 100;
      final CountDownLatch countDownLatch = new CountDownLatch(threads);
      final ConcurrentLinkedQueue<MappingResult> results = new ConcurrentLinkedQueue<>();

      for (int j = 0; j < threads; j++) {
        new Thread(
            () -> {
              final Context CTX =
                  Context.newBuilder("js")
                      // notice the shared engine instance
                      .engine(engine)
                      // be careful with host access if you do not trust the source of your JS files
                      .allowAllAccess(true)
                      .build();

              // evaluate the js script (this should however be cached by the engine on the first iterations)
              // the caching is more effective in long-running applications where threads get
              // initiated and killed as time goes by
              CTX.eval(js);
              final Value mapper = CTX.getBindings("js").getMember("Mapping").getMember("map");

              final Value result = mapper.execute(new MappingContext(
                  Thread.currentThread().getName(),
                  String.valueOf(ThreadLocalRandom.current().nextInt())));
              final MappingResult typedResult = result.as(new TypeLiteral<>() {
              });
              results.add(typedResult);
              countDownLatch.countDown();
            })
            .start();
      }

      countDownLatch.await(5, TimeUnit.SECONDS);
      System.out.println(results);
    }
  }
}
