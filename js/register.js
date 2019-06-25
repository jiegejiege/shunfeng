$(function(){
$("#tel").blur(function(){
	
	$.get("http://47.104.244.134:8080/username.do",{username:$(this).val()}).done(data=>{
				if(data.code==0){
				$(this).next().css({"opacity":"1"})	
				}else{
				$(this).next().css({"opacity":"0"})	
				}
			})
})

//验证密码是否符合要求
        $("#pas").blur(function(){
            var str = $("#pas").val();
          	var reg = /^[\w]{6,12}$/;
            if(reg.test(str)){
               $(this).next().css({"opacity":"0"})	
            }else{
              $(this).next().css({"opacity":"1"})	
            }
           passPower(); 

        });
        //验证密码是否一致
        $("#pas2").blur(function(){
        	if($(this).val()==$("#pas").val()){
               $(this).next().css({"opacity":"0"})	
            }else{
              $(this).next().css({"opacity":"1"})	
            }
        })
        //验证验证码是否匹配
        $("#yzcode").blur(function(){
        	//console.log($(this).nextAll("b"))
        	if($(this).val()==parseInt($(".yz-codeimg").html())){
        		console.log("aa")
        		$(this).nextAll("b").css({"opacity":"0"})
        	}else{
        		$(this).nextAll("b").css({"opacity":"1"})
        	}
        })
        //切换验证码
        $(".yz-codeimg,.huanyihuan").click(function(){
				var str="";
				str+=parseInt( Math.random()*10000);
				$(".yz-codeimg").html(str)
				
        })
        function passPower(){
        	var c=0,d=0,e=0;
				var str=$("#pas").val();
				var sum=0;
				for (var i=0;i<str.length;i++) {
					var a=str.charCodeAt(i) 
					if(a>=48&&a<=57){
						 c=1;
					}
					if(a>=65&&a<=90){
						d=1;
					}
					if(a>=97&&a<=122){
						e=1;
					}
				}
				sum=c+d+e;
				console.log($(".default"))
				$(".default").css({"background":"#c4c4c4"})
				if(sum==1){
					$(".default").eq(0).css({"background":"#6e9b0c"})
				}
				if(sum==2){
					$(".default").eq(0).css({"background":"#6e9b0c"})
					$(".default").eq(1).css({"background":"#6e9b0c"})
				}
				if(sum==3){
					$(".default").eq(0).css({"background":"#6e9b0c"})
					$(".default").eq(1).css({"background":"#6e9b0c"})
					$(".default").eq(2).css({"background":"#6e9b0c"})
				}
        }
		
		$('#register-now').click(function(){
			console.log("zhuce")
			var tel=$("#tel").val();
			var pas=$("#pas").val();
			console.log($("#tel").val(),$("#pas").val())
			$.post("http://47.104.244.134:8080/usersave.do",{
				username:tel,
				password:pas,
				email:tel+"@163.com",
				sex:"1"
			},function(data){
				if(data.code == 0){
                            window.location.href="index.html"
                }
			})
		})









})