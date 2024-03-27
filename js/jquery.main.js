var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
	$("a.fancybox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'overlayOpacity':	0.7,
		'speedIn'		:	300, 
		'speedOut'		:	300, 
		'titlePosition'	:	'over'
	});
	$(".focus_me").focus();
});

$(document).ready(function(){
	
	// HOMEPAGE SLIDES
	var _timer = 1,
			$slides = $(".slider_content"),
			_total = $slides.length,
			_time  = 1000, // Initial time before anim begins
			_anim_time  = 1000, // Duration of movement
			$sliderWrap = $("#slider_wrap"),
			currentSlide = 0;

	$sliderWrap.css("width", _total*600);

	$sliderWrap.bind("next_slide", function() {

		nextSlide = currentSlide++;
		if (nextSlide >= _total) { $sliderWrap.trigger("reset"); return false; }

		$sliderWrap.clearQueue().animate({ left: -nextSlide*600 }, _anim_time, "swing", function(){

			$("#slider_nav li").removeClass("active").eq(nextSlide+1).addClass("active");

				_time = 5300; //reset anim time after initial slide
	
				if(_timer == 1) {
					timer();
				}
		});
	});

	// reset slider to first position 
	$sliderWrap.bind("reset", function() {
			currentSlide = 0;
			$sliderWrap.fadeOut(500, function(){
				$("#slider_nav li").removeClass("active");
				$(this).css("left", "0").fadeIn(500, function(){
					$sliderWrap.trigger("next_slide");
				});
			});
	});

	function timer() {
			$sliderWrap.animate({opacity:"1"}, _time, function(){
				if(_timer ==1) {
					$sliderWrap.trigger("next_slide");
				}
			});
	}
	
	// HOMEPAGE SLIDE NAV
	$("#slider_nav a").click(function(e){
		e.preventDefault();
		_timer = 0;
		
		if ($(this).is(".next")) {
			$sliderWrap.trigger("next_slide")
		} 
		else if ($(this).is(".prev")) {
			currentSlide = currentSlide - 2;
			if (currentSlide < 0) currentSlide = 0; // no negative values
			$sliderWrap.trigger("next_slide");
			
		} 
		else { // dot click
			currentSlide = $(this).attr("href").slice("-1");
			$sliderWrap.trigger("next_slide");
		}
	});

	timer();
	
});


}
/*
     FILE ARCHIVED ON 04:50:07 Feb 18, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:26:37 Feb 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 227.925
  exclusion.robots: 126.322
  exclusion.robots.policy: 126.308
  xauthn.identify: 85.395
  xauthn.chkprivs: 40.487
  RedisCDXSource: 0.919
  esindex: 0.016
  LoadShardBlock: 77.623 (3)
  PetaboxLoader3.datanode: 80.769 (4)
  CDXLines.iter: 19.618 (3)
  load_resource: 52.331
  PetaboxLoader3.resolve: 23.535
*/