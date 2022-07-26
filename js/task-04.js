let counterValue = 0;

const refs = {
	decrement: document.querySelector('[data-action="decrement"]'),
	increment: document.querySelector('[data-action="increment"]'),
	value: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", () => {
	counterValue -= 1;
	refs.value.textContent = counterValue;
});

refs.increment.addEventListener("click", () => {
	counterValue += 1;
	refs.value.textContent = counterValue;
});
