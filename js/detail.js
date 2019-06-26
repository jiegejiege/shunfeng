$(function() {
	var id = location.search.split("=")[1];
	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		id: id
	}, function(data) {
		console.log(data);
		var str = "";
		str = `
		<div id="Zoom">
			<div id="midArea">
				<img src="${data.picurl}" />
				<div id="zoom"></div>
			</div>
			<div id="bigArea">
				<img src="${data.picurl}" />
			</div>
			<ul id="smalArea">
				<li><img src="${data.picurl}" /></li>
			</ul>
			<div class="detail">
				<p>${data.name}</p>
				<p>评级:${data.star}颗星</p>
			<p>${data.price}</p>
			<p>
				<span>-</span><input type="text" value="1" class="num"><span>+</span>
				<input type="button" class="btn" value="加入购物车" data-id=${data.id}>
			</p>
			</div>
		</div>
		`
		$("body").html(str);
		$("#midArea").mousemove(function(e) {
			$("#bigArea img").attr({
				src: $(this).attr("src")
			}).parent().css({
				"display": "block"
			});
			var a = $("#zoom").innerWidth();
			var b = $("#zoom").innerHeight();
			var x = e.pageX - a / 2;
			var y = e.pageY - b / 2;
			var maxWidth = $(this).innerWidth() - $("#zoom").innerWidth();
			var maxHeigth = $(this).innerHeight() - $("#zoom").innerHeight();
			x = x >= maxWidth ? maxWidth : x < 0 ? 0 : x;
			y = y <= 0 ? 0 : y >= maxHeigth ? maxHeigth : y;
			$("#zoom").css({
				"display": "block"
			}).offset({
				top: y,
				left: x
			})
			var c = $(this).width();
			var d = $(this).height();
			var e = $("#bigArea img").width();
			var f = $("#bigArea img").height();
			var X = x / c * e;
			var Y = y / d * f;
			//console.log(x, y, X, Y, c, e)
			$("#bigArea img").css({
				top: -Y,
				left: -X
			})
		})
		$("#midArea,#smalArea").mouseleave(function() {
			$("#bigArea").css({
				"display": "none"
			});
			$("#zoom").css({
				"display": "none"
			});
		})
		//console.log($("span").eq(0))
		$("span").eq(0).click(function() {
			var a = $(".num").val();
			a--;
			$(".num").val(a)
			if(a <= 1) {
				$(".num").val("1");
			}

		})
		$("span").eq(1).click(function() {
			var a = $(".num").val();
			a++;
			console.log(a)
			$(".num").val(a)
		})
		$(".btn").click(function() {
			var uid = localStorage.getItem("uid")
			var gid = $(this).attr("data-id")
			$.get("http://47.104.244.134:8080/cartsave.do", {
					gid: gid,
					token: uid
				},
				function(data) {
					alert("添加成功");
				});
		})

	})

	//	$("#smalArea img").on('mouseover', function() {
	//		alert("aa")
	//		var src1 = $(this).attr("src")
	//		$("#midArea img").attr({
	//			src: src1
	//		});
	//	})

})