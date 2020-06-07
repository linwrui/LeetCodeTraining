const { NumberMatcher, BooleanMatcher } = require("./common-regexp");
class ListNode {
    constructor(initializedValue) {
        this.val = initializedValue;
        this.next = null;
    }
    toString() {
        var printString = `${this.val}`;
        if (this.next != null) {
            printString += ` -> ${this.next.toString()}`;
        } else {
            return printString;
        }
        return printString;
    }
    /**
     * 从字符串构建链表
     *
     * 注：字符串中用 ‘->’ 来代表数据的链路关系
     *
     * 如："1->2->3->4->5"
     * @static
     * @param {string} s 待构建链表的字符串
     * @param {"string"|"boolean"|"number"} valueType 链表中值的数据类型，注意 undefined|null 将会被识别为关键词自动转换
     * @param {function(v):any} valueHandler 对值的处理函数，入参为通过 valueType 识别后转换的值
     * @memberof ListNode
     */
    static buildFromString(s, valueType, valueHandler) {
        const result = this.buildFromArray(s.split("->"), v => {
            let convertValueType = valueType;
            const trimV = v.trim();
            let finalValue;
            // 关键词替换
            switch (trimV) {
                case "null":
                    finalValue = null;
                    break;
                case "undefined":
                    finalValue = undefined;
                    break;
                default:
                    finalValue = trimV;
                    break;
            }
            if (convertValueType === undefined) {
                // 根据当前值的形式自动判断类型
                if (NumberMatcher.test(trimV)) {
                    convertValueType = "number";
                } else if (BooleanMatcher.test(trimV)) {
                    convertValueType = "boolean";
                } else {
                    convertValueType = "string";
                }
            }
            switch (convertValueType) {
                case "boolean":
                    if (BooleanMatcher.test(trimV)) {
                        finalValue = trimV === "true" ? true : false;
                    } else if (NumberMatcher.test(trimV)) {
                        finalValue = Boolean(Number(trimV));
                    } else {
                        finalValue = Boolean(trimV);
                    }
                    break;
                case "number":
                    finalValue = Number(trimV);
                    break;
                case "string":
                    const stringMatcher = /^[`"']([\s\S]*)[`"']$/;
                    if (stringMatcher.test(finalValue)) {
                        finalValue = finalValue.match(/^[`"']([\s\S]*)[`"']$/)[1];
                    }
                    break;
            }
            return valueHandler ? valueHandler(finalValue) : finalValue;
        });
        return result;
    }
    /**
     * 从数组构建链表
     *
     * @static
     * @param {[]} array 待构建链表的数组
     * @param {function():any} handler 对单链表值的处理回调函数
     * @returns
     * @memberof ListNode
     */
    static buildFromArray(array, handler) {
        var nextList = array.slice(1);
        var listNode = new ListNode(handler ? handler(array[0]) : array[0]);
        listNode.next = nextList.length ? this.buildFromArray(nextList, handler) : null;
        return listNode;
    }
}
module.exports = ListNode;
