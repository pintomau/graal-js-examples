// Classes to be exported to Typescript definitions for JS mappings

@Java2TS(
    declare = {
        @Type(MappingContext.class),
        @Type(value = MappingResult.class, export = true)
    })
package pintomau.graal_article.typescript_bundling;

import org.bsc.processor.annotation.Java2TS;
import org.bsc.processor.annotation.Type;
