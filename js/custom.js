var image_landing = ['../images/landing/landing1.gif', 
                    '../images/landing/landing2.gif', 
                    '../images/landing/landing3.gif', 
                    '../images/landing/landing4.gif', 
                    '../images/landing/landing5.gif', 
                    '../images/landing/landing6.gif', 
                    '../images/landing/landing7.gif', 
                    '../images/landing/landing8.gif', 
                    '../images/landing/landing9.gif', 
                    '../images/landing/landing10.gif', 
                    '../images/landing/landing11.gif', 
                    '../images/landing/landing12.gif', 
                    '../images/landing/landing13.gif', 
                    '../images/landing/landing14.gif', 
                    '../images/landing/landing15.gif', 
                    '../images/landing/landing16.gif', 
                    '../images/landing/landing17.gif', 
                    '../images/landing/landing18.gif', 
                    '../images/landing/landing19.gif', 
                    '../images/landing/landing20.gif', ];

var image_nav = ['../images/nav/nav1.gif', 
                '../images/nav/nav2.gif', 
                '../images/nav/nav3.gif', 
                '../images/nav/nav4.gif', 
                '../images/nav/nav5.gif', 
                '../images/nav/nav6.gif', 
                '../images/nav/nav7.gif', 
                '../images/nav/nav8.gif', ];

$('.landing').css({'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'});
$('.menu-nav').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});
$('.footie').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});
$('.profile_image_background').css({'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'});

$(".develop").click(function() {
    $('html, body').animate({
        scrollTop: $(".dev").offset().top},
        'slow');
});

$(".illustrate").click(function() {
    $('html, body').animate({
        scrollTop: $(".ill").offset().top},
        'slow');
});

$(".make").click(function() {
    $('html, body').animate({
        scrollTop: $(".design").offset().top},
        'slow');
});

$(".logo").click(function() {
    $('html, body').animate({
        scrollTop: $("html, body").offset().top},
        'slow');
});

/* Needs Jquery 2.1.3 */
;( function( $ ){
  $.preloaded = function(){
    var imgs = Object.prototype.toString.call( arguments[ 0 ]) === '[object Array]'
      ? arguments[ 0 ] : arguments;

    var tmp = [];
    var i   = imgs.length;

    // reverse loop run faster
    for( ; i-- ; ) tmp.push( $( '<img />' ).attr( 'src', imgs[ i ]));
  };
})( jQuery );