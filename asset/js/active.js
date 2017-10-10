var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    loop: false
});

setTimeout(function () {
    $('h2').addClass('opacity');
}, 7000);
new WOW().init();


$('a.about').click(function() {
    $('#contact').css('display','none');                  
    $('#recent-project').css('display', 'none');                  
    $('#about').css('display', 'block'); 
    $('row.no-gutters').removeClass('absolute');
    location.reload();
});
$('a.contact').click(function() {
    $('#about').css('display','none');                  
    $('#recent-project').css('display', 'none');                  
    $('#contact').css('display', 'block');
    $('row.no-gutters').removeClass('absolute');
});
$('a.recent-work').click(function() {
    $('#about').css('display','none');                  
    $('#contact').css('display', 'none');                  
    $('#recent-project').css('display', 'block');
    $('row.no-gutters').addClass('absolute');
});


$(window).resize(function(){
    if ($(window).width() <= 565){  
        $('*').css('height','auto');
    }   
});