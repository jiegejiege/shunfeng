	var i = 0;
	var timer1 = setInterval(function() {
		startMove();
	}, 2000)

	function startMove() {
		i++;
		if(i == $(".lunbo li").length) {
			$(".lunbo").css({
				"left": 0
			});
			i = 1;
		}
		//角标问题；
		//		for (var j=0;j<$("#footid").length;j++) {
		//			$("#footid").find(li).eq(j).className("");
		//			if(i==)
		//		}
		move($(".lunbo")[0], {
			"left": -i * 1000
		})
	}