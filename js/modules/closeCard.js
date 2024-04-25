// Cerrar card

export function closeCard() {
  let sections = document.querySelectorAll(".tasks-container, header")
  sections.forEach((section) => section.classList.remove("blur"));

  const cards = document.querySelectorAll("form");
  cards.forEach(card => card.classList.remove("visible"));
}