const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  const user = {
    First: firstNameInput.value,
    Last: lastNameInput.value,
    Email: emailInput.value,
    Password: passwordInput.value
  };

  // TODO: Set new submission to local storage 

  // localStorage.setItem("first", JSON.stringify(user.First));
  // localStorage.setItem("last", JSON.stringify(user.Last));
  // localStorage.setItem("email", JSON.stringify(user.Email));
  // localStorage.setItem("password", JSON.stringify(user.Password));
  localStorage.setItem("user", JSON.stringify(user));
  
});
