document.addEventListener("DOMContentLoaded", () => {
  const gaugeFill = document.querySelector(".gauge-fill");
  if (gaugeFill) {
    const total = 251;
    const offset = 40;
    gaugeFill.style.transition = "stroke-dashoffset 2s ease";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gaugeFill.style.strokeDashoffset = String(offset);
      });
    });
  }
});