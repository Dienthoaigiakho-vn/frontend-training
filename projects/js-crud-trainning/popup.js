const apiUrl = "https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=6";
const btnSave = document.querySelector(".btn-savepost");
import axios from "axios";

const btnAddPost = document.querySelector("#btnAddPost");
const btnClosePost = document.querySelector(".btn-close");

let isActive = false;

async function createPost() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const desc = document.querySelector("#desc").value;
  const imagePost = document.querySelector("#imagePost").src;
  const newObject = {
    title: title,
    author: author,
    description: desc,
    imageUrl: imagePost
  };

  try {
    const res = await axios.post(apiUrl + "/posts", newObject);
    console.log("Object created successfully");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}


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

// function showImageInput() {
//   const btnchangePostImage = document.querySelector(".btn-changePostImage");
//   const imgInput = document.querySelector("#imgInput");
//   const imagePost = document.querySelector("#imagePost");

//   btnchangePostImage.addEventListener("click", () => {
//     const file = imgInput.files[0];
//     const reader = new FileReader();

//     reader.addEventListener("load", () => {
//       imagePost.setAttribute("src", reader.result);
//     });
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   });
// }



(() => {
  if (btnAddPost) {
    btnAddPost.addEventListener("click", showPopupAdd);
    btnClosePost.addEventListener("click", closePopup);
    btnSave.addEventListener("click", createPost);


    // showImageInput();
    // createPost();
  }
})();
