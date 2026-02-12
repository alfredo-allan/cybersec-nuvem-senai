// Abrir modal de boas-vindas automaticamente ao carregar a página
window.addEventListener("load", function () {
  const welcomeModal = new bootstrap.Modal(
    document.getElementById("welcomeModal"),
  );
  welcomeModal.show();
});

// Smooth scroll para navegação interna
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
