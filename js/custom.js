var image_landing = ['../images/landing/landing1.gif'
                    , '../images/landing/landing2.gif'
                    , '../images/landing/landing3.gif'
                    , '../images/landing/landing4.gif'
                    , '../images/landing/landing5.gif'
                    , '../images/landing/landing6.gif'
                    , '../images/landing/landing7.gif'
                    , '../images/landing/landing8.gif'
                    , '../images/landing/landing9.gif'
                    , '../images/landing/landing10.gif'
                    , '../images/landing/landing11.gif'
                    , '../images/landing/landing12.gif'
                    , '../images/landing/landing13.gif'
                    , '../images/landing/landing14.gif'
                    , '../images/landing/landing15.gif'
                    , '../images/landing/landing16.gif'
                    , '../images/landing/landing17.gif'
                    , '../images/landing/landing18.gif'
                    , '../images/landing/landing19.gif'
                    , '../images/landing/landing20.gif'
                    , '../images/landing/landing21.gif'
                    , '../images/landing/landing22.gif'
                    , '../images/landing/landing23.gif'];
var image_nav = ['../images/nav/nav1.gif'
                , '../images/nav/nav2.gif'
                , '../images/nav/nav3.gif'
                , '../images/nav/nav4.gif'
                , '../images/nav/nav5.gif'
                , '../images/nav/nav6.gif'
                , '../images/nav/nav7.gif'
                , '../images/nav/nav8.gif'
                , '../images/nav/nav9.gif'];
var image_profile = ['../images/profile_image/profile_image1.gif'
                    , '../images/profile_image/profile_image2.gif'
                    , '../images/profile_image/profile_image3.gif'
                    , '../images/profile_image/profile_image4.gif'
                    , '../images/profile_image/profile_image5.gif'
                    , '../images/profile_image/profile_image6.gif'
                    , '../images/profile_image/profile_image7.gif'
                    , '../images/profile_image/profile_image8.gif'
                     , '../images/profile_image/profile_image9.gif'
                     , '../images/profile_image/profile_image10.gif'
                     , '../images/profile_image/profile_image11.gif'
                     , '../images/profile_image/profile_image12.gif'
                     , '../images/profile_image/profile_image13.gif'
                    ];
/* I claim no ownership to the gifs above. Their use is for demonstration only. Please support the original artists. */
/* Most gifs come from http://kidmograph.tumblr.com/ please check out the rest of his amazing work. */
/* The D.Va gif is from an art competition I found on reddit, please check out Pixel-ninja’s work on deviant for more awesome stuff (http://pixel-ninja.deviantart.com/) */
/* Also check out http://www.heart-machine.com/ for the source of all the Hyper Light Drifter Art. */
$('.landing, .wrapper_deck').css({
    'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'
});
$('.menu-nav').css({
    'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'
});
$('.footie').css({
    'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'
});
$(".develop").click(function () {
    $('html, body').animate({
        scrollTop: $(".dev").offset().top
    }, 'slow');
});
$(".illustrate").click(function () {
    $('html, body').animate({
        scrollTop: $(".ill").offset().top
    }, 'slow');
});
$(".make").click(function () {
    $('html, body').animate({
        scrollTop: $(".design").offset().top
    }, 'slow');
});
$(".logo").click(function () {
    $('html, body').animate({
        scrollTop: $("html, body").offset().top
    }, 'slow');
});
/*!
 * SimpleKonami
 * Copyright: WTFPL
 * Version: 1
 * Requires: jQuery v1.3.2 or later
 */
//Set up our array of needed keys, and variables.
neededkeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], started = false, count = 0;
$(document).keydown(function (e) {
    key = e.keyCode;
    //Set start to true only if having pressed the first key in the konami sequence.
    if (!started) {
        if (key == 38) {
            started = true;
        }
    }
    //If we've started, pay attention to key presses, looking for right sequence.
    if (started) {
        if (neededkeys[count] == key) {
            //We're good so far.
            count++;
        } else {
            //Oops, not the right sequence, lets restart from the top.
            reset();
        }
        if (count == 10) {
            //We made it! Put code here to do what you want when successfully execute konami sequence
            $('.landing, .wrapper_deck').css({
                'background-image': 'url(' + image_landing[Math.floor(Math.random() * image_landing.length)] + ')'
            });
            $('.menu-nav').css({
                'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'
            });
            $('.footie').css({
                'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'
            });
            $('.profile_image_background').css({
                'background-image': 'url(' + image_nav[Math.floor(Math.random() * image_nav.length)] + ')'
            });
            $('.center > p').text('Konami Code Unlocked!');
            //Reset the conditions so that someone can do it all again.
            reset();
        }
    } else {
        //Oops.
        reset();
    }
});
//Function used to reset us back to starting point.
function reset() {
    started = false;
    count = 0;
    return;
}
