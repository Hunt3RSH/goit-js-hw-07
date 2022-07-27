const inputLengt = document.querySelector("#validation-input");

function blurInput(add, remove) {
	inputLengt.classList.add(add);
	inputLengt.classList.remove(remove);
}

inputLengt.addEventListener("blur", () => {
	if (inputLengt.value.length != Number(inputLengt.getAttribute("data-length"))) {
		blurInput("invalid", "valid");
	} else {
		blurInput("valid", "invalid");
	}
});
