import { domSelector } from "../utils/domSelector.js";

const check_reg_name = localStorage.getItem("register_name");
const check_reg_email = localStorage.getItem("register_email");
const check_reg_password = localStorage.getItem("register_password");
const check_log_email = localStorage.getItem("login_email");
const check_log_password = localStorage.getItem("login_password");

if ((check_log_email, check_log_password != null)) {
  window.location = "/pages/new-post.html";
}

const userData = domSelector("#user-details");

userData.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const valid_name = localStorage.getItem("register_name");
  const valid_email = localStorage.getItem("register_email");
  const valid_password = localStorage.getItem("register_password");

  if (
    name === valid_name ||
    email === valid_email ||
    password === valid_password
  ) {
    alert("You have been created account! Login Now!!");
    return false;
  }

  if ((name, email, password === "")) {
    alert("Data not valid ❌");
    localStorage.removeItem("register_name");
    localStorage.removeItem("register_email");
    localStorage.removeItem("register_password");
    return false;
  } else {
    localStorage.setItem("register_name", name);
    localStorage.setItem("register_email", email);
    localStorage.setItem("register_password", password);
  }

  const userData = {
    name: name,
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
