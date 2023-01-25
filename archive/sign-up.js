// const register_name = document.getElementById("name");
// const register_email = document.getElementById("email");
// const register_password = document.getElementById("password");
// const register_button = document.getElementById("register-btn");

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

// register_button.addEventListener("click", function () {
//   const valid_name = localStorage.getItem("register_name");
//   const valid_email = localStorage.getItem("register_email");
//   const valid_password = localStorage.getItem("register_password");

//   console.log(valid_email, valid_name, valid_password);

//   if (
//     register_name.value === valid_name ||
//     register_email.value === valid_email ||
//     register_password.value === valid_password
//   ) {
//     alert("You have been created account! Login Now!!");
//     return false;
//   }

//   if (
//     (register_name.value, register_email.value, register_password.value === "")
//   ) {
//     alert("Data not valid ❌");
//     localStorage.removeItem("register_name");
//     localStorage.removeItem("register_email");
//     localStorage.removeItem("register_password");
//     return false;
//   } else {
//     localStorage.setItem("register_name", register_name.value);
//     localStorage.setItem("register_email", register_email.value);
//     localStorage.setItem("register_password", register_password.value);
//     alert("Your account created. Click the Log in button");
//     window.location.href = "/pages/log-in.html";
//   }
// });
