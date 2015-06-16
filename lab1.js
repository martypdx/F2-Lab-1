
/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack or through the discussions in Canvas. I will post the
 questions I receive and the answers I give to a discussion group in Canvas.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.warn("assertion failure: ", failureMessage);
  }
  else {
    console.log("pass");
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

assert(1 === 1);
assert(1 === 2, "this is an assertion failure example. 1===2");

/*
 TODO: 8 points
 Invoke assert twice. Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/
var monkey = 2;
var gorilla = 3;
assert(monkey === monkey);
assert(monkey === gorilla, "not all monkeys are gorillas!");

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = "More food please.",
    sentence2 = "Come over here so you can scratch my belly.";

var i = 0;

var array2 = sentence2.split(' ');

for (var i = 0; i < array2.length; i++) {
  // then test for blah
  if (array2[i] === "scratch")
     // if true do this
    {array2[i]= "purr";}
     // otherwise do this
  else {array2[i]= "chirp";}
 // do this last
  sentence2 = array2.join(" ") + ".";
}

var array1 = sentence1.split(' ');

for (var i = 0; i < array1.length; i++) {
  // then test for blah
  if (array1[i] === "food")
     // if true do this
    {array1[i]= "yum";}
     // otherwise do this
  else {array1[i]= "chirp";}
 // do this last
  sentence1 = array1.join(" ") + ".";
}

console.log(sentence1);
console.log(sentence2);


/*
 TODO: 20 points
 Your goal is to replace all words in the above sentences with "chirp",
 except replace food with "yum" and "scratch" with "purr". The
 assertions at the end of this section should pass when you're done.


 Use **two** different kinds of loops to implement this.
 HINT: the "split" method on String will be useful.
*/

assert(sentence1 === "chirp yum chirp.", "sentence 1 should have 2 chirps and a yum");
assert(sentence2 === "chirp chirp chirp chirp chirp chirp purr chirp chirp.",
  "sentence 2 should have 8 chirps and a purr");

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Resources:
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;

var i = Math.floor((Math.random() * 3) + 1);
nextAnimal = favoriteAnimals[i];


// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

assert(nextAnimal, "assign something to nextAnimal");

/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ],
    tooHungryDay;

var days = mealsPerDay.length;
i = 0;
var day;
var runningAvg = 0;
var runningTotal = 0;

while(i < days){
  day = i + 1;
  runningTotal += mealsPerDay[i];
  runningAvg = runningTotal/day;
  console.log(day, runningAvg);
  if (runningAvg < 4){
    tooHungryDay = day;
    break;
  }

  i++;
}

console.log('too hungry day', tooHungryDay);


/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

assert(tooHungryDay, "don't forget to assign the answer to tooHungryDay");
assert(tooHungryDay < 10, "the lion is too hungry before the end of the array");


/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 run the tools with:
  $ npm run grunt

or, if you installed grunt globally, you can just type
  $ grunt
   and it will run both.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
