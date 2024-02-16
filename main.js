let caught = 2 * 8;
console.log(caught * caught);

let x = 10;
console.log("the value of x is", x);
console.log(Math.max(1, 10));

//anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions. control flow

console.log("the value of x is", Math.min(2, 15) + 100);
//when your program contains more than one statement, the statements are executed as if they are a story, from top to bottom. this example program has two statements.

let theNumber = Number(Math.max(1, 10));
console.log("your number is the square root of " + theNumber * theNumber);
//not all programs are straight roads. we may for example want to create a branching road, where the program takes the proper branch based on the situation at hand. this is called conditional execution.

let theNumber = Number("w");
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("why didn't you give me a number?");
}

if (1 + 1 == 2) console.log("It's true");

let num = Number(Math.max(1, 10));
if (num < 10) {
  console.log("small");
} else if (num < 100) {
  console.log("medium");
} else {
  console.log("large");
}

//the idea of writing a program is to make something less work, not more. what we need is a way to run a piece of code multiple times. this form of control flow is called a loop.

let number = 0;
while (number <= 12){
  console.log(number);
  number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10){
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//because the while loop is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop.

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
}
console.log(result);

for (let current = 20; ; current = current + 1){
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

//a fragment of code that produces a value is called an expression. if an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. a program is a list of statements.

for (let number = 0; number <= 12; number +=2) {
  console.log(number);
}
