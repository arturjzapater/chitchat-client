import { assert } from 'chai'
import makeTypingMessage from './makeTypingMessage'

describe('makeTypingMessage', () => {
  it('returns empty string when no users are typing', () => {
    const list = [{
      id: '12',
      nickname: 'test',
      isTyping: false,
      joined: 12
    }, {
      id: '13',
      nickname: 'test-b',
      isTyping: false,
      joined: 127
    }]

    assert.strictEqual(makeTypingMessage(list, ''), '')
  })

  it('returns empty string when current user is typing', () => {
    const list = [{
      id: '12',
      nickname: 'test',
      isTyping: true,
      joined: 12
    }, {
      id: '13',
      nickname: 'test-b',
      isTyping: false,
      joined: 127
    }]

    assert.strictEqual(makeTypingMessage(list, 'test'), '')
  })

  it('returns correct string when multiple users are typing', () => {
    const list = [{
      id: '12',
      nickname: 'test',
      isTyping: true,
      joined: 12
    }, {
      id: '13',
      nickname: 'test-b',
      isTyping: true,
      joined: 127
    }, {
      id: '14',
      nickname: 'test-c',
      isTyping: true,
      joined: 12
    }, {
      id: '15',
      nickname: 'test-d',
      isTyping: true,
      joined: 127
    }]

    assert.strictEqual(makeTypingMessage(list, ''), 'Several people are typing...')
    list.pop()
    assert.strictEqual(makeTypingMessage(list, ''), 'test, test-b and test-c are typing...')
    list.pop()
    assert.strictEqual(makeTypingMessage(list, ''), 'test and test-b are typing...')
    list.pop()
    assert.strictEqual(makeTypingMessage(list, ''), 'test is typing...')
  })

  it('doesn\'t count current user when creating string', () => {
    const list = [{
      id: '12',
      nickname: 'test',
      isTyping: true,
      joined: 12
    }, {
      id: '13',
      nickname: 'test-b',
      isTyping: true,
      joined: 127
    }, {
      id: '14',
      nickname: 'test-c',
      isTyping: false,
      joined: 12
    }, {
      id: '15',
      nickname: 'test-d',
      isTyping: true,
      joined: 127
    }]

    assert.strictEqual(makeTypingMessage(list, 'test'), 'test-b and test-d are typing...')
  })
})
