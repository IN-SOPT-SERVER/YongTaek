const condition: boolean = false;

const promise = new Promise((resolve, reject)=>{
    if (condition) {
        resolve("우와 Promise다!");
    } else {
        reject(new Error("비동기 처리 도중 실패!"));
    }
});

promise
    .then((resolvedData):void =>{ console.log(resolvedData);})
    .catch((e):void => console.log(e));

