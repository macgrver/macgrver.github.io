var randomColor = Math.floor(Math.random() * 16777215).toString(16);

$(".profile_card").css({
  backgroundColor: '#' + randomColor
});

$(".title > h1, .title > h2").css({
  color: '#' + randomColor
});

$('.social > .fa, .social > .fa-user').on('click', function() {
    $(".profile_card").css({

        backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)

      });
  $('.deck').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
      $(this).removeClass('animated bounceIn');
    });
    $('.deck').toggleClass('hidden');
    $('.landing > img, .landing > p').toggleClass('hidden');
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
    })
  }
);