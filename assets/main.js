const main = document.querySelector(".main");
const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");
const clearGridBtn = document.querySelector(".clear-grid-btn");
const eraseBtn = document.querySelector(".erase-btn");
const penBtn = document.querySelector(".pen-btn");
const changeGridSizeBtn = document.querySelector(".change-grid-size-btn");
const rainbowModeBtn = document.querySelector(".rainbow-mode-btn");

function createBoxes(numberOfBoxes) {
	let counter = numberOfBoxes * numberOfBoxes;
	let basisCalculation = (numberOfBoxes / counter) * 100;

	for (let i = 0; i < counter; i++) {
		let gridDiv = document.createElement("div");
		gridDiv.classList.add("grid-item");
		gridDiv.style.flexBasis = `${basisCalculation}%`;

		//functions

		function penMode() {
			gridDiv.addEventListener("mouseenter", () => {
				gridDiv.style.backgroundColor = colorPicker.value;
			});
		}
		function clear() {
			gridDiv.style.backgroundColor = "";
		}

		function getRandomColor() {
			let letters = "0123456789ABCDEF";
			let color = "#";
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}

		function rainbowMode() {
			gridDiv.addEventListener("mouseenter", () => {
				gridDiv.style.background = getRandomColor();
			});
		}
		//event listeners

		eraseBtn.addEventListener("click", () => {
			gridDiv.addEventListener("mouseenter", clear);
		});
		clearGridBtn.addEventListener("click", clear);
		penBtn.addEventListener("click", penMode);

		rainbowModeBtn.addEventListener("click", rainbowMode);
		//function end

		gridContainer.appendChild(gridDiv);
	}
}

createBoxes(16);

function gridSizeChange(input) {
	gridContainer.replaceChildren();
	input = parseInt(
		prompt(
			"What would you like your grid size to be? Pick any number between 1 and 100"
		)
	);
	if (input > 100 || input < 1) {
		alert(
			"Invalid Number! Please press the button again to pick a number between 1 and 100"
		);
		return;
	}
	return createBoxes(input);
}

changeGridSizeBtn.addEventListener("click", gridSizeChange);
