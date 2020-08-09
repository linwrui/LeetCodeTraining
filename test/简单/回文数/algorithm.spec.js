/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    let newNum = 0;
    let num = x;
    let loopTimes = 0;
    while (num) {
        newNum = newNum * 10 + num % 10;
        num = Math.floor(num/10);
        loopTimes++;
    }
    return newNum === x;
};
test("test1", () => {
    expect(isPalindrome(121)).toBe(true);
});
test("test2", () => {
    expect(isPalindrome(-121)).toBe(false);
});
test("test3", () => {
    expect(isPalindrome(10)).toBe(false);
});
test("test4", () => {
    expect(isPalindrome(2)).toBe(true);
});
test("test5", () => {
    expect(isPalindrome(0)).toBe(true);
});
test("test6", () => {
    expect(isPalindrome(123)).toBe(false);
});
test("test7", () => {
    expect(isPalindrome(123321)).toBe(true);
});
test("test8", () => {
    expect(isPalindrome(12321)).toBe(true);
});
