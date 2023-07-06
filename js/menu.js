if (document.querySelector(".btn-menu")) {
  const button = document.querySelector(".btn-menu");
  button.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
  });
}

if (document.querySelector(".cerrar")) {
  const cerrar = document.querySelector(".cerrar");
  cerrar.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
  });
}

const li = document.querySelectorAll(".li");

li.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
  });
});
