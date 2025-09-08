// let string2 = `my name is ${name}`;
// console.log(string2);

// // let srting3 = `template literal with ${expression} and ${expression2}`;
// // console.log(srting3)


console.log("shariq \n is a good boy")
let g2 = console.log("ali\tahsan\tnomani")
// let g3 = g2.toLowerCase
// console.log(g3())

let st  = "shariqismailZAKI"
let st2 = st.toUpperCase()

console.log(st2)

let g5 = "ali ahsan nomani happy home school"
let g6 =g5.trim();
console.log(g6);

let g7 = g5.slice(4,8);
console.log(g7);

let g8 = g5.concat(g2);
console.log(g8);

let g9 = ("welcome to moonasons" + 2244)
console.log(g9.replace(/o/g,4));

let fullname = prompt("enter your full name without spaces");
console.log(fullname);
let username2 = "@" + fullname + fullname.length
console.log(username2);

let marks2 = [44,82,74,62,67,78,59,72];
console.log(marks2);
console.log(marks2.length);
marks2[3] = 66;
console.log(marks2);

let sum2 = 0;
for (let value of marks2) {
    console.log(value);
    sum2 += value;
    console.log(sum2)
}

let avg = sum2 / marks2.length
console.log(`average marks of the class = ${avg}`);

let heros = ["iron man","captain america","thor","black panther","spider man","swat cats","pink panther","hulk","herculas"];
for(let ind = 0; ind < heros.length; ind++){
    console.log(heros[ind]);
}

let cities = ["lahore","islamabad","karachi","peshawar","quetta","mumbai","pune","calcatta","dehli"];
console.log(cities)
for (let city of cities){
    console.log(city);
}

for(let citi2 of cities){
    console.log(citi2.toUpperCase());
}


 


for (let num2 =0; num2 <=100;num2=num2+2){
    console.log(num2);
}
    // console.log(num2);

// let gamenum = 8;
// let usernum = prompt("guess the number from 1 to 10")
// // console.log(usernum)
// while(usernum !== gamenum) {

// }    
// console.log("congratulations you guessed it correct");

let gamenum = 8;
let usernum = Number(prompt("Guess the number from 1 to 10"));

while (usernum !== gamenum) {
    usernum = Number(prompt("Wrong guess. Try again:"));
}

console.log("🎉 Congratulations! You guessed it correct.");

let str2 = "shariq ismail";
// console.log(str2[length]);
console.log(str2.length);
console.log(str2.slice(3, 6));

// templates literals
let name3 = "shariq";
let age3 = 25;
let str3 = `my name is ${name3} and i am ${age3} years
old`;
console.log(str3);


let o3 = {
    item : "registat",
    price : 250,
};

let o4 = `the cost of ${o3.item} is ${o3.price} rupees `;
console.log(o4);


let peta = ["cat","rabbit","parrot","pegion"];
let wilda =["tiger","lion","snake","wolf"];

let animal = peta.concat(wilda);
console.log(animal);

let array = ['ali','ahsan','nomani'];
let a2 = array.includes('ali');
console.log(array);
console.log(a2);

let a3 = array.reverse();
console.log(a3);
let a4 = array.toString();
console.log(a4);




name = "shariq";
console.log(name)
radius = 14
console.log(radius)

let n = "shariq ismail"

let age = 24;
age = age+2
console.log(age)

let price = 101.10
console.log(price)

let follow = true


f1 = "true"

f2 = true

y = BigInt("122")

let student1 = {
    name : "ali ahsan",
    age : 39,
    marks : 600,
    pass : true

};

console.log(student1.name)
console.log(student1["pass"])

student1["age"] = student1["age"]+2;

console.log(student1)
console.log(student1["age"])

const product = {
    name : "ball pen",
    rating : 4,
    offer : 5,
    price : 270
};


console.log(product)

console.log("Moona Sons")
console.log("learning java script")


const profile = {
    username : "shariqismail",
    isfollow : true,
    followers : 5100,
    following : 2150

}

