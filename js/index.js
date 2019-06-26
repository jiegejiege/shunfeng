$(function() {
	//顶部小广告，点击X时，消失
	$(".topromo").find("span").click(function() {
		$(this).parent().slideUp();
	})
	//顶部广告延迟器，5秒后，广告自动消失
	setTimeout(function() {
		$(".topshow").slideUp()
	}, 3000)
	//点击删除优惠包
	$(".login").find("em,i").click(function() {
		$(".login").find("em,i").remove()
	})
	//鼠标经过出现地址
	$(".ml").find("span").mouseover(function() {
		$(".ml").find(".address").css({
			"display": "block"
		}).mouseleave(function() {
			$(this).css({
				"display": "none"
			});
			//console.log($(this))
		})
	})
	$(".cityTop").find("a").click(function() {
		$(".ml").find(".address").css({
			"display": "none"
		})
	})

	$(".side-panel").find(".icon-gouwuche").mouseover(function() {
		$(".cart-shopping").animate({
			right: "50px"
		}, 500).mouseleave(function() {
			$(this).animate({
				right: "-400px"
			}, 500)
		})
	})
	$(".side-panel").find(".icon-zuji").mouseover(function() {
		$(".history").animate({
			right: "50px"
		}, 500).mouseleave(function() {
			$(this).animate({
				right: "-400px"
			}, 500)
		})
	})
	$(".side-panel").find(".icon-icon").mouseover(function() {
		$(".appItem").animate({
			right: "50px"
		}, 500).mouseleave(function() {
			$(this).animate({
				right: "-400px"
			}, 500)
		})
	})
	$(".side-panel").find(".icon-icon_huaban").click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	})
	$(".side-panel").find(".icon-zan").click(function() {
		$('html,body').animate({
			scrollTop: 2300
		}, 500);
	})
	$(".mt3").find(".right").find("li").mouseover(function() {
		console.log($(this))
		$(this).css({
			"background-color": "#76ac25"
		}).mouseleave(function() {
			$(this).css({
				"background-color": "white"
			})
		})
	})
//	//搜索框
//				$("#searchForm").on("input",function(){
//					$.ajax({
//						type:"get",
//						url:"http://www.sfbest.com/productlist/keysearch?callback=?&q="+$(this).val()",
//						async:true,
//						success:function(data){
//					var str=data;
//					let arr = str.split("|");
//					var str1="";
//					for (var i=1;i<arr.length;i+=2) {
//						str1+=`<li><a href="https://www.baidu.com/s?wd=${data[i]}">${arr[i]}</a></li>`
//					}
//					$("#search-ul").html(str1)	
//						}
//					})});

	//获取菜单
	$.get("http://47.104.244.134:8080/goodstypelist.do", {
		l: 1
	}, function(data) {
		var str = "";
		//console.log(data)
		for(var i = 0; i < data.length; i++) {
			str += `
				<li class="booksort-l1-1" id=${data[i].id}>${data[i].name}</li>
			`;
		}
		$(".booksort-l1").html(str);
		$(".booksort-l1").find("li").mouseover(function() {
		//	console.log($(this).attr("id"))
			var li_id = $(this).attr("id");
			$.get("http://47.104.244.134:8080/goodstypelist.do", {
				l: 2
			}, function(data) {
				var str = "";
				console.log(data)
				for(var i = 0; i < data.length; i++) {
					if(data[i].parentid == li_id) {
						str += `
				<div><a href="list.html?listid=${data[i].id}">${data[i].name}</a></div>
			`;
					}
				}
			//	console.log(str)
				$(".booksort2").html(str);
				$(".booksort-l1-1").mouseover(function() {
					$(".booksort2").css({
						"display": "block"
					}).mouseleave(function() {
						$(this).css({
							"display": "none"
						})
					})
				})
			})
		})

	})

	//倒计时
	function daojishi() {
		var odate1 = new Date();
		var odate2 = Date.parse("2019-6-30 10:07:00");
		var a = odate2 - odate1;
		var ss = a / 1000;
		var hour = Math.floor(ss / 60 / 60);
		var min = Math.floor(ss / 60 % 60);
		var sec = Math.floor(ss % 60);
		$("#nowHour1").html(Math.floor(hour / 10))
		$("#nowHour2").html(hour % 10);
		$("#nowMin1").html(Math.floor(min / 10))
		$("#nowMin2").html(min % 10);
		$("#nowSencond1").html(Math.floor(sec / 10))
		$("#nowSencond2").html(sec % 10);
		if(a <= 0) {
			box.innerHTML = "停止";
			clearInterval(timer);
		}
	};
	daojishi();
	var timer = setInterval(daojishi, 1000)

	//轮播
	//console.log($(".lunbo li").length)

})