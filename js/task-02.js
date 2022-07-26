const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const li = [];

ingredients.forEach(el => {
	const item = document.createElement("li");
	item.textContent = el;
	item.classList.add("item");
	li.push(item);
});
document.querySelector("ul").append(...li);

console.log(li);
