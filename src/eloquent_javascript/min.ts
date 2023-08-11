export function min(p1: number, p2: number): number {
    return p1 < p2 ? p1 : p2;
} 

// type TestMethod = (...args: any[]) => boolean;

// type Test = (name: string, testMethod: TestMethod, testArguments: any[]) => undefined;

// const test: Test = (name: string, testMethod: TestMethod, testArguments: any[]) => {
//     const result: string = testMethod(testArguments) ? "PASS" : "FAIL";
//     const formattedName = (name + ' '.repeat(40)).slice(0, 40);

//     const formattedArguments = (testArguments) => {
//         let values: string = '';
//         for (let i = 0; i < testArguments.length; i++) {
//             values += `value ${i+1}: ${testArguments[i]}`
//         }
//     }
//     console.log(`${result}. ${formattedName}. ${formattedArguments(testArguments)}.`)
// }


// test('Parameter 1 is less then ')