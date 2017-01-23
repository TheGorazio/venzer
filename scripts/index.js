window.onload = function() {
    /* pagination */
    var paginationList = $('.pagination ul li'),
        menuList = $('.menu__list ul li'),
        currentPageId = 0;

    var pages = $.map($('.page'), function(page) {
        return {
            id: page.id,
            offset: page.offsetTop
        };
    });

    $.map(paginationList, function(el, index) {
        var page = $(el);
        page.on('click', function(evt) {
            currentPageId = index;         
            smoothScrollTo(pages[index].offset);
        });
    });
    $.map(menuList, function(el, index) {
        var page = $(el);
        page.on('click', function(evt) {
            currentPageId = index;         
            smoothScrollTo(pages[index].offset);
            toggleMenu(menu);        
        });
    });

    var c = 1, // page scrolling up/down coef
        lastOffset = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = (evt) => {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var c = lastOffset > scrolled ? -1 : 1;
            lastOffset = scrolled;
        var newPageId = Math.round((scrolled + (c * 200)) / $(window).height());
        
        if (currentPageId !== newPageId) {
            $(paginationList[newPageId]).addClass('active');
            $(paginationList[currentPageId]).removeClass('active');
            currentPageId = newPageId;
            if (currentPageId === 1 || currentPageId === 4) {
                $('.pagination').addClass('pagination_inverse');
                $('.socials').addClass('inverse');
            } else {
                $('.pagination').removeClass('pagination_inverse');
                $('.socials').removeClass('inverse');
            }
        }
    };      

    /* menu */
    var menu = $('.navbar__menu');
    $('.menu__btn').on('click', function() {
        toggleMenu(menu);
    })


};

function toggleMenu(menu) {
    menu.toggleClass('menu_on');
    if (!menu.hasClass('menu_on'))
        menu.toggleClass('menu_off');
}
function smoothScrollTo(offset) {
  	$('html, body').animate({
	  scrollTop: offset
  	}, 1000);
	return false;
};