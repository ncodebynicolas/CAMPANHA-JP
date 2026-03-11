const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const expanded = !mobileMenu.classList.contains("hidden");
    menuToggle.setAttribute("aria-expanded", expanded);

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
});