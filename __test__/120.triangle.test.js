const minimumTotal = require('../120.triangle')

test('三角形最小路径和 => `11`',()=>{
    expect(minimumTotal([
        [2],
       [3,4],
      [6,5,7],
     [4,1,8,3]
    ])).toBe(11)
})
test('三角形最小路径和 => `0`',()=>{
    expect(minimumTotal([])).toBe(0)
})
test('三角形最小路径和 => `2`',()=>{
    expect(minimumTotal([
        [1],
       [1,2]
    ])).toBe(2)
})