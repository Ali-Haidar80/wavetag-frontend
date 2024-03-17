if (true) {
    var t = "foo";
}

function foo() {
    var fooT = "foo";
}

foo();
console.log(t);
//   console.log(fooT);
// for: i is the index
const collection = ["apple", "orange"];
let obj = {
    name: 'sdklfj',
    age: 'sdjfk'
}
// for (let i = 0; i < collection.length; i++) { console.log(collection[i]) }
// for...in: x is the index
// for (let x in collection) { console.log(collection[x]) }
// for...of: x is the value
// for (let x of collection) { console.log(x )}
// for (let x in obj) { console.log(x )}
// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false,
// });
// console.log(Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false,
//   }))

// console.log(Object.entries(obj))
// Object.entries(obj).map(([key,value])=>console.log(key,value))

function lengthOfLongestSubstring(s) {
    let charIndexMap = {};
    let maxLength = 0;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in charIndexMap && charIndexMap[char] >= startIndex) {
            startIndex = charIndexMap[char] + 1;
        }

        charIndexMap[char] = i;
        const currentLength = i - startIndex + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";

console.log(lengthOfLongestSubstring(s1)); // Output: 3
console.log(lengthOfLongestSubstring(s2)); // Output: 1
console.log(lengthOfLongestSubstring(s3)); // Output: 3
