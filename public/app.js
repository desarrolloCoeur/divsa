
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",      
        clickable: true,

        renderBullet: function (index, className) {
        // Array de etiquetas personalizadas
        var labels = ["Planta Baja", "2 Recámaras", "3 Recámaras"];

        // Usar la etiqueta personalizada correspondiente al índice
        var label = labels[index];

        return '<span class="' + className + '">' + label + "</span>";
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
  });

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a")
let isActive = false;

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isActive) {
        menu.classList.add("flex", "justify-center")
        menu.classList.remove("hidden");
        isActive = true;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }

})
menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})




// gallery
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}