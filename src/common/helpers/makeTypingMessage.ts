import type { UserItem } from '../types/State'

const messages: Record<number|string, CallableFunction> = {
  0: (): string => '',
  1: ([user]: string[]): string => `${user} is typing...`,
  2: ([first, second]: string[]): string => `${first} and ${second} are typing...`,
  3: ([first, second, third]: string[]): string => `${first}, ${second} and ${third} are typing...`,
  default: (): string => 'Several people are typing...'
}

const makeTypingMessage = (userlist: UserItem[], user: string): string => {
  const usersTyping = userlist
    .filter(({ nickname, isTyping }: UserItem) => isTyping && nickname !== user)
    .map(({ nickname }: UserItem) => nickname)

  const makeMessage = messages[usersTyping.length] || messages.default

  return makeMessage(usersTyping)
}

export default makeTypingMessage
