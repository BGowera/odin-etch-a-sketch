const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");
const clearGridBtn = document.querySelector(".clear-grid-btn");
const eraseBtn = document.querySelector(".erase-btn");
const penBtn = document.querySelector(".pen-btn");


function createBoxes(numberOfBoxes) {
    let counter = numberOfBoxes * numberOfBoxes;
    let basisCalculation=(numberOfBoxes/counter) *100
    for (let i = 0; i < counter; i++){
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.style.flexBasis = `${basisCalculation}%`;
        function penMode() {
           gridDiv.addEventListener('mouseenter', () => {
            gridDiv.style.backgroundColor = colorPicker.value;
        }
        )  
        }
        penMode()
        function clear() {
            gridDiv.style.backgroundColor=''
        }
        clearGridBtn.addEventListener('click',clear)
        penBtn.addEventListener('click', penMode)
        eraseBtn.addEventListener("click", () => {
               gridDiv.addEventListener("mouseenter", () => {
					clear()
				});
           });
        gridContainer.appendChild(gridDiv)
   
    }
}


  
createBoxes(16)