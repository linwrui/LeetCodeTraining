const ListNode = require("./common/list-node");
// #region [一些扩展方法]
Array.prototype.toListNode = function (handler) {
    var nextList = this.slice(1);
    var listNode = new ListNode(handler ? handler(this[0]) : this[0]);
    listNode.next = nextList.length ? nextList.toListNode(handler) : null;
    return listNode;
};
Object.prototype.noInstance = function () {
    return JSON.parse(JSON.stringify(this));
};
// #endregion
