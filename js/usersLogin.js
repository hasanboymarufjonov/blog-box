import { domSelector } from "../utils/domSelector.js";

const check_log_email = localStorage.getItem("login_email");
const check_log_password = localStorage.getItem("login_password");

let usersData = [];

const userLogin = domSelector("#user-login");

userLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailUser = e.target.email.value;
  const passwordUser = e.target.password.value;

  fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
      usersData = data;

      if ((check_log_email, check_log_password != null)) {
        window.location = "/pages/new-post.html";
      }

      const valid_email = localStorage.getItem("register_email");
      const valid_password = localStorage.getItem("register_password");

      if ((emailUser, passwordUser === "")) {
        alert("Data not valid ❌");
        return false;
      }

      if (emailUser != valid_email || passwordUser != valid_password) {
        function checkUser(email, password) {
          var user = usersData.find(function (user) {
            if (user.email === email && user.password === password) {
              return true;
            }
          });

          usersData.find(function (user) {
            if (user.email === email && user.password === password) {
              localStorage.setItem("login_email", emailUser);
              localStorage.setItem("login_password", passwordUser);
              localStorage.setItem("login_name", user.name);
              localStorage.setItem("login_avatar", user.avatar);
            }
          });

          if (user == null) {
            alert("Incorrect email or password");
          } else {
            console.log("yes");
            window.location = "/pages/new-post.html";
          }
        }
        checkUser(emailUser, passwordUser);

        return false;
      } else {
        localStorage.setItem("login_email", emailUser);
        localStorage.setItem("login_password", passwordUser);
        alert("Login successfuly ✅");
        window.location = "/pages/new-post.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
