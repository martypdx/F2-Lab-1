var values = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   M: 1000
};

/* numeral    value
VI    6
IV    4
CVL    145
XIII    13
CMIL    949
*/

// Convert a roman numeral to decimal number
function convertToNum (numeral) {

  var sum=0;

  for (var i=0; i < numeral.length; i++){
    var char1 = numeral[i], char2 = numeral[i+1];
    if (values[char2] > values[char1])
      sum -= values[char1];
    else
      sum += values[char1];

  }
  return sum;
}

var sum=0;
sum = convertToNum("VI");
console.log("sum =", sum);
sum = convertToNum("IV");
console.log("sum =", sum);
sum = convertToNum("CVL");
console.log("sum =", sum);
sum = convertToNum("XIII");
console.log("sum =", sum);
sum = convertToNum("CMIL");
console.log("sum =", sum);
