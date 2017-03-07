

// instafeed

    var userFeed = new Instafeed({
        get: 'user',
        userId: '549132879',
        accessToken: '549132879.1677ed0.38a1dbb3ee9b424787585f5329b5f87e',
        // limit: 10,
        resolution: 'standard_resolution',
        template: '<div class="item"><img src="{{image}}" /></div>',
        after: $('.owl-item').addClass('visible')

    });
    userFeed.run();


setTimeout(function(){
$('#owl1').prepend($('#instafeed').html());

},500);


setTimeout(function(){

$('#owl1').owlCarousel({
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




if($('.our-family .item-single').length < 6){


$('.our-family .expand-button').hide();

}



if($('.media .item-single').length < 6){


$('.media .expand-button').hide();

}





for(i=0;i<5;i++){
    $('.our-family .item-single:eq('+ i + ')').show();
    $('.media .item-single:eq('+ i + ')').show();
}

$('.members, .articles').click(function(){
    if($(this).hasClass('rotated')){
        $(this).removeClass('rotated')
            for(i=0;i<5;i++){
            $(this).parent().find('.item-single:first-child').show();
        }

        $(this).parent().find('.item-single:nth-child(n+6)').slideUp();

        }else{

            $(this).parent().find('.item-single').fadeIn();
            $(this).addClass('rotated');

}
});




$('#our-family .item-single').click(function(){
$('body').prepend('<div class="overlay"><div class="modal"><div class="family-member" style="background-image: url(' + $(this).data('image') + ')">hello</div><div class="item-description-modal"><h2>' + $(this).find('.item-name').text() + '</h2><p>' + $(this).find('.item-description').text() +'</p><button class="close-modal">x</button></div></div></div>');
// $('body').append('<div class="overlay"><div class="modal">fuck<button class="close-modal">x</button></div></div>');
});



$('#media .item-single').click(function(){
$('body').prepend('<div class="overlay"><div class="modal"><div class="family-member" style="background-image: url(' + $(this).data('image') + ')">hello</div><div class="item-description-modal"><h2>' + $(this).find('.item-name').text() + '</h2><p>' + $(this).find('.item-description').text() +'</p><p class="press-link-modal">link:<br><a target="_blank" href="' + $(this).find('.press-link').text() + '">' + $(this).find('.press-link-text').text() + '</a></p><button class="close-modal">x</button></div></div></div>');
// $('body').append('<div class="overlay"><div class="modal">fuck<button class="close-modal">x</button></div></div>');
});



$('body').on('click', '.close-modal', function () {

$('.overlay').remove();

});


// media


// menu


$('.menu-expand').click(function(){


$('nav').toggleClass('height-matter');

$('nav ul').toggle();

});



// menu

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});



// canvaus





// waypoints




var waypoint = new Waypoint({
  element: document.getElementById('waypoints'),
  handler: function(direction) {

$('#waypoints').toggleClass('fixedwaypoint');
$('body').toggleClass('fixedwaypoint');


  }
})
