
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function fecharMenu() {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const menuAberto = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(menuAberto));
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});
