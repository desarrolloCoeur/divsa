var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  autoplay :{
      delay : 3000,
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    380 : {
      slidesPerView: 1
    },
    600 : {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
});
const swiper4 = new Swiper(".mySwiper4",{
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    380 : {
      slidesPerView: 1
    },
    600 : {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
})

let mezclaContainer = document.querySelector('.mezcla');
let pMezcla = document.querySelector('.mezcla-p')
let upMezcla = document.querySelector('.mezcla-up')
let dpContainer = document.querySelector('.dp');
let pDp = document.querySelector('.dp-p');
let upDp = document.querySelector('.dp-up')



function showP() {
    pMezcla.style.transform = 'translateY(0px)';
    upMezcla.style.transform = 'translateY(0px)';
}

function hideP() {
    pMezcla.style.transform = 'translateY(300px)';
    upMezcla.style.transform = 'translateY(160px)'
}

if(mezclaContainer){

  mezclaContainer.onmouseover = showP;
  mezclaContainer.onmouseleave = hideP;
}


function showP2() {
    pDp.style.transform = 'translateY(0px)';
    upDp.style.transform = 'translateY(0px)';
}

function hideP2() {
    pDp.style.transform = 'translateY(300px)';
    upDp.style.transform = 'translateY(160px)'
}
if(dpContainer){

  dpContainer.onmouseover = showP2;
  dpContainer.onmouseleave = hideP2;
}



const btnMobile = document.querySelector("#btn-menu");
const menuMobile = document.querySelector("#mobile-menu");
const closeMenu = document.querySelector("#close-menu");

// Abrir el menú
btnMobile.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("hidden");
});

// Cerrar el menú
closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.add("hidden");
});
