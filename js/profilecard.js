var randomColor = Math.floor(Math.random() * 16777215).toString(16);

var quote_array = ["I loves gifs... way too much.", 
                   "Let's design a world with better internet.", 
                  "Time is an illusion. Lunchtime doubly so.",
                  "On the internet nobody knows you're a dog."];
var hasClicked = false;

$(".profile_card").css({
  backgroundColor: '#' + randomColor
});

$(".title > h1, .title > h2").css({
  color: '#' + randomColor
});

$('.social > .fa, .social > .fa-user, .profile_image > .close').on('click', function () {    
    if(hasClicked === false){
    $(".profile_card").css({

        backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)

    });
    var rando_quote = quote_array[Math.round(Math.random() * quote_array.length-1)];
    $('.sub_text > p').text(rando_quote);
    $('.deck').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated bounceIn');
        });
    $('.wrapper').toggleClass('hidden');
    $('.wrapper_deck').toggleClass('hidden');
    $('.landing > img, .landing > p').toggleClass('hidden');
    hasClicked = true;
}
    else if(hasClicked === true){
        $('.deck').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated bounceOut');
            $('.wrapper').toggleClass('hidden');
            $('.wrapper_deck').toggleClass('hidden');
            $('.landing > img, .landing > p').toggleClass('hidden');
        });
    
        hasClicked = false;
    }
});

$('.social > .fa, .social > .fa-user').hover(
  function() {
    $(this).css({
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });
  },
  function() {
    $(this).css({
      color: '#fff'
    });
  }
);