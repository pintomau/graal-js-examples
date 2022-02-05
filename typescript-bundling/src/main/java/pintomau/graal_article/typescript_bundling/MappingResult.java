package pintomau.graal_article.typescript_bundling;

public class MappingResult {
  private final Object result;

  public MappingResult(Object result) {
    this.result = result;
  }

  @Override
  public String toString() {
    return "MappingResult{" +
        "result=" + result +
        '}';
  }
}
