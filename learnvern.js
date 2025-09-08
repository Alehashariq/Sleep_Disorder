let marks = [81, 42, 72, 68, 78, 77, 62, 78, 80, 66];

let sum = 0;
let s2 = 0;   // ✅ define s2 first

for (let each of marks) {
    console.log(each);
    // let s1 = sum + each;   // ✅ use 'let' for s1 as well
    // console.log(s1);
    // let s3 = sum + marks;
    // console.log(s3);
    s2 += each;   // now this will work
}

console.log("Final s2:", s2);

let average = s2 / marks.length;
console.log(`average marks of the class = ${average}`)


let prices = [250, 645, 900, 300, 50];
let index = 0;
for (let value of prices) {
    console.log(value);
}

for (let value of prices) {
    console.log(`value at index ${index} = ${value}`);
    let offer = value / 10;
    prices[index] = prices[index] - offer;
    console.log(`value after offer = ${prices[index]}`);
    index++;

}