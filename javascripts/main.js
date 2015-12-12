var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


// Basic part:

document.getElementById('vanilla_output').innerHTML = "This content generated with Vanilla_JavaScript"

$("#jquery_output").html('This content generated with jQuery');

//Functions and Operators:

var a = 10;
var b = 3;

function modulus(a, b) {
	return a % b;
}

function doMath(num1, num2, math) {
	return math(numb, num2);
}

function add(num1, num2) {
	console.log(num1 + num2);
}
function subtract(num1, num2) {
	console.log(num1 - num2);
}

doMath(20, 3, add);

doMath(99, 6, subtract);

// Arrays:

function sortedPlanets() {
	return Planets.sort();
}

function  reverseredPlanets() {
	return Planets.map
}

// XHR:

function getAnimals() {
	$ajax({
		type: "GET"
		url:  'data/animals.json'
	}).done(function(data) {
		console.log('animals', data.animals);
	})
	getAnimals();
}

