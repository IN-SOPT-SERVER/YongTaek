/**
* String
*/
const test1: string = "hello";
console.log(`${typeof test1}, ${test1}`);

/**
* Number
*/
const test2: number = 3;
console.log(`${typeof test2}, ${test2}`);

/**
* boolean
*/
const test3: boolean = true;
console.log(`${typeof test3}, ${test3}`);

/**
* Array
*/
const array: number[] = [1,2,3];
const array2: Array<string> = ['h','e','w'];

/**
* Object vs object
*/

//js object 원시타입이어도 괜찮음
const foo1 = (a: Object) => {
    console.log(a);
}

//ts object 원시타입 아닌 것만 받음
const foo2 = (a: object) => {
    console.log(a)
}

//ok
foo1('hello');
// error
foo2('hello2');

/**
* print hello with name
* @param {String} name name to print
*/
const helloName = (name: string): void => {
    console.log(`${name} 안농`);
}

/**
* Add two numbers
* @param {number} a first number to add
* @param {number} b second number to add
* @return {number} added result
*/
const sum3 = (a:number, b:number): number => {
    return a + b;
}

/**
* null, undefined
*/
const a: null = null;

//error
let b: null = 2;

let c: undefined = undefined;

//error
let d: undefined = null;

/**
* angle-bracket, as
*/

//as
const test11: any = 'Tom';
const nameLength: number = (test11 as string).length;
console.log(nameLength)

//angle-bracket
const test12: any = 'Tommy';
const nameLength2: number = (<string> test12).length;
console.log(nameLength2);

/**
* interface
*/
interface SOPT {
    name: string;
    age: number;
    //? is optional
    isSopt ?: boolean;
    favoriteFood : string;
}

const introduce: SOPT = {
    name:'이용택',
    age: 25,
    isSopt: true,
    favoriteFood:'ttukboki'
};

//const introduces: SOPT[] = [] 
//SOPT들을 가진 array
const introduces: SOPT[] = [
    {
        name:'이용택1',
        age: 25,
        isSopt: true,
        favoriteFood:'meat'
    },
    {
        name:'이용택2',
        age: 21,
        isSopt: false,
        favoriteFood:'bread'
    },
    {
        name:'이용택3',
        age: 22,
        isSopt: false,
        favoriteFood:'fish'
    }
]