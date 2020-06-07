const ListNode = require("./list-node");
test("test1", () => {
    expect(ListNode.buildFromArray([2, 4, 3])).toMatchObject({
        val: 2,
        next: { val: 4, next: { val: 3, next: null } },
    });
});
test("test2", () => {
    expect(ListNode.buildFromArray([7, 0, 8])).toMatchObject({
        val: 7,
        next: { val: 0, next: { val: 8, next: null } },
    });
});
test("test3", () => {
    expect(ListNode.buildFromArray([7, 0, 8]).toString()).toBe("7 -> 0 -> 8");
});
test("test4", () => {
    expect(ListNode.buildFromArray([2, 4, 3]).toString()).toBe("2 -> 4 -> 3");
});
test("test5", () => {
    expect(ListNode.buildFromString("2 -> 4 -> 3")).toMatchObject({
        val: 2,
        next: { val: 4, next: { val: 3, next: null } },
    });
});
test("test6", () => {
    expect(ListNode.buildFromString("2->4->3")).toMatchObject({
        val: 2,
        next: { val: 4, next: { val: 3, next: null } },
    });
});
test("test7", () => {
    expect(ListNode.buildFromString("2->4->3","string")).toMatchObject({
        val: "2",
        next: { val: "4", next: { val: "3", next: null } },
    });
});
test("test8", () => {
    expect(ListNode.buildFromString("0->1->true->false","boolean")).toMatchObject({
        val: false,
        next: { val: true, next: { val: true, next: { val: false, next: null} } },
    });
});
test("test9", () => {
    expect(ListNode.buildFromString("0->1->true->false->undefined->null->'true'->'false'->'0'->\" a  \"")).toMatchObject({
        val: 0,
        next: { 
            val: 1, 
            next: { 
                val: true, 
                next: { 
                    val: false, 
                    next: {
                        val: undefined,
                        next: {
                            val: null,
                            next: {
                                val: "true",
                                next: {
                                    val: "false",
                                    next: {
                                        val: "0",
                                        next:{
                                            val: " a  ",
                                            next: null
                                        }
                                    }
                                }
                            }
                        }
                    }
                } 
            } 
        },
    });
});
