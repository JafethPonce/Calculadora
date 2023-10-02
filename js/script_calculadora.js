/*<--(ON-OFF)-->*/
const onOffButton = document.querySelector('.onOff');

/*Mostrar display*/
const resultsCalc = document.querySelector("#results_calc"); 
const showResult = document.querySelector('.show-result');
let showOp = document.querySelector('#texto');

/*Turn on off*/
onOffButton.addEventListener('click', () => {
    resultsCalc.value = '';
    showResult.textContent = '';
    showOp.classList.toggle('turn-on-off');
});