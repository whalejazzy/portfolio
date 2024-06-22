// Slide down animation for the banner
anime({
    targets: '.banner h1',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutBounce'
});

anime({
    targets: '.banner p',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutBounce',
    delay: 500
});

// Fade in animation for profile section
anime({
    targets: '.profile-content img',
    opacity: [0, 1],
    duration: 2000,
    easing: 'easeInOutQuad',
    delay: anime.stagger(200) // delay for each element
});

// Slide in animation for sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    anime({
        targets: section,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: index * 300 // staggered delay
    });
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
