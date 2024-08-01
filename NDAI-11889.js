function processInput(str) {
    // 正则表达式用于检测字符串是否只包含文本
    const textOnlyRegex = /^[^\d]*$/;
    // 正则表达式用于检测字符串是否只包含数字和千分位逗号
    const pureNumberRegex = /^\d{1,3}(,\d{3})*$/;

    if (textOnlyRegex.test(str)) {
        // 如果字符串只包含文本，直接返回
        return str;
    } else if (pureNumberRegex.test(str)) {
        // 如果字符串是纯数字或已包含千分位逗号，添加美元符号
        return `$${str}`;
    } else {
        // 如果字符串包含数字和字母，提取数字并处理
        return str.replace(/\d+(?:,\d{3})*/g, (match) => {
            // 检查是否已经包含千分位逗号
            if (match.includes(',')) {
                return `$${match}`;
            } else {
                const number = parseInt(match, 10);
                return `$${number.toLocaleString()}`;
            }
        });
    }
}

// 测试示例
const testStrings = [
    '40 PER DAY 1200 MAX',
    '4,000',
    'ed text ttt',
    '1000',
    '50000',
    '3,000,000',
    '500 PER PERSON',
    '3,000 PER PERSON',
];

testStrings.forEach(str => {
    console.log(`Input: "${str}" => Output: "${processInput(str)}"`);
});
