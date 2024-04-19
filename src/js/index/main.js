// Email Validation 
const subscribeField = document.querySelector('.footer__input-field');
const subscribeButton = document.querySelector('.footer__input-button');
const subscribeResult = document.querySelector('.footer__input-result');
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
subscribeField.value="";

subscribeButton.disabled=true;
subscribeButton.style.cursor='not-allowed';
subscribeField.style.borderColor='#F9804B';
subscribeResult.textContent = 'Invalid Email';
subscribeResult.style.color='black';

subscribeField.addEventListener("input", event=>{
    let inputText = event.target.value;
    if(inputText.length===0){
        subscribeButton.disabled=true;
        subscribeButton.style.cursor='not-allowed';
        subscribeField.style.borderColor='#F9804B';
        return;
    }
    let isValid = inputText.match(emailReg);
    subscribeButton.disabled=!isValid;
    subscribeField.style.borderColor=(isValid?'green':'red');
    subscribeResult.style.color=(isValid?'black':'red');
    subscribeButton.style.cursor=(isValid?'pointer':'not-allowed');

})

// Scroll Block
const burgerToggle = document.querySelector('#header__burger_menu-toggle');
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(event) {
    e.preventDefault();
}
  
function preventDefaultForScrollKeys(event) {
    if (keys[event.keyCode]) {
      preventDefault(event);
      return false;
    }
}

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

(burgerToggle.checked?disableScroll():enableScroll());