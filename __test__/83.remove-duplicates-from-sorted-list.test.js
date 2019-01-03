const { arr2List } = require('../util');
const { deleteDuplicates } = require('../83.remove-duplicates-from-sorted-list');

test('should expect [1,2,3,4]', () => {
  let testList = arr2List([1,1,2,2,3,4]);
  expect(deleteDuplicates(testList)).toEqual(arr2List([1,2,3,4]));
});

test('should expect `null`', () => {
  let testList = null;
  expect(deleteDuplicates(testList)).toBe(null);
});


//该方法只对已排序链表去重，如未排序则会出现该情况
test('should expect [2,1,2,3,4]', () => {
  let testList = arr2List([2,1,1,2,3,4]);
  expect(deleteDuplicates(testList)).toEqual(arr2List([2,1,2,3,4]));
})
