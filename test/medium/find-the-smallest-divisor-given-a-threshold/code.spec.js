const fs = require('fs');
const continuousDichotomizationApproach = require("../../../common/approach");
const sum = require("../../../common/sum");
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    return continuousDichotomizationApproach([1, Math.max(...nums)], (x) => (sum(nums, (n) => Math.ceil(n / x)) <= threshold), "left");
};
test("test1", () => {
    expect(smallestDivisor([1,2,5,9], 6)).toBe(5);
});
test("test2", () => {
    expect(smallestDivisor([2,3,5,7,11], 11)).toBe(3);
});
test("test3", () => {
    expect(smallestDivisor([19], 5)).toBe(4);
});
test("test4", ()=>{
    expect(smallestDivisor([1,2,3], 6)).toBe(1);
})
test("test5", ()=>{
    const json = JSON.parse(fs.readFileSync(`${__dirname}/sample-59.json`));
    expect(smallestDivisor(json.it, json.threshold)).toBe(json.expect);
}, 1000);