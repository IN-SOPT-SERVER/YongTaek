// JS primitive types

/**
* Number
*/
console.log(typeof 3);

/**
* String
*/
const myName = "이용택";
console.log(`${myName} 입니다.`);
console.log(typeof myName);

/**
* Boolean
*/
console.log(true);
console.log(typeof false);

/**
* Symbol
*/
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1);  // true
console.log(sym1 === sym2);  // false
console.log(sym3 === sym4);  // false
console.log(typeof sym1);

/**
* null vs undefined
*/
let nullType = null;
let undefinedType;
console.log(nullType);
console.log(undefinedType);

// JS reference types

/**
* Object, key-value or function
*/
const user = {
    email: "dragontaek98@gmail.com",
    name: "이용택",
    favorite: ["떡볶이","떡볶이","떡볶이"],
    introduce: function () {
      console.log(`${this.name}입니다. ${this.favorite} 좋아함`);
    },
    getFavoriteFoods: function () {
      this.favorite.forEach((food) => {
        console.log(`${food} 맛있당`);
      });
    },
  };

/**
* Array
*/
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "오예!", false, { sopt: "Server" });

arr1.map((item) => console.log("item1 :", item));
arr2.map((item) => console.log("item2 :", item));

// Array is also object
console.log(typeof user);
console.log(typeof arr1);

/**
* function
*/

/**
* Add two numbers
* @param {number} a first number to add
* @param {number} b second number to add
* @return {number} added result
*/
const sum = (a, b) => {
    return a + b;
};

const sum2 = (a, b) => a + b;
