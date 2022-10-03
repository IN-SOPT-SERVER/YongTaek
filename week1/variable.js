/**
* var
* 값 재할당, 재 선언 가능
*/
var myName = "이욘땍";
console.log(`${myName}`);

myName = "이욘택";
console.log(`${myName}`);

var myName = "이용택";
console.log(`${myName}`);

/**
* let
* 값 재할당 가능, 재선언 불가능
*/
let myName2 = "이욘땍";
console.log(`${myName}`);

myName2 = "이욘택";
console.log(`${myName}`);

// error
let myName2 = "이용택";

/**
* const
* 값 재할당, 재선언 불가능
*/

const myName3 = "이욘땍";
console.log(`${myName}`);

// error
myName3 = "이욘택";
console.log(`${myName}`);

// error
const myName3 = "이용택";
