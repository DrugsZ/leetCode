let uniquePaths = require('../62.unique-paths')

test('uniquePaths test to expect 5,', ()=>{
  expect(uniquePaths(3,2)).toBe(3)
})

test('uniquePaths test to expect 1,', ()=>{
  expect(uniquePaths(1,3)).toBe(1)
})

test('uniquePaths test to expect 0,', ()=>{
  expect(uniquePaths(0,3)).toBe(0)
})

test('uniquePaths test to expect 0,', ()=>{
  expect(uniquePaths(0,0)).toBe(0)
})