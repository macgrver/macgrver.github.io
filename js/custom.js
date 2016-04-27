var image_landing = ['https://i.imgur.com/rgOdA9h.gif',
'https://i.imgur.com/j0I5OPF.gif',
'https://i.imgur.com/KLWHjGu.gif',
'https://i.imgur.com/MnVsBuU.gif',
'https://i.imgur.com/fJ1fizf.gif',
'https://i.imgur.com/NBMX5ks.gif',
'https://i.imgur.com/24S2Cqk.gif',
'https://i.imgur.com/gw4GCl5.gif',
'https://i.imgur.com/z6BK4VZ.gif',
'https://i.imgur.com/Fj4gkoB.gif',
'https://i.imgur.com/R7FUJoe.gif',
'https://i.imgur.com/UFSnzIT.gif',
'https://i.imgur.com/TtJroYn.gif',
'https://i.imgur.com/UvcB3pP.gif',
'https://i.imgur.com/zD7eUzu.gif',
'https://i.imgur.com/pTNAZ5H.gif',
'https://i.imgur.com/IbQ10ZE.gif',
'https://i.imgur.com/VDL9CFf.gif', 
'https://i.imgur.com/CNtxLI3.gif',
'https://i.imgur.com/Y8x5SBQ.gif',
'https://i.imgur.com/5HusAhK.gif',
'https://i.imgur.com/Onbamqp.gif'];

var image_nav = ['https://i.imgur.com/tzJnQU0.gif',
'https://i.imgur.com/k8Xzzce.gif',
'https://49.media.tumblr.com/9472b61fe6660c4fc4dc6d60a62c119d/tumblr_o2pdxjwyQ81u5vp7wo1_1280.gif',
'https://i.imgur.com/LuMeZFt.gif',
'https://i.imgur.com/BWGk59m.gif',
'https://i.imgur.com/qoYeWy3.gif',
'https://i.imgur.com/bHVKm4w.jpg',
'https://i.imgur.com/sBpiXg8.gif',
'https://i.imgur.com/pTNAZ5H.gif',
'https://i.imgur.com/IbQ10ZE.gif',
'https://i.imgur.com/VDL9CFf.gif',
'https://i.imgur.com/5HusAhK.gif'];

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
