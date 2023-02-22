const btnSubmit = document.querySelector('.submit');
const rate1 = document.querySelector('.score1');
const rate2 = document.querySelector('.score2');
const rate3 = document.querySelector('.score3');
const rate4 = document.querySelector('.score4');
const rate5 = document.querySelector('.score5');
const thankYouContainerDiv = document.querySelector('.thank-you-message');
const mainContainer = document.querySelector('.main-container');

const rateNumber1 = parseFloat(rate1.textContent);
const rateNumber2 = parseFloat(rate2.textContent);
const rateNumber3 = parseFloat(rate3.textContent);
const rateNumber4 = parseFloat(rate4.textContent);
const rateNumber5 = parseFloat(rate5.textContent);

const isRate1 = rate1.addEventListener('click', theRate1);
const isRate2 = rate2.addEventListener('click', theRate2);
const isRate3 = rate3.addEventListener('click', theRate3);
const isRate4 = rate4.addEventListener('click', theRate4);
const isRate5 = rate5.addEventListener('click', theRate5);

const array = []

function theRate1 (){
    array.push(rateNumber1);
}
function theRate2 (){
    array.push(rateNumber2);
}
function theRate3 (){
    array.push(rateNumber3);
}
function theRate4 (){
    array.push(rateNumber4);
}
function theRate5 (){
    array.push(rateNumber5);
}

btnSubmit.addEventListener('click', thankYouContainer);


function thankYouContainer (){  
    
    thankYouContainerDiv.classList.remove('inactive');
    mainContainer.classList.toggle('inactive');

    // Creo la imagen de agradecimiento  
    const imageThanks = document.createElement('img');
    imageThanks.setAttribute('src', './images/illustration-thank-you.svg');

    const textRate = document.createElement('p');
    textRate.innerText = 'You selected ' + array[0] + ' out of 5';
    textRate.className = "text-rate-result"


    const thankYou = document.createElement('p');
    thankYou.innerHTML = 'Thank you!';
    thankYou.className = "text-thanks-result"

    const thankYouMessage = document.createElement('p');
    thankYouMessage.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    thankYouMessage.className = "final-message-result"


    // Acá se va a meter cada cosa donde debe ir habiendo creado todas las etiquetas
    
    thankYouContainerDiv.appendChild(imageThanks);
    thankYouContainerDiv.appendChild(textRate);
    thankYouContainerDiv.appendChild(thankYou);
    thankYouContainerDiv.appendChild(thankYouMessage);
}

array.shift(array[0]);

