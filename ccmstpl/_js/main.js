/*
	Backstretch - v2.1.15 - 2017-06-22
	Copyright (c) 2017 Scott Robbin
	Fork of improvements - by Daniel Cohen Gindi (danielgindi@gmail.com) Licensed MIT
*/
!function(a,b,c){"use strict";function d(a){return m.hasOwnProperty(a)?a:"cover"}var e=/^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;a.fn.backstretch=function(d,e){var f=arguments;0===a(b).scrollTop()&&b.scrollTo(0,0);var g;return this.each(function(b){var h=a(this),i=h.data("backstretch");if(i){if("string"==typeof f[0]&&"function"==typeof i[f[0]]){var j=i[f[0]].apply(i,Array.prototype.slice.call(f,1));return j===i&&(j=c),void(j!==c&&(g=g||[],g[b]=j))}e=a.extend(i.options,e),i.hasOwnProperty("destroy")&&i.destroy(!0)}if(!d||d&&0===d.length){var k=h.css("background-image");k&&"none"!==k?d=[{url:h.css("backgroundImage").replace(/url\(|\)|"|'/g,"")}]:a.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.")}i=new n(this,d,e||{}),h.data("backstretch",i)}),g?1===g.length?g[0]:g:this},a.backstretch=function(b,c){return a("body").backstretch(b,c).data("backstretch")},a.expr[":"].backstretch=function(b){return a(b).data("backstretch")!==c},a.fn.backstretch.defaults={duration:5e3,transition:"fade",transitionDuration:0,animateFirst:!0,alignX:.5,alignY:.5,paused:!1,start:0,preload:2,preloadSize:1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1};var f={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},itemWrapper:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"100%",height:"100%",zIndex:-999999},item:{position:"absolute",margin:0,padding:0,border:"none",width:"100%",height:"100%",maxWidth:"none"}},g=function(){var c=function(a){for(var b=1;b<a.length;b++){for(var c=a[b],d=b;a[d-1]&&parseInt(a[d-1].width,10)>parseInt(c.width,10);)a[d]=a[d-1],--d;a[d]=c}return a},d=function(a,c,d){for(var e,f,g=b.devicePixelRatio||1,h=q(),i=(r(),c>a?"portrait":a>c?"landscape":"square"),j=0,k=0;k<d.length&&(f=d[k],"string"==typeof f&&(f=d[k]={url:f}),f.pixelRatio&&"auto"!==f.pixelRatio&&parseFloat(f.pixelRatio)!==g||f.deviceOrientation&&f.deviceOrientation!==h||f.windowOrientation&&f.windowOrientation!==h||f.orientation&&f.orientation!==i||(j=k,e=a,"auto"===f.pixelRatio&&(a*=g),!(f.width>=e)));k++);return d[Math.min(k,j)]},e=function(a,b){if("string"==typeof a)a=a.replace(/{{(width|height)}}/g,b);else if(a instanceof Array)for(var c=0;c<a.length;c++)a[c].src?a[c].src=e(a[c].src,b):a[c]=e(a[c],b);return a};return function(b,f){for(var g=b.width(),h=b.height(),i=[],j=function(a,b){return"width"===b?g:"height"===b?h:a},k=0;k<f.length;k++)if(a.isArray(f[k])){f[k]=c(f[k]);var l=d(g,h,f[k]);i.push(l)}else{"string"==typeof f[k]&&(f[k]={url:f[k]});var m=a.extend({},f[k]);m.url=e(m.url,j),i.push(m)}return i}}(),h=function(a){return e.test(a.url)||a.isVideo},i=function(b,c,d,e,f){var g=[],i=function(a){for(var b=0;b<g.length;b++)if(g[b].src===a.src)return g[b];return g.push(a),a},j=function(a,b,c){"function"==typeof b&&b.call(a,c)};return function b(c,d,e,f,g){if("undefined"!=typeof c){a.isArray(c)||(c=[c]),arguments.length<5&&"function"==typeof arguments[arguments.length-1]&&(g=arguments[arguments.length-1]),d="function"!=typeof d&&d?d:0,e="function"==typeof e||!e||e<0?c.length:Math.min(e,c.length),f="function"!=typeof f&&f?f:1,d>=c.length&&(d=0,e=0),f<0&&(f=e),f=Math.min(f,e);var k=c.slice(d+f,e-f);if(c=c.slice(d,f),e=c.length,!e)return void j(c,g,!0);for(var l,m=0,n=function(){m++,m===e&&(j(c,g,!k),b(k,0,0,f,g))},o=0;o<c.length;o++)h(c[o])||(l=new Image,l.src=c[o].url,l=i(l),l.complete?n():a(l).on("load error",n))}}}(),j=function(b){for(var c=[],d=0;d<b.length;d++)"string"==typeof b[d]?c.push({url:b[d]}):a.isArray(b[d])?c.push(j(b[d])):c.push(k(b[d]));return c},k=function(a,e){return(a.centeredX||a.centeredY)&&(b.console&&b.console.log&&b.console.log("jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`"),a.centeredX&&(a.alignX=.5),a.centeredY&&(a.alignY=.5)),a.speed!==c&&(b.console&&b.console.log&&b.console.log("jquery.backstretch: `speed` is deprecated, please use `transitionDuration`"),a.transitionDuration=a.speed,a.transition="fade"),a.resolutionChangeRatioTreshold!==c&&(b.console.log("jquery.backstretch: `treshold` is a typo!"),a.resolutionChangeRatioThreshold=a.resolutionChangeRatioTreshold),a.fadeFirst!==c&&(a.animateFirst=a.fadeFirst),a.fade!==c&&(a.transitionDuration=a.fade,a.transition="fade"),a.scale&&(a.scale=d(a.scale)),l(a)},l=function(a,b){return"left"===a.alignX?a.alignX=0:"center"===a.alignX?a.alignX=.5:"right"===a.alignX?a.alignX=1:(a.alignX!==c||b)&&(a.alignX=parseFloat(a.alignX),isNaN(a.alignX)&&(a.alignX=.5)),"top"===a.alignY?a.alignY=0:"center"===a.alignY?a.alignY=.5:"bottom"===a.alignY?a.alignY=1:(a.alignX!==c||b)&&(a.alignY=parseFloat(a.alignY),isNaN(a.alignY)&&(a.alignY=.5)),a},m={cover:"cover",fit:"fit","fit-smaller":"fit-smaller",fill:"fill"},n=function(c,d,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{}),this.firstShow=!0,k(this.options,!0),this.images=j(a.isArray(d)?d:[d]),this.options.paused&&(this.paused=!0),this.options.start>=this.images.length&&(this.options.start=this.images.length-1),this.options.start<0&&(this.options.start=0),this.isBody=c===document.body;var h=a(b);this.$container=a(c),this.$root=this.isBody?s?h:a(document):this.$container,this.originalImages=this.images,this.images=g(this.options.alwaysTestWindowResolution?h:this.$root,this.originalImages),i(this.images,this.options.start||0,this.options.preload||1);var l=this.$container.children(".backstretch").first();if(this.$wrap=l.length?l:a('<div class="backstretch"></div>').css(this.options.bypassCss?{}:f.wrap).appendTo(this.$container),!this.options.bypassCss){if(!this.isBody){var m=this.$container.css("position"),n=this.$container.css("zIndex");this.$container.css({position:"static"===m?"relative":m,zIndex:"auto"===n?0:n}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"})}this.index=this.options.start,this.show(this.index),h.on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===b.pageYOffset&&(b.scrollTo(0,1),this.resize())},this))},o=function(b){var d=b.transition||"fade";"string"==typeof d&&d.indexOf("|")>-1&&(d=d.split("|")),d instanceof Array&&(d=d[Math.round(Math.random()*(d.length-1))]);var e=b.new,f=b.old?b.old:a([]);switch(d.toString().toLowerCase()){default:case"fade":e.fadeIn({duration:b.duration,complete:b.complete,easing:b.easing||c});break;case"fadeinout":case"fade_in_out":var g=function(){e.fadeIn({duration:b.duration/2,complete:b.complete,easing:b.easing||c})};f.length?f.fadeOut({duration:b.duration/2,complete:g,easing:b.easing||c}):g();break;case"pushleft":case"push_left":case"pushright":case"push_right":case"pushup":case"push_up":case"pushdown":case"push_down":case"coverleft":case"cover_left":case"coverright":case"cover_right":case"coverup":case"cover_up":case"coverdown":case"cover_down":var h=d.match(/^(cover|push)_?(.*)$/),i="left"===h[2]?"right":"right"===h[2]?"left":"down"===h[2]?"top":"up"===h[2]?"bottom":"right",j={display:""},k={};if(j[i]="-100%",k[i]=0,e.css(j).animate(k,{duration:b.duration,complete:function(){e.css(i,""),b.complete.apply(this,arguments)},easing:b.easing||c}),"push"===h[1]&&f.length){var l={};l[i]="100%",f.animate(l,{duration:b.duration,complete:function(){f.css("display","none")},easing:b.easing||c})}}};n.prototype={resize:function(){try{var e=this.options.alwaysTestWindowResolution?a(b):this.$root,f=e.width(),h=e.height(),j=f/(this._lastResizeContainerWidth||0),k=h/(this._lastResizeContainerHeight||0),l=this.options.resolutionChangeRatioThreshold||0;if((f!==this._lastResizeContainerWidth||h!==this._lastResizeContainerHeight)&&(Math.abs(j-1)>=l||isNaN(j)||Math.abs(k-1)>=l||isNaN(k))&&(this._lastResizeContainerWidth=f,this._lastResizeContainerHeight=h,this.images=g(e,this.originalImages),this.options.preload&&i(this.images,(this.index+1)%this.images.length,this.options.preload),1===this.images.length&&this._currentImage.url!==this.images[0].url)){var m=this;clearTimeout(m._selectAnotherResolutionTimeout),m._selectAnotherResolutionTimeout=setTimeout(function(){m.show(0)},this.options.resolutionRefreshRate)}var n,o,p={left:0,top:0,right:"auto",bottom:"auto"},q=this.isBody?this.$root.width():this.$root.innerWidth(),r=this.isBody?b.innerHeight?b.innerHeight:this.$root.height():this.$root.innerHeight(),s=this.$itemWrapper.data("width"),t=this.$itemWrapper.data("height"),u=s/t||1,v=this._currentImage.alignX===c?this.options.alignX:this._currentImage.alignX,w=this._currentImage.alignY===c?this.options.alignY:this._currentImage.alignY,x=d(this._currentImage.scale||this.options.scale);if("fit"===x||"fit-smaller"===x){if(n=s,o=t,n>q||o>r||"fit-smaller"===x){var y=q/r;y>u?(n=Math.floor(r*u),o=r):y<u?(n=q,o=Math.floor(q/u)):(n=q,o=r)}}else"fill"===x?(n=q,o=r):(n=Math.max(r*u,q),o=Math.max(n/u,r));p.top=-(o-r)*w,p.left=-(n-q)*v,p.width=n,p.height=o,this.options.bypassCss||this.$wrap.css({width:q,height:r}).find(">.backstretch-item").not(".deleteable").each(function(){var b=a(this);b.find("img,video,iframe").css(p)});var z=a.Event("backstretch.resize",{relatedTarget:this.$container[0]});this.$container.trigger(z,this)}catch(a){}return this},show:function(b,d){if(!(Math.abs(b)>this.images.length-1)){var e=this,g=e.$wrap.find(">.backstretch-item").addClass("deleteable"),i=e.videoWrapper,j={relatedTarget:e.$container[0]};e.$container.trigger(a.Event("backstretch.before",j),[e,b]),this.index=b;var k=e.images[b];clearTimeout(e._cycleTimeout),delete e.videoWrapper;var l=h(k);return l?(e.videoWrapper=new p(k),e.$item=e.videoWrapper.$video.css("pointer-events","none")):e.$item=a("<img />"),e.$itemWrapper=a('<div class="backstretch-item">').append(e.$item),this.options.bypassCss?e.$itemWrapper.css({display:"none"}):(e.$itemWrapper.css(f.itemWrapper),e.$item.css(f.item)),e.$item.bind(l?"canplay":"load",function(f){var h=a(this),k=h.parent(),m=k.data("options");d&&(m=a.extend({},m,d));var n=this.naturalWidth||this.videoWidth||this.width,p=this.naturalHeight||this.videoHeight||this.height;k.data("width",n).data("height",p);var q=function(a){return m[a]!==c?m[a]:e.options[a]},r=q("transition"),s=q("transitionEasing"),t=q("transitionDuration"),u=function(){i&&(i.stop(),i.destroy()),g.remove(),!e.paused&&e.images.length>1&&e.cycle(),e.options.bypassCss||e.isBody||e.$container.css("background-image","none"),a(["after","show"]).each(function(){e.$container.trigger(a.Event("backstretch."+this,j),[e,b])}),l&&e.videoWrapper.play()};e.firstShow&&!e.options.animateFirst||!t||!r?(k.show(),u()):o({new:k,old:g,transition:r,duration:t,easing:s,complete:u}),e.firstShow=!1,e.resize()}),e.$itemWrapper.appendTo(e.$wrap),e.$item.attr("alt",k.alt||""),e.$itemWrapper.data("options",k),l||e.$item.attr("src",k.url),e._currentImage=k,e}},current:function(){return this.index},next:function(){var a=Array.prototype.slice.call(arguments,0);return a.unshift(this.index<this.images.length-1?this.index+1:0),this.show.apply(this,a)},prev:function(){var a=Array.prototype.slice.call(arguments,0);return a.unshift(0===this.index?this.images.length-1:this.index-1),this.show.apply(this,a)},pause:function(){return this.paused=!0,this.videoWrapper&&this.videoWrapper.pause(),this},resume:function(){return this.paused=!1,this.videoWrapper&&this.videoWrapper.play(),this.cycle(),this},cycle:function(){if(this.images.length>1){clearTimeout(this._cycleTimeout);var b=this._currentImage&&this._currentImage.duration||this.options.duration,c=h(this._currentImage),d=function(){this.$item.off(".cycle"),this.paused||this.next()};if(c){if(!this._currentImage.loop){var e=0;this.$item.on("playing.cycle",function(){var b=a(this).data("player");clearTimeout(e),e=setTimeout(function(){b.pause(),b.$video.trigger("ended")},1e3*(b.getDuration()-b.getCurrentTime()))}).on("ended.cycle",function(){clearTimeout(e)})}this.$item.on("error.cycle initerror.cycle",a.proxy(d,this))}c&&!this._currentImage.duration?this.$item.on("ended.cycle",a.proxy(d,this)):this._cycleTimeout=setTimeout(a.proxy(d,this),b)}return this},destroy:function(c){a(b).off("resize.backstretch orientationchange.backstretch"),this.videoWrapper&&this.videoWrapper.destroy(),clearTimeout(this._cycleTimeout),c||this.$wrap.remove(),this.$container.removeData("backstretch")}};var p=function(){this.init.apply(this,arguments)};p.prototype.init=function(d){var f,g=this,h=function(){g.$video=f,g.video=f[0]},i="video";if(d.url instanceof Array||!e.test(d.url)||(i="youtube"),g.type=i,"youtube"===i){p.loadYoutubeAPI(),g.ytId=d.url.match(e)[2];var j="https://www.youtube.com/embed/"+g.ytId+"?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0&enablejsapi=1&origin="+encodeURIComponent(b.location.origin);g.__ytStartMuted=!!d.mute||d.mute===c,f=a("<iframe />").attr({src_to_load:j}).css({border:0,margin:0,padding:0}).data("player",g),d.loop&&f.on("ended.loop",function(){g.__manuallyStopped||g.play()}),g.ytReady=!1,h(),b.YT?(g._initYoutube(),f.trigger("initsuccess")):a(b).one("youtube_api_load",function(){g._initYoutube(),f.trigger("initsuccess")})}else{f=a("<video>").prop("autoplay",!1).prop("controls",!1).prop("loop",!!d.loop).prop("muted",!!d.mute||d.mute===c).prop("preload","auto").prop("poster",d.poster||"");for(var k=d.url instanceof Array?d.url:[d.url],l=0;l<k.length;l++){var m=k[l];"string"==typeof m&&(m={src:m}),a("<source>").attr("src",m.src).attr("type",m.type||null).appendTo(f)}f[0].canPlayType&&k.length?f.trigger("initsuccess"):f.trigger("initerror"),h()}},p.prototype._initYoutube=function(){var c=this,d=b.YT;c.$video.attr("src",c.$video.attr("src_to_load")).removeAttr("src_to_load");var e=!!c.$video[0].parentNode;if(!e){var f=a("<div>").css("display","none !important").appendTo(document.body);c.$video.appendTo(f)}var g=new d.Player(c.video,{events:{onReady:function(){c.__ytStartMuted&&g.mute(),e||(c.$video[0].parentNode===f[0]&&c.$video.detach(),f.remove()),c.ytReady=!0,c._updateYoutubeSize(),c.$video.trigger("canplay")},onStateChange:function(a){switch(a.data){case d.PlayerState.PLAYING:c.$video.trigger("playing");break;case d.PlayerState.ENDED:c.$video.trigger("ended");break;case d.PlayerState.PAUSED:c.$video.trigger("pause");break;case d.PlayerState.BUFFERING:c.$video.trigger("waiting");break;case d.PlayerState.CUED:c.$video.trigger("canplay")}},onPlaybackQualityChange:function(){c._updateYoutubeSize(),c.$video.trigger("resize")},onError:function(a){c.hasError=!0,c.$video.trigger({type:"error",error:a})}}});return c.ytPlayer=g,c},p.prototype._updateYoutubeSize=function(){var a=this;switch(a.ytPlayer.getPlaybackQuality()||"medium"){case"small":a.video.videoWidth=426,a.video.videoHeight=240;break;case"medium":a.video.videoWidth=640,a.video.videoHeight=360;break;default:case"large":a.video.videoWidth=854,a.video.videoHeight=480;break;case"hd720":a.video.videoWidth=1280,a.video.videoHeight=720;break;case"hd1080":a.video.videoWidth=1920,a.video.videoHeight=1080;break;case"highres":a.video.videoWidth=2560,a.video.videoHeight=1440}return a},p.prototype.play=function(){var a=this;return a.__manuallyStopped=!1,"youtube"===a.type?a.ytReady&&(a.$video.trigger("play"),a.ytPlayer.playVideo()):a.video.play(),a},p.prototype.pause=function(){var a=this;return a.__manuallyStopped=!1,"youtube"===a.type?a.ytReady&&a.ytPlayer.pauseVideo():a.video.pause(),a},p.prototype.stop=function(){var a=this;return a.__manuallyStopped=!0,"youtube"===a.type?a.ytReady&&(a.ytPlayer.pauseVideo(),a.ytPlayer.seekTo(0)):(a.video.pause(),a.video.currentTime=0),a},p.prototype.destroy=function(){var a=this;return a.ytPlayer&&a.ytPlayer.destroy(),a.$video.remove(),a},p.prototype.getCurrentTime=function(a){var b=this;return"youtube"!==b.type?b.video.currentTime:b.ytReady?b.ytPlayer.getCurrentTime():0},p.prototype.setCurrentTime=function(a){var b=this;return"youtube"===b.type?b.ytReady&&b.ytPlayer.seekTo(a,!0):b.video.currentTime=a,b},p.prototype.getDuration=function(){var a=this;return"youtube"!==a.type?a.video.duration:a.ytReady?a.ytPlayer.getDuration():0},p.loadYoutubeAPI=function(){if(!b.YT){a("script[src*=www\\.youtube\\.com\\/iframe_api]").length||a('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo("body");var c=setInterval(function(){b.YT&&b.YT.loaded&&(a(b).trigger("youtube_api_load"),clearTimeout(c))},50)}};var q=function(){if("matchMedia"in b){if(b.matchMedia("(orientation: portrait)").matches)return"portrait";if(b.matchMedia("(orientation: landscape)").matches)return"landscape"}return screen.height>screen.width?"portrait":"landscape"},r=function(){return b.innerHeight>b.innerWidth?"portrait":b.innerWidth>b.innerHeight?"landscape":"square"},s=function(){var a=navigator.userAgent,c=navigator.platform,d=a.match(/AppleWebKit\/([0-9]+)/),e=!!d&&d[1],f=a.match(/Fennec\/([0-9]+)/),g=!!f&&f[1],h=a.match(/Opera Mobi\/([0-9]+)/),i=!!h&&h[1],j=a.match(/MSIE ([0-9]+)/),k=!!j&&j[1];return!((c.indexOf("iPhone")>-1||c.indexOf("iPad")>-1||c.indexOf("iPod")>-1)&&e&&e<534||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||h&&i<7458||a.indexOf("Android")>-1&&e&&e<533||g&&g<6||"palmGetResource"in b&&e&&e<534||a.indexOf("MeeGo")>-1&&a.indexOf("NokiaBrowser/8.5.0")>-1||k&&k<=6)}()}(jQuery,window);


/* The background image list found on the home page. */
$(window).ready(function() {
	if($('.index-bg-imgs').length>0) {
		$.backstretch([
			"//d3rifeizl63fms.cloudfront.net/ccmstpl/_img/bg01.jpg",
			"//d3rifeizl63fms.cloudfront.net/ccmstpl/_img/bg02.jpg",
			"//d3rifeizl63fms.cloudfront.net/ccmstpl/_img/bg03.jpg",
			"//d3rifeizl63fms.cloudfront.net/ccmstpl/_img/bg04.jpg"
		],{
			duration: 6000,
			fade: 3000
		});
	}
});

/* Shrink the Nav bar once we've scrolled 50px or more down the screen. */
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll >= 50) {
		$(".navbar-inverse").addClass("navbar-scroll");
		$(".navbar-img").addClass("navbar-img-scroll");
	} else {
		$(".navbar-inverse").removeClass("navbar-scroll");
		$(".navbar-img").removeClass("navbar-img-scroll");
	}
});

/* jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
v1.1 (April 7th, 09'):
1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
2) Fixes scroll animation not working in Opera. */
var scrolltotop={
	/* startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control */
	/* scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top). */
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '<i class="fa fa-angle-up backtotop"></i>', /* HTML for control, which is auto wrapped in DIV w/ ID="topcontrol" */
	controlattrs: {offsetx:5, offsety:5}, /* offset of control relative to right/ bottom of window corner */
	anchorkeyword: '#top', /* Enter href value of HTML anchors on the page that should also act as "Scroll Up" links */
	state: {isvisible:false, shouldvisible:false},
	scrollup:function(){
		if (!this.cssfixedsupport) /* if control is positioned using JavaScript */
			this.$control.css({opacity:0}) /* hide control immediately after clicking it */
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
		if (typeof dest=="string" && jQuery('#'+dest).length==1) /* check element set by string exists */
			dest=jQuery('#'+dest).offset().top
		else
			dest=0
		this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
	},
	keepfixed:function() {
		var $window=jQuery(window)
		var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
		var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
		this.$control.css({left:controlx+'px', top:controly+'px'})
	},
	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop()
		if (!this.cssfixedsupport)
			this.keepfixed()
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible) {
			this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
			this.state.isvisible=true
		} else if (this.state.shouldvisible==false && this.state.isvisible) {
			this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
			this.state.isvisible=false
		}
	},
	init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop
			var iebrws=document.all
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest /* not IE or IE7+ browsers in standards mode */
			mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
				.attr({title:''})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body')
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') /* loose check for IE6 and below, plus whether control contains any text */
				mainobj.$control.css({width:mainobj.$control.width()}) /* IE6- seems to require an explicit width on a DIV containing text */
			mainobj.togglecontrol()
			$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup()
				return false
			})
			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol()
			})
		})
	}
}
scrolltotop.init()

