
		$.ajax({
			url:'/api/user',
			success:function(res){
			 if(res.error===0){
			$(".logon").get(0).innerHTML=""
			$(".blchid").html("欢迎用户：" + res.data.username)
			$(".span").stop().hide()
			$('.zhuce').stop().hide()
		}else{
			$(".logon").get(0).innerHTML="请登录"
			$(".span").stop().show()
			$('.zhuce').stop().show()
		}
		
		 if(res.error===0){
			$(".deng").html("已登录")
			$(".deng").attr("href","#")
			$(".reg").html("注销")
			$(".reg").attr("href","#")
			
		}
			}
		})

		$(".cq").on("click",function(){
			$.ajax({
				url:'/api/logout',
				success:function(res){
					location.reload()
				}
			})
		})

		$(".reg").on("click",function(){
			$.ajax({
				url:'/api/logout',
				success:function(res){
					location.reload()
				}
			})
		})




			
		
		
		
		