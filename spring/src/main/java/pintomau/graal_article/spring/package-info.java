@Java2TS(
    declare = {
        @Type(GreetCommand.class),
        @Type(value = Greeting.class, export = true)
    })
package pintomau.graal_article.spring;

import org.bsc.processor.annotation.Java2TS;
import org.bsc.processor.annotation.Type;
import pintomau.graal_article.spring.greeter.GreetCommand;
import pintomau.graal_article.spring.greeter.Greeting;