document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("nav-placeholder");

  if (navPlaceholder) {
    fetch("../nav.html")
      .then(response => response.text())
      .then(html => {
        navPlaceholder.innerHTML = html;

        const toggle = document.getElementById("nav-toggle");
        const menu = document.getElementById("nav-menu");
        const container = document.querySelector(".nav-toggle-container");

        if (toggle && menu) {
          toggle.addEventListener("click", function () {
            const isHidden = menu.classList.toggle("hidden");
            toggle.classList.toggle("open", !isHidden);
          });

          document.addEventListener("click", function (event) {
            if (!container.contains(event.target)) {
              if (!menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
                toggle.classList.remove("open");
              }
            }
          });
        }
      });
  }
});
