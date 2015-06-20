console.log('at the zoo');


var mealsPerDay = [5, 4, 3, 6, 4, 2, 3, 4, 5, 1]
var tooHungryDay;
var days = mealsPerDay.length;
var i = 0;
var day = 0;
var runningAvg = 0;
var runningTotal = 0;
while(i < days){
	day = i + 1;
	runningTotal += mealsPerDay[i];
	runningAvg = runningTotal/day;
	console.log(day runningAvg);
	if( runningAvg < 4 ){
		tooHungryDay = day;
	}

	i++;
}
console.log('too hungry day', tooHungryDay);