const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.clearBtn');
const rangeInput = document.querySelector('input');
const rangeNumber = document.querySelector('.rangeNumber');
clearBtn.addEventListener('click', clear);
rangeInput.addEventListener('input',() => rangeNumber.textContent = `${rangeInput.value} x ${rangeInput.value}`);

rangeInput.addEventListener('change', () => {
    generateGrid(rangeInput.value)
})

generateGrid(20);

function clearGrid(){
    grid.innerHTML= ''
}
function generateGrid(size){
    //1.clear grid
    //2.set template columns and rows to whatever size is
    //3.create size**2 divs for the grid (gridling)
    //3a. add the eventlistener to the gridling that will listen for a mouse hover to color in the div
    //3b. append it to the grid 
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < size**2; i++){
        let gridling = document.createElement('div');
        gridling.addEventListener('mouseover', () => hovered(gridling));
        grid.appendChild(gridling);
    }
}

function hovered(element){
    element.style.background = "black";
}

//For the clear button
function clear(){
    clearGrid();
    generateGrid(rangeInput.value);
}
