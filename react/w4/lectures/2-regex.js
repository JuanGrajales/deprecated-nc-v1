// sometimes you want to find or replace parts of a string

// example
let str = "bye";

console.log(str.replace("b", "a")); // this prints "aye"
// but what if you have multiple 'b's not just one?
// this is where regex could come in handy

// regex syntax: /pattern/optionalFlags

let str1 = "bbbbbbbye";
console.log(str1.replace("b", "a")); // this prints "abbbbbbye"

// basic example
let regex = /b/g;
let str2 = "bbbbbbbye";
console.log(str2.replace(regex, "a")); // this still prints "aaaaaaaye"

// global flag example
let regex2 = /[ebyc]/gi;
let str3 = "BBbBbBbye";
console.log(str3.replace(regex2, "a")); // this still prints "aaaaaaaaa"

// resources
// https://www.w3schools.com/js/js_regexp.asp
// https://www.rexegg.com/regex-quickstart.html
