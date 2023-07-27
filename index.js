var readlineSync = require("readline-sync");

var score = 0;

var readlineSync = require("readline-sync");
var userInput = readlineSync.question("Heya! What your name? ");
console.log("Welcome " + userInput + " Let's play a small quiz based on Aditi's choice!");
var userInput = readlineSync.question("Enter ok to proceed: ");
console.log("---------------------------------------------------------------------------");

console.log("Lets discuss some rules first!!");
console.log("------------------------");

console.log("It's case sensitive, so right all answer in small letter i.e (a-z)");
console.log("There're 2 levels in this game, to access level 2 achieve atleast 7/10 score in level 1");
console.log("---------------------------------------------------------------------------");

console.log("Now enjoy the upcoming quiz and calcualate your scores at last.");
var userInput = readlineSync.question("Are you ready? ");
console.log(userInput + " Then,Let's go!!!!!!!");
console.log("---------------------------------------------------------------------------");
console.log("Level 1---[Enter answers in a,b,c]");
console.log("------------");


// object level 1
var ques1 = {
	question: `
"What is her favorite food? "
a: "Pizza"
b: "Tandoori momos"
c: "Pasta"\n
Answer: `,
	answer: "b"
}
var ques2 = {
  question: `
  "What's her favorite color? "
a: "Black"
b: "Yellow"
c: "Purple"\n
Answer: `,
	answer: "c"
}
var ques3 = {
	question: `
"What's her favorite ice cream? "
a: "Black current"
b: "Chocolate"
c: "Vanilla"\n
Answer: `,
	answer: "a"
}
var ques4 = {
	question: `
"Which is festival she likes more? "
a: "Holi"
b: "Diwali"
c: "Christmas"\n
Answer: `,
	answer: "a"
}
var ques5 = {
	question: `
"What's her favorite sweets? "
a: "Kaju katli"
b: "Gulab jamun"
c: "Ghewar"\n
Answer: `,
	answer: "c"
}
var ques6 = {
	question: `
"Which season is likes more? "
a: "Summer"
b: "Winter"
c: "Spring"\n
Answer: `,
	answer: "b"
}
var ques7 = {
  question: "Who's her best friend? (Guess yourself) \n Answer: ",
  answer: "ishita"
}
var ques8 = {
	question: `
"What did she first observe about a person? "
a: "Hairs"
b: "Shoes"
c: "Cloths"\n
Answer:`,
	answer: "b"
}
var ques9 = {
	question: `
"What’s her favorite movie of all time? "
a: "Jab we met"
b: "Dear Zindagi"
c: "YJHD"
d: "Both b and c"
e: "Both a and b"\n
Answer: `,
	answer: "d"
}
var ques10 = {
	question: `
"What’s matters more to spend time with? "
a: "Person"
b: "Place"
c: "Food"\n
Answer: `,
	answer: "a"
}

// array 1
var quesChoice = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];

// for loop 1
for (var i=0; i<quesChoice.length; i++) {
  currentChoice = quesChoice[i];
  check(currentChoice.question, currentChoice.answer);
}

// function 1
function check(ques,ans) {
  var userInput = readlineSync.question(ques);

  // if-else
  if (userInput === ans) {
    console.log("You're right!");
    score = score + 1;
  }
  else {
    console.log("You're wrong! The right answer is " + ans);
  }
  console.log("---------------------------------------------------------------------------");
}
console.log("Your level 1 score is " + score);
console.log("---------------")

// level 2
var ques11 = {
	question: `
"What looses her interest in a person? "
a: "Commumication gap"
b: "Hiding stuffs"\n
Answer: `,
	answer: "a"
}
var ques12 = {
	question: `
"What’s the most important quality she wants in her partner?"
a: "Honest person"
b: "Responsible person"
c: "Loyal person"\n
Answer: `,
	answer: "c"
}
var ques13 = {
	question: `
"Which two color cloths she wore on her first day with you (white and red/balck and blue/white and pink)? "
a: "Black, blue, yellow, red"
b: "White, pink, blue, black"
c: "White, red, blue, black"\n
Answer: `,
	answer: "b"
}
var ques14 = {
	question: `
"What’s her biggest deal-breaker in a relationship? "
a: "Disrespectful"
b: "Don't connect phyically"
c: "Liar"\n
Answer: `,
	answer: "a"
}
var ques15 = {
	question: `
"What she likes do more with you? "
a: "Hugs"
b: "Kisses"
c: "Cuddles"\n
Answer: `,
	answer: "b"
}
var ques16 = {
	question: `
"Which kisses she like more? "
a: "Neck kiss"
b: "Lip kiss"
c: "Cheecks kiss"\n
Answer: `,
	answer: "b"
}
var ques17 = {
	question: `
"The most sensitive to feel for her? "
a: "Neck"
b: "Stomach"
c: "Legs"\n
Answer: `,
	answer: "a"
}
var ques18 = {
	question: `
"What drives her crazy? "
a: "Hug"
b: "Kiss"
c: "Touch"\n
Answer: `,
	answer: "c"
}
var ques19 = {
	question: `
"Do she wants you to use any sex toys in future? "
a: "Yes"
b: "No"\n
Answer: `,
	answer: "b"
}
var ques20 = {
	question: `
"Do she wants to spend her entire life with you? "
a: "Yes"
b: "No"\n
Answer: `,
	answer: "a"
}


var quesLevel2 = [ques11, ques12, ques13, ques14, ques15, ques16, ques17, ques18, ques19, ques20];

if (score >= 7) {
  console.log("Congrats!! You've cleared level 1");
  console.log("Level 2 begins: [Enter answers in a,b,c] ")
  console.log("---------------")
  
  for (var i=0; i<quesLevel2.length; i++) {
  currentChoice = quesLevel2[i];
  check2(currentChoice.question, currentChoice.answer);
  }
}
else {
  console.log("Sorry! You didn't cleared level 1");
}

function check2(ques,ans) {
  var userInput = readlineSync.question(ques);

  // if-else
  if (userInput === ans) {
    console.log("You're right!");
    score = score + 1;
  }
  else {
    console.log("You're wrong! The right answer is " + ans);
  }
  console.log("---------------------------------------------------------------------------");
}
if (score >= 7){
  console.log("Your level 2 score is " + score);
}



  

