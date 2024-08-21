function toggleDropdown(id) {
    $('#' + id).toggle();
    $('#' + id.replace('dropdown', 'dropdown-icon')).toggleClass('rotate');
}

function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
}