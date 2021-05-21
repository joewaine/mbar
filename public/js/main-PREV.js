
var refHeight = function(){



    if($(window).width() > 2399){
    var corwith = $(window).width()/8;
    $('section.slideshow').css('height', corwith - 10 + 'px');
    $('#instafeed').css('height', corwith - 10 + 'px');
    }else if($(window).width() > 1999){
    var corwith = $(window).width()/7;
    $('section.slideshow').css('height', corwith - 10 + 'px');
    $('#instafeed').css('height', corwith - 10 + 'px');
    }else if($(window).width() > 1599){
    var corwith = $(window).width()/6;
    $('section.slideshow').css('height', corwith - 10 + 'px');
    $('#instafeed').css('height', corwith - 10 + 'px');
    }else if($(window).width() > 999){
    var corwith = $(window).width()/5;
    $('section.slideshow').css('height', corwith - 10 + 'px');
    $('#instafeed').css('height', corwith - 10 + 'px');
    }else if($(window).width() > 659){
    var corwith = $(window).width()/3;
    $('section.slideshow').css('height', corwith - 10 + 'px');
    $('#instafeed').css('height', corwith - 10 + 'px');
    }else{
    var corwith = $(window).width();
    // $('section.slideshow').css('height', corwith - 10 + 'px');
    $('section.slideshow').css('height', 'auto');
    $('#instafeed').css('height', 'auto');
    }
}

$(document).ready(function(){
    refHeight();
});

$(window).resize(function () {
    refHeight();
});



// instafeed

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4012759170',
        accessToken: '4012759170.1677ed0.8c1873c7a2ab4300a45e13d6b26b2cde',
        limit: 64,
        resolution: 'standard_resolution',
        autoWidth: false,
        orientation: 'square',
        template: '<div class="owl-item" data-orientation="{{orientation}}" style="height:336px;"><div class="item" style="background-position: center;background-image:url(https:{{image}});"><img src="{{image}}" style="" /></div></div>',
        // template: if(orientation == 'square'){
        //     '<div class="owl-item" data-orientation="{{orientation}}" style="height:336px;"><div class="item" style="background-image:url(https:{{image}});"><img src="{{image}}" style="opacity: 0;" /></div></div>';
        // }else{},
        after: function() {

           $('#instafeed').owlCarousel({
                touchDrag  : false,
                mouseDrag  : false,
                center: true,
                loop:true,
                margin:0,
                nav:true,
                dots: false,
                responsive:{
                    0:{
                    items:1
                },
                660:{
                    items:3
                },
                1000:{
                    items:5
                },
                1600:{
                    items: 6
                },
                2000:{
                    items: 7
                },
                2400:{
                    items: 8
                }

            }

        });
    }
    });
    // userFeed.run();



setTimeout(function(){
},1000);

