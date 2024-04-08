function tagExample(strings) {
    return strings;
}
const result = tagExample`Hello world`;


const name = 'Jack';
const greet = true;

function tagsExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const results = tagsExample`Hello ${name}, How are you?`;

console.log(results);