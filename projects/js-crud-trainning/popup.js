(() => {
  const btnAddPost = document.querySelector("#btnAddPost");
  let isActive = false;
  
  function showPopupAdd() {
    const popupAdd = document.querySelector(".popup-add");
    popupAdd.classList.toggle("is-active");
    isActive = !isActive;
  }

  if (btnAddPost) {
    
    btnAddPost.addEventListener("click", showPopupAdd);
  }
})();
