

$(window).scroll(function() {
    if ($(this).scrollTop() >0){  
        $('.donatenowhead').addClass("sticky");
    }
    else{
        $('.donatenowhead').removeClass("sticky");
    }
});


  /*--------------------------
   login popup show hide div  
  ---------------------------- */

jQuery(function(){
    jQuery('.showSingle').click(function(){
          var objdiv = $('#div'+$(this).attr('target'));
          var toggleDisplay = false;
          if(objdiv.css('display')=="none"){
                toggleDisplay = true;
          }
          jQuery('.targetDiv').hide();
          jQuery('#div'+$(this).attr('target')).toggle(toggleDisplay);
    });
});




/*----------------------------------------------------*/
/*	Text Swap animation
/*----------------------------------------------------*/

// function([string1, string2],target id,[color1,color2])    
 consoleText(['COVID-19', 'CANCER', 'CATARACT','LIVELIHOOD','LOSS', 'HUNGER', 'LONELINESS', 'INSECURITY', 'MENTAL-ILLNESS'], 'text', ['tomato']);


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 500)
}









/*----------------------------------------------------*/
/*	OWL Carousel  slider  thumbnail
/*----------------------------------------------------*/

var owl = $('.reviews-holder');
			owl.owlCarousel({ 
				items: 5,
				loop:true,
				autoplay:true,
				navBy: 1,
				dots: true,
				autoplayTimeout: 4500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				nav: false,
	//navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"], 
				responsive:{
					0:{
						items:1,
						dots: false
					},
					576:{
						items:1,
						dots: false
					},
					767:{
						items:2,
						dots: false
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1100:{
						items:5
					}
				}
		});



var owl = $('.reviews-holder2');
			owl.owlCarousel({ 
				items: 5,
				loop:true,
				autoplay:true,
				navBy: 1,
				dots: true,
				autoplayTimeout: 4500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				//nav: false,
	//navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"], 
				responsive:{
					0:{
						items:1,
						dots: false
					},
					576:{
						items:1,
						dots: false
					},
					767:{
						items:2,
						dots: false
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1100:{
						items:5
					}
				}
		});


   
/*----------------------------------------------------*/
/*	Video popup area 4
/*----------------------------------------------------*/ 

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
}; 






//-----------Form------------------------//


 $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 





  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });



  $('#msform #nationality').change(function() {
        if ($(this).val() === '223') {
            $('#msform #panno,#msform #passport,#msform [id^=payment-opt],#msform #non-us,#msform #ConfirmPayment').hide();
            $('#msform #us').show()
            $('#msform .us').hide()
            

        }
    });

    $('#msform1 #nationality').change(function() {
        if ($(this).val() === '223') {
            $('#msform1 #panno,#msform1 #passport,#msform1 [id^=payment-opt],#msform1 #non-us').hide();
            $('#msform1 #us').show()
            $('#msform1 .us').hide()
        }
    });

$('#msform #nationality').change(function() {
    if ($(this).val() === '240') {
        $('#msform #panno').hide();
        $('#msform #passport').hide()
        $('#msform [id^=payment-opt]').hide()
        $('#msform #non-us').show()
        $('#msform #us').hide()
        $('#msform #ConfirmPayment').hide()
        $('#msform .us').hide()
        $('#msform .non-us').show()
        $('#msform .non-us1').hide()
    }
});

$('#msform1 #nationality').change(function() {
    if ($(this).val() === '240') {
        $('#msform1 #panno').hide();
        $('#msform1 #passport').hide()
        $('#msform1 [id^=payment-opt]').hide()
        $('#msform1 #non-us').show()
        $('#msform1 #us').hide()
        $('#msform1 #ConfirmPayment').hide()
        $('#msform1 .us').hide()
        $('#msform1 .non-us').show()
        $('#msform1 .non-us1').hide()
    }
});

$('#msform #nationality').change(function() {
    if ($(this).val() === '99') {
        $('#msform #panno,#msform #passport,#msform [id^=payment-opt],#msform #ConfirmPayment').show();
        $('#msform #non-us ').hide()
        $('#msform #us').hide()
        $('#msform #source').val($('#msform #sourcebkp').val())
        $('#msform .us').show()
        $('#msform .non-us').show()
        
    }
});

$('#msform1 #nationality').change(function() {
    if ($(this).val() === '99') {
        $('#msform1 #panno,#msform1 #passport,#msform1 [id^=payment-opt],#msform1 #ConfirmPayment').show();
        $('#msform1 #non-us').hide()
        $('#msform1 #us').hide()
        $('#msform1 #source').val($('#msform1 #sourcebkp').val())
        $('#msform1 .us').show()
        $('#msform1 .non-us').show()
        
    }
});

// carousel1
$('.carousel1').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  smartSpeed:1500,
  autoplayTimeout: 4500,
  navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
  dots:false,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:4
          
      }
  }
})

$('.carousel2').owlCarousel({
  // loop:true,
  nav:true,
  // autoplay:true,
  smartSpeed:1500,
  autoplayTimeout: 10000,
  navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
  dots:false,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
          
      }
  }
})

$('.carousel22').owlCarousel({
  loop:true,
  nav:false,
  autoplay:true,
  smartSpeed:1500,
  autoplayTimeout: 4500,
  navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
  dots:false,
  margin:10,
  responsiveClass:true,
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
})


