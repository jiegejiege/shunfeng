$(function(){
	console.log(window.location.href)
	 var id = location.search.split("=")[1];
	 console.log(id)
	$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:id,page:1,limit:13},function(data){
			
			var data=data.data;
			console.log(data)
			var str="";
			for (var i=1;i<data.length;i++) {
				str+=`<li>
				<a href="detail.html?id=${data[i].id}"><img src="${data[i].picurl}"/></a>
				<p>${data[i].name}</p>
				<p>${data[i].typename}</p>
				<input type="button" data-id="${data[i].id}" value="添加购物车" /></li>`;
			}
			$("#list-l").html(str);
			$("#list-l").find("li input").click(function() {
			var uid = localStorage.getItem("uid")
			var gid = $(this).attr("data-id")
			//console.log(gid)
			$.get("http://47.104.244.134:8080/cartsave.do", {
					gid: gid,
					token: uid
				},
				function(data) {
					//alert("添加成功");
				});
		})
//			oUl.innerHTML=str;
//			var cart=new Cart();
//			var aInput=document.querySelectorAll("input");
//			for (let i=0;i<aInput.length;i++) {
//				aInput[i].onclick=function(){
//					var id=aInput[i].getAttribute("data-id");
//					console.log(id)
//					cart.addData(id,1);
//				}
//			}
	})
})
