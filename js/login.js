$(function(){
		//console.log($(".yz-code-login").prev().val())
	$("#login").click(function(){
		var usr = $("#usr").val();
		var pwd = $("#pwd").val();
		$.post("http://47.104.244.134:8080/userlogin.do",
		{name:usr,password:pwd},function(data){
			
			if(data.code==1){
				alert("用户名或密码错误，请重新输入")
			}else{
				if(parseInt($(".yz-code-login").html())!=$("#yzcode").val()){
					alert("验证码输入错误")
				}else{
					window.location.href="index.html?uid="+data.data.token;
					localStorage.setItem("uid",data.data.token);
				}
			}
		})
	})
	
	$(".yz-code-login").click(function(){
		var str="";
				str+=parseInt( Math.random()*10000);
				$(this).html(str)
	})
	
	$("#yzcode").blur(function(){
		if(parseInt($(".yz-code-login").html())!=$(this).val()){
				alert('验证码输入错误')
			}
	})
	//输入框选中时状态
	$(".login-mess").find("li").find("input").focus(function(){
		$(this).css({"border-color":"#8dc63f"})
		 $(this).prev().css({"background-color":"#8dc63f","color":"white"})
	}).blur(function(){
		$(this).css({"border-color":"#cecece","outline":"none"})
		 $(this).prev().css({"background-color":"","color":""})
	})

})
