var dropdown__label = document.querySelector('.dropdown__label');
var dropdown__list = document.querySelector('.dropdown__list');
dropdown__label.addEventListener('click', ()=> {
    dropdown__list.classList.toggle('active')
    console.log('123')
})
