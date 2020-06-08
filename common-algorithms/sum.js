function sumBy(nums, callback) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += callback ? callback(nums[i]) : nums[i];
    }
    return result;
}
module.exports = sumBy;
