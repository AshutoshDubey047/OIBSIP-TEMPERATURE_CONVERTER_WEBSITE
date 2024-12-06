function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unitSelect").value;
    let result;

    if (isNaN(tempInput)) {
        result = "Please enter a valid number.";
    } else {
        switch (unit) {
            case "Celsius":
                const fahrenheit = (tempInput * 9 / 5) + 32;
                const kelvin = tempInput + 273.15;
                result = `${fahrenheit.toFixed(2)} °F   or   ${kelvin.toFixed(2)} K`;
                break;
            case "Fahrenheit":
                const celsius = (tempInput - 32) * 5 / 9;
                const kelvin2 = celsius + 273.15;
                result = `${celsius.toFixed(2)} °C   or    ${kelvin2.toFixed(2)} K`;
                break;
            case "Kelvin":
                const celsius2 = tempInput - 273.15;
                const fahrenheit2 = (celsius2 * 9 / 5) + 32;
                result = `${celsius2.toFixed(2)} °C   or   ${fahrenheit2.toFixed(2)} °F`;
                break;
            default:
                result = "Invalid unit selected.";
        }
    }

    document.getElementById("result").innerText = result;
}