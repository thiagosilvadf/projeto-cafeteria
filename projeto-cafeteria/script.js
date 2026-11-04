// Menu do celular: abre/fecha ao tocar no botão e fecha ao escolher um link
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

function setMenu(open) {
    navbar.classList.toggle("active", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

toggle.addEventListener("click", () => setMenu(!navbar.classList.contains("active")));
navbar.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("scroll", () => setMenu(false), { passive: true });
window.addEventListener("resize", () => { if (window.innerWidth > 768) setMenu(false); });
