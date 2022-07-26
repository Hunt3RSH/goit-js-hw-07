const count = document.querySelectorAll(".item");

console.log(`Number of categories: ${count.length}`);

count.forEach(el => {
	const category = el.children[0].textContent;
	console.log(`Category: ${category}`);
	const countCategories = el.children[1].childElementCount;
	console.log(`Element: ${countCategories}`);
});
