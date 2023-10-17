$(document).ready(function () {
    
     //Смещение лейбла вверх и обратно
    $(document).on('focus', '[data-form-input]', function(){ 
        $('label[for='+  this.id  +']').addClass('focus')
    });

    $(document).on('blur', '[data-form-input]', function(){
        if(!this.value){
            $('label[for='+  this.id  +']').removeClass('focus');
        } 
    });

    
     //Убрать подсказку для текстареа при её прокрутке
     $("[data-form-textarea]" ).on("scroll", function(){
        if ($(this).scrollTop() > 20) {
            $('label[for='+  this.id  +']').css('opacity', '0')
        } else {
            $('label[for='+  this.id  +']').css('opacity', '1')
        }
    });
  

    //открыть селект
    $(document).on('click', '[data-form-select-title]', function(){
        $(this).toggleClass('open');
        $(this).siblings('[data-form-select-options]').stop().slideToggle();
    });

    //Выбор опции
    $(document).on('click', '[data-form-select-options] input', function(){
        let newText =  $(this).siblings('span').text();
        $(this).parents('[data-form-select]').find('[data-form-select-title]').addClass('value');
        $(this).parents('[data-form-select]').find('[data-form-select-title] span').text(newText);
        
    });

     // Закрыть селек по клику вне его кнопки
     $(document).on('click', function (e){  
        if ( !$('[data-form-select-title]').is(e.target) && !$('[data-form-select-title]').is(e.target)) {  
            $('[data-form-select-title]').removeClass('open');
            $('[data-form-select-options]').stop().slideUp(); 
		}
    }) 


});
$(document).ready(function () {
    
    // Открыть закрыть мобильное меню
    $(document).on('click', '[data-btn-nav]', function (){ 
        $(this).toggleClass('open');
        $('[data-header-menu]').toggleClass('open');
        $('body').toggleClass('not-scroll'); 

        if ($(this).hasClass('open')) {
            $('[data-header-btn-submenu]').removeClass('open');
            $('[data-header-submenu]').slideUp();
        }
    })

    // Открыть закрыть мобильное подменю 
    $(document).on('click', '[data-header-btn-submenu]', function (){  
        $('[data-header-submenu]').slideUp();
           $(this).toggleClass('open');   
           if ($(this).hasClass('open')) { 
               $('[data-header-btn-submenu]').not(this).removeClass('open')
               $(this).siblings('[data-header-submenu]').slideDown();
           } 
    }) 

    // Закрыть мобильное подменю по клику вне его и кнопки
    $(document).on('click', function (e){  
        if ( !$('[data-header-submenu]').is(e.target) && !$('[data-header-btn-submenu]').is(e.target) 
                && $('[data-header-submenu]').has(e.target).length === 0 && $('[data-header-btn-submenu]').has(e.target).length === 0 ) {  
                $('[data-header-submenu]').slideUp();
                $('[data-header-btn-submenu]').removeClass('open');
		}
    }) 



});
$(document).ready(function () {
     
    //Смена цвета звёзд по ховер
    $(document).on('mouseenter', '[data-rating-stars] svg', function(){ 
        for (let i = 0; i <= $(this).index(); i++) { 
            $(this).parents('[data-rating-stars]').find('svg').eq(i).css('color', '#FFB400'); 
        }  
    });
     
    //Смена цвета звёзд без ховер
    $(document).on('mouseleave', '[data-rating-stars] svg', function(){   
        let maxStars = $(this).parents('[data-rating-stars]').find('svg').length;  
        for (let i = 0; i < maxStars - $(this).index(); i++) { 
            $(this).parents('[data-rating-stars]').find('svg').eq(maxStars - 1 - i).css('color', '#D7D7E2');  
        }  
    });
     
    //Смена цвета звёзд по клику и подсчёт
    $(document).on('click', '[data-rating-stars] svg', function(){    
        $(this).parents('[data-rating-stars]').find('svg').removeClass('active');
        $(this).parents('[data-rating-stars]').find('svg').css('color','');
        for (let i = 0; i <= $(this).index(); i++) { 
            $(this).parents('[data-rating-stars]').find('svg').eq(i).addClass('active'); 
        }  
        $(this).parents('[data-rating]').find('[data-rating-num]').text($(this).index() + 1); 
    });

    //Возвращение к цвету по классу
    $(document).on('mouseleave', '[data-rating-stars]', function(){    
        $(this).find('svg').each( function () { 
            $(this).css('color','')
        });
    });
});
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
$(document).ready(function () {
    
    if ($(window).width() >= 768 && $('[data-way-block] .way_picture').length) { 
        $('[data-way-block] .way_picture').after( $('[data-way-block] .way_footnote') )
        $('[data-way-block] .way_footnote').wrap('<div class="container"></div>');
    }

});