$(function() {
	var token = localStorage.getItem("uid")
	$.get("http://47.104.244.134:8080/cartlist.do", {
		token: token
	}, function(data) {
		console.log(data)
		var str = "";
		for(var i = 0; i < data.length; i++) {
		var data1=data[i];
				str +=`<li data-id="${data1.id}">
		<input class="chx" type="checkbox" checked="checked">
		<img src ="${data1.goods.picurl}">
		<span>${data1.goods.name}</span>
		<span>&#165;<i class="dj">${data1.goods.price}</i></span>
		<span class= "down">-</span>
		<input class="num" type="text"value="${data1.count}">
		<span class= "up">+</span>
		<span><b>&#165;</b>  <i class ="zongjia">${data1.count*data1.goods.price}</i></span>
		<input class="del" type=button value="删除">
		</li>`
				

		}
		console.log(str)
		$("#item").html(str)
	})
})