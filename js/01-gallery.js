import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// const window = document.querySelector("window");

const addItems = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", addItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
    , {
      onShow: (instance) => {
        window.addEventListener("keydown", event);
        console.log('onShow', instance);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", event);
        console.log('onClose', instance);
      }
    }
  );

  if (event.target.classList.value === "gallery__image") {
  instance.show();
};



    // gallery.addEventListener("keyup", (event) => {
    //   if (instance.visible() === true) {
    //     const keyName = event.key;
    //     if (keyName === "Escape") {
    //       instance.close();
    //     }
    //   }
    // });

    window.addEventListener("keydown", (event) => {
      if (instance.visible() === true) {
        const keyName = event.key;
        // console.log(keyName);
        if (keyName === "Escape") {
          instance.close();
        }
      }
        // window.removeEventListener("keydown", event);
    });




  });
