$(function() {

		$(document).ready(function() {
				var $carousel = $('.carousel').slick({
					autoplay: true,
					dots: false,
					draggable: false,
					fade: true
				});

				$('.carousel-nav__item').click(function() {
					$carousel.slick('slickGoTo', $(this).index());
				});
		});

			// form valid
		function Validate(){

		  this.init = function(){

		    valid.regListeners();
		  };
		  this.regListeners = function(){

		    $('form').on('submit', valid.formSubmit);
		    $('form input[type="text"]').on('keydown', valid.inputKeyDown);
		    $('form input[type="text"]').on('focusout', valid.inputFocusOut);
		    
		  };
		  this.formSubmit = function(e){
		   
		    
		    if(valid.formValidate($(this)) == false){
		     return false;
		    }
		    var th = $(this);

		  		$.ajax({
		  			type: "POST",
					url: "mail.php", //Change
					data: th.serialize()
				}).done(function() {
					// alert("Thank you!");
					setTimeout(function() {
						$.magnificPopup.open({
							items: {
								src: $('.email-popup')
							},
							type: 'inline',
							mainClass: 'email-modal',
							showCloseBtn: false,
							callbacks: {
								beforeOpen: function() {
									if($(window).width() < 700) {
										this.st.focus = false;
									} else {
										this.st.focus = '#name';
									}
									
								},

								open: function(){
									$('.email-popup .button').bind('click', poupClose);
									$('body').css('overflow-x', 'visible');
								},

								close: function(){
									$('.email-popup .button').unbind('click', poupClose);
									$('body').css('overflow-x', 'hidden');
									
								}
							}
						});

						
						th.trigger("reset");
					}, 1000);
				});
				return false;
		   
		   
		  };

		  this.formValidate = function($form){
		    var validation = true;
		    var $inputs = $form.find('input');
		    
		    		    
		    $inputs.each(function(index, elem){
		      var $input = $(elem);
		      
		      if($input.val() == ''){
		        validation = false;
		        valid.createTooltip($input);
		      }
		      
		    });
		    return validation;
		  
		  };
		  
		  this.createTooltip = function($toolParent){

		  	$toolParent.addClass('invalid');
		  	$toolParent.closest('label').addClass('invalid');
		  };
		  
		  this.inputKeyDown = function(){
		    $(this).removeClass('invalid');
		    $(this).closest('label').removeClass('invalid');

		  };

		  this.inputFocusOut = function(){
		  	if($(this).val() == "") valid.createTooltip($(this));
		  };
		  
		}
		var valid = new Validate();
		valid.init();
		
		function poupClose() {
		  	$.magnificPopup.close();
		  }
	// end of form valid

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
