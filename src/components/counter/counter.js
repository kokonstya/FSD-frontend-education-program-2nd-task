let x = 0;
let current = document.querySelector('.counter-current');
let plus = document.querySelector('.counter-plus');
let minus = document.querySelector('.counter-minus');

plus.addEventListener('click', ()=> {
    x++;
    current.innerHTML = x;
});
minus.addEventListener('click', ()=> {
    x--;
    current.innerHTML = x;
})
