// Abrir modal de boas-vindas automaticamente ao carregar a página
window.addEventListener("load", function () {
  const welcomeModal = new bootstrap.Modal(
    document.getElementById("welcomeModal"),
  );
  welcomeModal.show();
});

// Smooth scroll para navegação interna (apenas para links que começam com #)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Verifica se é um link interno (começa com #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // Se não começar com #, deixa o comportamento padrão (navegação normal)
  });
});
