function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 根据数组创建链表
 * @param {Array<number>} arr 
 */
function arr2List(arr){
  let node;
  let head;
  arr.forEach(item => {
    let temp = new ListNode(item)
    if(node){
      node.next = temp
    }else{
      head = temp
    }
    node = temp
  })

  return head;
}

/**
 * 
 * @param {Number} val 节点值
 * @return {TreeNode}
 */
function CreateTreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * 
 * @param {Array.<Number>} arr 将要转化为二叉树的数组
 */
let arrToTree = (arr) => {
  if (!arr.length) return null;
  let i = 0;
  let root = new CreateTreeNode(arr[i++]);
  let nodeQueue = [root];
  let curNode;
  let len = arr.length;

  while (nodeQueue.length) {
    curNode = nodeQueue.shift();
    if(i < len){
      curNode.left = new CreateTreeNode(arr[i++]);
      nodeQueue.push(curNode.left);
    }else{
      break;
    }

    if(i < len) {
      curNode.right = new CreateTreeNode(arr[i++]);
      nodeQueue.push(curNode.right);
    }else{
      break;
    }
  }

  return root;
}

module.exports = {
  arr2List,
  arrToTree
}