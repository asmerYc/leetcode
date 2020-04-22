// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。


//  输入: 38
//  输出: 2 
//  解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

// 进阶
// 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

// 递归调用函数时通过console.log()打印有值，但是在获取的时候是undefined，原因是在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值。
// 如果想要函数最后一次计算所得值，就需要在每次调用该函数的时候进行return，每一次return都是把最新的函数调用返回给外层的函数调用。

function addDigits (num) {
  let operateNum = num + '';
  let result = 0;
  for(let i =0; i<operateNum.length; i++) {
    result += Number(operateNum[i]);
  }

  if(result > 9) {return addDigits(result)} else {
    return result;
  }

} 


//假设一个三位数整数n=100a+10b+c,变化后addn=a+b+c；
//两者的差值n-addn=99a+9b，差值可以被9整除，说明每次缩小9的倍数
//那么我们可以对res=num%9，若不为0则返回res，为0则返回9

/**
 * @param {number} num
 * @return {number}
 */
var addDigits1 = function(num) {
  if(num>9){
      num = num%9;
      if(num==0){
          return 9;
      }
  }
  console.log(num)
};
console.log(addDigits(2107))
