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
function disableScroll() {
    // Get the current page scroll position in the vertical direction
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

burgerToggle.addEventListener("click", (event) => {
    if (burgerToggle.checked === true) {
        disableScroll();
    }
    else {
        enableScroll();
    }
});