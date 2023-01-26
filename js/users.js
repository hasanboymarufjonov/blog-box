import { domSelector } from "../utils/domSelector.js";

const check_log_email = localStorage.getItem("login_email");
const check_log_password = localStorage.getItem("login_password");

if ((check_log_email, check_log_password != null)) {
  window.location = "/pages/new-post.html";
}

const userData = domSelector("#user-details");

userData.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  let avatar = e.target.avatar.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (avatar === "") {
    avatar = "https://img.icons8.com/ios-filled/50/000000/user.png";
  }

  localStorage.setItem("login_name", name);
  localStorage.setItem("login_avatar", avatar);
  localStorage.setItem("login_email", email);
  localStorage.setItem("login_password", password);

  if ((name, email, password === "")) {
    alert("Data not valid ❌");

    return false;
  }

  const userData = {
    name: name,
    avatar: avatar,
    email: email,
    password: password,
  };

  fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created");
      window.location.href = "/pages/new-post.html";
      userData.reset();
    })
    .catch((err) => alert("Error.."));
});
