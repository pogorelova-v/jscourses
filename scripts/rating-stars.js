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