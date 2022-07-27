function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const { boxes, number, create, destroy } = {
	boxes: document.querySelector("#boxes"),
	number: document.querySelector(`[type="number"]`),
	create: document.querySelector("[data-create]"),
	destroy: document.querySelector("[data-destroy]"),
};

function createBoxes(amount) {
	for (let index = 0; index < amount; index += 1) {
		if (amount > Number(number.max)) {
			return alert(`Введено значеня ${amount} більше значення ${Number(number.max)}`);
		}
		const element = document.createElement("div");
		element.style.background = getRandomHexColor();
		element.style.width = 30 + index * 10 + "px";
		element.style.height = 30 + index * 10 + "px";
		console.log(index * 10);

		boxes.append(element);
	}
}

create.addEventListener("click", () => createBoxes(Number(number.value)));

destroy.addEventListener("click", () => {
	boxes.innerHTML = "";
});
