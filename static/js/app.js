$('document').ready(function() {
	new fullpage('#fullpage', {

     css3: true,
                scrollingSpeed: 1000,
                navigation: true,
                slidesNavigation: true,
                controlArrows: false,
                scrollOverflow: true, // even though this is set to true, it's not working
                scrollOverflowOptions: {
                    scrollbars: false,
                },
            });

	$('#email-button').click(function() {
		alert("Please check your default outlook application or email: \n con.anastasiou@outlook.com");

	})
	
	$('.dark_mode_button').click(function() {
		$('.dark_mode_button').toggleClass('dark_mode_active');
		$('.first_page').toggleClass('first_page_dark_mode');
		$('.second_page').toggleClass('second_page_dark_mode');
		$('.third_page').toggleClass('third_page_dark_mode');
		$('.forth_page').toggleClass('forth_page_dark_mode');
		$('.projects-container-content').toggleClass('projects-container-content-dark_mode');
		$('.rule').toggleClass('rule-dark_mode');
		$('.nav-grid-greating').toggleClass('white');
		$('.typed-out').toggleClass('white');
		$('.page_divider').toggle();
		$('.social-icon').toggleClass('social-icon_dark_mode');
		$('.nav-item').toggleClass('nav-item_dark_mode');
		$('.fp-right').toggleClass('white-text');
		$('#dark-mode-icon-circle').toggleClass('dark-mode-icon-circle_active');
	})
	$.fn.fullpage.reBuild();
	var prevScrollpos = window.pageYOffset;
			window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			  if (prevScrollpos > currentScrollPos) {
			    $('#page-navigator').slideDown( "slow", function() {
			 // Animation complete.
			}); 
			  } else {
			    $('#page-navigator').slideUp(300);
			  }
			  prevScrollpos = currentScrollPos;
			}
			$(function () {
			$('[data-toggle="tooltip"]').tooltip()
			})
});
$('#menu-botton').click(function() {
		$('.nav-item-link').toggle(200);
		})

$(document).on('click', '#about-button', function(){
  fullpage_api.moveTo('anchor-second_page', 1);
});
$(document).on('click', '#projects-button', function(){
  fullpage_api.moveTo('anchor-third_page', 1);
});
$(document).on('click', '#contact-button', function(){
  fullpage_api.moveTo('anchor-forth_page', 1);
});

$(window).resize(function() {
  if ($(this).width() > 900) {
	$('#about-button').show();
		$('#projects-button').show();
		$('#contact-button').show();
  } else {
     throw 'blah';
  }
});
