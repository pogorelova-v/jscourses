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