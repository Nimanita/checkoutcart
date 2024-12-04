const rows = document.querySelectorAll('.row-container:not(.header-container)');
const contents = document.querySelectorAll('.row-content');
const radios = document.querySelectorAll('input[type="radio"]:not(.radiobtnforpositioning)');
radios[0].checked = true;
function toggleRow(index) {
    // Remove active state from all rows
    rows.forEach(row => {
        row.classList.remove('selected');
    });
    contents.forEach((content, i) => {
        content.classList.remove('active');
        radios[i].checked = false;
    });
    console.log(index)
    // Add active state to selected row
    rows[index].classList.add('selected');
    contents[index].classList.add('active');
    radios[index].checked = true;
}