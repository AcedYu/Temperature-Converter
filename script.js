// Grab DOM Elements
// Grabbing Inputs
const initialTemp = document.getElementById("initialTemp");
const finalTemp = document.getElementById("finalTemp");
//Grabbing Selectors
const fromTemp = document.getElementById("fromtemp");
const toTemp = document.getElementById("totemp");
//Grabbing Button
const convert = document.getElementById("convert");

//Create Event Listener for Button
convert.addEventListener("click", function(){
  //save values into simpler(?) variables
  startTemp = fromTemp.value;
  convertTemp = toTemp.value;
  temperature = initialTemp.value;

  // if/else if to figure out the math
  if (startTemp === convertTemp) {
    finalTemp.value = temperature;
  } else if(startTemp === "Fahrenheit" && convertTemp === "Celsius") {
    // Math Equation for Fahrenheit to Celsius
    let result = (temperature - 32) * (5/9);
    finalTemp.value = result;
  } else if(startTemp === "Celsius" && convertTemp === "Fahrenheit") {
    // Math Equation for Celsius to Fahrenheit
    let result = (temperature *(9/5)) + 32;
    finalTemp.value = result;
  }
});