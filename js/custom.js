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
                    '../images/landing/landing19.gif'];

var image_nav = ['../images/nav/nav1.gif', 
                '../images/nav/nav2.gif', 
                '../images/nav/nav3.gif', 
                '../images/nav/nav4.gif', 
                '../images/nav/nav5.gif', 
                '../images/nav/nav6.gif', 
                '../images/nav/nav7.gif', 
                '../images/nav/nav8.gif', ];

var image_profile = ['../images/profile_image/profile_image1.gif',
                    '../images/profile_image/profile_image2.gif',
                    '../images/profile_image/profile_image3.gif',
                    '../images/profile_image/profile_image4.gif',
                    '../images/profile_image/profile_image5.gif',
                    '../images/profile_image/profile_image6.gif',
                    '../images/profile_image/profile_image7.gif',
                    '../images/profile_image/profile_image8.gif',
                    '../images/profile_image/profile_image9.gif'
                    ];

$('.landing, .wrapper_deck').css({'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'});
$('.menu-nav').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});
$('.footie').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});
$('.profile_image_background').css({'background-image': 'url(' + image_profile[Math.floor(Math.random() * image_profile.length)] + ')'});

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
