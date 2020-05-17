/**
 * 连续二分法逼近(取整)
 *
 * @param {*} nums 准备作用于二分法逼近逼近的数组，因为是连续的二分法逼近，数组将自动按最大最小值进行数值轴的中值逼近
 * @param {*} approachTo 向哪里逼近，这里可以使一个回调函数，判断当前值是否满足条件，已确认是否已经逼近最佳值
 * @param {*} approachDirection 向那个方向逼近（left/right）
 */
function continuousDichotomizationApproach(nums, approachTo, approachDirection) {
    if (nums.length === 1) return nums[0];
    const start = Math.min(...nums);
    const end = Math.max(...nums);
    if (start === end) return start;
    const possibleApproachNum = approachDirection === "left" ? start + Math.ceil((end - start)/2) : start + Math.floor((end - start)/2);
    if (approachTo(possibleApproachNum)) {
        if (possibleApproachNum - start === 1){
          return approachTo(start) ? start : possibleApproachNum;
        }
        return continuousDichotomizationApproach(approachDirection === "left" ? [start, possibleApproachNum] : [possibleApproachNum, end], approachTo, approachDirection);
    } else { // 不满足逼近的条件，取中值方向刚好与满足逼近条件的相反
        return continuousDichotomizationApproach(approachDirection === "right" ? [start, possibleApproachNum] : [possibleApproachNum, end], approachTo, approachDirection);
    }
}
module.exports = continuousDichotomizationApproach;