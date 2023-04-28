import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const addItems = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", addItems);

// console.log(addItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  // const itemUrl = event.target.dataset.source;
  // console.log(itemUrl);

  // const instance = basicLightbox.create(`<img src="${itemUrl}">`);

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );

  instance.show();
  gallery.addEventListener("keyup", (event) => {
    if (instance.visible() === true) {
      const keyName = event.key;
      if (keyName === "Escape") {
        instance.close();
      }
    //    else {
    //     alert(`Press the "Escape" to close the window!`);
    //   }
    }
  });
});
