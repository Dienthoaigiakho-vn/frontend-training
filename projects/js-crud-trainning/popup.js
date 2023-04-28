const btnAddPost = document.querySelector("#btnAddPost");
const btnClosePost = document.querySelector(".btn-close");
let isActive = false;

function showPopupAdd() {
  const popupAdd = document.querySelector(".popup-add");
  const popupOverPlay = document.querySelector(".popupOverplay");

  popupAdd.classList.toggle("is-active");

  popupOverPlay.classList.toggle("is-active");

  isActive = !isActive;
}
function closePopup() {
  const popupAdd = document.querySelector(".popup-add");
  const popupOverPlay = document.querySelector(".popupOverplay");
  popupAdd.classList.toggle("is-active");

  popupOverPlay.classList.toggle("is-active");

  isActive = !isActive;
}

function showImageInput() {
  const btnchangePostImage = document.querySelector(".btn-changePostImage");
  const imgInput = document.querySelector("#imgInput");
  const imagePost = document.querySelector("#imagePost");

  btnchangePostImage.addEventListener("click", () => {
    const file = imgInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      imagePost.setAttribute("src", reader.result);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  });
}
(() => {
  if (btnAddPost) {
    btnAddPost.addEventListener("click", showPopupAdd);
    btnClosePost.addEventListener("click", closePopup);
    showImageInput();
  }
})();