$('#owl2').owlCarousel({
    touchDrag  : false,
    mouseDrag  : false,
    loop:true,
    margin:00,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$('#owl3').owlCarousel({
    touchDrag  : false,
    mouseDrag  : false,
    loop:true,
    margin:00,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// $('.slideshow-box-text').append($('#owl2 .item.active .about').text());
$('.slideshow-box-text').append($('#owl2 .active .about').html());
$('#owl2 .owl-next, #owl2 .owl-prev').click(function(){
$('.slideshow-box-text p').remove();
$('.slideshow-box-text').append($('#owl2 .active .about').html());
});



// menu switches
$('.menu-tabs li:eq(1)').addClass('active');
$('.menu-tabs li').click(function(){
$('.menu-tabs li').removeClass('active');
$(this).addClass('active');
$('.inside').hide();
var ind = $(this).index() - 1;
$('.inside:eq(' + ind + ')').show();
// alert($(this).index());

});


// menu switches
// members




var amountPerRow = parseInt($('.item-container').width() / $('.item-spacer').width());

var amountToHide = amountPerRow + 1;


if($('.our-family .item-single').length < amountToHide){
$('.our-family .expand-button').hide();
}
if($('.media .item-single').length < amountToHide){
$('.media .expand-button').hide();
}



    $('.our-family .item-single').hide();
    $('.media .item-single').hide();


for(i=0;i<amountPerRow;i++){
    $('.our-family .item-single:eq('+ i + ')').show();
    $('.media .item-single:eq('+ i + ')').show();
}



$(window).resize(function(){





var amountPerRowResize = parseInt($('.item-container').width() / $('.item-spacer').width());
var amountToHideResize = amountPerRowResize + 1;



if(amountPerRowResize == amountPerRow){
}else{
    $('.articles, .members').removeClass('rotated');
}


if($('.our-family .item-single').length < amountToHideResize){
$('.our-family .expand-button').hide();
}
if($('.media .item-single').length < amountToHideResize){
$('.media .expand-button').hide();
}


    $('.our-family .item-single').hide();
    $('.media .item-single').hide();



for(i=0;i<amountPerRowResize;i++){
    $('.our-family .item-single:eq('+ i + ')').show();
    $('.media .item-single:eq('+ i + ')').show();
}



// $('.articles, .members').removeClass('rotated');

});



$('#our-family .item-single:nth-child(n+6)').hide();



$('.members').click(function(){


var amountPerRowClick = parseInt($('.item-container').width() / $('.item-spacer').width());
var amountToHideClick = amountPerRowClick + 1;
    if($(this).hasClass('rotated')){
        $(this).removeClass('rotated');
        $('#our-family .item-spacer:nth-child(n+'+ amountToHideClick +') .item-single').slideUp();
        }else{

       $('#our-family .item-single').slideDown();
        $(this).addClass('rotated');

        }
});





$('.articles').click(function(){

    var amountPerRowClick = parseInt($('.item-container').width() / $('.item-spacer').width());
    var amountToHideClick = amountPerRowClick + 1;

    if($(this).hasClass('rotated')){

        $(this).removeClass('rotated');
        $('#media .item-spacer:nth-child(n+'+ amountToHideClick +') .item-single').slideUp();
        }else{
        $('#media .item-single').slideDown();
        $(this).addClass('rotated');
    }

});






$('#our-family .item-single').click(function(){
$('body').prepend('<div class="overlay"><div class="modal"><button class="close-modal">x</button><div class="family-member" style="background-image: url(' + $(this).data('image') + ')">hello</div><div class="item-description-modal"><h2>' + $(this).find('.item-name').text() + '</h2><p>' + $(this).find('.item-description').text() +'</p></div></div></div>');

});



$('#media .item-single').click(function(){
    window.open($(this).find('.press-link a').attr('href'));
});

$('.social-links img').click(function(){
    window.open($(this).parent().attr('href'));
});








$('body').on('click', '.close-modal', function () {

$('.overlay').remove();

});



// media
// menu


// menu
$(document).on('click', '#waypoints a', function(event){


  event.preventDefault();


// if($(window).scrollTop() < 138){

var amountOfScroll  = $( $.attr(this, 'href') ).offset().top - $('#waypoints').height() + 5;



// alert($( $.attr(this, 'href') ).offset().top);
// alert(amountOfScroll);
    $('html, body').animate({
        scrollTop: amountOfScroll
    }, 500);


// alert('f');

// }else{

// var amountOfScroll  = $( $.attr(this, 'href') ).offset().top - $('#waypoints').height() + 1;


// // alert($( $.attr(this, 'href') ).offset().top);
// // alert(amountOfScroll);
//     $('html, body').animate({
//         scrollTop: amountOfScroll
//     }, 500);

// // alert('n');

// }






});


$('.mobile-nav a').click(function(){
    $('.mobile-nav').toggle();
});





// map fixedwaypoint
$(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });
    });


$('.close-announcement').click(function(){

    $(this).parent().fadeOut();



});

var h = document.getElementById("waypoints");

var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '-10px';
    h.style.zIndex = '10000';
    stuck = true;

 var offSetHeight = $('#waypoints').height();

// alert('rr');


$('#container').css('margin-top', offSetHeight + 'px');

// document.getElementById("waypointschild").style.marginTop = offSetHeight;


  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;


$('#container').css('margin-top', 0);


  }
}





// form


    window.csrfTokenName = "{{ craft.config.get('csrfTokenName') }}";
    window.csrfTokenValue = "{{ craft.request.getCsrfToken }}";


$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // formData[window.csrfTokenName] = window.csrfTokenValue;

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $(formMessages).delay(1000).fadeOut('slow');

            // Set the message text.
            $(formMessages).text(response);
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });


          $('#subForm button').click();

    });


// send to campaign monitor



});


// form



$(document).ready(function(){

    if($(window).width() > 768){

var fixedAboutSlides = $(window).height() - $('.slideshow-box-text').height() - $('#waypoints').height();
$('#owl2 .owl-stage-outer, #owl2 .item').css('height', fixedAboutSlides + 'px' );


var rightArrowHeight = fixedAboutSlides / 2;

$('#owl2 .owl-next, #owl2 .owl-prev').css('top', rightArrowHeight + 'px');


}else{

var fixedAboutSlides = $(window).height() - $('.slideshow-box-text').height() - $('#waypoints').height();
$('#owl2 .owl-stage-outer, #owl2 .item').css('height', fixedAboutSlides + 100 + 'px' );


var rightArrowHeight = fixedAboutSlides / 2;

$('#owl2 .owl-next, #owl2 .owl-prev').css('top', rightArrowHeight + 'px');


}

});

