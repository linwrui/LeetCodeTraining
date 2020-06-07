const {ListNode} = require("common-algorithms");
// #region [一些扩展方法]
Array.prototype.toListNode = function (handler) {
    return ListNode.buildFromArray(this,handler);
};
Object.prototype.noInstance = function () {
    return JSON.parse(JSON.stringify(this));
};
// #endregion
