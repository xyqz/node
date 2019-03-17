	
			 class Deng{
				constructor() {
					this.url='/api/login'
					this.init()
				}
				init(){
					var that=this
					$("#btn").click(function(){
						that.load()
					})
				}
				load(){
					$.ajax({
						type:"POST",
						url:this.url,
						data:{
							username:$("#user").val(),
							password:$("#pass").val()
						},
						success:function(res){
							if(res.error===0){
								$("#msg").html("登录成功,即将跳转到首页")
								setInterval(()=>{
									location.href="index.html"
								},1000)
							}else{
								$("#msg").html("用户名或密码有误")
							}
						}
					})
				}
			}
			new Deng()
		


             $(".zhuxiao").on("click",function(){
	 			$.ajax({
				url:'/api/logout',
				success:function(res){
				location.reload()
				}
				})
	 			})