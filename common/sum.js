function sum(nums, callback){
    var result = 0;
    for(let i = 0;i<nums.length;i++) {
        result += callback?callback(nums[i]):nums[i];
    }
    return result;
}
module.exports = sum;