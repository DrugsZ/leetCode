const { mergeTwoLists } = require('../21.merge-two-sorted-lists');
const { arr2List } = require('../util');

test('should expect [1,1,2,3,4,5]', () => {
  let l1 = arr2List([1,2,4]);
  let l2 = arr2List([1,3,5]);
  expect(mergeTwoLists(l1,l2)).toEqual(arr2List([1,1,2,3,4,5]));
});

test('test no l2', () => {
  let l1 = arr2List([1,2,4]);
  let l2 = null;
  expect(mergeTwoLists(l1,l2)).toEqual(l1);
});

test('test no l1', () => {
  let l1 = null;
  let l2 = arr2List([1,3,5]);
  expect(mergeTwoLists(l1,l2)).toEqual(l2);
});


test('test l1 start > l2 start', () => {
  let l1 = arr2List([2,4,6]);
  let l2 = arr2List([1,3,5]);
  expect(mergeTwoLists(l1,l2)).toEqual(arr2List([1,2,3,4,5,6]));
});