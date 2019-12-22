// as the page loads, call these scripts
jQuery(document).ready(function ($) {

$body              = $('body'),
$mainHeader        = $('#masthead'),
$offcanvasToggle   = $('.offcanvas-toggle'),
$offcanvasMenu     = $('#offcanvas-menu'),
lastScrollTop     = 0,
 timer             = 800;

// Wait for window load
$(window).on("load", function (e) {
	$('.loader').fadeOut(1000);
});

//Check to see if the window is top if not then display button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.back-to-top').fadeIn();
    } else {
    $('.back-to-top').fadeOut();
}
});

// Page scrolling script
	$('a[href*="#"]:not([href="#"], [title])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
//////////////////
	$(window).scroll(function(event){
            if(timer) {
                window.clearTimeout(timer);
            }

            timer = window.setTimeout(function() {
              var st = $(this).scrollTop();
              if (st > lastScrollTop){
                // Scroll down
                if (st >= 10) {
                  $mainHeader.removeClass('active-header');
                }
              } else {
                // Scroll up
                if (st <= 200) {
                  $mainHeader.addClass('active-header');
                } else {
                  $mainHeader.addClass('active-header');
                }
              }
              lastScrollTop = st;
            }, 20);
          });

////////////////////////////////////////////////

$offcanvasToggle.click( function(e) {
            // Remove default action
              e.preventDefault();
            // Toggle open/close classes
              // if ($body.hasClass('search-open')){
              //   $body.removeClass('search-open');
              //   $searchMenu.fadeOut(300);
              $offcanvasMenu.delay(300).fadeToggle();
              // } else {
              //$offcanvasMenu.fadeToggle(300);
              // }
              $body.toggleClass('offcanvas-open');
              //$mainHeader.toggleClass('remove-dark');
               $mainHeader.addClass('active-header');

          });

//////////////////////////////////////

//Menu
   $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

//check form fields
   $( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

$('article').each(function() {

  let _this = $(this);

  _this.readingTime({
    readingTimeTarget: _this.find('.eta'),
    wordCountTarget: _this.find('.words'),
    remotePath: _this.attr('data-file'),
    remoteTarget: _this.attr('data-target')
  });
});

});//end jquery

//Subscribe form
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAi0HZMbjVLKrfYsCdj3To2osTNCBrg6z4",
    authDomain: "subscribe-8cae0.firebaseapp.com",
    databaseURL: "https://subscribe-8cae0.firebaseio.com",
    projectId: "subscribe-8cae0",
    storageBucket: "",
    messagingSenderId: "255887982226",
    appId: "1:255887982226:web:723e7e885efbc23b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var db = firebase.firestore();

let formMessage = db.collection('users');

//listen for submit event//(1)
document.getElementById('contact-form')
  document.addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;

  //send message values
  sendMessage(name, email, message);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 6000);

  //Form Reset After Submission(7)
  document.getElementById('contact-form').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, message) {
   //let newFormMessage = formMessage;
  formMessage.add({
    name: name,
    email: email,
    message: message
  });

  
}



