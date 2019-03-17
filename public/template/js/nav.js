//input表单搜索
		$("#top").find(".txt").on("focus",function(){
			$(this).get(0).placeholder=""
		})
		$("#top").find(".txt").on("blur",function(){
			$(this).get(0).placeholder="请输入搜索内容"
		})
		
		//导航栏
		$("#nav").find(".active").hover(function(){
			$(this).children(".cai").show()
		},function(){
			$(this).children(".cai").stop().hide()
		})
		$(".cai").children("ul").children("li").on("mousemove",function(){
			$(this).css({background:"#FF5400"}).siblings().css({background:"blue"})
		})
		
		
		