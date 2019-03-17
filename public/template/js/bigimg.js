	// 放大镜
		
		class Big{
			constructor(){
				this.img=$(".img").children("img")
				this.box=$(".img")
				this.span=$(".img").children("span")
				this.p=$(".img").children("p")
				this.big=$(".big")
				this.bigimg=$(".big").children("img")
				this.creat()
			}
			creat(){
				var that=this;
				this.box.get(0).onmouseover=function(){
					that.span.get(0).style.display="block"
					that.big.get(0).style.display="block"
					that.move()
				}
			}
			move(){
				var that=this
				this.box.get(0).onmousemove=function(eve){
					
					var e=eve || window.event
					var l=e.offsetX-that.span.get(0).offsetWidth/2 
					var t=e.offsetY-that.span.get(0).offsetHeight/2
					if(l<0) l=0;
					if(t<0) t=0;
					if(l>that.box.get(0).offsetWidth-that.span.get(0).offsetWidth){
						l=that.box.get(0).offsetWidth-that.span.get(0).offsetWidth
					} 
					if(t>that.box.get(0).offsetHeight-that.span.get(0).offsetHeight){
						t=that.box.get(0).offsetHeight-that.span.get(0).offsetHeight
					}
					
					that.span.get(0).style.left=l + "px"
					that.span.get(0).style.top=t + "px"
					var x=l/(that.box.get(0).offsetWidth-that.span.get(0).offsetWidth)
					var y=t/(that.box.get(0).offsetHeight-that.span.get(0).offsetHeight)
					that.bigimg.get(0).style.left=(that.big.get(0).offsetWidth-that.bigimg.get(0).offsetWidth)*x + "px"               
					that.bigimg.get(0).style.top=(that.big.get(0).offsetHeight-that.bigimg.get(0).offsetHeight)*y + "px"
					
					that.out()
				}
			}
			
			out(){
				var that=this;
					that.box.get(0).onmouseout=function(){
						that.span.get(0).style.display="none"
						that.big.get(0).style.display="none"
					}
				}
		}
		
		new Big()
		
		
	//根据小图的索引切换大图
	class Small{
		constructor() {
			this.li=$(".small-img").find("li")
			this.img=$(".img").children("img")
			this.bigimg=$(".big").children("img")  
			this.init()
		}
		init(){
			var that=this
			$(this.li).on("click",function(){
				$(this).css({border:"1px solid red"}).siblings().css({border:0})
				that.img.attr("src",$(this).children("img").attr("src"))
				that.bigimg.attr("src",$(this).children("img").attr("src"))
			})
		}
	}
	new Small()