
				 class Reg{
						  constructor() {
							  this.url="/api/reg"
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
									type:'POST',
									url:this.url,							
								  data:{
									  username:$("#user").val(),
									  password:$("#pass").val()
								  },
								  success:function(res){
										if(res.error===0){
											$("#msg").html("注册成功,2秒后跳转到登陆页面")
											  setInterval(()=>{
												location.href="login.html"
											  },2000)
										}else{
											$("#msg").html("注册失败，账号已被占用")
											
								     setTimeout(()=>{
								     	$("#msg").stop().hide()
							       	},3000)
										}
								  }
							  })
						  }
						}
						
						new Reg()
						
						
						