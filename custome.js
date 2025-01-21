const menuOpen = document.getElementById("menuShow");
const menuList = document.getElementById("menuListShow");

menuOpen.addEventListener("click", () => {
  menuList.classList.toggle("menuActive");
  menuOpen.classList.toggle("menuShowActive");
});
