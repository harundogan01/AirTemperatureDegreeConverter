const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')



function calculateDegree(e) {
    const currentValue = Number(e.target.value)
    switch (e.target.name) {
        case 'celsius':
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2)
            kelvin.value = (currentValue + 273.15).toFixed(2)
            break;
        case 'fahrenheit':
            celsius.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvin.value = ((currentValue + 459.67) * 5/9).toFixed(2)
            break;
        case 'kelvin':
            celsius.value = (currentValue - 273.15).toFixed(2)
            fahrenheit.value = ((currentValue * 9/5) - 459.67).toFixed(2)
            break;
        default:
            break;
    }
}