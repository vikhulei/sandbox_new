const showSubMenu = () => {
  document.getElementById("subMenu").style.cssText =
    "top: 60px; transition: 700ms; opacity: 1";
};

document.getElementById("about").addEventListener("click", showSubMenu);
