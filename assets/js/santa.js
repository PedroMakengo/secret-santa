function mobile() {
  const btnOpenMenuMobile = document.querySelector("#openBtnMenuMobile");
  const menuContent = document.querySelector("#mobileMenuDisplay");

  btnOpenMenuMobile.addEventListener("click", function (event) {
    event.preventDefault();

    menuContent.classList.contains("menu-open")
      ? menuContent.classList.remove("menu-open")
      : menuContent.classList.add("menu-open");
  });
}

mobile();
