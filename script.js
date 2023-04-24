// const foodSlider = new Swiper('#food-slider', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-right',
//         prevEl: '.swiper-left',
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     }
// });

// const swiperLeftBtn = document.querySelector('.swiper-left');
// const swiperRightBtn = document.querySelector('.swiper-right');

// swiperLeftBtn.addEventListener('click', () => {
//     foodSlider.slidePrev();
// });

// swiperRightBtn.addEventListener('click', () => {
//     foodSlider.slideNext();
// });


const ToggleBtn = document.getElementById("Toggle");
const MobileNav = document.getElementById("Mobile_Ul");

console.log(ToggleBtn)
ToggleBtn.addEventListener("click", ()=>{
    MobileNav.classList.toggle("add");
    ToggleBtn.classList.toggle("change-color")
})