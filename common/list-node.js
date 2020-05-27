class ListNode {
    constructor(initializedValue) {
        this.val = initializedValue;
        this.next = null;
    }
    toString(){
        var printString = `${this.val}`;
        if(this.next != null){
            printString += ` -> ${this.next.toString()}`;
        } else {
            return printString;
        }
        return printString;
    }
}
module.exports = ListNode;
