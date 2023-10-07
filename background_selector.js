document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("intro-header");
    var images = ["sunset_ocean_one.jpg", "sunset_ocean_two.jpg"];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    header.style.backgroundImage = "url(" + randomImage + ")";
});