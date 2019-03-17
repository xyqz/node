class Ad{
			constructor() {
				this.img=$(".img")
				this.init()
			}
			init(){
				var that=this
				$.ajax({
					url:"/api/product",
					data:{
						dataName:'column'
					},
					success:function(res){
						 that.res=res.result;
						
						that.getcookie()
					}
				})
			}
			getcookie(){
				this.promise=JSON.parse(getCookie("promise"))
				
				this.display()
			}
			display(){
				var str=""
				let str2=""
				for(var i=0;i<this.res.length;i++){
						if(this.promise[this.promise.length-1].id==this.res[i].time){
							str+=`<img src="${this.res[i].auth_icon}" > 
							<p></p>
							<span></span>`
							
							str2+=`<img src="${this.res[i].auth_icon}" >`
					}
				}
				this.img.html(str)
				$(".big").html(str2)
				
			}
		}
		new Ad()
		
		
		
	 