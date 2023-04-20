$(document).ready(function() {
    const $scrollytelling = $("#scrollstory");
    const $images = $scrollytelling.children(".story").map(function() {
      const $image = $("<div class='images'></div>");
      $image.css("background-image", `url(${this.dataset.imageSrc})`);
      $scrollytelling.append($image);
      return $image;
    });
  
    $scrollytelling
