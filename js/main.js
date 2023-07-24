let darkMode = document.querySelector(".dark_mode");
let body = document.body;

const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

if (isDarkModeEnabled) {
  body.classList.add("dark-mode");
}

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkModeEnabled", "true");
  } else {
    localStorage.removeItem("darkModeEnabled");
  }
});
