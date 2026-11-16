
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

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

    // Fecha o menu ao selecionar um link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });

    // Fecha o menu ao clicar fora da navegação
    document.addEventListener("click", (event) => {
        const clicouFora =
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target);

        if (clicouFora && navLinks.classList.contains("active")) {
            fecharMenu();
        }
    });

    // Fecha o menu com Escape e devolve o foco ao botão
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            navLinks.classList.contains("active")
        ) {
            fecharMenu();
            menuToggle.focus();
        }
    });

    // Fecha o menu quando a tela volta ao tamanho desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });

}
