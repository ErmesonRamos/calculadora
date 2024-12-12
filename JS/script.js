let display = document.getElementsByClassName('display')[0];
function displayShow(value) {
    if(value === 'C') {
        display.textContent = ''
    } else if(value === '=') {
        console.log('Ta dando certo');
    }
     else {
        display.textContent += value;
    }
}

