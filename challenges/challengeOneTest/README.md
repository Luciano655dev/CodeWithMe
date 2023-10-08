# Overview
In this problem, we are given two sorted arrays, nums1 and nums2. We need to return the median of these two arrays.

# Approach 1: Merge Sort
## Intuition
Let's start with the straightforward approach. If we put the elements of two arrays in one array A and arrange them in order. Assume the merged arrays has a length of n, then the median is:
- A[n / 2], if n is odd.
- The average of A[n / 2] and A[n / 2 + 1], if n is even.
However, we do not really need to merge and sort these arrays. Note that both arrays are already sorted, so the smallest element is either the first element of nums1 or the first element of nums2. Therefore, we can set two pointers p1 and p2 at the start of each array, then we can get the smallest element from the nums1 and nums2 by comparing the values nums1[p1] and nums2[p2].