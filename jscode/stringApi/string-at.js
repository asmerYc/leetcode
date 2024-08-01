/**
 * 返回给定字符串的最后一个字符
 * @param {string} str - 要检查的字符串
 * @return {string} - 给定字符串的最后一个字符
 */
// function returnLast(arr) {
//     return arr.at(-1);
//   }
  
//   let invoiceRef = "myinvoice01";
  
//   console.log(returnLast(invoiceRef));

  function returnLast(arr) {
    return arr[arr.length - 1];
  }
  
  let invoiceRef = "myinvoice01";
  console.log(returnLast(invoiceRef));