function calculateSI() {

    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    var si = (p * r * t) / 100;

    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}