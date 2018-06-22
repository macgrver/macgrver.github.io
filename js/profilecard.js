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
        $('.landing > img, .landing > p').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated bounceOut');
            });
        $('.wrapper').toggleClass('hidden');
        $('.wrapper_deck').toggleClass('hidden');
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

        hasClicked = true;
    }
});

/*$('.nav-button.develop').on('click', function () {
    if (!$('.wrapper').hasClass("hidden")) {
        $('.wrapper').toggleClass('hidden')
    } else if (!$('.wrapper_deck').hasClass("hidden")) {
        $('.wrapper_deck').toggleClass('hidden')
    } else if ($('.devwrapper').hasClass("hidden")) {
        $('.devwrapper').toggleClass('hidden')
    }
});*/

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
