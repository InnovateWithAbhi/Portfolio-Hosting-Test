function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  function toggleDialog(element) {
    const overlay = document.querySelector(".modal-overlay");
    const dialog = element.querySelector(".experience-dialog");

    if (dialog.classList.contains("active")) {
      dialog.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      const activeDialog = document.querySelector(".experience-dialog.active");
      if (activeDialog) activeDialog.classList.remove("active");

      dialog.classList.add("active");
      overlay.classList.add("active");
    }
  }

  function closeDialog(event) {
    event.stopPropagation();
    const dialog = event.target.closest(".experience-dialog");
    dialog.classList.remove("active");
    document.querySelector(".modal-overlay").classList.remove("active");
  }

  // Close modal when clicking outside of it
  const overlay = document.querySelector(".modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      const activeDialog = document.querySelector(".experience-dialog.active");
      if (activeDialog) activeDialog.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  window.toggleDialog = toggleDialog;
  window.closeDialog = closeDialog;
});
