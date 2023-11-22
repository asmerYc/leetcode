// 无重复最长字符串

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
      let charSet = new Set();
      let currentLength = 0;
  
      for (let j = i; j < s.length; j++) {
        const currentChar = s[j];
  
        if (!charSet.has(currentChar)) {
          charSet.add(currentChar);
          currentLength++;
          maxLength = Math.max(maxLength, currentLength);
        } else {
          break; // 如果出现重复字符，退出内层循环
        }
      }
    }
  
    return maxLength;
};

var s = "abcabcbb";
var s = "bbbbb";
var s = "pwwkew";


const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let left = 0;
    let charIndexMap = {};
  
    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
        left = charIndexMap[currentChar] + 1;
      }
  
      charIndexMap[currentChar] = right;
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  };
  
  // 示例
  const exampleString = "abcabcbb";
  const result = lengthOfLongestSubstring(exampleString);
  console.log(result); // 输出 3，因为无重复字符的最长子串是 "abc"