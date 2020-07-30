//最上方選單 滾動後固定選單

if ($(window).width() > 640){

	var lastScrollTop = pageYOffset || document.documentElement.scrollTop;

	window.addEventListener("scroll", function() {
	    var st = window.pageYOffset || document.documentElement.scrollTop;

	    if (st > lastScrollTop) {
	    	// main menu hide
	    	$('.menuBarFX').removeClass('menuFixed headerFadeIn');
	    }
	    else
	    {
	    	// main menu show
	    	$('.menuBarFX').addClass('menuFixed headerFadeIn');
	    }


	    //判斷是否大於Banner高度
	    var scrollHeight = 0;
    	if( $('.wrapperH100').length > 0 )
    	{
    		scrollHeight = 900;
    	}
    	else if( $('.wrapperH70').length > 0 )
    	{
    		scrollHeight = 700;
    	}
    	else if( $('.wrapperLOC').length > 0 )
    	{
    		scrollHeight = 900;
    	}

    	if( $(window).scrollTop() > scrollHeight )
    	{
    		if (st > lastScrollTop) {
    			// subMenu show
    			$('.middleBar').addClass('menuFixed headerFadeIn -on');
    			$('.pos90').addClass('-on');
		    } else {
		    	// subMenu hide
		    	$('.middleBar').removeClass('menuFixed headerFadeIn -on');
		    	$('.pos90').removeClass('-on');
		    }
    	}


    	//滾到頂部的時候
    	if (st == 0) {
	        $('.menuBarIND').addClass('disNone');
	    } else {
	        $('.menuBarIND').removeClass('disNone');
	    }

	    lastScrollTop = st;
	}, false);

}



if ($(window).width() < 640){

	var lastScrollTop = pageYOffset || document.documentElement.scrollTop;

	window.addEventListener("scroll", function() {
	    var st = window.pageYOffset || document.documentElement.scrollTop;

	    if (st > lastScrollTop) {
	    	// main menu hide
	    	$('.menuBarFX').removeClass('menuFixed headerFadeIn');
	    }
	    else
	    {
	    	// main menu show
	    	$('.menuBarFX').addClass('menuFixed headerFadeIn');
	    }


	    //判斷是否大於Banner高度
	    var scrollHeight = 0;
    	if( $('.wrapperH100').length > 0 )
    	{
    		scrollHeight = 600;
    	}
    	else if( $('.wrapperH70').length > 0 )
    	{
    		scrollHeight = 700;
    	}
    	else if( $('.wrapperLOC').length > 0 )
    	{
    		scrollHeight = 900;
    	}

    	if( $(window).scrollTop() > scrollHeight )
    	{
    		if (st > lastScrollTop) {
    			// subMenu show
    			$('.middleBar').addClass('menuFixed headerFadeIn -on');
    			$('.pos90').addClass('-on');
		    } else {
		    	// subMenu hide
		    	$('.middleBar').removeClass('menuFixed headerFadeIn -on');
		    	$('.pos90').removeClass('-on');
		    }
    	}


    	//滾到頂部的時候
    	if (st == 0) {
	        $('.menuBarIND').addClass('disNone');
	    } else {
	        $('.menuBarIND').removeClass('disNone');
	    }

	    lastScrollTop = st;
	}, false);

}