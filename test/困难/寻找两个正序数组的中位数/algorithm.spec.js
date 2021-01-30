/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const totalSize = nums1.length + nums2.length;
    const sortedList = [];
    const medianIndex = Math.floor(totalSize / 2);
    const isSizeEven = totalSize % 2 === 0;
    let stageNum; // 暂存的值， 存储未处理的数值，因为是正序数组，只需要暂存一个值即可
    const baseNums = nums1.length < nums2.length ? nums1 : nums2; // 基准数组，用于遍历取值，这里取两个数组中最短的为基准数组，这样遍历次数最少
    const comparisonNums = nums1.length >= nums2.length ? nums1 : nums2; // 对比数组，用于和取出的值进行比较
    while(nums1.length && nums2.length) {
        const num = stageNum === undefined ? baseNums.shift() : stageNum;
        if (comparisonNums[0] > num) { // 因为两个数组都是正序，所以只需要对比第一个元素即可
            sortedList.push(num);
            stageNum = undefined;
        } else {
            sortedList.push(comparisonNums.shift());
            stageNum = num;
        }
    }
    // nums1 和 nums2 两个数组应该至少有一个被取完所有值，否则不可能退出上面循环
    const remainingNums = nums1.length ? nums1 : nums2;
    if (remainingNums.length) {
        if (stageNum <= remainingNums[0]) {
            sortedList.push(stageNum);
        } else if (stageNum >= remainingNums[remainingNums.length - 1]) {
            remainingNums.push(stageNum);
        } else if (stageNum) {
            remainingNums.splice(remainingNums.findIndex(n => n > stageNum), 0, stageNum);
        }
        sortedList.push(...remainingNums);
    } else if(stageNum) {
        sortedList.push(stageNum);
    }
    return isSizeEven ? (sortedList[medianIndex] + sortedList[medianIndex - 1]) / 2 :  sortedList[medianIndex];
};
describe("test algorithm", () => {
    test("test1", () => expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0));
    test("test2", () => expect(findMedianSortedArrays([2], [1, 3])).toBe(2.0));
    test("test3", () => expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5));
    test("test4", () => expect(findMedianSortedArrays([3, 4], [1, 2])).toBe(2.5));
    test("test5", () => expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5));
    test("test6", () => expect(findMedianSortedArrays([1, 4], [2, 3])).toBe(2.5));
    test("test7", () => expect(findMedianSortedArrays([1], [1])).toBe(1.0));
    test("test8", () => expect(findMedianSortedArrays([1, 2], [1, 2])).toBe(1.5));
    test("test9", () => expect(findMedianSortedArrays([3], [1, 2, 4])).toBe(2.5));
    test("test10", () => expect(findMedianSortedArrays([3], [1, 2, 4, 5])).toBe(3.0));

});
