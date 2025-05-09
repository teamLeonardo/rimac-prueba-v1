import { expect, test } from 'vitest'
import { add, max } from './math'

test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
})

test('max [1, 2, 3] to equal 3', () => {
    expect(max([1, 2, 3])).toBe(3)
})


