$(".all").children("span").on("click",function(){
		
			$(".box").stop().toggle()
		})
		
		//最低价-最高价表单获取和失去焦点时,placeholder的变化
		$(".nocolor").children(".low").on("focus",function(){
			$(this).get(0).placeholder=""
		})
		$(".nocolor").children(".low").on("blur",function(){
			$(this).get(0).placeholder="最低价"
		})
		
		$(".nocolor").children(".hei").on("focus",function(){
			$(this).get(0).placeholder=""
		})
		$(".nocolor").children(".hei").on("blur",function(){
			$(this).get(0).placeholder="最高价"
		})