# 寻找两个正序数组的中位数

> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

-   给定两个大小为 m 和 n 的正序（从小到大）数组  nums1 和  nums2。

-   请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为  O(log(m + n))。

-   你可以假设  nums1  和  nums2  不会同时为空。

示例 1:

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

示例 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

## 题目分析
* 根据时间复杂度要求，这个算法只能对输入的两个正序数组各自**遍历一次**
* 该题难点在于需要将两个正序数组摊开并按正确的排序找出中位数（如果为奇数则直接是中间值，如果是偶数则未中间两个数的平均值）
* 特殊情况：两个正序数组中可能存在重复值
* 如果对时间复杂度的要求有 `log`，通常都需要用到**二分查找**，这道题也可以通过二分查找实现。
