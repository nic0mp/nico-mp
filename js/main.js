//First see if it exists, if not create an empty object
var OPW = OPW || {};
OPW.utilities = { 
	listen: function(){
		//attach click event to .js-menu
		$('.js-menu').on('click', function(){
			//do things
			$('.nav-main').slideToggle();
		});

		$(window).on('resize', function(){
			var w = $(window).width();
			//write an if stattement, if width > 480, do something
			if (w > 480 && $('.nav-main').is('[style]')){
				console.log('removed style');
				$('.nav-main').removeAttr('style');
			}	
		}); //closes window.resize event

		// attach click event to main-nav item
		$('.nav-main a').on('click', function(event){
			console.log(event);
			event.preventDefault();
			//remove 'is-current class from all links'
			$('.nav-main a').removeClass('is-current');
			//add a class of 'is-curent'to $(this)
			$(this).addClass('is-current')
			//this refers to the DOM element being operated on
			//$(this) is just 'this', wrapped in a jquery selector

			console.log($(this).attr('href'));
			//store $(this).attr('href') in a variable
			var pageToScrollTo = $(this).attr('href');
			//use that variable in our $.scrollTo() function
			$(window).scrollTo(pageToScrollTo, 800 , {offset:-120});
		});
  
	}
}

console.log(OPW)



$(document).ready(function(){
	OPW.utilities.listen();
	
	var modal = function(state, imgToShow){

		// if state === 'open' , fade it in
		if (state === 'open'){
			$('.modal-wrapper').fadeIn(function(){
				$('body').addClass('modal-on')
				//update modal-content to imgToShow
				$('.modal-content img').attr('src', imgToShow);
			});
		} else {
			//fade it out
			$('.modal-wrapper').fadeOut(function(){
				$('body').removeClass('modal-on');
				$('.modal-content img').attr('src', '');
			});
		}	
	};	
	// invoke it
	// modal();

	//attach a click event to an anchor in our dom 
		
	$('.js-modal-open').on('click', function(event){
		event.preventDefault()
		var imgToShow = $(this).data('img')
		modal('open', imgToShow);
	});

	// attach a click event to our modal close btn
	$('.js-modal-close').on('click', function(){
		modal('close')
	})

	$('.modal-wrapper').on('click', function(){
		modal('close')
	})			

}); //close


// $(document).ready(function(){

// 	//attach click event to .js-menu
// 	$('.js-menu').on('click', function(){
// 		$('.nav-main').slideToggle();
// 	});

// 	$(window).on('resize', function(){
// 		var w = $(window).width();
// 		// console.log('I am reszing' + w);

// 		//write an if stattement, if width >420, do something
// 		if (w > 480 && $('.nav-main').is('[style]')){
// 			console.log('removed style');
// 			$('.nav-main').removeAttr('style');
		
// 		}
		
// 	});



// }); //close