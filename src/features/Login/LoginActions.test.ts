import { assert } from 'chai'
import * as actions from './LoginActions'

describe('Login actions', () => {
  describe('login', () => {
    it('should create a LOGIN action', () => {
      const result = actions.login('nickname', '')

      assert.hasAllKeys(result, ['type', 'payload'])
      assert.strictEqual(result.type, 'LOGIN')
    })

    it('should set the nickname in the payload', () => {
      const { payload } = actions.login('nick', 'asdf')
      const expected = { nickname: 'nick', token: 'asdf' }

      assert.deepStrictEqual(payload, expected)
    })
  })

  describe('loginError', () => {
    it('should create a LOGOUT action', () => {
      const result = actions.loginError('test error')

      assert.hasAllKeys(result, ['type', 'payload'])
      assert.strictEqual(result.type, 'LOGOUT')
    })

    it('should set the message in the payload', () => {
      const { payload } = actions.loginError('test error')
      const expected = 'test error'

      assert.deepStrictEqual(payload, expected)
    })
  })
})
