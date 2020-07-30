
////////////////////////////////    共  用    ////////////////////////////////	   

	//////////////////////////////////////////////
	//   背景     小裝置小圖  大裝置大圖        //
	/////////////////////////////////////////////   
	xsBGLoad();
	$(window).resize(xsBGLoad);

	function xsBGLoad() {
		var winWidth = $(window).width();
		if (winWidth < 801) {
			$('.xsBGshow').each(function() {
				var smallsrc = $(this).data('small');
				$(this).css('background-image', 'url("' + smallsrc + '")');
			});
		} else {
			$('.xsBGshow').each(function() {
				var largesrc = $(this).data('large');
				$(this).css('background-image', 'url("' + largesrc + '")');
			});
		}
	}

	////////////////////
	//                //
	////////////////////

	// $(window).scroll(function() {
	//     var objHero = $('.heroFixed'),
	//         scroll = $(window).scrollTop();
	//     if (scroll >= 100) {
	//         objHero.addClass('goDown');
	//     } else {
	//         objHero.removeClass('goDown');
	//     }
	// });


	//////////////////////////////
	//      scrollReveal        //
	/////////////////////////////

	window.sr = new scrollReveal({
		  // reset: true,
		  move: '50px',
		  mobile: false,
	});


	//////////////////////////////////////
	//     手機版 menu按鈕 & 選單        //
	//////////////////////////////////////
	
	$('.burger').on('click',function(){
	  $(this).toggleClass('on');
	  $('#menuLight').fadeToggle(500);
	})

	/////////////////////////
	//      選單固定       //
	////////////////////////

		$(window).scroll(function() {
		    var sticky = $('.faqMenuBar'),
		        scroll = $(window).scrollTop();
		    if (scroll >= 450) {
		        sticky.addClass('menuFixed headerFadeIn on');
		    } else {
		        sticky.removeClass('menuFixed headerFadeIn on');
		    }
		});


	/////////////////////////////
	//      中間選單固定       //
	////////////////////////////

	if ($(window).width() < 640) {
		$('.menuBtn, .xsMenuList li').on('click',function(){
			$('.xsMenu').slideToggle(500);
		})
	}

	/////////////////////
	//   banner 輪播   //
	////////////////////

	$('.bannerIND').slick({
	    dots: false,
	    arrows: false,
	    autoplay: true,
	    infinite: true,
	    speed: 800,
	});

////////////////////////////////   首頁    ////////////////////////////////	

//中間選單
	if ($('.middleMenuBar').size() > 0) {
		$('.middleMenuBar').onePageNav();
	}


	$('.specimenMask').on('click',function(){
		$(this).parent('li').toggleClass('on');
	})

////////////////////////////////   FAQ    ////////////////////////////////	
//FAQ手風琴
	$('.qBox').on('click',function(){
		$(this).siblings('.aBox').slideToggle(500); 
		$(this).toggleClass('on');
	})


//選單
//中間選單

if ($(window).width() < 1200) {
	if ($('.faqMenu').size() > 0) {
		$('.faqMenu').onePageNav();
	}		
}

	$('.faqArrow, .faqMenu-s li').on('click',function(){
		$('.faqMenu-s').slideToggle(500)
	})

////////////////////////////////   應用範圍    ////////////////////////////////	
if ($(window).width() >700) {
	 $('.apply-s').on('click',function(){
	 	$(this).siblings('.apply-m').slideDown(500)

	 	var applyM_H = $(this).siblings('.apply-m').offset().top;
	 	$('html, body').animate({scrollTop:applyM_H}, 500);
	 })

	$('.apply-X').on('click',function(){
		$(this).parent('.apply-m').slideUp(500);
		var applyBox_H = $(this).parent('.apply-m').parent('.applyBox').offset().top;
		var menuBar_H = $('.menuBar').height();
		$('html, body').animate({scrollTop:applyBox_H-menuBar_H}, 500);
	})
}
////////////////////////////////   小 動 畫    ////////////////////////////////	

	$('.indexTit').addClass('hide');
	$('.indexTit').waypoint(function() {
	    $('.indexTit h2').addClass('animated-slow fadeInUp delay-03s');
	    $('.indexTit span').addClass('animated-slow fadeInUp delay-08s');
	    $('.indexTit h3').addClass('animated-slow fadeInUp delay-09s');
	    $('.indexTit hr').addClass('animated-slowMM width90 delay-09s');;
	    $('.indexTit p').addClass('animated-slow fadeInUp delay-09s');
	}, {
	    offset: '80%'
	});	


	
	$('.accuracyMM').addClass('hide');
	$('.accuracyMM').waypoint(function() {
	    $('.accuracyMM').addClass('animated-slowMM fadeInAnim');
	}, {
	    offset: '80%'
	});


	
	$('.faqBanner').addClass('hide');
	$('.faqBanner').waypoint(function() {
	    $('.faqBanner').addClass('animated-slowMM fadeIn delay-03s');
	}, {
	    offset: '80%'
	});

	$('.FAQtxt').addClass('hide');
	$('.FAQtxt').waypoint(function() {
	    $('.FAQtxt').addClass('animated-slowMM fadeIn delay-05s');
	}, {
	    offset: '80%'
	});

	$('.mm-s').addClass('hide');
	$('.mm-s').waypoint(function() {
	    $('.mm-s').addClass('animated-slowMM fadeInAnim-s');
	}, {
	    offset: '80%'
	});


	$('.blockW .tit').addClass('hide');
	$('.blockW .tit').each(function(index, element) {
	    $(element).waypoint(function() {
	    $(element).find('h3').addClass('animated-slow fadeInUp');
	    $(element).find('hr').addClass('animated-slow width150 delay-05s');
	    $(element).find('p').addClass('animated-slow fadeInUp delay-08s');
	    }, {
	        offset: '80%'
	    });
	});	

	$('.blockW .txt').addClass('hide');
	$('.blockW .txt').waypoint(function() {
	    $('.sixStar').addClass('animated-slowMM rorate360 delay-10s');
	    $('h4').addClass('animated-slowMM fadeIn delay-11s');
	    $('p').addClass('animated-slowMM fadeInUp delay-12s');
	}, {
	    offset: '80%'
	});

	$('.blockG .inner').addClass('hide');
	$('.blockG .inner').each(function(index, element) {
	    $(element).waypoint(function() {
	    $(element).find('h3').addClass('animated-slow fadeInUp');
	    $(element).find('h4').addClass('animated-slow fadeInUp delay-05s');
	    $(element).find('p').addClass('animated-slow fadeInUp delay-08s');
	    $(element).find('table').addClass('animated-slow fadeIn delay-11s');
	    }, {
	        offset: '80%'
	    });
	});			


	$('.originBox .tit').addClass('hide');
	$('.originBox .tit').each(function(index, element) {
	    $(element).waypoint(function() {
	    $(element).find('h3').addClass('animated-slow fadeInUp');
	    $(element).find('hr').addClass('animated-slow width150 delay-05s');
	    $(element).find('p').addClass('animated-slow fadeInUp delay-08s');
	    $(element).find('img').addClass('animated-slow fadeInUp delay-08s');
	    }, {
	        offset: '80%'
	    });
	});	
	$('.originBox .descrip').addClass('hide');
	$('.originBox .descrip').each(function(index, element) {
	    $(element).waypoint(function() {
	    $(element).find('h4').addClass('animated-slow fadeInUp');
	    $(element).find('p').addClass('animated-slow fadeInUp delay-05s');
	    $(element).find('img').addClass('animated-slow fadeInUp delay-08s');
	    }, {
	        offset: '80%'
	    });
	});		
