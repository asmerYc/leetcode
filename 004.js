// 二分法
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        console.log(low, 'low');
        let mid = Math.floor((low + high) / 2);
        console.log(mid, 'mid');

        if (arr[mid] === target) {
            return mid; // 找到目标值，返回索引
        } else if (arr[mid] < target) {
            low = mid + 1; // 目标值在右半部分
        } else {
            high = mid - 1; // 目标值在左半部分
        }
    }

    return -1; // 没找到目标值
}

console.log(binarySearch(arr, 6))
