const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //feedback good password
    feedback.textContent = "That username is valid";
  } else {
    //feedback help info
    feedback.textContent =
      "username name must contain letters only & be between 6 & 12 characters long";
  }
});

//live feedback
form.username.addEventListener("keyup", (e) => {
  //   console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});

//testing RegEx
// const username = "mutinta";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// if (result) {
//   console.log("The regex test passed!!");
// } else {
//   console.log("The regex test failed!");
// }

// let result = username.search(pattern);
// console.log(result);
