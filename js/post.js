import { domSelector } from "../utils/domSelector.js";

const postForm = domSelector("#post-form");

const check_log_name = localStorage.getItem("login_name");
const check_log_avatar = localStorage.getItem("login_avatar");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const author = check_log_name;
  const description = e.target.description.value;
  // const article = e.target.article.value;
  const avatar = check_log_avatar;
  let image = e.target.image.value;
  let date = new Date();

  // if (image === "") {
  //   image =
  //     "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000";
  // }

  const post = {
    title: title,
    description: description,
    name: author,
    image: image,
    // article: article,
    avatar: avatar,
    createdAt: date,
  };

  fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Post published");
      window.location = "/index.html";
      postForm.reset();
    })
    .catch((err) => alert("Error.."));
});
