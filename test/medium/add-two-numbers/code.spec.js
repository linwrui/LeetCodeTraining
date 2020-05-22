const ListNode = require("../../../common/list-node");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum = listNodeToNum(l1) + listNodeToNum(l2);
    var result = sum===0 ? new ListNode(0): numToListNode(sum);
    return result;
};
function listNodeToNum(listNode){
    var num = 0;
    var next = listNode;
    var index = 0;
    while(next){
        num += next.val * Math.pow(10, index++)
        next = next.next;
    }
    return num;
}
function numToListNode(num) {
    var listNode;
    var next;
    while(num!=0) {
        if(listNode===undefined){
            listNode = new ListNode(num%10);
            next = listNode;
        } else {
            next = next.push(num%10);
        }
        num = Math.floor(num/10);
    }
    return listNode;
}
test("listToNum1", ()=>{
    expect(listNodeToNum([2,4,3].toListNode())).toBe(342);
})
test("listToNum2", ()=>{
    expect(listNodeToNum([2,4,3,8,9].toListNode())).toBe(98342);
})
test("test1", ()=>{
    expect(addTwoNumbers([2,4,3].toListNode(), [5,6,4].toListNode())).toMatchObject([7,0,8].toListNode());
});
test("test2", ()=>{
    expect(addTwoNumbers([2,4,3,8,9].toListNode(), [5,6,4].toListNode())).toMatchObject([7,0,8,8,9].toListNode());
});
test("test3", ()=>{
    expect(addTwoNumbers([0].toListNode(), [0].toListNode())).toMatchObject([0].toListNode());
});
test("test3", ()=>{
    expect(addTwoNumbers(
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].toListNode(), 
        [5,6,4].toListNode())).toMatchObject([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].toListNode());
});