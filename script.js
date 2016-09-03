(function() {

var results = ["","","","",""];

if (localStorage.result0) { //check for at least 1 stored result
	retrieveLocal();
	console.log("results retrieved");
	console.log(results);
}

updateResults(); //display any stored results immediately

document.getElementById("reverseButton").addEventListener("click", newResult);

function newResult() { //if input isn't blank, reverses it and adds it at the top of the results, oldest result is lost

	var splitString = document.getElementById("stringInput").value.split("");
	console.log("new value:");
	console.log(splitString);

	var reversedSplitString = [];
	var stringLength = splitString.length;

	if (splitString != "") { //only runs if input is not blank
		for (var i = 0; i < stringLength; i++) {
			reversedSplitString[i] = splitString[stringLength-i-1];
		}
		results.pop();
		results.unshift(reversedSplitString.join(""));
	} 

	updateResults();

}

function updateResults() {

	storeLocal();

	for (var i = 0; i <= 4; i++) {
		document.getElementsByClassName("outputLine")[i].innerHTML = results[i];
	}

}

function storeLocal(){

	localStorage.result0 = results[0];
	localStorage.result1 = results[1];
	localStorage.result2 = results[2];
	localStorage.result3 = results[3];
	localStorage.result4 = results[4];

}

function retrieveLocal(){

	results[0] = localStorage.result0;
	results[1] = localStorage.result1;
	results[2] = localStorage.result2;
	results[3] = localStorage.result3;
	results[4] = localStorage.result4;

}
})();