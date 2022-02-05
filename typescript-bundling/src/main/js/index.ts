import { MappingResult as MappingResultConstruct } from './common/java-types/j2ts/java-types'
import MappingContext = pintomau.graal_article.typescript_bundling.MappingContext
import MappingResult = pintomau.graal_article.typescript_bundling.MappingResult
import { LoremIpsum } from 'lorem-ipsum'

const loremIpsum = new LoremIpsum({ sentencesPerParagraph: { max: 1, min: 1 } })

export function map (ctx: MappingContext): MappingResult {
  return new MappingResultConstruct({
    myName: ctx.getName(),
    myValue: ctx.getValue(),
    quoteOfTheDay: loremIpsum.generateSentences()
  })
}
