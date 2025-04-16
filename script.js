const faders = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // ← permet de rejouer l'animation
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



// Attendre que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("mainImage");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
      mainImage.src = this.src;
    });
  });
});
