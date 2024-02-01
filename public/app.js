

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
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
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
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
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



// Función para verificar si el elemento está en la ventana visible
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Función para activar el contador cuando la sección está en la vista
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

// Función para manejar el evento de scroll
function handleScroll() {
  const contadoresSection = document.getElementById("contadores");

  if (isElementInViewport(contadoresSection)) {
    // La sección está en la vista, activar el contador
    activateCounter();
    // Eliminar el evento de scroll después de activar el contador si solo quieres que se active una vez
    window.removeEventListener("scroll", handleScroll);
  }
}

// Agregar un evento de scroll para verificar cuando la sección está en la vista
window.addEventListener("scroll", handleScroll);
