let display = document.querySelector('div.display');

function displayNumbers(value) {
    if(value === 'C') {
        display.textContent = ''
    } else if(value === '=') {
        equation();
    }
     else {
        display.textContent += value;
    }
}

function equation() {
    let equation = display.textContent;
    display.textContent = eval(equation);
}

