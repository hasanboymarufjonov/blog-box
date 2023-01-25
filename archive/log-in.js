// const login_email = document.getElementById("email");
// const login_password = document.getElementById("password");
// const login_button = document.getElementById("login-btn");

// const check_reg_name = localStorage.getItem("register_name");
// const check_reg_email = localStorage.getItem("register_email");
// const check_reg_password = localStorage.getItem("register_password");
// const check_log_email = localStorage.getItem("login_email");
// const check_log_password = localStorage.getItem("login_password");

// if (
//   (check_reg_name,
//   check_reg_email,
//   check_reg_password,
//   check_log_email,
//   check_log_password != null)
// ) {
//   window.location = "/pages/new-post.html";
// }

// login_email.value = localStorage.getItem("register_email");
// login_password.value = localStorage.getItem("register_password");

// login_button.addEventListener("click", function () {
//   const valid_email = localStorage.getItem("register_email");
//   const valid_password = localStorage.getItem("register_password");

//   if ((login_email.value, login_password.value === "")) {
//     alert("Data not valid ❌");
//     return false;
//   }

//   if (
//     login_email.value != valid_email ||
//     login_password.value != valid_password
//   ) {
//     alert("Your account not found! Create one!");
//     return false;
//   } else {
//     localStorage.setItem("login_email", login_email.value);
//     localStorage.setItem("login_password", login_password.value);
//     alert("Login successfuly ✅");
//     window.location = "/pages/new-post.html";
//   }
// });
