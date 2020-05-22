class ListNode {
    constructor(initializedValue) {
        this.val = initializedValue;
        this.next = null;
        this.push = function(initializedValue) {
            var next = new ListNode(initializedValue);
            this.next = next;
            return next;
        }
    }
}
module.exports = ListNode;