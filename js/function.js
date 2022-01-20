$(function () {
    var inwrap = $('.inner-slider');

    $('.prev').on('click', 
    function (){
        inwrap.animate({left: '0%'},
        300, function (){
            
inwrap.css('left' ,  '-100%');
$('.slide').first().before($( 
    '.slide').last());

        });
    });
})