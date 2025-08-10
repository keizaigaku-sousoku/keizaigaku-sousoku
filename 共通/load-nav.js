document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("nav-placeholder");

  if (navPlaceholder) {
    fetch("https://github.com/keizaigaku-sousoku/keizaigaku-sousoku/blob/main/共通/nav.html")
      .then(response => response.text())
      .then(html => {
        navPlaceholder.innerHTML = html;

        const toggle = document.getElementById("nav-toggle");
        const menu = document.getElementById("nav-menu");
        const container = document.querySelector(".nav-toggle-container");

        if (toggle && menu) {
          // ボタンのクリックでメニュー表示切り替え
          toggle.addEventListener("click", function () {
            const isOpen = menu.classList.toggle("show");
            toggle.classList.toggle("open", isOpen);
          });

          // メニュー外クリックで閉じる
          document.addEventListener("click", function (event) {
            const isClickInside = container.contains(event.target);
            if (!isClickInside && menu.classList.contains("show")) {
              menu.classList.remove("show");
              toggle.classList.remove("open");
            }
          });
        }
      });
  }
});
