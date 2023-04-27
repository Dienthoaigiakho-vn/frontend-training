const apiUrl = "https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=6";
import axios from "axios";

// su dung axios thu vien cua JS
async function getPostList(){
try {
  const res = await axios.get(apiUrl);
  return res.data;
} catch (error) {
  console.log(error);
}
}


// su dung fetch API mac dinh cua JS
// async function getPostList() {
//   try {
    
//     const response = await fetch(apiUrl);
//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

function renderItems(data) {
  const blogTemplate = document.querySelector("#blogTemplate");
  const blogList = document.querySelector("#blogList");
  for (let i = 0; i < data.length; i++) {
    const cloneBlogTemplate = blogTemplate.cloneNode(true).content;

    const blogCard = cloneBlogTemplate.querySelector(".blog-card")
    const blogCardImg = cloneBlogTemplate.querySelector(".blog-card--img");
    const blogCardTitle = cloneBlogTemplate.querySelector(".blog-card--title");
    const blogCardDesc = cloneBlogTemplate.querySelector(".blog-card--desc");
    const blogCardDate = cloneBlogTemplate.querySelector(".blog-card--date");
    const blogCardAuthor = cloneBlogTemplate.querySelector(".blog-card--author")
    const date = new Date(data[i].createdAt)
    blogCard.href = "/detail?id=" + data[i].id 
    blogCardImg.src = data[i].imageUrl;
    blogCardImg.alt = data[i].title;
    blogCardTitle.textContent = data[i].title;
    blogCardDesc.textContent = data[i].description;
    blogCardDate.textContent = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    blogCardAuthor.textContent = data[i].author; 

    blogList.appendChild(cloneBlogTemplate);
  }
}

(async () => {
  const { data } = await getPostList();
  renderItems(data);
})();


