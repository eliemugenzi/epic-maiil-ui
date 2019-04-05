const closeBtn = document.querySelector(".close");
const aside = document.querySelector("aside");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", e => {
  e.preventDefault();
  aside.classList.add("open");
});

closeBtn.addEventListener("click", e => {
  e.preventDefault();
  aside.classList.remove("open");
});
