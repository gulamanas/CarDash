const navSlide = () => {
  const nav = document.querySelector(".left-nav");
  const burger = document.querySelector(".burger");

  nav.classList.toggle("nav-slider");
  burger.classList.toggle("toggle");
  
};

const showImg = (img) => {
  const image = document.querySelector(".bigimg");
  image.src = img.src;
};
