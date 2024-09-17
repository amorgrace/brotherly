document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 1000,
    effect: 'slide',
    slidesPerView: 1,
    centeredSlides: true
})})

// for reveal of the notes
  
document.addEventListener('DOMContentLoaded', function () {
const noteElement = document.querySelector('.note');
const revealElements = document.querySelectorAll('.reveal'); // Select all elements with .reveal class
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(noteElement);
revealElements.forEach(element => observer.observe(element)); // Observe all .reveal elements
});
  
  
// for reveal of the note images

document.addEventListener('DOMContentLoaded', function () {
  const noteImg = document.querySelector('.note-img');

  function clipPathReveal() {
    const rect = noteImg.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      noteImg.style.transition = 'clip-path 2s ease-in-out'; // Adjusted duration and timing function
      noteImg.style.clipPath = 'inset(0% 0% 0% 0%)';
    } else {
      noteImg.style.clipPath = 'inset(100% 0% 0% 0%)';
    }
  }

  // Set initial state
  noteImg.style.clipPath = 'inset(100% 0% 0% 0%)';

  // Trigger on scroll
  window.addEventListener('scroll', clipPathReveal);
});
  
  
// for outer-img

document.addEventListener('DOMContentLoaded', function () {
  const outerImg = document.querySelector('.outer-img');

  function clipPathReveal() {
    const rect = outerImg.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      outerImg.style.transition = 'clip-path 2s ease-in-out'; // Adjust duration and timing function
      outerImg.style.clipPath = 'inset(0% 0% 0% 0%)';
    } else {
      outerImg.style.clipPath = 'inset(100% 0% 0% 0%)';
    }
  }

  // Set initial state
  outerImg.style.clipPath = 'inset(100% 0% 0% 0%)';

  // Trigger on scroll
  window.addEventListener('scroll', clipPathReveal);
});
  
  
// for note-2

document.addEventListener('DOMContentLoaded', function () {
  const note2 = document.querySelector('.note-2');

  function revealOnScroll() {
    const rect = note2.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      note2.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // Adjust duration and timing function
      note2.style.opacity = '1';
      note2.style.transform = 'translateY(0)';
    } else {
      note2.style.opacity = '0';
      note2.style.transform = 'translateY(50px)';
    }
  }

  // Set initial state
  note2.style.opacity = '0';
  note2.style.transform = 'translateY(50px)';

  // Trigger on scroll
  window.addEventListener('scroll', revealOnScroll);
});

  
// for the worship projects
document.addEventListener('DOMContentLoaded', function () {
  const iframes = document.querySelectorAll('.frames iframe');

  function handleScroll() {
    const windowHeight = window.innerHeight;

    iframes.forEach(iframe => {
      const rect = iframe.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        iframe.classList.add('visible');
      } else {
        iframe.classList.remove('visible');
      }
    });
  }

  // Initial check
  handleScroll();

  // Trigger on scroll
  window.addEventListener('scroll', handleScroll);
});
  
  
// countdown timer

document.addEventListener('DOMContentLoaded', function () {
  function updateCountdown() {
    const endDate = new Date('November 25, 2024 00:00:00'); // Target date
    const now = new Date();
    const timeDiff = endDate - now;

    if (timeDiff <= 0) {
      document.getElementById('countdown').innerHTML = "Event Started!";
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = `${days} Days`;
    document.getElementById('hours').innerText = `${hours} Hours`;
    document.getElementById('minutes').innerText = `${minutes} Minutes`;
    document.getElementById('seconds').innerText = `${seconds} Seconds`;
  }

  updateCountdown(); // Initial call
  setInterval(updateCountdown, 1000); // Update every second
});

// form submission message
if (location.search.includes('success=true')) {
  document.getElementById('successMessage').style.display = 'block';
}

// loading Lottie animations
lottie.loadAnimation({
  container: document.getElementById('lottie-bookings-animation'), // The container where the animation will be loaded
  renderer: 'svg', // Render as an SVG
  loop: true, // Keep the animation looping
  autoplay: true, // Start the animation automatically
  path: '/animations/piano.json' // Replace with the actual path to your Lottie animation JSON file
});

lottie.loadAnimation({
  container: document.getElementById('lottie-walking-animation'), // The container where the animation will be loaded
  renderer: 'svg', // Render as an SVG
  loop: true, // Keep the animation looping
  autoplay: true, // Start the animation automatically
  path: '/animations/walking.json' // Replace with the actual path to your Lottie animation JSON file
});


// lottie slides

window.onload = function() {
  document.getElementById('lottie-bookings-animation').classList.add('animate');
  document.getElementById('lottie-walking-animation').classList.add('animate');
};


// toggle menu icon

function toggleMenu() {
  const nav = document.querySelector('.nav');
  const menuIcon = document.querySelector('.menu-icon');
  nav.classList.toggle('show');
  menuIcon.classList.toggle('open');
}

