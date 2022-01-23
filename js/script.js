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
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < (size*size); i++){
        let pixel = document.createElement('div');
        pixel.classList.add("pixel");
        pixel.addEventListener('mouseenter', () => hovered(pixel));
        grid.appendChild(pixel);
    }
}

function hovered(element){
    element.style.background = "black";
}

function clear(){
    let pixelList = grid.querySelectorAll('.pixel');
    for(let i = 0; i < pixelList.length - 1; i++){
        let item = pixelList[i]
        item.style.background = "white";
    }
    console.log(rangeInput.value);
}
