// Function to calculate Simple Interest
function calculateSI() {

    // Get input values and convert them to numbers
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    // Apply Simple Interest formula
    var si = (p * r * t) / 100;

    // Display result on webpage
    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}