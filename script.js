
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelector('.nav__links');


if (navMenu) {
  navMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

gsap.registerPlugin(ScrollTrigger);


gsap.from(".header__image",{
  left:90,
  opacity:0,
  duration:1.5,
  ease: "power3.out",
  delay: 0.2
})
gsap.from(".header__content",{
  x:-90,
  opacity:0,
  duration:1.5,
  ease: "power3.out",
  delay: 0.2,
})
gsap.from(".explore__card", {
  opacity: 0,
  y: 50, 
  duration: 1, 
  scrollTrigger: {
    trigger: ".explore__card", 
    start: "top center", 
    end: "bottom top",   
    scrub: 1,            
    markers: true,       
  },
});
gsap.from(".price__card", {
  opacity: 0,
  y: 50, 
  duration: 1, 
  scrollTrigger: {
    trigger: ".price__card", 
    start: "top center", 
    end: "bottom top",   
    scrub: 1,            
    markers: true,       
  },
});

gsap.from(".class__content", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".class__content",
    start: "top center",
    end: "bottom top",
    scrub: 1,
    markers: true, 
  },
});


gsap.from(".review__content", {
  opacity: 0,
  x: -100,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".review",
    start: "top 80%",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.from(".footer__container", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer__container",
    start: "top 80%",
    end: "bottom top",
    scrub: 1,
  },
});





