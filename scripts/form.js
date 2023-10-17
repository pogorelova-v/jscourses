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