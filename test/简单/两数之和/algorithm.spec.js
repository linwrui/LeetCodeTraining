/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const targetNum = target - num;
        const findIndex = nums.slice(i + 1).indexOf(targetNum);
        if (findIndex !== -1) {
            return [i, findIndex + i + 1];
        }
    }
};
test("test1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test("test2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
test("test3", () => {
    expect(twoSum([3, 5, 8, 2, 4], 6)).toEqual([3, 4]);
});
