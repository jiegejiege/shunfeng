$(function() {
	var id = location.search.split("=")[1];
	console.log(id)
		 $(".categories").mouseover(function(){
	 	$("#allSort").css({"display":"block"})
	 })
	 $(".booksort2").mouseleave(function(){
	 	$("#allSort").css({"display":"none"})
	 })
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
			<p>价格：${data.price}</p>
			<p>
				<span id="reduce">-</span><input type="text" value="1" class="num" id="num"><span id="plus">+</span>
				<input type="button" class="btn" value="加入购物车" data-id=${data.id} id="btn">
			</p>
			</div>
		</div>
		`
		$("#detail1").html(str);
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
			var maxWidth = $(this).innerWidth() - $("#zoom").innerWidth()+75;
			var maxHeigth = $(this).innerHeight() - $("#zoom").innerHeight()+252;
			x = x >= maxWidth ? maxWidth : x <= 75 ? 75 : x;
			y = y <= 252 ? 252 : y >= maxHeigth ? maxHeigth : y;
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
			var X = (x-75) / c * e;
			var Y = (y-252) / d * f;
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
		//数量减少按钮
		$("#reduce").click(function() {
			var a = $("#num").val();
			a--;
			$("#num").val(a)
			if(a <= 1) {
				$("#num").val("1");
			}

		})
		//数量增加按钮
		$("#plus").click(function() {
			var a = $("#num").val();
			a++;
			$("#num").val(a)
		})
		//加入购物车按钮
		$("#btn").click(function() {
			var uid = localStorage.getItem("uid")
			var gid = $(this).attr("data-id")
			var n=$(".num").val();
			for (var i=0;i<n;i++) {
					$.get("http://47.104.244.134:8080/cartsave.do", {
					gid: gid,
					token: uid
				},
				function(data) {
					console.log(data)
				});
			}
			alert("共添加"+n+"件商品到购物车")
		})

	})
})