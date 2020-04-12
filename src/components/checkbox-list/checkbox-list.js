var checkboxList__list = document.querySelector('.checkbox-list__list');
var checkboxList__label = document.querySelector('.checkbox-list__label');
var checkboxList__expanded = document.querySelector('#checkbox-list__expanded');
checkboxList__label.addEventListener('click', (e)=> {
    checkboxList__list.classList.toggle('active')
    e.preventDefault()
    checkboxList__expanded.checked =!checkboxList__expanded.checked
})
