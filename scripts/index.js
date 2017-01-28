window.onload = function() {
    /* pagination */
    var pagination = $('.pagination'),
        paginationList = pagination.find('ul li'),
        menuList = $('.menu__list ul li'),
        currentPageId = 0;

    var firstTime;
    firstTime = true;
    
    startAnimation(0);

    var pages = $.map($('.page'), function(page) {
        return {
            id: page.id,
            offset: page.offsetTop
        };
    });

    $.map(paginationList, function(el, index) {
        var page = $(el);
        page.on('click', function(evt) {
            if (currentPageId !== index) {
                currentPageId = index
                smoothScrollTo(pages[index].offset);
            }
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

    /* window scrolling */
    var c = 1, // page scrolling up/down coef
        lastOffset = window.pageYOffset || document.documentElement.scrollTop;
    
    window.onscroll = function (evt) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var c = lastOffset > scrolled ? -1 : 1;
            lastOffset = scrolled;
        var newPageId = Math.round((scrolled + (c * 100)) / $(window).height());
        changePage(newPageId);
    };      

    /* menu */
    var menu = $('.navbar__menu');
    $('.menu__btn').on('click', function() {
        toggleMenu(menu);
    });

    /* more btn */
    $('.more').on('click', function() {
        changePage(1);
        smoothScrollTo(pages[1].offset);
    });

    /* services menu */
    var services = [
            {
                title: 'industrial design',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam sed eligendi consequuntur qui at doloremque, repellat, voluptatem dolore, consequatur eaque. Necessitatibus officia quod natus enim excepturi, cupiditate voluptates in!'
            },
            {
                title: 'web design',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, minima a excepturi incidunt doloribus aspernatur eos odit inventore voluptate temporibus sequi laudantium dignissimos, dolorum voluptas in ipsum. Dignissimos facilis, dolore.'
            },
            {
                title: 'photography',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem blanditiis animi ullam non neque ipsam quo, laudantium dolore dolor molestias nesciunt magni! Iure impedit iste, eveniet quibusdam voluptatibus a facilis.'
            }
        ],
        currentServiceIndex = 0,
        currentService = $('.services__list ul li.active');

    var serviceInfo = $('.service-info');
    $('.services__list ul li').each(function(i, el) {
        console.log(el);
        $(el).on('click', function() {
                currentService.removeClass('active');
                currentService = $(this);
                currentService.addClass('active');
                serviceInfo.find('h3').text(services[i].title);
                serviceInfo.find('h3').removeAttr('class');
                serviceInfo.find('h3').addClass(services[i].title[0]);
                serviceInfo.find('p').text(services[i].descr);
        });
    });
    /* page animations */
    function startAnimation(id) {
        console.log(`page${id} animation`);
        switch(id) {
            case 0:
                if (firstTime) {
                    firstTime = false;
                    pagination.fadeIn('slow');
                    $('.socials').fadeIn('slow');
                    $('.navbar').animate({
                        'opacity': '1'
                    }, 900);
                }
                $('.home__content').find('.topic').animate({
                    'padding-left': '150px',
                    'opacity': '1'
                }, 900);
                $('.home-slider').animate({
                    'right': '77%',
                    'opacity': '.2'
                }, 1200);
                $('.logo').fadeIn('slow');
                break;
            case 1:
                $('.about__content').find('h1').fadeIn('slow');
                break;
            case 2:
                $('.services-slider').animate({
                    'right': '-20%',
                    'opacity': '.2'
                }, 1200);
                $('.services__content h1').fadeIn('slow');
                $('.services__content li').fadeIn('slow');
                $('.services__content .service-info .info h3').fadeIn('slow');
                $('.services__content .service-info .info p').fadeIn('slow');
                break;
            case 3:
                $('.portfolio__content h1').fadeIn('slow');
                $('.portfolio__content .portfolio__els .el').fadeIn('slow');
                break;
            case 4:
                $('.blog-slider').animate({
                    'right': '0%',
                    'opacity': '.2'
                }, 2000);
                $('.blog__content h1').fadeIn('slow');
                $('.blog__content .blog__els').animate({
                    'opacity': '1'
                }, 1000);                
                break;
            case 5:
                $('.contact__content h1').fadeIn('slow');
                setTimeout(() => {
                    $('.contact__content .contact__list').fadeIn('slow');
                }, 300);
                break;
            default:
                break;
        };
    };

    function setDefaults(id) {
        switch(id) {
            case 0:
                if(!firstTime) {
                    $('.header__content').find('.topic').animate({
                        'padding-left': '-0px',
                        'opacity': '0'
                    }, 900);
                    $('.logo').fadeOut('fast');
                    $('.home-slider').animate({
                        'right': '0',
                        'opacity': '0'
                    }, 900);
                }
                break;
            case 1:
                $('.about__content').find('h1').fadeOut('fast');                
                break;
            case 2: 
                $('.services-slider').animate({
                    'right': '-50%',
                    'opacity': '0'
                }, 1200);
                $('.services__content').find('h1').fadeOut('fast');
                $('.services__content').find('li').fadeOut('fast');
                $('.services__content').find('.service-info .info h3').fadeOut('fast');
                $('.services__content').find('.service-info .info p').fadeOut('fast');
                break;
            case 3:
                $('.portfolio__content').find('h1').fadeOut('fast');
                $('.portfolio__content').find('.portfolio__els .el').fadeOut('fast');
                break;
            case 4:
                $('.blog-slider').animate({
                    'right': '-100%',
                    'opacity': '0'
                }, 2000);
                $('.blog__content').find('h1').fadeOut('slow');
                $('.blog__content .blog__els').animate({
                    'opacity': '0'
                }, 1000);    
                break;
            case 5:
                break;
            default:
                break;
        };
    }


    function changePage(newPageId) {
        if (currentPageId !== newPageId) {
            $(paginationList[newPageId]).addClass('active');
            $(paginationList[currentPageId]).removeClass('active');
            if (newPageId === 1 || newPageId === 4) {
                $('.pagination').addClass('pagination_inverse');
                $('.socials').addClass('inverse');
            } else {
                $('.pagination').removeClass('pagination_inverse');
                $('.socials').removeClass('inverse');
            }
            setDefaults(currentPageId);
            currentPageId = newPageId;            
            startAnimation(newPageId);
        }
    };

    function toggleMenu(menu) {
        menu.toggleClass('menu_on');
        if (!menu.hasClass('menu_on'))
            menu.toggleClass('menu_off');
    };

    function smoothScrollTo(offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 1000);
        return false;
    };

    /* form */
    var submitBtn = $('.submitBtn'),
        clicked = false;
    submitBtn.on('click', function(e) {
        e.preventDefault();
        if (!clicked) {
            clicked = true;
            $(this).toggleClass('load');
            $(this).text('');
            setTimeout(() => {
                $(this).toggleClass('load');
                $(this).toggleClass('success');
                
                setTimeout(() => {
                    $(this).toggleClass('success');
                    $(this).text('Send message');
                    
                    clicked = false;
                }, 1500);
            }, 3000);
        }
        
    });
};
