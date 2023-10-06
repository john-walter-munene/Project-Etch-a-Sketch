let container = document.querySelector('.container');

// Create Grids based on given number.
function createGrid(number) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', number);

    for (let j = 0; j < number; j++) {
        for (let i = 0; i < number; i++){
            let gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            gridCell.addEventListener('mouseenter', hoverEffect);
            container.appendChild(gridCell);
        }
    }
}

const button = document.querySelector('.btn')

// Use button to get user input.
button.addEventListener('click', () => {
    let squares = prompt('Enter number of squares');

    if (squares > 100) {
        squares = prompt('Enter a number less than or equal to 100');
    }
    createGrid(squares);
})

function hoverEffect(event) {
    let div = event.target;
    div.style.backgroundColor = 'blue';
}