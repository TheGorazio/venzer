window.onload = function() {
    var devices = [
        {
            name: 'phone',
            width: 600
        },
        {
            name: 'tablet',
            width: 900
        },
        {
            name: 'big',
            width: 1200
        },
        {
            name: 'large',
            width: 1800
        }
    ];
    var currentPageId = 0;

    /* pagination */
    var device = defineDevice();
    window.onresize = function(evt) {
        width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        device = defineDevice();
    };

    if(device.name !== 'phone') {
        var pagination = $('.pagination'),
            paginationList = pagination.find('ul li');
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var c = lastOffset > scrolled ? -1 : 1;
            lastOffset = scrolled;
        var newPageId = Math.round((scrolled + (c * 100)) / $(window).height());
        changePage(newPageId);
        $.map(paginationList, function(el, index) {
            var page = $(el);
            page.on('click', function(evt) {
                if (currentPageId !== index) {
                    currentPageId = index
                    smoothScrollTo(pages[index].offset);
                }
            });
        });
    };

    /* menu */
    var menuList = $('.menu__list ul li');
        
    $.map(menuList, function(el, index) {
        var page = $(el);
        page.on('click', function(evt) {
            currentPageId = index;         
            smoothScrollTo(pages[index].offset);
            toggleMenu(menu);       
        });
    });

    /* portfolio menu */
    var pMenuCurrent = $('.portfolio__menu ul li.active'),
        imageContainers = log($('.portfolio__els .el')),
        pImageCurrent = imageContainers[0];

    $('.portfolio__menu ul li').each(function(i, el) {
        $(el).on('click', function(evt) {
            pMenuCurrent.removeClass('active');
            pMenuCurrent = $(this);
            pMenuCurrent.addClass('active');
            $(pImageCurrent).removeClass('current');
            if (device.name === 'phone') $(pImageCurrent).removeClass('show');
            pImageCurrent = log(imageContainers[i]);
            $(pImageCurrent).addClass('current'); 
            if (device.name === 'phone') $(pImageCurrent).addClass('show');
        });
    });

    /* blog posts */
    var current = $('.blog__els .place.current'),
        other = $('.blog__els .place.other'),
        posts = [
            `<h2>ridiculus fring illa vulputate</h2><p>some text / texx / text</p>`,
            `<h3>quam sit ridiculus</h3><p>some text / texx / text</p>`,
            `<h3>ligula matus tellus</h3><p>some text / texx / text</p>`
        ];
    
    /* map */
    if (device.name === 'phone') {
        var map = $('.map__wrapper');
            map.on('click', function(evt) {
                if (!$(evt.target).hasClass('form__control')) {
                    $('.map').toggleClass('on');
                    map.toggleClass('on');
                    $('.nav-bar').toggleClass('hide');
                }
            });
    }

    /* firstAmination */
    var firstTime;
    firstTime = true;
    
    startAnimation(0);

    var pages = $.map($('.page'), function(page) {
        return {
            id: page.id,
            offset: page.offsetTop
        };
    });

    /* window scrolling */
    var c = 1, // page scrolling up/down coef
        lastOffset = window.pageYOffset || document.documentElement.scrollTop;
    var navbar = $('.nav-bar');
    
    window.onscroll = function (evt) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var c = lastOffset > scrolled ? -1 : 1;
            lastOffset = scrolled;
        var newPageId = Math.round((scrolled + (c * 100)) / $(window).height());
        navbar.css({
            'background-color': `rgba(33,33,33,${scrolled / 1000 > .6 ? .6 : scrolled / 1000})`
        });
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
        currentService = $('.services__list ul li.active');

    var serviceInfo = $('.service-info');
    $('.services__list ul li').each(function(i, el) {
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
        switch(id) {
            case 0:
                if (firstTime) {
                    firstTime = false;
                    if (device.name !== 'phone') pagination.fadeIn('slow');
                    $('.socials').fadeIn('slow');
                    $('.nav-bar').animate({
                        'opacity': '1'
                    }, 900);
                }
                $('.home__content').find('.topic').animate({
                    'padding-left': '50px',
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
                if (device.name !== 'phone') $('.portfolio__content .portfolio__els .el').fadeIn('slow');
                else {
                    $('.portfolio__content .portfolio__els .el.image.current').addClass('show');
                    $('.portfolio__content .portfolio__els .el.portfolio__menu').fadeIn('slow');
                }
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
            if (device.name !== 'phone') {
                $(paginationList[newPageId]).addClass('active');
                $(paginationList[currentPageId]).removeClass('active');
            }
            if (newPageId === 1 || newPageId === 4) {
                if (device.name !== 'phone') 
                    $('.pagination').addClass('pagination_inverse');
                $('.socials').addClass('inverse');
            } else {
                if (device.name !== 'phone') 
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

    /* device definition */
    function defineDevice() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var arr = devices.filter(function (d) {
            return d.width < width
        });
        if (arr.length === 0 || arr.length === 1) return devices[0];
        if (arr.length > 1) return devices[arr.length - 1];
    }

    /* logger */
    function log(i) {
        console.log(i);
        return i;
    }
};
