$(document).ready(function () {
      
    // Открыть модалку по кнопке + отдельно для "цены по филиалам"
    $(document).on('click', '[data-btn-modal]', function(){  
        $(`[data-modal=${$(this).attr('data-btn-modal')}]`).fadeIn(300);
        $('body').addClass('not-scroll');

        $('[data-header-submenu]').slideUp();
        $('[data-header-btn-submenu]').removeClass('open');
        $('[data-header-menu]').removeClass('open');
        $('[data-btn-nav]').removeClass('open');
    });
    
    // Закрыть модалку по кнопке
    $(document).on('click', '[data-modal-close]', function(){
        $(this).parents('[data-modal]').fadeOut(300);
        $('body').removeClass('not-scroll');
    });

    // Закрыть модалку по клику вне неё
    $(document).on('click', '[data-modal-overlay]', function(e){ 
        if ($(e.target).closest('[data-modal-wrap]').length == 0) {
            $(this).parents('[data-modal]').fadeOut(300);
            $('body').removeClass('not-scroll');
        }
    });

});