/*-- toggle icon navbar --*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
} 

/*-- toggle icon navbar --*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*-- sticky navbar --*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*-- remove toggle icon and navbar --*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-- scroll reveal --*/
    
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

function playVideo(videoPath) {
        // Create video element
        var video = document.createElement('video');
        video.width = 640;
        video.height = 360;
        video.controls = true;
        video.autoplay = true; // Add the autoplay attribute

        // Create source element
        var source = document.createElement('source');
        source.src = videoPath;
        source.type = 'video/mp4';

        // Append source to video
        video.appendChild(source);

        // Get the video modal container
        var modalContainer = document.getElementById('videoModal');

        // Clear any previous content in the modal
        modalContainer.innerHTML = '';

        // Append video to modal container
        modalContainer.appendChild(video);

        // Listen for video end to remove the modal
        video.addEventListener('ended', function () {
            modalContainer.innerHTML = ''; // Clear the modal content
        });
    }

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*-- typed js --*/
const type = new Typed('.multiple-text', {
    strings: ['Graphic Designer', 'Video Creator'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});