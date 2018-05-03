$(document).ready(function() {

	var WHeight = $(window).height();
	var WTop = $(window).scrollTop();
	// console.log(WTop);
	$("#intro").animate({height: WHeight}, {
		duration: 2000,
		specialEasing:{
			height: "easeOutCubic"
		}
	});

	$("#hover").click(function() {
		$("section").css('display', 'block');
		$(".click_to_go").css({
			'animation-name': 'abc',
			'opacity': '1'
		});
		$(".click_to_go").animate({opacity: 0}, 300);
		$("section").animate({opacity: 1}, 1500);
		// $(".name_card_container").delay(200).animate(
		// 	{top: "22%"}, {
		// 	duration: 100,
		// 	specialEasing:{
		// 		scrollTop: "easeInOutCubic"
		// 	}
		// });
		var after_H = WHeight / 2;
		$("#intro").delay(0).animate(
			{height: after_H}, {
			duration: 1600,
			specialEasing:{
				height: "easeOutQuad"
			}
		});
		$("html, body").delay(700).animate(
			{scrollTop: after_H}, {
			duration: 2000,
			specialEasing:{
				scrollTop: "easeInOutCubic"
			}
		});
		setTimeout(function(){
		$(".click_to_go").css('display', 'none');
		}, 2000)
	});	
});