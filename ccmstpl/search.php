<?php
header("Content-Type: text/html; charset=UTF-8");
header("Cache-Control: public, must-revalidate, proxy-revalidate");
?>{CCMS_DB_PRELOAD:all,search}<!DOCTYPE html>

<html id="no-fouc" dir="{CCMS_LIB:_default.php;FUNC:ccms_lng_dir}" lang="{CCMS_LIB:_default.php;FUNC:ccms_lng}" style="opacity: 0;">
	<head>
		<meta charset="utf-8">
		<title dir="{CCMS_DB_DIR:search,title}">{CCMS_DB:search,title}</title>
		<meta name="description" content="">
		
		{CCMS_TPL:header-head.html}
		
		<style type="text/css">
			.gsc-adBlock { opacity: .3 !important;}
			
			input.gsc-input {
				outline: none !important;
				display: block !important;
				width: 99% !important;
				height: 34px !important;
				margin: 0px 2px 0px 0px !important;
				font-size: 14px !important;
				line-height: 1.42857143 !important;
				color: #555 !important;
				background-color: #fff !important;
				background-image: none !important;
				border: 1px solid #ccc !important;
				border-radius: 4px !important;
			}
			
			input.gsc-search-button {
				color: #fff !important;
				background-color: #337ab7 !important;
				border-color: #2e6da4 !important;
				display: inline-block !important;
				padding: 6px 12px !important;
				/* margin-bottom: 10px !important; */
				font-size: 14px !important;
				font-weight: 400 !important;
				line-height: 1.42857143 !important;
				text-align: center !important;
				white-space: nowrap !important;
				vertical-align: middle !important;
				-ms-touch-action: manipulation !important;
				touch-action: manipulation !important;
				cursor: pointer !important;
				-webkit-user-select: none !important;
				-moz-user-select: none !important;
				-ms-user-select: none !important;
				user-select: none !important;
				background-image: none !important;
				border: 1px solid transparent !important;
				border-radius: 4px !important;
				height: auto !important;
			}
			
			input.gsc-search-button:hover {
				color: #fff !important;
				background-color: #286090 !important;
				border-color: #204d74 !important;
			}
		</style>
		<script>var navActiveArray = ["lng-{CCMS_LIB:_default.php;FUNC:ccms_lng}"];</script>
	</head>
	<body class="index-bg-imgs">
		<div class="hatch_pattern"></div>
		<div class="backstretch"></div>
		
		{CCMS_TPL:header-body.html}
		
		<main>
			<section id="section-design" class="wow fadeInLeft" style="margin-top:auto;">
				<div class="container">
					<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="//d3rifeizl63fms.cloudfront.net/ccmstpl/_img/search.png" alt="Search" class="b-lazy flo-left section-img" />
					<div class="container">
						<div class="row">
							<div class="col-md-12" dir="{CCMS_LIB:_default.php;FUNC:ccms_lng_dir}">
								<h1 dir="{CCMS_DB_DIR:all,search:1}">{CCMS_DB:all,search}</h1>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 col-sm-12 col-xs-12">
<?if($CFG["GOOGLE_CUSTOM_SEARCH_ENGINE_CODE"] != ""):?>
<script>
	var gcsForm = function() {
		var element = google.search.cse.element.getElement('gcsForm');
		element.execute('<?=htmlspecialchars($_REQUEST["search"]);?>');
	};
	var myCallback = function() {
		if (document.readyState == 'complete') {
			gcsForm();
		} else {
			google.setOnLoadCallback(gcsForm, true);
		}
	};
	window.__gcse = {
		callback: myCallback
	};
	(function() {
		var cx = '<?=$CFG["GOOGLE_CUSTOM_SEARCH_ENGINE_CODE"];?>';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx + '&language=<?=$CLEAN["ccms_lng"];?>';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	})();
</script>
<gcse:search enableAutoComplete="true" gname="gcsForm"></gcse:search>
<?else:?>
				<p>
					Google Search Results / Custom Search Engine (CSE)<br />
					<br />
					To add Google Custom Search results to this page visit <a href="//cse.google.com/cse/">cse.google.com/cse/</a> and create a new CSE code.  Copy the code (e.g.: 010508916976745981301:bdscggyxyle) into the $CFG["GOOGLE_CUSTOM_SEARCH_ENGINE_CODE"] variable in your config file and you are done.
					</p>
<?endif;?>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		
		{CCMS_TPL:footer.html}
		
		{CCMS_LIB:_default.php;FUNC:ccms_user_admin_slider}
		<script>
			function loadFirst(e,t){var a=document.createElement("script");a.async = true;a.readyState?a.onreadystatechange=function(){("loaded"==a.readyState||"complete"==a.readyState)&&(a.onreadystatechange=null,t())}:a.onload=function(){t()},a.src=e,document.body.appendChild(a);}
			
			var cb = function() {
				var l = document.createElement("link");
				l.rel = "stylesheet";
				l.href = "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css";
				var h = document.getElementsByTagName("head")[0];
				h.parentNode.insertBefore(l, h);
				
				var l = document.createElement("link");
				l.rel = "stylesheet";
				l.href = "//d3rifeizl63fms.cloudfront.net/ccmstpl/_css/main.min.css";
				var h = document.getElementsByTagName("head")[0];
				h.parentNode.insertBefore(l, h);
				
				var l = document.createElement("link");
				l.rel = "stylesheet";
				l.href = "//fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto:100,400";
				var h = document.getElementsByTagName("head")[0];
				h.parentNode.insertBefore(l, h);
				
				var l = document.createElement("link");
				l.rel = "stylesheet";
				l.href = "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
				var h = document.getElementsByTagName("head")[0];
				h.parentNode.insertBefore(l, h);
				
				var l = document.createElement("link");
				l.rel = "stylesheet";
				l.href = "//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
				var h = document.getElementsByTagName("head")[0];
				h.parentNode.insertBefore(l, h);
			};
			
			var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
			if (raf) raf(cb);
			else window.addEventListener('load', cb);
			
			function loadJSResources() {
				/* Jquery required by Bootstrap. */
				loadFirst("//code.jquery.com/jquery-3.2.1.min.js", function() {
					/* Popper required by Bootstrap. */
					loadFirst("//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js", function() {
						/* Bootstrap (http://getbootstrap.com/) is a responsive website build framework. */
						loadFirst("//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js", function() {
							/* Blazy (https://github.com/dinbror/blazy) is a lazy image loader. */
							loadFirst("//cdn.jsdelivr.net/blazy/latest/blazy.min.js", function(){ 
								/* Wow (http://mynameismatthieu.com/WOW/) is used to generates animations when you scroll to specific locations. */
								loadFirst("//cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js", function() {
									/* Zenscroll (https://zengabor.github.io/zenscroll/) creates smooth animated scrolling on the page to any inline link. */
									loadFirst("//cdnjs.cloudflare.com/ajax/libs/zenscroll/4.0.0/zenscroll-min.js", function() {
										/* Main contains all of the javascript calls that might be used across the entire site. */
										loadFirst("//d3rifeizl63fms.cloudfront.net/ccmstpl/_js/main.min.js", function() {
											

											
										});
									});
								});
							});
						});
					});
				});
			}
			
			<!-- { CCMS_TPL:season-fall.html} -->
			<!-- { CCMS_TPL:season-winter.html} -->
			
			if(window.addEventListener) {
				window.addEventListener("load", loadJSResources, false);
			} else if(window.attachEvent) {
				window.attachEvent("onload", loadJSResources);
			} else {
				window.onload = loadJSResources;
			}
		</script>
		
	</body>
</html>