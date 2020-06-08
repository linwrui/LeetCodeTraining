const fs = require("fs");
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1;
    let result = 0;
    let substring = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const searchIndex = substring.indexOf(char);
        if (searchIndex === -1) {
            substring += char;
        } else {
            substring = substring.substring(searchIndex + 1) + char; // 如果发现重复值，那么就需要往前截断重复值，并把当前字符推送进去作为新的截断字符串
        }
        result = Math.max(substring.length, result);
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
test("test12", () => {
    const json = JSON.parse(fs.readFileSync(`${__dirname}/sample-1.json`));
    expect(lengthOfLongestSubstring(...json.args)).toBe(json.expect);
});
