(function(b){b.fn.accordion=function(i){var a={handle:"h3",panel:".panel",speed:200,easing:"swing",canOpenMultiple:false,canToggle:false,activeClassPanel:"open",activeClassLi:"active",lockedClass:"locked",loadingClass:"loading"};i&&b.extend(a,i);this.each(function(){var e=b(this),f={height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0};e.find(">li>"+a.panel).each(function(){var c=b(this);c.removeClass(a.loadingClass).css("visibility","hidden").data("dimensions",{marginTop:c.css("marginTop"),
marginBottom:c.css("marginBottom"),paddingTop:c.css("paddingTop"),paddingBottom:c.css("paddingBottom"),height:this.offsetHeight-parseInt(c.css("paddingTop"))-parseInt(c.css("paddingBottom"))}).bind("panel-open.accordion",function(d,g){var h=b(this);g.addClass(a.activeClassLi);h.css(b.extend({overflow:"hidden"},f)).addClass(a.activeClassPanel).show().animate(b.browser.msie&&parseInt(b.browser.version)<8?h.data("dimensions"):b.extend({opacity:1},h.data("dimensions")),{duration:a.speed,easing:a.easing,
queue:false,complete:function(){b.browser.msie&&this.style.removeAttribute("filter");b(this).removeAttr("style")}})}).bind("panel-close.accordion",function(){var d=b(this);d.closest("li").removeClass(a.activeClassLi);d.removeClass(a.activeClassPanel).css({overflow:"hidden"}).animate(b.browser.msie&&parseInt(b.browser.version)<8?f:b.extend({opacity:0},f),{duration:a.speed,easing:a.easing,queue:false,complete:function(){b.browser.msie&&this.style.removeAttribute("filter");d.hide()}})}).hide().css("visibility",
"visible");return c});e.find(" > li > "+a.handle).wrapInner('<a class="accordion-opener" href="#open-panel" />');e.find(" > li."+a.activeClassLi+" > "+a.panel+", > li."+a.lockedClass+" > "+a.panel).show().addClass(a.activeClassPanel);var j=e.find(" > li."+a.activeClassLi+", > li."+a.lockedClass);!a.canToggle&&j.length<1&&e.find(" > li").first().addClass(a.activeClassLi).find(" > "+a.panel).addClass(a.activeClassPanel).show();e.delegate(".accordion-opener","click",function(c){c.preventDefault();c.stopImmediatePropagation();
c=b(this).closest("li");var d=c.find(">"+a.panel).first(),g=e.find(" > li:not(."+a.lockedClass+") > "+a.panel+"."+a.activeClassPanel);if(!c.hasClass(a.lockedClass))if(d.is(":visible"))a.canToggle&&d.trigger("panel-close");else{d.trigger("panel-open",[c]);a.canOpenMultiple||g.trigger("panel-close")}})});return this}})(jQuery);