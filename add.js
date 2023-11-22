// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。
// case [2,7,11,15]  [3,2,4] [3,3]
const twoSum = (nums, target) => {
    const prevNums = {};                    // 存储出现过的数字，和对应的索引               
  
    for (let i = 0; i < nums.length; i++) {       // 遍历元素   
      const curNum = nums[i];                     // 当前元素   
      const targetNum = target - curNum; 
      const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引 
      if (targetNumIndex !== undefined) { 
        return [targetNumIndex, i];
      } else {                                    // 如果不存在，说明之前没出现过目标元素
        prevNums[curNum] = i;                     // 存入当前的元素和对应的索引
      }
    }
  }


  var twoSum2 = function(nums, target) {
    for(let i = 0; i<nums.length; i++) {
        for(let j = i +1 ; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i , j]
            }
        }
    }
};
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum2([2,7,11,15], 9))