console.log(profile)

confirm("click here to avail the discount")

aa = 4
bb = 19

console.log(aa-bb)
console.log(bb*aa)
// remainder of aa and bb
console.log(aa%bb)

// exponentiation aa and bb
console.log(aa**bb)
console.log(bb**aa)

// increment and decrement operator
console.log("a =", aa)
console.log("b =", bb)

a= aa++
console.log("a =", a)
b = bb--

c = 18

d = c--
console.log("d =", d)
c = c--
console.log("d =", c)

e = 14
// decrement operator
f = --e
console.log("f =", f)

// increment operator
g = f+1
console.log("g =", g)
// console.log("g"= g++)
// console.log("g"= g)
// console.log("g" =g)


let h = 181 ;

// decrement operator
let i = --h;
console.log("i =", i);

// increment operator
let j = i;
console.log("j =", j++);     
console.log("j =", j);       
console.log("j =", ++j); 

// assignment operators
let k = 10 ;
let l = 20 ;

k += 5 ;
console.log("k =", k);


k -= 5 ;
console.log("k =", k);
// console.log("k =", k-= 5);
// console.log("k =", k-= 5);

l *= 2 ;

console.log("l =", l);

l /= 2 ;
console.log("l =", l);


//  comparism operators
// let m = 10 ;
// let n = 20 ;
// console.log("m ==n", m == n);
// console.log("m !=n", m != n);


let m = 10;
let nn = 20;

console.log("m == nn:", m == nn);   // false
console.log("m != nn:", m != nn);   // true
// console.log("m >= n:", m >=n);
console.log("m =" , m)
console.log("nn =" , nn)

// stricktor 
console.log("m === nn:", m === nn);   // false
console.log("m !== nn:", m !== nn);   // true

// comparism operators
// let m = 10 ;
// let n = 20 ;
// console.log("m >

let o = 40;
let p = 30;
console.log("o > p" , o > p)
console.log("o < p", o < p)
console.log("o >=p", o >=p)
console.log("o <=p", o <=p)
console.log("o =", o)
console.log("p =", p)


// && !! || logical operators

let q = 10 ;
let r = 20 ;
let con = (q < r);
let con2 = (q = 10);
console.log("con && con2 = ", con && con2);

let s = 44 ;
let t = 30 ;
let con3 = s > t;
let con4 = q == 10;
console.log("con3 && con4 = ", con3 && con4);

// || logical operators
let u = 10 ;
let v = 20 ;
let con5 = u < v;
let con6 = v > 20 ;
console.log("con5 || con6 = ", con5 || con6);


// Ask user to enter age
// let userAgeInput = prompt("Please enter your age:");

// // Convert input to a number
// userAgeInput = Number(userAgeInput);

// // Check if it's a valid number
// if (isNaN(userAgeInput)) {
//     alert("Please enter a valid number!");
// } else {
//     if (userAgeInput >= 18) {
//         alert("✅ You are eligible to vote!");
//     } else {
//         alert("❌ Sorry, you are not eligible to vote yet.");
//     }
// }



// Ask user to enter age
let userAgeInput = prompt("Please enter your age:");

// Convert input to a number
userAgeInput = Number(userAgeInput);

// Check if it's a valid number
if (isNaN(userAgeInput)) {
    alert("Please enter a valid number!");
    console.log("Please enter a valid number!");
} else {
    if (userAgeInput >= 18) {
        alert("✅ You are eligible to vote!");
        console.log("✅ You are eligible to vote!");
    } else {
        alert("❌ Sorry, you are not eligible to vote yet.");
        console.log("❌ Sorry, you are not eligible to vote yet.");
    }
}


// Ask the user to choose a mode
let userMode = prompt("Which mode do you prefer? Type 'dark' or 'light':");

// Convert input to lowercase to handle case sensitivity
userMode = userMode.toLowerCase();

