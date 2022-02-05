package pintomau.graal_article.spring.greeter.port;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pintomau.graal_article.spring.greeter.GreetCommand;
import pintomau.graal_article.spring.greeter.Greeting;
import pintomau.graal_article.spring.greeter.GreetingService;

@RestController
public class GreetingsController {

  private final GreetingService generator;

  public GreetingsController(GreetingService generator) {
    this.generator = generator;
  }

  @PostMapping("greet")
  public Greeting random(@RequestBody GreetCommand command) {
    return generator.greet(command);
  }

}
