/**
 * @param {string} s
 * @return {number}
*/

var LongestSubstringWithoutRepeatingCharacters = function(s) {
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }

    return maxLength;
};