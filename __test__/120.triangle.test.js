const minimumTotal = require('../120.triangle')

test('三角形最小路径和',()=>{
    expect(minimumTotal([
        [2],
       [3,4],
      [6,5,7],
     [4,1,8,3]
    ])).toBe(11)
})