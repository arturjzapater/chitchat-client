import { assert } from 'chai'
import * as actions from './SocketActions'
import type { Message } from '../../types/State'

describe('Socket actions', () => {
  describe('logout', () => {
    it('should create a LOGOUT action', () => {
      const result = actions.logout('test error')

      assert.hasAllKeys(result, ['type', 'payload'])
      assert.strictEqual(result.type, 'LOGOUT')
    })

    it('should set the message in the payload', () => {
      const { payload } = actions.logout('test message')
      const expected = 'test message'

      assert.strictEqual(payload, expected)
    })
  })

  describe('receiveMessage', () => {
    const msg: Message = {
      user: 'test',
      text: 'Test',
      timestamp: 12,
      type: 'user'
    }

    it('should create a RECEIVE_MESSAGE action', () => {
      const { type } = actions.receiveMessage(msg)

      assert.strictEqual(type, 'RECEIVE_MESSAGE')
    })

    it('should set the message object as the payload', () => {
      const { payload } = actions.receiveMessage(msg)

      assert.deepStrictEqual(payload, msg)
    })
  })

  describe('updateUserList', () => {
    const userlist = [{
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

    it('should create an UPDATE_USERLIST action', () => {
      const { type } = actions.updateUserList(userlist)

      assert.strictEqual(type, 'UPDATE_USERLIST')
    })

    it('should set the new user list as the payload', () => {
      const { payload } = actions.updateUserList(userlist)

      assert.deepStrictEqual(payload, userlist)
    })
  })
})
