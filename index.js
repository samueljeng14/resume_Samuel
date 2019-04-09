$(document).ready(function() {

	var WHeight = $(window).height();
	var WTop = $(window).scrollTop();

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

		setTimeout(function(){
		$(".volume").css('color', '#373737');
		}, 2000)
	});	


	// 聲音部分
	// 背景音效
	$(".first_click").click(function() {
		play_bgm1();
		setTimeout(bgm2_delay,14000);
		setInterval(play_bgm1,28000);
	});

	setTimeout(play, 2000);
	function play(){
		play_bgm1();
		setTimeout(bgm2_delay,14000);
		setInterval(play_bgm1,28000);		
	}

	function bgm2_delay() {
		play_bgm2();
		setInterval(play_bgm2, 28000)
	}

	var bgm1_play = document.getElementById("bgm1");
	function play_bgm1() {
		bgm1_play.play();
	}

	var bgm2_play = document.getElementById("bgm2");
	function play_bgm2() {
		bgm2_play.play();
	}

	$("body").click(function() {
		$("body").removeClass('first_click');
	});

	// 按鈕音效
	$("#animate, #hover").click(function() {
		play_bot();
	});	
	var bot_play = document.getElementById("bot_audio");
	function play_bot() {
		bot_play.currentTime = 0;
		bot_play.play();
	}

	// mute鍵
	$(".fa-volume-up").click(function() {
		$(".fa-volume-up").toggleClass('hide');
		$(".fa-volume-off").toggleClass('show');
		$(".fa-volume-up").css('zIndex', '5');

	// mute功能
		if ($("#bgm1").prop('volume') == 1) {
			$("#bgm1").prop('volume', '0');
			$("#bgm2").prop('volume', '0');
		} else{
			$("#bgm1").prop('volume', '1');
			$("#bgm2").prop('volume', '1');
		}
	});
	// mute顏色
	$(document).scroll(function() {
		console.log($(document).scrollTop());
		if ($(document).scrollTop() <= 250) {
			$(".volume").css('color', 'white');
		} else {
			$(".volume").css('color', '#373737');
		}
	});	
});