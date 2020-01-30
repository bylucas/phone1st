// as the page loads, call these scripts
jQuery(document).ready(function ($) {

$body              = $('body'),
$mainHeader        = $('#masthead'),
$offcanvasToggle   = $('.offcanvas-toggle'),
$offcanvasMenu     = $('#offcanvas-menu'),
lastScrollTop     = 0,
 timer             = 800;


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
                  $mainHeader.removeClass('not-dark');



                }
              } else {
                // Scroll up
                if (st <= 200) {
                  $mainHeader.addClass('active-header');
                  $mainHeader.addClass('not-dark');
                  $mainHeader.removeClass('dark');


                } else {
                  $mainHeader.addClass('active-header');
                  $mainHeader.addClass('dark');
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
              $offcanvasMenu.delay(300).fadeToggle();
              $body.toggleClass('offcanvas-open');
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

//Reading Time

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



