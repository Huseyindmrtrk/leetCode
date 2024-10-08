/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substringArray = [];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        
        const duplicateCharIndex = substringArray.indexOf(s[i]);

        if (duplicateCharIndex !== -1) {
            substringArray.splice(0, duplicateCharIndex + 1);
        }

        substringArray.push(s[i]);
        
        maxLength = Math.max(maxLength, substringArray.length);
    }

    return maxLength;
};
