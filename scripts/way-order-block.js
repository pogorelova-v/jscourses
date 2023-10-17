$(document).ready(function () {
    
    if ($(window).width() >= 768 && $('[data-way-block] .way_picture').length) { 
        $('[data-way-block] .way_picture').after( $('[data-way-block] .way_footnote') )
        $('[data-way-block] .way_footnote').wrap('<div class="container"></div>');
    }

});