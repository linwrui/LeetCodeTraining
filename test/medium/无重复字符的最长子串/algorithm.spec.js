/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1;
    var result = 0;
    var substring = "";
    for (let i = 0; i < s.length; i++) {
        var char = s[i];
        if (!substring.includes(char)) {
            substring += char;
        } else {
            substring = substring.substring(substring.search(char) + 1) + char; // 如果发现重复值，那么就需要往前截断重复值，并把当前字符推送进去作为新的截断字符串
        }
        if (substring.length > result) {
            result = substring.length;
        } else if (result === 0) {
            result = 1;
        }
    }
    return result;
};
test("test1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});
test("test2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});
test("test3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
test("test4", () => {
    expect(lengthOfLongestSubstring(" ")).toBe(1);
});
test("test5", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
});
test("test6", () => {
    expect(lengthOfLongestSubstring("a  d")).toBe(2);
});
test("test7", () => {
    expect(lengthOfLongestSubstring("au")).toBe(2);
});
test("test8", () => {
    expect(lengthOfLongestSubstring("bwf")).toBe(3);
});
test("test9", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
test("test10", () => {
    expect(lengthOfLongestSubstring("aabaab!bb")).toBe(3);
});
test("test11", () => {
    expect(lengthOfLongestSubstring("abababab!bb")).toBe(3);
});