///////////////////////////////////////////////////////////////////////////////////




	$('.fadeInUp li').addClass('hide');
	$('.fadeInUp li').each(function(index, element) {
	    $(element).waypoint(function() {
	        $(element).addClass('animated-slow fadeInUp delay-04s');
	        $(element).removeClass('hide');
	    }, {
	        offset: '80%'
	    });
	});

	$('.fadeIn li').addClass('hide');
	$('.fadeIn li').each(function(index, element) {
	    $(element).waypoint(function() {
	        $(element).addClass('animated-slow fadeIn delay-04s');
	        $(element).removeClass('hide');
	    }, {
	        offset: '80%'
	    });
	});	


	$('.fadeLR li').addClass('hide');
	$('.fadeLR li').each(function(index, element) {
	    $(element).waypoint(function() {
	        if (index % 2 == 0) {
	            $(element).addClass('animated fadeInLeft');
	            $(element).removeClass('hide');
	        } else {
	            $(element).addClass('animated fadeInRight');
	            $(element).removeClass('hide');
	        }
	    }, {
	        offset: '80%'
	    });
	});

////////////////////////////////////////////////////////////////

	$('.applyBox').addClass('hide');
	$('.applyBox').each(function(index, element) {
	    $(element).waypoint(function() {
	        $(element).addClass('animated-slow fadeIn');
	        $(element).removeClass('hide');
	    }, {
	        offset: '80%'
	    });
	});	

	$('.unitBox').addClass('hide');
	$('.unitBox').each(function(index, element) {
	    $(element).waypoint(function() {
	        $(element).addClass('animated-slow fadeIn');
	        $(element).removeClass('hide');
	    }, {
	        offset: '80%'
	    });
	});	


	$('.fadeInTit').addClass('hide');
	$('.fadeInTit').waypoint(function() {
	    $('.fadeInTit h3').addClass('animated-slow fadeInUp delay-03s');
	    $('.fadeInTit hr').addClass('animated-slow fadeInUp delay-05s');
	    $('.fadeInTit span').addClass('animated-slow fadeInUp delay-07s');
	}, {
	    offset: '80%'
	});	

	$('.paternityTit').addClass('hide');
	$('.paternityTit').waypoint(function() {
	    $('.paternityTit h2').addClass('animated-slow fadeInUp delay-03s');

	}, {
	    offset: '80%'
	});	


	$('.wp01').addClass('hide');
	$('.wp01').waypoint(function() {
	    $('.wp01').addClass('animated-slow fadeIn ');
	}, {
	    offset: '80%'
	});	

	$('.wp02').addClass('hide');
	$('.wp02').waypoint(function() {
	    $('.wp02').addClass('animated-slow fadeIn ');
	}, {
	    offset: '80%'
	});

	$('.wp03').addClass('hide');
	$('.wp03').waypoint(function() {
	    $('.wp03').addClass('animated-slow fadeIn ');
	}, {
	    offset: '80%'
	});


	$('.pageFadeIn').addClass('hide');
	$('.pageFadeIn').waypoint(function() {
	    $('.pageFadeIn').addClass('animated-slow fadeIn');
	}, {
	    offset: '80%'
	});


///////////////////////////////////////////////////////////////////////////////////

