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
          toggle.addEventListener("click", function (event) {
            const isHidden = menu.classList.toggle("hidden");
            toggle.setAttribute("aria-expanded", !isHidden);
            // SVGのクラス切り替えでアニメーション制御
            toggle.querySelector("svg").classList.toggle("open", !isHidden);
            event.stopPropagation();
          });

          // メニュー外クリックで閉じる
          document.addEventListener("click", function (event) {
            if (!container.contains(event.target)) {
              if (!menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
                toggle.setAttribute("aria-expanded", false);
                toggle.querySelector("svg").classList.remove("open");
              }
            }
          });
        }
      });
  }
});
