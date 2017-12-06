// __navicons
$(document).ready(function() {
  $('.header__navicons').click(function(event) {
    $('.header__navicons').addClass('header__navicons--animate')
  });
});
// service __box
$(document).ready(function() {
  $('button.service__container-btn--b').click(function(event) {
      $('.service__container-inner--size').css('display', 'block');
  });
  $('button.service__container-inner-btn--b').click(function(event) {
    $('.service__container-inner--size').css('display', 'none');
  });
});
$(document).ready(function() {
  $('button.service__container-btn--b1').click(function(event) {
      $('.service__container-inner--size1').css('display', 'block');
  });
  $('button.service__container-inner-btn--b1').click(function(event) {
    $('.service__container-inner--size1').css('display', 'none');
  });
});
$(document).ready(function() {
  $('button.service__container-btn--b2').click(function(event) {
      $('.service__container-inner--size2').css('display', 'block');
  });
  $('button.service__container-inner-btn--b2').click(function(event) {
    $('.service__container-inner--size2').css('display', 'none');
  });
});
$(document).ready(function() {
  $('button.service__container-btn--b3').click(function(event) {
      $('.service__container-inner--size3').css('display', 'block');
  });
  $('button.service__container-inner-btn--b3').click(function(event) {
    $('.service__container-inner--size3').css('display', 'none');
  });
});
$(document).ready(function() {
  $('button.service__container-btn--b4').click(function(event) {
      $('.service__container-inner--size4').css('display', 'block');
  });
  $('button.service__container-inner-btn--b4').click(function(event) {
    $('.service__container-inner--size4').css('display', 'none');
  });
});
$(document).ready(function() {
  $('button.service__container-btn--b5').click(function(event) {
      $('.service__container-inner--size5').css('display', 'block');
  });
  $('button.service__container-inner-btn--b5').click(function(event) {
    $('.service__container-inner--size5').css('display', 'none');
  });
});

// Menu
$(document).ready(function() {
  $('.header__navicons').click(function(event) {
    $('.header__nav').toggleClass('hidden');
  });
});
// Плавный скрол вниз
jQuery(document).ready(function($) {
 $('a.header__link').click(function(event) {
   var elementClick = $(this).attr('href');
   var dest = $(elementClick).offset().top;
   $('html,body').animate({scrollTop: dest}, 1100);
 });
});

// Accordion
$('#example1, #example3').accordion();
$('#example2').accordion({
  canToggle: true
});
$('#example4').accordion({
  canToggle: true,
  canOpenMultiple: true
});
$(".loading").removeClass("loading");


// Ajax Send Form
$(document).ready(function() {
  $("#main-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
// $('#myModal').modal('show');    Вызывает модальное окно
alert('Good');
$('#main-form').trigger("reset");
});
    return false;
  });
})

/* Responsive-Tabs doc/GitHub    ->  http://dbmast.ru/samyj-lyogkij-plagin-jquery-dlya-sozdaniya-vkladok-tabov
website how us it             ->  http://dbmast.ru/files/dm-tabs/dmtabs.html
*/

//

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup
website how us it                 ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in  ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('.test-popup-link').magnificPopup({
  type: 'image'
});
//

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
  $('.about__slider, .feed__slider').slick({
    dots: true,
    infinite: true,
    arrow: false,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
//

/* Scroll Page Back  doc/GitHub      ->  https://github.com/oasan/toTop
website how us it                 ->  https://www.jqueryscript.net/demo/Scroll-Page-To-Top-jQuery-toTop/
*/
$(document).ready(function(){
  $('.totop').tottTop({
scrollTop: 1000, // The height of the document which will show a button
duration: 1000, // scroll animation duration
scrtollTopBtnDuration: 400 // button show animation duration
});
});
//

/* Countdown Timer   doc/GitHub      ->  https://github.com/kbwood/countdown
website how us it                 ->  http://keith-wood.name/countdown.html
*/
$(function () {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#defaultCountdown').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());
});
//

/* Tippy js        doc/GitHub      ->  https://atomiks.github.io/tippyjs/
website how us it              ->   https://popper.js.org/
*/
//

/* Маска для телефона  doc/GitHub      ->  http://digitalbush.com/projects/masked-input-plugin/
website how us it                      ->  https://github.com/digitalBush/jquery.maskedinput
Edit in jquery.js
*/
jQuery(function($){
 $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
 $("#phone").mask("(999) 999-9999");
 $("#tin").mask("99-9999999");
 $("#ssn").mask("999-99-9999");
});
//

/* select2  doc/GitHub     ->  https://select2.org/
website how us it          ->  https://github.com/select2/select2
Edit in jquery.js
*/
//

/* AdaptiveMenu  doc/GitHub     ->  https://www.jqueryscript.net/menu/Left-to-right-Push-Menu-With-jQuery-CSS3.html
website how us it               ->  -
*/
$(document).ready(function() {
  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#nav_list');
  $nav_list.click(function() {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');
  });
});
//
/*DropDown -> https://codepen.io/mrblackdevil/pen/eeyRpE
*/
var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
    );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});
//
/*Video Background   Jquery --> https://www.jqueryscript.net/other/Awesome-Video-Background-Plugin-with-HTML5-Youtube-API-YTPlayer.html*/


//
/*Fotorama   http://fotorama.io/
  GitHub     https://github.com/artpolikarpov/fotorama/issues/532
  */

  /*Плагины которые могут быть полезны*/
/* jQuery Dependent Dropdowns Demo    doc/GitHub      ->  https://github.com/shorifali/static-dependent-dropdowns-jquery
website how us it                                     ->  https://shorifali.github.io/static-dependent-dropdowns-jquery/app
Данный плагин вносит зависимость от выбора первого пункта далее открывает другой
*/

/* VideoBackground    doc/GitHub      ->  https://github.com/pupunzi/jquery.mb.YTPlayer
website how us it                     ->  https://pupunzi.com/mb.components/mb.YTPlayer/demo/demo.html
*/


/* Parallax        doc/GitHub      ->  https://github.com/wagerfield/parallax
website how us it                  ->  http://matthew.wagerfield.com/parallax/
*/

/* SVG PopUP http://tsumbaluk.in.ua/jquery-svg-popup
*/

/* css parallax background images       https://www.cssscript.com/pure-css-parallax-background-images/
   Tiny Parallax Background Plugin      https://github.com/JB1905/parlx
                                        https://www.jqueryscript.net/demo/Parallax-Background-jQuery-parlx/
                                        */
