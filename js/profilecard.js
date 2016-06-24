var randomColor = Math.floor(Math.random() * 16777215).toString(16);

var quote_array = ["I loves gifs... way too much."


    
    , "Time is an illusion. Lunchtime doubly so."


    
    , "On the internet nobody knows you're a dog."


    
    , "Graphic designer with a taste for ambitious web experiences."


    
    , "Is this too many gifs? Hmmm, I'm not sure if there's enough to be honest."


    
    , "Sometimes science is a lot more art, than science. A lot of people don't get that."];
var hasClicked = false;
var devhasClicked = false;
var illhasClicked = false;
var designhasClicked = false;

$(".profile_card").css({
    backgroundColor: '#' + randomColor
});

$(".title > h1, .title > h2").css({
    color: '#' + randomColor
});

$('.social, .profile_image > .close').on('click', function () {
    if (hasClicked === false) {
        $(".profile_card").css({

            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)

        });
        var rando_quote = quote_array[Math.round(Math.random() * quote_array.length)];
        $('.sub_text > p').text(rando_quote);
        $('.deck').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
            , function () {
                $(this).removeClass('animated bounceIn');
            });
        $('.center').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
            , function () {
                $(this).removeClass('animated bounceIn');
            });
        $('.wrapper').toggleClass('hidden');
        $('.wrapper_deck').toggleClass('hidden');
        $('.landing > img, .landing > p').toggleClass('hidden');
        hasClicked = true;
    } else if (hasClicked === true) {
        $('.deck').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
            , function () {
                $(this).removeClass('animated bounceOut');
                $('.wrapper').toggleClass('hidden');
                $('.wrapper_deck').toggleClass('hidden');
                $('.landing > img, .landing > p').toggleClass('hidden');
            });

        hasClicked = false;
    }
});


$('.social').hover(
    function () {
        $('.social > .fa, .social > .fa-user').css({
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)
        });
    }
    , function () {
        $('.social > .fa, .social > .fa-user').css({
            color: '#fff'
        });
    }
);