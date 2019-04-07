const registerForm = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const REGISTER_URL = "http://elie-epic-mail.herokuapp.com/api/v2/auth/signup";

registerForm.addEventListener("submit", e => {
  e.preventDefault();
  fetch(`http://cors-anywhere.herokuapp.com/${REGISTER_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status === 201) {
        localStorage.setItem("ACCESS_TOKEN", res.data[0].token);
        window.location.href = "inbox.html";
      } else {
        console.log(res.error);
      }
    })
    .catch(err => {
      throw err;
    });
});
