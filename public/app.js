

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 25,
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
  spaceBetween: 25,
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

const swiper5 = new Swiper(".mySwiper5",{
  slidesPerView: 1,
  spaceBetween: 25,
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

var swiper6 = new Swiper(".mySwiper6", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});

var swiper7 = new Swiper(".mySwiper7", {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper6,
  },
});



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
    pMezcla.style.transform = 'translateY(200px)';
    upMezcla.style.transform = 'translateY(130px)'
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
    pDp.style.transform = 'translateY(200px)';
    upDp.style.transform = 'translateY(130px)'
}
if(dpContainer){

  dpContainer.onmouseover = showP2;
  dpContainer.onmouseleave = hideP2;
}



const btnMobile = document.querySelector("#btn-menu");
const menuMobile = document.querySelector("#mobile-menu");
const closeMenu = document.querySelector("#close-menu");
const linksNav = document.querySelectorAll('#mobile-menu a')

linksNav.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuMobile.classList.toggle("hidden")
  })
})

btnMobile.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("hidden");
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.add("hidden");
});



const galleryes = ["experiencia"]

galleryes.map((g) => {
  const classGallery =  "#close-popup-"+g;
  const closeBtn = document.querySelector(classGallery)

  const popupClass = "#popup-"+g;
  const popUp = document.querySelector(popupClass)

  const btnClass = "#btn-popup-"+g;
  const btnPopup = document.querySelector(btnClass)

  closeBtn.addEventListener("click", (e) => {
    popUp.classList.remove("fixed")
    popUp.classList.add("hidden")
  })


  btnPopup.addEventListener("click", (e)=> {
    e.preventDefault();
    popUp.classList.remove("hidden")
    popUp.classList.add("fixed")
  })

})



//Contadores
function isElementPartiallyInViewport(el, percentage = 50) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const height = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const elementVisiblePercentage = (height / el.clientHeight) * 100;

  return elementVisiblePercentage >= percentage;
}

function activateCounter() {
  const num = document.querySelectorAll(".num");
  const interval = 1500;

  num.forEach((n) => {
    let startValue = 0;
    let endValue = parseInt(n.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      n.textContent = startValue;

      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

let animationFrameId;

function handleScroll() {
  cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    const contadoresSection = document.getElementById("contadores");

    if (isElementPartiallyInViewport(contadoresSection)) {
      activateCounter();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
