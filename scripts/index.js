"use strict";window.onload=function(){function e(e){switch(e){case 0:O&&(O=!1,"phone"!==g.name&&w.fadeIn("slow"),$(".socials").fadeIn("slow"),$(".nav-bar").animate({opacity:"1"},900)),$(".home__content").find(".topic").animate({"padding-left":"50px",opacity:"1"},900),"phone"!==g.name&&$(".home-slider").animate({right:"77%",opacity:".2"},1200),$(".logo").fadeIn("slow");break;case 1:$(".about__content").find("h1").fadeIn("slow");break;case 2:"phone"!==g.name&&$(".services-slider").animate({right:"-20%",opacity:".2"},1200),$(".services__content h1").fadeIn("slow"),$(".services__content li").fadeIn("slow"),$(".services__content .service-info .info h3").fadeIn("slow"),$(".services__content .service-info .info p").fadeIn("slow");break;case 3:$(".portfolio__content h1").fadeIn("slow"),"phone"!==g.name?$(".portfolio__content .portfolio__els .el").fadeIn("slow"):($(".portfolio__content .portfolio__els .el.image.current").addClass("show"),$(".portfolio__content .portfolio__els .el.portfolio__menu").fadeIn("slow"));break;case 4:"phone"!==g.name&&$(".blog-slider").animate({right:"0%",opacity:".2"},2e3),$(".blog__content h1").fadeIn("slow"),$(".blog__content .blog__els").animate({opacity:"1"},1e3);break;case 5:$(".contact__content h1").fadeIn("slow"),setTimeout(function(){$(".contact__content .contact__list").fadeIn("slow")},300)}}function o(e){if("phone"!==g.name)switch(e){case 0:O||($(".header__content").find(".topic").animate({"padding-left":"-0px",opacity:"0"},900),$(".logo").fadeOut("fast"),$(".home-slider").animate({right:"0",opacity:"0"},900));break;case 1:$(".about__content").find("h1").fadeOut("fast");break;case 2:$(".services-slider").animate({right:"-50%",opacity:"0"},1200),$(".services__content").find("h1").fadeOut("fast"),$(".services__content").find("li").fadeOut("fast"),$(".services__content").find(".service-info .info h3").fadeOut("fast"),$(".services__content").find(".service-info .info p").fadeOut("fast");break;case 3:$(".portfolio__content").find("h1").fadeOut("fast"),$(".portfolio__content").find(".portfolio__els .el").fadeOut("fast");break;case 4:$(".blog-slider").animate({right:"-100%",opacity:"0"},2e3),$(".blog__content").find("h1").fadeOut("slow"),$(".blog__content .blog__els").animate({opacity:"0"},1e3);break;case 5:$(".contact__content h1").fadeOut("fast"),$(".contact__content .contact__list").fadeOut("fast")}}function t(t){u!==t&&("phone"!==g.name&&($(b[t]).addClass("active"),$(b[u]).removeClass("active")),1===t||4===t?("phone"!==g.name&&($(".menu__list").addClass("inverse"),$(".pagination").addClass("pagination_inverse")),$(".socials").addClass("inverse")):("phone"!==g.name&&($(".menu__list").removeClass("inverse"),$(".pagination").removeClass("pagination_inverse")),$(".socials").removeClass("inverse")),5===t&&$(".menu__list").addClass("inverse"),o(u),u=t,e(t))}function n(e){e.toggleClass("menu_on"),e.hasClass("menu_on")||e.toggleClass("menu_off")}function i(e){p=!1,$("html, body").animate({scrollTop:e},1e3,function(){p=!0,a()})}function a(){_=$(window).scrollTop(),m=Math.round($(window).scrollTop()/$(window).height())}function s(e){var o=f.filter(function(o){return o.width<e});return 0===o.length||1===o.length?f[0]:o.length>1?f[o.length-1]:void 0}function l(){q.css({"background-color":"rgba(0,0,0,"+($(window).scrollTop()/1e3>.6?.6:$(window).scrollTop()/1e3)+")"}),d=$(this).scrollTop(),_<d?m<5&&(m+=1,t(m)):_>d&&(m-=1,t(m)),_=$(this).height()*m}function c(){q.css({"background-color":"rgba(0,0,0,"+($(window).scrollTop()/1e3>.6?.6:$(window).scrollTop()/1e3)+")"}),p&&"phone"!==g.name&&(d=$(this).scrollTop(),_<d?m<5&&(m+=1,t(m),i($(this).height()*m)):_>d&&(m-=1,t(m),i($(this).height()*m))),_=$(this).height()*m}var r,d,f=[{name:"phone",width:600},{name:"tablet",width:900},{name:"big",width:1200},{name:"large",width:1800}],u=0,_=$(window).scrollTop(),m=Math.round($(window).scrollTop()/$(window).height()),p=!0,h=$(window).width(),v=$.map($(".page"),function(e){return{id:e.id,offset:e.offsetTop}}),g=s(h);if(window.onresize=function(e){h=$(window).width(),g=s(h)},"phone"!==g.name){var w=$(".pagination"),b=w.find("ul li");r=Math.round($(window).scrollTop()/$(window).height()),t(r),$.map(b,function(e,o){var n=$(e);n.on("click",function(e){u!==o&&(t(o),i(v[o].offset))})})}var C=$(".menu__list ul li");$.map(C,function(e,o){var t=$(e);t.on("click",function(e){u=o,p=!1,i(v[o].offset),n(x)})});var k=$(".portfolio__menu ul li.active"),T=$(".portfolio__els .el"),I=T[0];$(".portfolio__menu ul li").each(function(e,o){$(o).on("click",function(o){k.removeClass("active"),k=$(this),k.addClass("active"),$(I).removeClass("current"),"phone"===g.name&&$(I).removeClass("show"),I=T[e],$(I).addClass("current"),"phone"===g.name&&$(I).addClass("show")})});$(".blog__els .place.current"),$(".blog__els .place.other");if("phone"===g.name){var y=$(".map__wrapper");y.on("click",function(e){$(e.target).hasClass("form__control")||($(".map").toggleClass("on"),y.toggleClass("on"),$(".nav-bar").toggleClass("hide"))})}var O=!0;e(0);var q=$(".nav-bar");"phone"!==g.name?$(window).scroll(c):$(window).scroll(l);var x=$(".navbar__menu");$(".menu__btn").on("click",function(){n(x)}),$(".more").on("click",function(){p=!1,t(1),i(v[1].offset)});var A=[{title:"industrial design",descr:"Lorem ipsum dolor sit amet. Architecto ullam sed eligendi consequuntur qui at doloremque, repellat, voluptatem dolore, consequatur eaque. Necessitatibus officia quod natus enim excepturi, cupiditate voluptates in!"},{title:"web design",descr:"Lorem ipsum dolor sit amet,  minima a excepturi incidunt doloribus aspernatur eos odit inventore voluptate temporibus sequi laudantium dignissimos, dolorum voluptas in ipsum. Dignissimos facilis, dolore."},{title:"photography",descr:"Lorem ipsum dolor sit amet, elit. Voluptatem blanditiis animi ullam non neque ipsam quo, laudantium dolore dolor molestias nesciunt magni! Iure impedit iste, eveniet quibusdam voluptatibus a facilis."}],L=$(".services__list ul li.active"),M=$(".service-info");console.log($(".services__list ul li")),$.each($(".services__list ul li"),function(e,o){$(o).on("click",function(){console.log($(this)),L.removeClass("active"),L=$(this),L.addClass("active"),M.find("h3").text(A[e].title),M.find("h3").removeAttr("class"),M.find("h3").addClass(A[e].title[0]),M.find("p").text(A[e].descr)})}),$(".services__list ul li").each(function(e,o){$(o).on("click",function(){console.log($(this)),L.removeClass("active"),L=$(this),L.addClass("active"),M.find("h3").text(A[e].title),M.find("h3").removeAttr("class"),M.find("h3").addClass(A[e].title[0]),M.find("p").text(A[e].descr)})});var D=$(".feedback-form"),z=$(".submitBtn"),B=!1;D.on("submit",function(e){e.preventDefault(),B||(B=!0,z.addClass("load"),z.text(""),setTimeout(function(){z.removeClass("load"),z.addClass("success"),setTimeout(function(){z.removeClass("success"),z.text("Send message"),B=!1},1500)},3e3))})};