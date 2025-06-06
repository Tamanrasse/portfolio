// Transitions

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche le chargement immédiat
    const href = link.href;
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = href; // Change la page après la transition
    }, 500); // Temps synchronisé avec la transition CSS
  });
});

function showModal(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}
function filterProjects(year) {
  document.querySelectorAll('.project-card').forEach(card => {
    if (year === 'all') {
      card.classList.remove('hidden');
    } else if (!card.classList.contains(year)) {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  });
}