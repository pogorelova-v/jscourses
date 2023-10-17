$(document).ready(function () {
  
    let swiper = new Swiper("[data-similar-posts-swiper] .swiper", {

        loop: true, 
        slidesPerView: 1,
        spaceBetween: 16,
  
        pagination: {
          el: '[data-similar-posts-swiper] .swiper-pagination', 
        }, 

        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          }, 
        },
    }); 

  });