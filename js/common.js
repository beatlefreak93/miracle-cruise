$('.btn-lang').click(function() {
    $('.lang-list').toggleClass('active');
})

$('.btn-menu').click(function() {
    $('.header-wrap').toggleClass('active');
    $('.hd-gnb').toggleClass('active');
})

$('.hd-gnb a').click(function() {
    $('.header-wrap').removeClass('active');
    $('.hd-gnb').removeClass('active');
});
