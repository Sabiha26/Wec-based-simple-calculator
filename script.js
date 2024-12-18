function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        const resultField = document.getElementById('result');
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Invalid expression');
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}