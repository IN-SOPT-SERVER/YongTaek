/**
* var
* function scope
*/

// block scope에서는 영향 받지 않음
if (true) {
    var varTest = 'var!';
    console.log(varTest);
}
console.log(varTest);

// function scope를 벗어나면 접근불가
function varScopeTest() {
    var varTest2 = 'var';
    if (true) {
        console.log(varTest2);
    }
    console.log(varTest2);
}

varScopeTest();
//error, outside of function scope
console.log(varTest2);

/**
* let
* block scope
*/

// block scope를 벗어나면 접근불가
if (true) {
    let letTest = 'let!';
    console.log(letTest);
}
//error, outside of block scope
console.log(letTest)
