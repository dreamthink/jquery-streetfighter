$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-action").hide();
		$(".ryu-ready").show();
	})
	$(".ryu").mouseleave(function() {
		$(".ryu-action").hide();
		$(".ryu-still").show();
	})
	$(".ryu").mousedown(function() {
		playHadouken();
		$(".ryu-action").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "1020px"},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "520px");
			}
		);
	})
	$(".ryu").mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	})
	$(".hulk-ryu").mouseenter(function() {
		$(".hulk-ryu-action").hide();
		$(".hulk-ryu-ready").show();
	})
	$(".hulk-ryu").mouseleave(function() {
		$(".hulk-ryu-action").hide();
		$(".hulk-ryu-still").show();
	})
	
	$(".hulk-ryu").mousedown(function() {
		playHadouken();
		$(".hulk-ryu-action").hide();
		$(".hulk-ryu-throwing").show();
		$(".hulk-hadouken").finish().show().animate(
			{"right": "1020px"},
			500,
			function() {
				$(this).hide();
				$(this).css("right", "520px");
			}
		);
	})

	$(".hulk-ryu").mouseup(function() {
		$(".hulk-ryu-throwing").hide();
		$(".hulk-ryu-ready").show();
	})

});


$(document).keydown(function(e) {
	if (e.which === 88) {
		$(".ryu-action").hide();	
		$(".ryu-cool").show();
	}
});

$(document).keyup(function(e) {
	if (e.which === 88) {
		$(".ryu-cool").hide();
		$(".ryu-still").show();
	}
});

$(document).keydown(function(a) {
	if (a.which === 77) {
		$(".hulk-ryu-action").hide();
		$(".hulk-ryu-cool").show();
	}
})

$(document).keyup(function(a) {
	if (a.which === 77) {
		$(".hulk-ryu-cool").hide();
		$(".hulk-ryu-ready").show();
	}
})


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

