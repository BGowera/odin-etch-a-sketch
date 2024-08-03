const gridContainer = document.querySelector(".grid-container");

function createBoxes(numberOfBoxes) {
    let counter = numberOfBoxes * numberOfBoxes;
    let basisCalculation=(numberOfBoxes/counter) *100
    for (let i = 0; i < counter; i++){
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridContainer.appendChild(gridDiv)
        gridDiv.style.flexBasis = `${basisCalculation}%`
        gridDiv.addEventListener('mouseenter', () => {
            gridDiv.style.backgroundColor='black'
        })
    }
}

createBoxes(16)