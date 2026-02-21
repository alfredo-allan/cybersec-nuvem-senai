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

// ===== MODAL DE IMAGEM - CLIQUE PARA AMPLIAR =====
document.addEventListener("DOMContentLoaded", function () {
  // Criar estrutura do modal apenas uma vez
  const modalHTML = `
    <div id="imageModal" class="image-modal" style="display: none;">
      <span class="image-modal-close">&times;</span>
      <img class="image-modal-content" id="expandedImage">
      <div class="image-modal-caption" id="imageCaption"></div>
    </div>
  `;

  // Adicionar modal ao body se não existir
  if (!document.getElementById("imageModal")) {
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImage");
  const captionText = document.getElementById("imageCaption");
  const closeBtn = document.querySelector(".image-modal-close");

  // Selecionar todas as imagens dentro de lab-image-container
  const images = document.querySelectorAll(".lab-image-container img");

  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      modal.style.display = "block";
      modalImg.src = this.src;

      // Pega o alt da imagem ou a legenda se existir
      const caption =
        this.alt ||
        this.closest(".lab-image-container")?.nextElementSibling?.innerText ||
        "";
      captionText.innerHTML = caption;

      // Adiciona classe pra animação
      setTimeout(() => {
        modalImg.classList.add("show");
      }, 10);
    });
  });

  // Fechar modal ao clicar no X
  closeBtn.addEventListener("click", function () {
    closeModal();
  });

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fechar com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  function closeModal() {
    modalImg.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }
});