$(window).resize(function(){

if($(window).width() > 768){

var fixedAboutSlides = $(window).height() - $('.slideshow-box-text').height() - $('#waypoints').height();
$('#owl2 .owl-stage-outer, #owl2 .item').css('height', fixedAboutSlides + 'px' );

var rightArrowHeight = fixedAboutSlides / 2;

$('#owl2 .owl-next, #owl2 .owl-prev').css('top', rightArrowHeight + 'px');

}else{

var fixedAboutSlides = $(window).height() - $('.slideshow-box-text').height() - $('#waypoints').height();
$('#owl2 .owl-stage-outer, #owl2 .item').css('height', fixedAboutSlides + 100 + 'px' );

var rightArrowHeight = fixedAboutSlides / 2;

$('#owl2 .owl-next, #owl2 .owl-prev').css('top', rightArrowHeight + 'px');

}

});





$('.menu-expand').click(function(){

$('.mobile-nav').slideToggle();


});




if($(window).width() > 768){

var annoHeight = null;
var contItemVal = null;
var fixedPadding = null;

annoHeight = $('.announcements').outerHeight();
contItemVal = 30;

// console.log(annoHeight);
// console.log($('.announcements').outerHeight());

if(annoHeight){
fixedPadding = annoHeight + 50 + 'px';
}

$('.schedule-items.top').css('margin-top', fixedPadding);
console.log(fixedPadding);

annoHeight = null;
contItemVal = null;
fixedPadding = null;

}

$(window).resize(function(){

if($(window).width() > 768){

var annoHeight2 = null;
var contItemVal2 = null;
var fixedPadding2 = null;

annoHeight2 = $('.announcements').outerHeight();
contItemVal2 = 30;



//console.log($('.announcements').outerHeight());

if(annoHeight2){
fixedPadding2 = annoHeight2 + 50 + 'px';
}

$('.schedule-items.top').css('margin-top', fixedPadding2);

console.log(fixedPadding2);

annoHeight2 = null;
contItemVal2 = null;
fixedPadding2 = null;

}else{

$('.schedule-items.top .schedule').css('margin-top', '30px');

}

});







$('.find-header, .find-panel .address').click(function(){

window.open('https://goo.gl/maps/gZLnSb6DpV12', '_blank');


});



$('.menus-grid').masonry({
  // options
    itemSelector: '.menus-grid-item',
    transitionDuration: 0
});


$(document).ready(function(){

    $('.menus-grid').masonry({
  // options
    itemSelector: '.menus-grid-item',
    transitionDuration: 0
});

});

$('.menu-tabs li').click(function(){

$('.menus-grid').masonry({
  // options
  itemSelector: '.menus-grid-item',
transitionDuration: 0
});

});


(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);


$(window).bind('orientationchange resize', function(event){
  if (event.orientation) {
    if (event.orientation == 'landscape') {
      if (window.rotation == 90) {
        rotate(this, -90);
      } else {
        rotate(this, 90);
      }
    }
  }
});

function rotate(el, degs) {
  iedegs = degs/90;
  if (iedegs < 0) iedegs += 4;
  transform = 'rotate('+degs+'deg)';
  iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
  styles = {
    transform: transform,
    '-webkit-transform': transform,
    '-moz-transform': transform,
    '-o-transform': transform,
    filter: iefilter,
    '-ms-filter': iefilter
  };
  $(el).css(styles);
}
var imgheightfix = function(){
    var owl3imgheight = parseInt($('#owl3').parent().width() * 0.66606498194) - 12 + 'px';
     $('#owl3').parent().css('height', owl3imgheight);
}
$(document).ready(function () {
    imgheightfix();
});
$(window).resize(function () {
    imgheightfix();
});
$('.contact-item-text.left').prepend('<div class="added-item-res">reserve<br>online</div>');
$('.contact-item-text.for-tel').prepend('<div class="added-item-ph"><a href="tel:+12064578287">206 457 8287</div>')


$(window).on('beforeunload', function() {
$(window).scrollTop(0);
// console.log('hellotest');
});



// $('.contact-item:first-child').click(function(){
// // alert('open');
// // $('body').prepend('<div class="overlay"><div class="modal"><button class="close-modal">x</button><div class="family-member" style="background-color: white;">hello</div><div class="item-description-modal"><h2>Reserve</h2><p>reserve</p></div></div></div>');

// $('.open-table.overlay').fadeIn();

// });




$('body').on('click', '.close-ot-modal', function () {

$('.open-table.overlay').fadeOut();

});



// $('.contact-item:first-child').click(function(){
// window.open('http://www.opentable.com/single.aspx?rid=295054&restref=295054', '_blank');
// });/

