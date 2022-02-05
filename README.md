# Graal JS Examples

Some [Graal JS](https://github.com/oracle/graaljs) and general Graal examples.

## [Barebones](barebones)

A simple example that allows us to call a JS function from our Java code.

The JS function returns a Java defined type.

## [Typescript Bundling](typescript-bundling)

An example that allows using Typescript, transpiling to Javascript and bundling node dependencies.

Uses [java2ts-processor](https://github.com/bsorrentino/java2typescript) to automatically generate Typescript type\
definitions. This allows IDE hinting for types that exists in the Java code.

Additionally, contains an example of using multi-threading with GraalJS.

## [Spring](spring)

All of the above, integrated with Spring.

Additionally, adds the debugging dependency and configuration.