// Apply styles based on the chosen mode
if (userMode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    alert("Dark mode activated 🌙");
    console.log("Dark mode activated 🌙");
} else if (userMode === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    alert("Light mode activated ☀️");
    console.log("Light mode activated ☀️");
} else {
    alert("Invalid input. Please reload and type 'dark' or 'light'.");
    console.log("Invalid input. User did not type 'dark' or 'light'.");
}


// Ask the user to enter their age
let ageForGroupCheck = prompt("Please enter your age:");
ageForGroupCheck = Number(ageForGroupCheck);

// Check if input is valid
if (isNaN(ageForGroupCheck) || ageForGroupCheck < 0) {
    alert("Please enter a valid age.");
    console.log("Invalid input: Not a valid age.");
} else {
    let ageGroup = "";

    // Determine the age group
    if (ageForGroupCheck >= 0 && ageForGroupCheck <= 12) {
        ageGroup = "👶 Childhood";
    } else if (ageForGroupCheck >= 13 && ageForGroupCheck <= 19) {
        ageGroup = "🧒 Teen";
    } else if (ageForGroupCheck >= 20 && ageForGroupCheck <= 24) {
        ageGroup = "🧑‍🎓  Gen Z";
    } else if (ageForGroupCheck >= 25 && ageForGroupCheck <= 39) {
        ageGroup = "👨‍💼 Young Adult / Early Middle Age";
    } else if (ageForGroupCheck >= 40 && ageForGroupCheck <= 59) {
        ageGroup = "🧔 Middle Age";
    } else {
        ageGroup = "👴 Old Age / Senior Citizen";
    }

    // Show the result
    alert("You belong to: " + ageGroup);
    console.log("User age: " + ageForGroupCheck + " → Group: " + ageGroup);
}


// let mode1 = "black";
// let color2;

// if(mode1 === "dark") {
//     color2 = "black";
// }

// else if(mode ==="blue") {
//     color2 = "blue";


// }

// else if(mode2 ==="light") {
//     color2 = "white";
// }

// else if(made2 ==="pink") {
//     color2 = "pink";
// }

// else {
//     color2 = "white";
// }

// console.log(color2);

// if (mode ==="red") {
//     console.log(color2 = "red")
// }

// ternary operators

let age2 = 19;

age2 >= 18 ? console.log("You are an adult") : console.log("You are a minor");

alert("Welcome to Moona Sons")


let num = prompt("enter any number of your choice");

if(num % 5 === 0) {
    let times = num / 5;

    console.log(num , "is divisible by 5");
    console.log(`It divides exactly ${times} times.`);
}
else {
    console.log(num , "is not divisible by 5");
}

let score = prompt("your score is :");
let grade;

if(score >=90 && score <=100) {
    grade = "A";
}
else if(score >=70 && score <=89) {
    grade = "B";
}
else if(score >=50 && score <=69) {
    grade = "C";
}
else if (score >=0 && score <=49) {
    grade = "F";
}

console.log("According to your score , your grade is " + grade);

for (let co =1; co <=5; co++ ) {
    console.log("welcome to Moona Sons");

}


let sum = 1
for (c2 =1; c2 <=8; c2++) {
    sum = sum + c2
}

console.log(sum);


let mode1 = "black";
let color2;

if (mode1 === "dark") {
    color2 = "black";
} else if (mode1 === "blue") {
    color2 = "blue";
} else if (mode1 === "light") {
    color2 = "white";
} else if (mode1 === "pink") {
    color2 = "pink";
} else if (mode1 === "red") {
    color2 = "red";
} else {
    color2 = "white"; // default fallback
}

console.log("Color applied:", color2);


for (let i = 1 ; i <=5; i++) {
    console.log("i = ",  + i);
}

let j2 = 20;

do {
    console.log(j2);
    j2++;
}
while(j2<=10)
    
// for of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

let str = "Moona Sons";
for (let moona of str) {
    console.log(moona);
}


    // for in loop
    let person = {
        name: "Moona",
        age: 20,

    };

    for (let key in person) {
        console.log(key, person[key]);
    }