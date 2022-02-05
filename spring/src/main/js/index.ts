import GreetCommand = pintomau.graal_article.spring.greeter.GreetCommand

import Greeting = pintomau.graal_article.spring.greeter.Greeting
import { Greeting as GreetingConstruct } from './common/java-types/j2ts/java-types'

export function greet (greetCommand: GreetCommand): Greeting {
  const index = Math.floor(Math.random() * greetings.length)

  return new GreetingConstruct(greetings[index], greetCommand.name())
}

const greetings = ['Hello', 'Hi', 'Welcome', 'Howdy']
