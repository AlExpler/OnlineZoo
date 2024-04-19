// Email Validation
const subscribeField = document.querySelector('.footer__input-field');
const subscribeButton = document.querySelector('.footer__input-button');
const subscribeResult = document.querySelector('.footer__input-result');
const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
    subscribeField.style.borderColor = (isValid?'green':'red');
    subscribeResult.style.color=(isValid?'black':'red');
    subscribeButton.style.cursor=(isValid?'pointer':'not-allowed');

})

// Donate Validatoin
const donateField = document.getElementById('pick_and_feed__custom-donation-field');
const donateButton = document.querySelector('.pick_and_feed__button-feed');
const donateReg = /^[1-9][0-9]*$/g
donateField.value="";

donateButton.disabled=true;
donateButton.style.cursor='not-allowed';
donateButton.style.background='gray';
donateField.style.borderColor='#F9804B';

donateField.addEventListener("input", e=>{
    let inputText = event.target.value;
    if(inputText.length===0){
        donateButton.disabled=true;
        donateButton.style.cursor='not-allowed';
        donateField.style.borderColor='#F9804B';
        return;
    }
    let isValid = inputText.match(donateReg);
    donateButton.disabled=!isValid;
    donateField.style.borderColor = (isValid?'green':'red');
    donateButton.style.cursor=(isValid?'pointer':'not-allowed');
    donateButton.style.background='';

})

// Donate Choose
const progressBarPoints = document.querySelector('.pick_and_feed__progress_bar-points');
const progressBarPrices = document.querySelector('.pick_and_feed__progress_bar-prices');
const calculateResult = document.querySelector('.pick_and_feed__diet_calculator-result');
const prices = [5000, 2000, 1000, 500, 250, 100, 50 ,25];

let disabledResult = true;
let selectedIndex = -1;
function recalc() {
    calculateResult.innerHTML = prices[selectedIndex] / 250;
    if (disabledResult){
        disabledResult=false;
    }
}
progressBarPoints.addEventListener('click', event=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-point') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-inner') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-after') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-before')) return;
    let parent = event.target.parentNode, child=e.target;
    if(parent.classList.contains('pick_and_feed__progress_bar-point')){
        child = parent;
        parent=parent.parentNode;
    }
    let selectedIndex_next = Array.prototype.indexOf.call(parent.children, child);
    if(selectedIndex_next!==selectedIndex){
        if(selectedIndex!==-1){
            progressBarPrices.children[selectedIndex].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progressBarPoints.children[selectedIndex].children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
            progressBarPoints.children[selectedIndex].children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selectedIndex=selectedIndex_next;
        child.children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
        child.children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        progressBarPrices.children[selectedIndex].classList.toggle('pick_and_feed__progress_bar-price-selected');
    }
    recalc();
})
progressBarPrices.addEventListener('click', event=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-price')) return;
    let parent = event.target.parentNode, child=e.target;
    let selectedIndex_next = Array.prototype.indexOf.call(parent.children, child);
    if(selectedIndex_next!==selectedIndex){
        if(selectedIndex!==-1){
            progressBarPrices.children[selectedIndex].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progressBarPoints.children[selectedIndex].children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
            progressBarPoints.children[selectedIndex].children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selectedIndex=selectedIndex_next;
        progressBarPoints.children[selectedIndex].children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
        progressBarPoints.children[selectedIndex].children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        child.classList.toggle('pick_and_feed__progress_bar-price-selected');
    }
    recalc();
})