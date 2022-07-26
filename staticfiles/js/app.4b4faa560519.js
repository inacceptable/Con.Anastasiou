$('document').ready(function() {
	new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true,
   
});
	$('.nav-item').click(function(){
				$('.nav-item').removeClass('selected');
				var x = "#" + this.id;
				if (x == "#nav-2"){
					$('.show-item-about').show();
					$('#about-svg').show();
					$('.about-container-div2').slideDown(1000);
				}
				else if(x == "#nav-3")
				{
					//$('.show-item-about').show();
					$('.projects-container-content').slideDown(1000);
				}
				else (x == "#nav-4")
				{
					//$('.show-item-about').show();
					$('.contact-container-content').slideDown(1000);
				}
			    $(x).addClass('selected');
			
			
			 })

	$('#email-button').click(function() {
		alert("Please check your default outlook application or email: \n con.anastasiou@outlook.com");

	})
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

			