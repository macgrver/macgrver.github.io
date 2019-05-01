/*jslint browser: true*/
/*global $*/
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
                     , '../images/profile_image/profile_image14.gif'
                    ];
var test_video = ['../images/test/test1.mp4'
                     , '../images/test/test2.mp4'
                     , '../images/test/test3.mp4'
                     , '../images/test/test4.mp4'
                     , '../images/test/test5.mp4'
                     , '../images/test/test6.mp4'
];
/* The videos above are by /u/_NoMansDream. Please check out his amazing work on reddit */
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

var quote_array = ["I loves gifs... way too much.",
                  "Time is an illusion. Lunchtime doubly so.",
                  "On the internet nobody knows you're a dog.",
                  "Graphic designer with a taste for ambitious web experiences.",
                  "Is this too many gifs? Hmmm, I'm not sure if there's enough to be honest.",
                  "Sometimes science is a lot more art, than science. A lot of people don't get that.",
                  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."];
var hasClicked = true;

$(".profile_card").css({
    backgroundColor: '#' + randomColor
});

$(".title > h1, .title > h2").css({
    color: '#' + randomColor
});

$('.social, .deck > .close').on('click', function () {
    if (hasClicked === true) {
        $('.center').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceOut');
                $('.wrapper').toggleClass('hidden');
                $('.wrapper_deck').toggleClass('hidden');
            });
        $(".profile_card").css({
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
        });
        var rando_quote = quote_array[Math.round(Math.random() * quote_array.length)];
        $('.sub_text > p').text(rando_quote);
        $('.profile_image_background').css({
            'background-image': 'url(' + image_profile[Math.floor(Math.random() * image_profile.length)] + ')'
        });
        $('.deck').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceIn');
            });
        $('.center').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceIn');
            });
        $('.profile_image').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceIn');
            });
        hasClicked = false;
    } else if (hasClicked === false) {
        $('.deck').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceOut');
                $('.wrapper').toggleClass('hidden');
                $('.wrapper_deck').toggleClass('hidden');
                $('.landing > img, .landing > p').toggleClass('hidden');
            });
        $('.profile_image').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceOut');
                $('.wrapper').toggleClass('hidden');
                $('.wrapper_deck').toggleClass('hidden');
                $('.landing > img, .landing > p').toggleClass('hidden');
            });
        $('.center').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceIn');
            });
        hasClicked = true;
    }
});
$('.social').hover(
    function () {
        $('.social > .fa, .social > .fa-user').css({
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)
        });
    },
    function () {
        $('.social > .fa, .social > .fa-user').css({
            color: '#fff'
        });
    }
);
