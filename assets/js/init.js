document.addEventListener('DOMContentLoaded', function() {
    let parallaxElements = document.querySelectorAll('.parallax');
    let parallaxOptions = 0;
    let parallaxInstances = M.Parallax.init(parallaxElements, parallaxOptions);
});

document.addEventListener('DOMContentLoaded', function() {
    let sidenavElements = document.querySelectorAll('.sidenav');
    let sidenavOptions = 0
    let sidenavInstances = M.Sidenav.init(sidenavElements, sidenavOptions);
});

document.addEventListener('DOMContentLoaded', function() {
    let carouselElements = document.querySelectorAll('.carousel');
    let carouselOptions = {duration: 100, numVisible: 1, indicators: true};
    let carouselInstances = M.Carousel.init(carouselElements, carouselOptions);
});

document.addEventListener('DOMContentLoaded', function() {
    let imageElements = document.querySelectorAll('.materialboxed');
    let imageOptions = {inDuration: 125};
    let imageInstances = M.Materialbox.init(imageElements, imageOptions);
});