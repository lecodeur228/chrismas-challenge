// Sélectionne le conteneur de la rotation
const slider = document.querySelector(".banner .slider");

// Sélectionne tous les éléments contenant des images
const items = document.querySelectorAll(".banner .slider .item img");

// Variable pour suivre l'état de l'animation
let isStopped = false;

// Gestion de l'animation
items.forEach((img) => {
  img.addEventListener("click", (event) => {
    const target = event.currentTarget;

    // Si l'animation est arrêtée, la reprendre
    if (isStopped) {
      // Réactiver l'animation de rotation
      slider.style.animation = "";
      isStopped = false;

      // Supprime l'effet de montée et l'effet de neige
      items.forEach((el) => el.classList.remove("image-clicked"));
      const snowflakes = document.querySelector(".snowflakes");
      if (snowflakes) {
        snowflakes.remove();
      }
    } else {
      // Si l'animation tourne, arrêter l'animation et ajouter l'effet de montée
      items.forEach((el) => el.classList.remove("image-clicked"));
      target.classList.add("image-clicked");

      // Stopper l'animation de rotation
      slider.style.animation = "none";
      isStopped = true;

      // Ajouter les flocons de neige si ce n'est pas déjà fait
      if (!document.querySelector(".snowflakes")) {
        const snowflakes = document.createElement("div");
        snowflakes.classList.add("snowflakes");
        document.querySelector(".banner").appendChild(snowflakes);
      }
    }
  });
});
