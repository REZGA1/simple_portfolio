document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const inputs = document.querySelectorAll(".contact-section .group form input, .contact-section .group form textarea");

  
  button.addEventListener("mouseenter", () => {
    inputs.forEach(el => {
       el.style.border = "2px solid var(--True-option-color )";
    });
  });

  
  button.addEventListener("mouseleave", () => {
    inputs.forEach(el => {
      el.style.border = ""; // يرجع للون الأصلي
    });
  });
});