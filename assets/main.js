const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");

function createBoxes(numberOfBoxes) {
    let counter = numberOfBoxes * numberOfBoxes;
    let basisCalculation=(numberOfBoxes/counter) *100
    for (let i = 0; i < counter; i++){
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.style.flexBasis = `${basisCalculation}%`;
        gridDiv.addEventListener('mouseenter', () => {
            gridDiv.style.backgroundColor = colorPicker.value;
        }
        )
        gridContainer.appendChild(gridDiv)
        
    }
}

createBoxes(16)