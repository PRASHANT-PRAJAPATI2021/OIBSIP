function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var convertedTemperature;

    if (unit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById("result").innerHTML = temperature + " °C = " + convertedTemperature.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById("result").innerHTML = temperature + " °F = " + convertedTemperature.toFixed(2) + " °C";
    }
  }