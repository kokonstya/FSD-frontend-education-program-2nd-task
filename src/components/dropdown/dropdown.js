var dropdown__expanded = document.querySelector('#dropdown__expanded');
var dropdown__list = document.querySelector('.dropdown__list');
dropdown__expanded.addEventListener('click', ()=> {
    dropdown__list.classList.toggle('active')
})
