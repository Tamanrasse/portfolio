// Transitions
/*
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
});*/

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

const values = {
  BUT1: {
    realiser: 50,
    optimiser: 40,
    administrer: 30,
    gerer: 25,
    conduire: 45,
    collaborer: 40,
  },
  BUT2: {
    realiser: 65,
    optimiser: 50,
    administrer: 60,
    gerer: 45,
    conduire: 60,
    collaborer: 75,
  }
};

// Objet pour stocker les intervalles actifs par compétence
const activeIntervals = {};

function switchYear(year) {
  Object.entries(values[year]).forEach(([id, target]) => {
    const block = document.querySelector(`[data-id="${id}"]`);
    const valueSpan = block.querySelector(".value");
    const bar = block.querySelector(".bar");

    let current = parseInt(valueSpan.textContent);

    // Supprimer l'ancienne animation si elle existe
    if (activeIntervals[id]) {
      clearInterval(activeIntervals[id]);
    }

    const step = target > current ? 1 : -1;

    activeIntervals[id] = setInterval(() => {
      current += step;
      valueSpan.textContent = `${current}%`;
      bar.style.width = `${current}%`;

      if (current === target) {
        clearInterval(activeIntervals[id]);
        delete activeIntervals[id];
      }
    }, 15);
  });
}
