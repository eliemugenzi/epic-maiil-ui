const email = document.querySelector("#email");
const password = document.querySelector("#password");
const LOGIN_URL = "http://elie-epic-mail.herokuapp.com/api/v2/auth/login";

const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  fetch(`http://cors-anywhere.herokuapp.com/${LOGIN_URL}`, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data[0].token);
        window.location.href = "inbox.html";
      } else {
        console.log(res.error);
      }
    });
});
const login = e => {
  e.preventDefault();
};
