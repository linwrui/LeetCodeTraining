const fs = require('fs');
const sumBy = require("../../../common/sum");
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    return dichotomizationApproach(1, Math.max(...nums), (x) => (sumBy(nums, (n) => Math.ceil(n / x)) <= threshold));
};
function dichotomizationApproach(start, end, approachTo) {
    if (start === end) return start;
    const possibleApproachNum = start + Math.ceil((end - start)/2);
    if (checkApproach(approachTo, possibleApproachNum)) {
        if (possibleApproachNum - start === 1){
          return checkApproach(approachTo, start) ? start : possibleApproachNum;
        }
        return dichotomizationApproach(start, possibleApproachNum, approachTo);
    } else { // 不满足逼近的条件，取中值方向刚好与满足逼近条件的相反
        return dichotomizationApproach(possibleApproachNum, end, approachTo);
    }
}
function checkApproach(approachTo, possibleApproachNum) {
    return typeof approachTo === "function" ? approachTo(possibleApproachNum) : approachTo === possibleApproachNum;
}
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
    const json = JSON.parse(fs.readFileSync(`${__dirname}/sample-1.json`));
    expect(smallestDivisor(json.it, json.threshold)).toBe(json.expect);
}, 1000);