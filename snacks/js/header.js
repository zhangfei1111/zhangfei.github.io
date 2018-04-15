//小屏nav下拉
$("#header_btn").on("click", function() {
	$("#header_nav_list").animate({
		"height": function() {
			if($("#header_nav_list").css("height") == "0px") {
				return $(window).height();

			} else {
				return 0;

			}
		}()
	});
	//nav等号转成×
	if($("#header_nav_list").css("height") == "0px") {
		$("#header_btn hr:nth-of-type(1)").addClass(function() {
			return "move1";
		})
		$("#header_btn hr:nth-of-type(2)").addClass(function() {
			return "move2";
		})
		$("#header_btn hr:nth-of-type(1)").removeClass(function() {
			return "move3";
		})
		$("#header_btn hr:nth-of-type(2)").removeClass(function() {
			return "move4";
		})
	} else {
		$("#header_btn hr:nth-of-type(1)").addClass(function() {
			return "move3";
		})
		$("#header_btn hr:nth-of-type(2)").addClass(function() {
			return "move4";
		})
		$("#header_btn hr:nth-of-type(1)").removeClass(function() {
			return "move1";
		})
		$("#header_btn hr:nth-of-type(2)").removeClass(function() {
			return "move2";
		})
	}
})
//回到顶部
var back = document.getElementById("back");
var timer = null;
window.onscroll = function() {
	var h = document.body.scrollTop;
	if(h > 150) {
		back.style.display = "block"
	} else {
		back.style.display = "none"
	}
}
back.onclick = function() {
	clearInterval(timer);
	var t = 0;
	var d = 100;
	var start = document.body.scrollTop;
	var end = 0;
	var change = end - start;
	timer = setInterval(function() {

		if(t >= d) {
			clearInterval(timer);
		}
		t++;
		document.body.scrollTop = Tween.Back.easeOut(t, start, change, d);
	}, 10);
};