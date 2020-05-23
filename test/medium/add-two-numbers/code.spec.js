const ListNode = require("list-node");
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
var addTwoNumbers = function (l1, l2) {
    var carry = 0; // 进位，用于存储下一位的进位数
    var result; // 存储结果运算的单链表
    var resultNextListNode; // 存储结果运算的单链表最后一环
    var l1Val = l1.val;
    var l2Val = l2.val;
    while (l1 || l2) {
        var sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10); // 进位数计算
        if (l1 && l1.next) {
            l1Val = l1.next.val;
        } else {
            l1Val = 0;
        }
        l1 = l1 && l1.next;
        if (l2 && l2.next) {
            l2Val = l2.next.val;
        } else {
            l2Val = 0;
        }
        l2 = l2 && l2.next;
        if (result == null) {
            resultNextListNode = result = new ListNode(sum % 10);
        } else if (!resultNextListNode) {
            resultNextListNode = result.next = new ListNode(sum % 10);
        } else {
            resultNextListNode = resultNextListNode.next = new ListNode(sum % 10);
        }
    }
    if (carry !== 0) {
        resultNextListNode.next = new ListNode(carry);
    }
    return result;
};
test("isListNode", () => {
    expect(addTwoNumbers([2, 4, 3].toListNode(), [5, 6, 4].toListNode())).toBeInstanceOf(ListNode);
});
test("test1", () => {
    expect(addTwoNumbers([2, 4, 3].toListNode(), [5, 6, 4].toListNode())).toMatchObject(
        [7, 0, 8].toListNode().noInstance()
    );
});
test("test2", () => {
    expect(addTwoNumbers([2, 4, 3, 8, 9].toListNode(), [5, 6, 4].toListNode())).toMatchObject(
        [7, 0, 8, 8, 9].toListNode().noInstance()
    );
});
test("test3", () => {
    expect(addTwoNumbers([0].toListNode(), [0].toListNode())).toMatchObject([0].toListNode().noInstance());
});
test("test4", () => {
    expect(
        addTwoNumbers(
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].toListNode(),
            [5, 6, 4].toListNode()
        )
    ).toMatchObject(
        [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            .toListNode()
            .noInstance()
    );
});
test("test5", () => {
    expect(
        addTwoNumbers(
            [5, 6, 4].toListNode(),
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].toListNode()
        )
    ).toMatchObject(
        [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            .toListNode()
            .noInstance()
    );
});
test("test6", () => {
    expect(addTwoNumbers([5].toListNode(), [5].toListNode())).toMatchObject([0, 1].toListNode().noInstance());
});
