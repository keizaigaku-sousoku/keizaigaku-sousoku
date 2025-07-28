document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("nav-placeholder");

  if (navPlaceholder) {
    fetch("../nav.html")
      .then(response => response.text())
      .then(html => {
        navPlaceholder.innerHTML = html;

        // DOMが追加された後に取得
        const toggle = document.getElementById("nav-toggle");
        const menu = document.getElementById("nav-menu");
        const container = document.querySelector(".nav-toggle-container");
        const iconOpen = document.getElementById("icon-open");
        const iconClose = document.getElementById("icon-close");

        if (toggle && menu && iconOpen && iconClose) {
          toggle.addEventListener("click", function () {
            const isHidden = menu.classList.toggle("hidden");
            iconOpen.classList.toggle("hidden", !isHidden);
            iconClose.classList.toggle("hidden", isHidden);
          });

          document.addEventListener("click", function (event) {
            if (!container.contains(event.target)) {
              if (!menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
                iconOpen.classList.remove("hidden");
                iconClose.classList.add("hidden");
              }
            }
          });
        }
      });
  }
});
