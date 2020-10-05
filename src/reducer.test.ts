import { assert } from 'chai'
import reducer from './reducer'
import type { Message, State } from './types/State'

const initState = {
  infoMessage: '',
  messages: [],
  nickname: '',
  userList: []
}

describe('Reducer', () => {
  it('should return initial state if called with no arguments', () => {
    const result = reducer()

    assert.deepStrictEqual(result, initState)
  })

  it('should handle LOGIN actions', () => {
    const result = reducer(undefined, {
      type: 'LOGIN',
      payload: 'Nick'
    })

    const expected = {
      ...initState,
      nickname: 'Nick'
    }

    assert.deepStrictEqual(result, expected)
  })

  it('should handle LOGOUT actions', () => {
    const init: State = {
      infoMessage: '',
      messages: [{
        user: 'test',
        text: 'Test',
        timestamp: 12,
        type: 'user'
      }],
      nickname: 'Nick',
      userList: [{
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
    }
    const result = reducer(init, {
      type: 'LOGOUT',
      payload: 'logout'
    })

    assert.deepStrictEqual(result, {
      ...initState,
      infoMessage: 'logout'
    })
  })

  it('should handle UPDATE_USERLIST actions', () => {
    const userList = [{
      id: '13',
      nickname: 'test-b',
      isTyping: false,
      joined: 127
    }]

    const result = reducer(undefined, {
      type: 'UPDATE_USERLIST',
      payload: userList
    })

    assert.deepStrictEqual(result, {
      ...initState,
      userList
    })
  })

  it('should handle RECEIVE_MESSAGE actions', () => {
    const message: Message = {
      user: 'test',
      text: 'Test',
      timestamp: 12,
      type: 'user'
    }

    const result = reducer(undefined, {
      type: 'RECEIVE_MESSAGE',
      payload: message
    })

    assert.deepStrictEqual(result, {
      ...initState,
      messages: [message]
    })
  })

  it('should return state on default action', () => {
    const state: State = {
      ...initState,
      messages: [{
        user: 'test',
        text: 'Test',
        timestamp: 12,
        type: 'user'
      }]
    }
    const result = reducer(state)

    assert.deepStrictEqual(result, state)
  })
})
