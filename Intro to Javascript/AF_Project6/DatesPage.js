window.onload = main;

function main() {
	initDate();
	initDate2();
	initDate3();
	

		
	}

function initDate() {
	var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var now = new Date();
	var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

	document.getElementById("dtField").innerHTML = dtString;
}

function initDate2() {
	var now = new Date();

	if (now.getDay() > 0 && now.getDay() < 6) {
		var dtString2 = "It's a weekday - grind away.";
	}
	else {
		var dtString2 = "It's the weekend! Play with the dog!";
	}
	
	document.getElementById("dtField2").innerHTML = dtString2;
}

function initDate3() {
	var now = new Date();
	document.getElementById("dtField3").innerHTML = timeString(now.getHours());

	function timeString(theHour) {
		if (theHour < 5) {
			return "Stop surfing and go to bed.";
		}
		if (theHour < 9) {
			return "Bonjour!";
		}
		if (theHour < 17) {
			return "You are busted surfing the interwebs while at work once again.";
		}
		return "Good Evening!";
	}
}

