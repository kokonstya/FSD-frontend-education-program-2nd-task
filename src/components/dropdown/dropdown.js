const dropdownItems = document.querySelectorAll('.dropdown');
for (let dropdownItem of dropdownItems) {
    dropdownItem.querySelector('.dropdown__selected').addEventListener('click', (event) => {
        event.preventDefault()
        let dropdown__expanded = dropdownItem.querySelector('#dropdown__expanded')
        dropdown__expanded.checked = !dropdown__expanded.checked
        dropdownItem.querySelector('.dropdown__list').classList.toggle('active')
    } )
}
