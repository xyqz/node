class Big{
			constructor(){
				this.box=$(".img")
				this.big=$(".big")
				this.creat()
			}
			creat(){
				let that=this;
				
				this.box.on("mousemove",function(){
                    $(".img").children("span").stop().show()
					$(".big").stop().show()
						that.move()				
				})
				
			}
			move(){
				let that=this;
				this.box.on("mousemove",function(eve){
					let e=eve || window.event()
					let l=e.offsetX- $(".img").children("span").get(0).offsetWidth/2  
					let t=e.offsetY- $(".img").children("span").get(0).offsetHeight/2
					if(l<0) l=0;
				if(t<0) t=0;
				if(l>that.box.get(0).offsetWidth-$(".img").children("span").get(0).offsetWidth){
						l=that.box.get(0).offsetWidth-$(".img").children("span").get(0).offsetWidth
					} 
					if(t>that.box.get(0).offsetHeight-$(".img").children("span").get(0).offsetHeight){
						t=that.box.get(0).offsetHeight-$(".img").children("span").get(0).offsetHeight
					}
					$(".img").children("span").get(0).style.left=l + "px"
					$(".img").children("span").get(0).style.top=t + "px"
					let x=l/(that.box.get(0).offsetWidth-$(".img").children("span").get(0).offsetWidth)
					let y=t/(that.box.get(0).offsetHeight-$(".img").children("span").get(0).offsetHeight)
					$(".big").children("img").get(0).style.left=($(".big").get(0).offsetWidth-$(".big").children("img").get(0).offsetWidth)*x + "px"               
					$(".big").children("img").get(0).style.top=($(".big").get(0).offsetHeight-$(".big").children("img").get(0).offsetHeight)*y + "px"
					that.out()
					
				})
			}
			out(){
				var that=this;
				that.box.get(0).onmouseout=function(){
				$(".img").children("span").get(0).style.display="none"
				that.big.get(0).style.display="none"
			}
			
			}
			}
  		new Big()
		
		
		
		$(".small-img").children("ul").children("li").children("img").on("click",function(){
			
			$(".img").children("img").attr("src",$(this).attr("src"))
			$(".big").children("img").attr("src",$(this).attr("src"))
		})