const inputLengt = document.querySelector("#validation-input");

inputLengt.addEventListener("blur", () => {
	if (inputLengt.value.length != Number(inputLengt.getAttribute("data-length"))) {
		inputLengt.classList.add("invalid");
	} else {
		inputLengt.classList.add("valid");
	}
});
