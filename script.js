document.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".images img");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    images.forEach((image, index) => {
      if (scrollPosition + windowHeight / 2 >= image.offsetTop) {
        images.forEach(img => img.classList.remove("active"));
        image.classList.add("active");
      }
    });
  });
  