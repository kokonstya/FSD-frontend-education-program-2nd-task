var checkboxList__list = document.querySelector('.checkbox-list__list');
var checkboxList__expanded = document.querySelector('#checkbox-list__expanded');
checkboxList__expanded.addEventListener('click', ()=> {
    checkboxList__list.classList.toggle('active')
})
