

// instafeed

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4012759170',
        accessToken: '4012759170.1677ed0.8c1873c7a2ab4300a45e13d6b26b2cde',
        // limit: 10,
        resolution: 'standard_resolution',
        template: '<div class="item"><img src="{{image}}" /></div>',
        after: $('.owl-item').addClass('visible')

    });
    userFeed.run();




if($("#instafeed").length == 0) {
  //it doesn't exist
}else{

setTimeout(function(){
$('#owl1').prepend($('#instafeed').html());
},500);
}





setTimeout(function(){

$('#owl1').owlCarousel({
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
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
    autoWidth:true
});

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
$('body').prepend('<div class="overlay"><div class="modal"><div class="family-member" style="background-image: url(' + $(this).data('image') + ')">hello</div><div class="item-description-modal"><h2>' + $(this).find('.item-name').text() + '</h2><p>' + $(this).find('.item-description').text() +'</p></div></div><button class="close-modal">x</button></div>');

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
$(document).on('click', 'a', function(event){


  event.preventDefault();
var amountOfScroll  = $( $.attr(this, 'href') ).offset().top - $('#waypoints').height() + 1;
// alert($( $.attr(this, 'href') ).offset().top);
// alert(amountOfScroll);
    $('html, body').animate({
        scrollTop: amountOfScroll
    }, 500);





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

 var offSetHeight = $('#waypoints').height() + 10;



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

    });

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


annoHeight = $('.announcements').height();
contItemVal = parseInt($('.contact-items').css('padding-top'));
fixedPadding = annoHeight + contItemVal + 'px';
$('.contact-items').css('padding-top', fixedPadding);



annoHeight = null;
contItemVal = null;
fixedPadding = null;


}

    $(window).resize(function(){



if($(window).width() > 768){


annoHeight = $('.announcements').height();


var contItemValBot = parseInt($('.contact-items').css('padding-bottom'));


fixedPadding = contItemValBot + annoHeight + 'px';

$('.contact-items').css('padding-top', fixedPadding);


}else{

var contItemValBot = parseInt($('.contact-items').css('padding-bottom'));

$('.contact-items').css('padding-top', contItemValBot + 'px');
}
    });


$('.contact-item:first-child').click(function(){

window.open('http://www.opentable.com/single.aspx?rid=295054&restref=295054', '_blank');


});



$('.find-header, .find-panel .address').click(function(){

window.open('https://goo.gl/maps/gZLnSb6DpV12', '_blank');


});



$('.menus-grid').masonry({
  // options
  itemSelector: '.menus-grid-item',
transitionDuration: 0
});


$('.menu-tabs li').click(function(){




$('.menus-grid').masonry({
  // options
  itemSelector: '.menus-grid-item',
transitionDuration: 0
});

});

