$(function(){
	//顶部小广告，点击X时，消失
	$(".topromo").find("span").click(function(){
		$(this).parent().slideUp();
	})
	//顶部广告延迟器，5秒后，广告自动消失
	setTimeout(function(){
		$(".topshow").slideUp()
	},500)
	//点击删除优惠包
	$(".login").find("em,i").click(function(){
		$(".login").find("em,i").remove()
	})
	//鼠标经过出现地址
	$(".ml").find("span").mouseover(function(){
		$(".ml").find(".address").css({"display":"block"}).mouseleave(function(){
			$(this).css({"display":"none"});
			//console.log($(this))
		})
	})
	$(".cityTop").find("a").click(function(){
		$(".ml").find(".address").css({"display":"none"})
	})
	
	$(".side-panel").find(".icon-gouwuche").mouseover(function(){
		$(".cart-shopping").animate({right:"50px"},500).mouseleave(function(){
			$(this).animate({right:"-400px"},500)
		})
	})
	$(".side-panel").find(".icon-zuji").mouseover(function(){
		$(".history").animate({right:"50px"},500).mouseleave(function(){
			$(this).animate({right:"-400px"},500)
		})
	})
	$(".side-panel").find(".icon-icon").mouseover(function(){
		$(".appItem").animate({right:"50px"},500).mouseleave(function(){
			$(this).animate({right:"-400px"},500)
		})
	})
	$(".side-panel").find(".icon-icon_huaban").click(function(){
		$('html,body').animate({
                    scrollTop: 0
                }, 500);
	})
	$(".side-panel").find(".icon-zan").click(function(){
		$('html,body').animate({
                    scrollTop: 2300
                }, 500);
	})
	$(".mt3").find(".right").find("li").mouseover(function(){
		console.log($(this))
		$(this).css({"background-color":"#76ac25"}).mouseleave(function(){
			$(this).css({"background-color":"white"})
		})
	})
	
})
