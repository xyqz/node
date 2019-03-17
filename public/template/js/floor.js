class Storey{
			constructor() {
			    this.li=$("#floor").find("li")
				this.indus=$(".indus")
				this.init()
			}
			init(){
				var that=this
				this.li.on("click",function(){
					$(this).css({background:"red",color:"blue"}).siblings().css({background:"blue",color:"white"})
					$("html").stop().animate({
						scrollTop:$(that.indus).eq($(this).index()).offset().top
					},1000)
				})
				$(window).on("scroll",function(){
					if($("html").get(0).scrollTop>0){
						$("#backtop").stop().fadeIn()
					}else{
						$("#backtop").stop().fadeOut()
					}
				})
				
				$("#backtop").on("click",function(){
					$("html").stop().animate({
						scrollTop:0
					},1000)
				})
			}
		}
		
		new Storey()
		
		
		
		$("#floor").children("span").on("click",function(){
			$.ajax({
				url:'/api/user',
				success:function(res){
					if(res.error===0){
					location.href="car.html"
					}
				}
			})
		})
		
		
		