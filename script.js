// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= window.innerHeight * 0.75;
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};
                                  
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Header Scroll Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});