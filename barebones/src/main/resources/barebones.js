const MappingResult = Java.type('pintomau.graal_article.barebones.MappingResult');

function map(ctx) {
    return new MappingResult({
        myNameIs: ctx.getName(),
        myValueIs: ctx.getValue()
    });
}