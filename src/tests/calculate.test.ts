import {multi, splitIntoWords, sum} from "./calculate";

test('sum should be correct', () => {

    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = sum(a, b)
    const resul2 = sum(b, c)

    //expect result

    expect(result1).toBe(3)
    expect(resul2).toBe(5)
})

test('multiply should be correct', () => {

    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = multi(a, b)
    const resul2 = multi(b, c)

    //expect result

    expect(result1).toBe(2)
    expect(resul2).toBe(6)
})

test('splitting into words should be correct', () => {
    //data
    const sent1 = 'Hello my friend!'

    //action
    const result1 = splitIntoWords(sent1)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')


})
