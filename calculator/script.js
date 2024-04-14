function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var resultElement = document.getElementById('result');
    var errorElement = document.getElementById('error');


    resultElement.style.display = 'none';
    errorElement.style.display = 'none';


    if (isNaN(num1) || isNaN(num2)) {
        errorElement.innerHTML = 'Please enter valid numbers.';
        errorElement.style.display = 'block';
        return;
    }


    var result;
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorElement.innerHTML = 'Cannot divide by zero.';
                errorElement.style.display = 'block';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorElement.innerHTML = 'Invalid operation selected.';
            errorElement.style.display = 'block';
            return;
    }


    resultElement.innerHTML = 'Result: ' + result;
    resultElement.style.display = 'block';
}
