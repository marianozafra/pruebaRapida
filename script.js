document.addEventListener("scroll", () => {
    const content = document.querySelectorAll(".content p");
    const images = document.querySelectorAll(".images img");
    const windowHeight = window.innerHeight;
  
    content.forEach((text, index) => {
      const textPosition = text.getBoundingClientRect().top;
  
      if (textPosition <= windowHeight * 0.5) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
      }
    });
  });
  