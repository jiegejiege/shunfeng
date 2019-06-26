//缓冲运动json格式为调用时是move(oDiv,{"width":200,"height":500,"opacity":50})；属性名一定要加引号；
				function move(domobj,json){
					clearInterval(domobj.timer);
					domobj.timer = setInterval(function(){
					//假设都达到了目标值 
					var flag = true;
					for(var attr in json){
						if(attr == "opacity"){
							var iCur = parseInt(getStyle(domobj,"opacity")*100);
						}else{
							var iCur = parseInt(getStyle(domobj,attr));
						}
						var iTarget = json[attr];
						var iSpeed = (iTarget- iCur)/8;
						iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
						if(attr == "opacity"){
							domobj.style.opacity = (iCur+iSpeed)/100;
							domobj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")"
						}else{
							domobj.style[attr] = iCur+iSpeed + "px";
						}
						if(iSpeed !=0){
							flag = false;
						}
					}
					if(flag){
						clearInterval(domobj.timer);
					}
				},20)
			}
			function getStyle(domobj,attr){
				if(getComputedStyle){
					return getComputedStyle(domobj,null)[attr];
				}
				return domobj.currentStyle[attr];
			}