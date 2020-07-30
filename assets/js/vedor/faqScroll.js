var 
    topMenu = $(".faqMenuBar"),
    topMenuHeight = topMenu.outerHeight(),

    lastId, faqMenu= $('.faqMenu')
    menuItems = faqMenu.find("a"),

    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });




var anchorSections = {};
$('.anchorSection').each(function(index, el) {

    var sectionName = $(el).attr('id');
    var thisOffsetTop = $(el).offset().top;

    anchorSections[sectionName] = thisOffsetTop;
});

// console.log(anchorSections);

menuItems.click(function(e) {

    e.preventDefault();


    var toSection = $(this).attr("href").replace("#", "");
    var thisSectionTop = anchorSections[toSection];

    o = thisSectionTop - topMenuHeight;
    $('.faqScroll').stop().animate({
        scrollTop: o
    }, 300);

});


   var faqBox = $('.faqBox')
    , cur_pos = $(this).scrollTop();

$('.faqScroll').on('scroll', function () {

  faqBox.each(function() {
    var top = $(this).offset().top - topMenuHeight,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      faqMenu.find('a').parent().removeClass('current');
 
      // $(this).addClass('active');
      faqMenu.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('current');
    }
  });
});