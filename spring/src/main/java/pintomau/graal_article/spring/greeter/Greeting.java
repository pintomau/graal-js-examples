package pintomau.graal_article.spring.greeter;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Greeting(String greet, String name) {

  @JsonProperty("greeting")
  public String greeting() {
    return "%s, %s!".formatted(greet, name);
  }
}
