import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems.map(el => {
	return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
});

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", markup.join(""));

gallery.addEventListener("click", e => {
	const instance = basicLightbox.create(`a
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

	instance.show();

	gallery.addEventListener("keyup", e => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
});
