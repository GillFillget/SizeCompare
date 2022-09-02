var convertMaster = 0;
//all units are converted to convertMaster which is equal to miles and makes it so that only 1 round of unit convertion is needed and makes conversion quicker as well as the ability to add in more units since the only formulas needed is the conversion to miles

var saveAppend = 1;
//variable to prevent reset from messing up history

function convertRun() {
	//convertmaster conversion---------------------

	//inches input
	if (document.getElementById("unit").value == 0) {
		convertMaster = document.getElementById("inputLength").value / 63360;
		// console.log(convertMaster);
	}
	//feet input
	if (document.getElementById("unit").value == 1) {
		convertMaster = document.getElementById("inputLength").value / 5280;
		// console.log(convertMaster);
	}
	//yards input
	if (document.getElementById("unit").value == 2) {
		convertMaster = document.getElementById("inputLength").value / 1760;
		// console.log(convertMaster);
	}
	//miles input
	if (document.getElementById("unit").value == 3) {
		convertMaster = document.getElementById("inputLength").value;
		// console.log(convertMaster);
	}

	//outputfield conversion-----------------------
	document.getElementById("outputMiles").innerHTML = convertMaster + " Miles,";
	document.getElementById("outputYards").innerHTML = convertMaster * 1760 + " Yards,";
	document.getElementById("outputFeet").innerHTML = convertMaster * 5280 + " Feet,";
	document.getElementById("outputInches").innerHTML = convertMaster * 63360 + " Inches";

	//conparefield conversion-----------------------
	if (convertMaster > 587863000000000000) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 587863000000000000) + " Milky Ways";
	} else if (convertMaster > 5592340730) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 5592340730) + " Solar Systems";
	} else if (convertMaster > 863705) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 863705) + " Suns";
	} else if (convertMaster > 30775) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 30775) + " Neptunes";
	} else if (convertMaster > 2159) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 2159) + " Moons";
	} else if (convertMaster > 5.4978851) {
		document.getElementById("outputCompare").innerHTML = "Height of " + parseInt(convertMaster / 5.4978851) + " Mount Everests";
	} else if (convertMaster > 0.27525253) {
		document.getElementById("outputCompare").innerHTML = "Height of " + parseInt(convertMaster / 0.27525253) + " Empire State Buildings";
	} else if (convertMaster > 0.0124211) {
		document.getElementById("outputCompare").innerHTML = "Height of " + parseInt(convertMaster / 0.0124211) + " Sphinxs";
	} else if (convertMaster > 0.00126263) {
		document.getElementById("outputCompare").innerHTML = "Height of " + parseInt(convertMaster / 0.00126263) + " Sunflowers";
	} else if (convertMaster > 0.000236742) {
		document.getElementById("outputCompare").innerHTML = "Length of " + parseInt(convertMaster / 0.000236742) + " Rabbits";
	} else if (convertMaster > 0.0000197285) {
		document.getElementById("outputCompare").innerHTML = "Height of " + parseInt(convertMaster / 0.0000197285) + " SD Cards";
	} else if (convertMaster >= 0.000015782828282828283) {
		document.getElementById("outputCompare").innerHTML = "Width of " + parseInt(convertMaster / 0.000015782828282828283) + " SD Card";
	} else {
		document.getElementById("outputCompare").innerHTML = "Less than the width of an SD Card";
	}
	if (saveAppend == 1) {
		appendText();
	} else {
		saveAppend = 1;
	}
	console.log(saveAppend);
}



function resetRun() {
	saveAppend = 0;
	document.getElementById("unit").value = 0;
	document.getElementById("inputLength").value = "";
	convertRun()
	document.getElementById("outputCompare").innerHTML = "Nothing...";
}

function appendText() {

	if (document.getElementById("unit").value == 0) {
		var historyUnit = "Inches"
	}
	if (document.getElementById("unit").value == 1) {
		var historyUnit = "Feet"
	}
	if (document.getElementById("unit").value == 2) {
		var historyUnit = "Yards"
	}
	if (document.getElementById("unit").value == 3) {
		var historyUnit = "Miles"
	}

	var textInput = document.getElementById("inputLength").value + " " + historyUnit + " or " + document.getElementById("outputCompare").innerHTML;
	var tag = document.createElement("p");
	var text = document.createTextNode(textInput);
	tag.appendChild(text)

	var element = document.getElementById("historyField");
	element.appendChild(tag)
}

function clearHistory() {
	var div = document.getElementById("historyField");
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}
