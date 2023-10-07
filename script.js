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
            gridCell.addEventListener('click', darkenSquare);
            gridCell.addEventListener('contextmenu', lightenSquare);
            container.appendChild(gridCell);
        }
    }
}

const button = document.querySelector('.btn');

// Use button to get user input. Create grid based on squares input.
button.addEventListener('click', () => {
    let squares = prompt('Enter number of squares');

    if (squares > 100) {
        squares = prompt('Enter a number less than or equal to 100');
    }
    createGrid(squares);
});

// Change div color on hover
function hoverEffect(event) {
    let div = event.target;
    div.style.backgroundColor = getRandomColor();
};

// Get a random Number between 0 and 255 (rgb values)
function getRandomInteger(start, end) {
    return start + Math.floor(Math.random() * (end - start) + 1);
};

// Return a random color based on random number generated.
function getRandomColor() {
    return `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
};

// Darken square 
function darkenSquare(event) {
    let div = event.target;
    let currentBrightness = div.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) - 10;

    if (currentBrightness >= 0) {
        div.style.filter = `brightness(${currentBrightness}%)`;
        div.dataset.brightness = currentBrightness;
    }
};

// Lighten square
function lightenSquare(event) {
    event.preventDefault();
    let div = event.target;
    let currentBrightness = div.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) + 10;

    if (currentBrightness <= 100) {
        div.style.filter = `brightness(${currentBrightness}%)`;
        div.dataset.brightness = currentBrightness;
    }
};