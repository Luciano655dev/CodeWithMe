/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = new Map(); // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the Map
        numToIndex.set(nums[i], i);
    }

    throw new Error("No solution found");

    
    // Nota: Este código não é meu (luciano655dev), ele foi feito pelo MrAke (https://leetcode.com/MrAke/)
    // Coloquei este código aqui pois estou apenas alimentando a API, todos os créditos da solução para ele
    // https://leetcode.com/problems/two-sum/solutions/4082514/98-21-hashmap-time-complexity-1-line-code/
};