// fisher-Yates
const fisherYates = (array) => {
    for(let i = 0; i < array.length; i++){
        let randomIdx = Math.floor(Math.random() * (i+1));
        let value = array[i];
        array[i] = array[randomIdx];
        array[randomIdx] = value;
    }
    return array;
}

// using sort()
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const countCases = (shuffleAlgorithm) => {
    const count = {};
    for(let i = 0; i < 1_000_000; i++){
        //shuffle case => 1-2-3, 1-3-2, 2-1-3, 2-3-1, 3-1-2, 3-2-1
        testArray = [1,2,3];
        const caseSet = shuffleAlgorithm(testArray).join("-");
        if (count[caseSet]){
            count[caseSet] += 1;
        } else {
            count[caseSet] = 1;
        }
    } 
    return count;
}
console.time('sortShuffle')
console.log("sort() shuffle");
console.log(countCases(shuffle));
console.timeEnd('sortShuffle')

console.time('fisherYates')
console.log("fisher-Yates Algorithm shuffle");
console.log(countCases(fisherYates));
console.timeEnd('fisherYates')
