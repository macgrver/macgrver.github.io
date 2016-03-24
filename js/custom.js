var image_landing = ['https://i.imgur.com/rgOdA9h.gif',
'https://i.imgur.com/j0I5OPF.gif',
'https://i.imgur.com/MnVsBuU.gif',
'https://i.imgur.com/fJ1fizf.gif',
'https://i.imgur.com/NBMX5ks.gif',
'https://i.imgur.com/24S2Cqk.gif',
'https://i.imgur.com/gw4GCl5.gif',
'https://i.imgur.com/z6BK4VZ.gif',
'https://i.imgur.com/Fj4gkoB.gif'];

var image_nav = ['https://i.imgur.com/tzJnQU0.gif',
'https://i.imgur.com/k8Xzzce.gif',
'https://49.media.tumblr.com/9472b61fe6660c4fc4dc6d60a62c119d/tumblr_o2pdxjwyQ81u5vp7wo1_1280.gif',
'https://i.imgur.com/LuMeZFt.gif',
'https://i.imgur.com/BWGk59m.gif',
'https://i.imgur.com/qoYeWy3.gif',
'https://i.imgur.com/bHVKm4w.jpg'];

$('.landing').css({'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'});
$('.menu-nav').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});
$('.footie').css({'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'});

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
