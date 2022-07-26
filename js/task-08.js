const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("всі поля повинні бути заповнені!");
	}

	console.log(`email: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
}
