$(function(){
	console.log(window.location.href)
	 var id = location.search.split("=")[1];
	 console.log(id)
	 $(".categories").mouseover(function(){
	 	$("#allSort").css({"display":"block"})
	 })
	 $(".booksort2").mouseleave(function(){
	 	$("#allSort").css({"display":"none"})
	 })
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
			//添加购物车的点击事件
			$("#list-l").find("li input").click(function() {
				$(this).css({})
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
	})
})
