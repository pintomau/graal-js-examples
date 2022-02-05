package pintomau.graal_article.typescript_bundling;

public class MappingContext {
  private final String name;
  private final String value;

  public MappingContext(String name, String value) {
    this.name = name;
    this.value = value;
  }

  public String getName() {
    return name;
  }

  public String getValue() {
    return value;
  }
}
