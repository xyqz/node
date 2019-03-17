class Display{
			constructor() {
			    this.main=$(".indus-b-l")
				this.load()
			}
			load(){
				var that=this
				$.ajax({
					url:"libs/main.json",
					success:function(res){
						that.res=res
						that.display()
					}
				})
			}
			display(){
				var str="";
				for(var i=0;i<this.res.length;i++){
					str+=`<ul class="clear">
								<li><a href="#"><img src="${this.res[i].src1}" ></a></li>
								<li><a href="#"><img src="${this.res[i].src2}" ></a></li>
								<li><a href="#"><img src="${this.res[i].src3}" ></a></li>
								<li><a href="#"><img src="${this.res[i].src4}" ></a></li>
								<li><a href="#"><img src="${this.res[i].src5}" ></a></li>
								<li><a href="#"><img src="${this.res[i].src6}" ></a></li>
							</ul>`
				}
				this.main.html(str)
			}
		}
		new Display()

		class Mina{
			constructor() {
			    this.hot=$(".indus-b-c").children("ul")
				this.load()
			}
			load(){
				var that=this
				$.ajax({ 
					// url:"libs/data2.json",
					url:'/api/product',
					data:{
						dataName:'home'
					},
					success:function(res){
						that.res=res.result
						that.display()
					}
				})
			}
			display(){
				var str="";
				for(var i=0;i<this.res.length;i++){
					str+=`
						<li>
							<h1>
							<img src="${this.res[i].auth_icon}">
							</h1>
							<h2>
								<a href="#" class="active">${this.res[i].tall}</a></br>
								<em>${this.res[i].price}</em></br>
								<del>${this.res[i].sc}</del>
							</h2>
							<a href="#" class="lianjie">${this.res[i].car}</a>
						</li>
									`
				}
				this.hot.html(str)
			}
		}
		
		new Mina()

		
		
		
		