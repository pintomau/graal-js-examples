package pintomau.graal_article.spring.greeter;

import org.graalvm.polyglot.TypeLiteral;
import org.graalvm.polyglot.Value;
import org.springframework.stereotype.Service;

public class JsGreetingService implements GreetingService {

  private final Value jsFunc;

  public JsGreetingService(Value jsFunc) {
    this.jsFunc = jsFunc;
  }

  @Override
  public Greeting greet(GreetCommand command) {
    // get the raw result from the js execution
    final Value rawResult = jsFunc.execute(command);
    // cast it to the expected type
    return rawResult.as(new TypeLiteral<>() {
    });
  }
}
