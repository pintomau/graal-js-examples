package pintomau.graal_article.spring.greeter;

public interface GreetingService {

  Greeting greet(GreetCommand command);
}
