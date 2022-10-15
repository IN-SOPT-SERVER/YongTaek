
const asyncFunc1 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func1 ...`);
        }, 1000);
    });
}

const asyncFunc2 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func2 ...`);
        }, 1000);
    });
}

const main = async (): Promise<void> => {
    let result = await asyncFunc1("wow!");
    console.log(result);
    result = await asyncFunc2("holy moly");
    console.log(result);
}

main()