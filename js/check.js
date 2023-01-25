const valid_name = localStorage.getItem("register_name");
const valid_email = localStorage.getItem("register_email");
const valid_password = localStorage.getItem("register_password");

const login_email = localStorage.getItem("login_email");
const login_password = localStorage.getItem("login_password");

window.onload = function () {
  if ((login_email, login_password === null)) {
    alert("You need to create account to create new post");
    window.location = "/pages/log-in.html";
    return false;
  }
};
