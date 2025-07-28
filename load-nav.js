document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) {
    fetch("../nav.html")
      .then(response => response.text())
      .then(html => {
        navPlaceholder.innerHTML = html;
        // 読み込んだ後にイベントを登録
        const toggle = document.getElementById("nav-toggle");
        const menu = document.getElementById("nav-menu");
        const container = document.querySelector(".nav-toggle-container");

        if (toggle && menu) {
          toggle.addEventListener("click", function () {
            menu.classList.toggle("hidden");
            toggle.textContent = menu.classList.contains("hidden") ? "≡" : "×?";
          });
        }

        document.addEventListener("click", function (event) {
          if (toggle && menu && container && !container.contains(event.target)) {
            if (!menu.classList.contains("hidden")) {
              menu.classList.add("hidden");
              toggle.textContent = "≡";
            }
          }
        });
      });
  }
});