/* The ccms_pound_cookie_update() function does two things.
1) It samples the current URI and looks for the # (Pound) symbol.  This symbol is used as a target anchor in URI's like this:
https://abc.com/en/asdf.html#goToHere
If it finds one, it appends it to the language link you just clicked on so that when the page is reloaded, with your new language preference, you automatically scroll back to the same anchor point in your previous URI.  If you were viewing a long page in one language and then ask to change to another language it's just a nice feature which will take you closer to the area you were last looking at.

2) It clears language cookies related to the site already found in the user's browser so that a new one can be written in place when changing your language.  It does this by updating the existing cookie to an expired date in the past first. */
function ccms_pound_cookie_update(lng) { 
	var res = location.href.split(/#/)[1];
	if(res) {
		document.getElementById("lng-"+lng).href="/"+lng+"/#"+res;
	}
	
	document.cookie = "ccms_lng={CCMS_LIB:_default.php;FUNC:ccms_lng}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	/* insert a new cookie and get it in the cache, just incase we're dealing with the home page. */
	var d = new Date();
	d.setTime(d.getTime()+(365*24*60*60*1000));
	var expires = d.toUTCString();
	document.cookie = "ccms_lng=" + lng + "; expires=" + expires + "; path=/";
	return;
}

/* The following rules are generally set the same on every page in the site so I'm making them static here. */
var bLazy = new Blazy();
/* Set the active language in the language dropdown list. */
navActiveArray.forEach(function(s) {$("#"+s).addClass("active");});
new WOW({
	boxClass:'wow',
	animateClass:'animated',
	offset:0,
	mobile:false,
	live:true
}).init();
/* Fade in web page. */
$("#no-fouc").delay(100).animate({"opacity": "1"}, 500);

