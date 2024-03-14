document.addEventListener('DOMContentLoaded', function() {
    const smoothScroll = (element) => {
        const navbarHeight = document.querySelector('header').clientHeight;
        const offset = navbarHeight; // Set offset to navbar height
        const elementPosition = element.offsetTop - offset;
        window.scroll({
            behavior: 'smooth',
            left: 0, // Only scroll vertically
            top: elementPosition
        });
    };

    const example1Link = document.querySelector('.nav-link[href="#example-1"]');
    const example1Section = document.querySelector('#example-1');
    example1Link.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll(example1Section);
    });

    const example2Link = document.querySelector('.nav-link[href="#example-2"]');
    const example2Section = document.querySelector('#example-2');
    example2Link.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll(example2Section);
    });

    const mainLink = document.querySelector('.cta-link');
    const mainSection = document.querySelector('.main');
    mainLink.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll(mainSection);
    });

    const example2ContentLink = document.querySelector('.example-2-link');
    example2ContentLink.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll(mainSection);
    });

    // Add this inside your JavaScript file (main.js)
const zoomableWrappers = document.querySelectorAll('.zoomable');

zoomableWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', function() {
    const imageUrl = wrapper.getAttribute('data-image');
    window.open(imageUrl); // Open the image in a new tab
  });
});

});
