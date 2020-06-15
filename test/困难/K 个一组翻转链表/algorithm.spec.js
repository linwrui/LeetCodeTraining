const { ListNode } = require("common-algorithms");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
    const kTemp = k; // 用于存储k值
    const headTemp = head; // 用于存储原始的head
    const hashSet = {}; // 用于存储计算过程中产生的listNode
    while (k > 0 && head !== null) {
        hashSet[kTemp - k] = head;
        head = head.next;
        k--;
    }
    if (Object.keys(hashSet).length === kTemp) {
        const middle = Math.floor(kTemp / 2);
        for (let i = 0; i < middle; i++) {
            // 执行链表交换
            const currentValue = hashSet[i].val;
            hashSet[i].val = hashSet[kTemp - i - 1].val;
            hashSet[kTemp - i - 1].val = currentValue;
        }
    }
    if (head) {
        reverseKGroup(head, kTemp);
    }
    return headTemp;
};
test("test1", () => {
    expect(reverseKGroup(ListNode.buildFromString("1->2->3->4->5"), 2)).toMatchObject(
        ListNode.buildFromString("2->1->4->3->5").noInstance()
    );
});
test("test2", () => {
    expect(reverseKGroup(ListNode.buildFromString("1->2->3->4->5"), 3)).toMatchObject(
        ListNode.buildFromString("3->2->1->4->5").noInstance()
    );
});
test("test3", () => {
    expect(reverseKGroup(ListNode.buildFromString("1->2->3->4->5"), 1)).toMatchObject(
        ListNode.buildFromString("1->2->3->4->5").noInstance()
    );
});
test("test4", () => {
    expect(reverseKGroup(ListNode.buildFromString("1->2"), 2)).toMatchObject(
        ListNode.buildFromString("2->1").noInstance()
    );
});
