document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.input');
    let buttons = document.querySelectorAll('.button');
    let memory = 0;
    let screenValue = '';
  
    for (let button of buttons) {
      button.addEventListener('click', function (e) {
        let buttonText = e.target.innerText;
  
        if (buttonText === 'C') {
          screenValue = '';
        } else if (buttonText === '=') {
          screen.value = eval(screenValue);
          screenValue = '';
        } else if (buttonText === 'M+') {
          memory += parseFloat(screen.value) || 0;
          screenValue = '';
        } else if (buttonText === 'M-') {
          memory -= parseFloat(screen.value) || 0;
          screenValue = '';
        } else {
          screenValue += buttonText;
        }
  
        screen.value = screenValue;
      });
    }
  });
  