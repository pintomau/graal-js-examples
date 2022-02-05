package pintomau.graal_article.barebones;

import java.io.IOException;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.TypeLiteral;
import org.graalvm.polyglot.Value;

public class Main {
  public static void main(String[] args) throws IOException {
    final Context ctx =
        Context.newBuilder("js")
            // be careful with host access if you do not trust the source of your JS files
            .allowAllAccess(true)
            .option("js.strict", "true")
            .build();

    // get js sources
    final Source
        js = Source.newBuilder("js", Main.class.getClassLoader().getResource("barebones.js")).build();
    // evaluate the js script
    ctx.eval(js);
    // get a reference to the "map" function within our js script
    final Value mapFunc = ctx.getBindings("js").getMember("map");

    // call map with the provided context object
    final Value result = mapFunc.execute(new MappingContext("Mauro", "value"));
    // map the result to our Java type, whose object should've been created by our script
    final MappingResult typedResult = result.as(new TypeLiteral<>() {});

    System.out.println(typedResult);
  }
}
