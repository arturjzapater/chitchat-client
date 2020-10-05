import { assert } from 'chai'
import { formatTime } from './time'

describe('formatTime', () => {
  it('returns a time string', () => {
    const timestamp = 100_000

    const result = formatTime(timestamp)
    const expected = /^\d{2}:\d{2}:\d{2}$/

    assert.match(result, expected)
  })
})
