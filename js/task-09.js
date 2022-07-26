function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

button.addEventListener(`click`, () => {
	const hexColor = getRandomHexColor();
	text.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});
