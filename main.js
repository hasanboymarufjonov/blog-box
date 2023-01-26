import { domSelector } from "./utils/domSelector.js";
import { convertDate } from "./utils/convertDate.js";

const cardContainer = domSelector(".card-container");
const templateCard = domSelector(".card");

const toLogin = domSelector("#login-signup");
const noneDisplay = domSelector(".log-in");

const check_log_email = localStorage.getItem("login_email");
const check_log_password = localStorage.getItem("login_password");

if ((check_log_email, check_log_password != null)) {
  toLogin.textContent = "Log out";
  noneDisplay.display = "none";
}

toLogin.addEventListener("click", function () {
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_password");
  localStorage.removeItem("login_name");
  localStorage.removeItem("login_avatar");
});

let posts = [];

fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/posts")
  .then((res) => res.json())
  .then((data) => {
    posts = data;
    console.log(posts);
    renderPosts(posts);
  })
  .catch((err) => {
    console.log(err);
  });

function renderPosts(posts, parent = cardContainer) {
  parent.textContent = "";

  const fragmentPost = document.createDocumentFragment();

  posts.reverse().forEach((post) => {
    const template = templateCard.cloneNode(true);
    template.setAttribute("id", `card-${post.id}`);

    const avatar = domSelector(".avatar", template);
    const title = domSelector(".title", template);
    const author = domSelector(".author", template);
    const date = domSelector(".date", template);
    const description = domSelector(".description", template);
    const image = domSelector(".post-image", template);

    const convertedDate = convertDate(post.createdAt);

    title.textContent = post.title;
    avatar.setAttribute("src", post.avatar);
    author.textContent = post.name;

    date.textContent = convertedDate;
    description.textContent = post.description;
    image.setAttribute("src", post.image);

    fragmentPost.appendChild(template);
  });

  parent.appendChild(fragmentPost);
}
