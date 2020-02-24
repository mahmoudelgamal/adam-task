// button collaose
$('.navigation a, .collapse-btn').click(function () {
  $('.navigation__nav').toggleClass('open');
  $('.icon').toggleClass('close_')
});

//start text area counter
(function countDown() {
  let ourMassege = $('.massege'),
      maxText = $('textarea').attr('maxlength');
  $('textarea').keyup(function(){
    let texetLength = $('textarea').val().length;
    let remChars = maxText - texetLength;
    ourMassege.html('<span>' + remChars +' characters remaining </span>');
    $('.massege span').css({
      color:'red',
      fontWeight: 'bold'
    })
  })
})();

// dynamic tabs
$('.feature__tabs .tab__item').on('click', (function () {
  $(this).addClass('active-tab').siblings().removeClass('active-tab');
  $('.feature__tabs-content > div').hide();
  $($(this).data('content')).fadeIn()
}));

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});