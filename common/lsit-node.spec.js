test("test1", () => {
    expect([2, 4, 3].toListNode()).toMatchObject({
        val: 2,
        next: { val: 4, next: { val: 3, next: null } },
    });
});
test("test2", () => {
    expect([7, 0, 8].toListNode()).toMatchObject({
        val: 7,
        next: { val: 0, next: { val: 8, next: null } },
    });
});
