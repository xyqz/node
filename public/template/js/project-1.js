	$(".jian").on("click",function(){
			if($("#jjys").val()>1){
				$("#jjys").get(0).value--
			}else{
				$("#jjys").get(0).value=1
			}
		})
		
		$(".jia").on("click",function(){
			$("#jjys").get(0).value++
		})
		
		
		$(window).on("scroll",function(){
			if($("html").get(0).scrollTop>0){
				$("#gotop").children("img").stop().fadeIn()
			}else{
				$("#gotop").children("img").stop().fadeOut()
			}
		})
		
		$("#gotop").on("click",function(){
			$("html").stop().animate({
				scrollTop:0
			},1000)
		})
		