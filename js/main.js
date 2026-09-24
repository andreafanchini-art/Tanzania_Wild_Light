document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");
  let currentGallery = [];
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + currentGallery.length) % currentGallery.length;
    const image = currentGallery[currentIndex];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt || "";
  };

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      currentGallery = Array.from(img.closest(".gallery").querySelectorAll("img"));
      currentIndex = currentGallery.indexOf(img);
      showImage(currentIndex);
      lightbox.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) {
      return;
    }

    if (e.key === "Escape") {
      lightbox.classList.add("hidden");
    } else if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
});
