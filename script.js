let clock = document.getElementById('clock');
let phone = document.getElementById('phone');
let group = document.getElementById('group');
let hamburger = document.getElementById('hamburger');
let profile = document.getElementById('profile');
let stripe1 = document.getElementById('stripe1');
let stripe2 = document.getElementById('stripe2');
let stripe3 = document.getElementById('stripe3');
let stripe4 = document.getElementById('stripe4');
let stripe5 = document.getElementById('stripe5');
const stripes = document.querySelectorAll('div.stripe');

function loseFocus() {
  for (let i = 0; i < stripes.length; i++) {
  stripes[i].style.background = "#0084ff";
 }
}
  
clock.addEventListener('click', () => {
  loseFocus();
  stripe1.style.background = 'white';
})

phone.addEventListener('click', () => {
  loseFocus();
  stripe2.style.background = 'white';
})

group.addEventListener('click', () => {
    loseFocus()
    stripe3.style.background = 'white';
})

hamburger.addEventListener('click', () => {
    loseFocus();
    stripe4.style.background = 'white';
})

profile.addEventListener('click', () => {
    loseFocus();
    stripe5.style.background = 'white';
})



