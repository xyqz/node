class Xr{
	constructor() {
		this.ul=$(".commo").children("ul")
	    this.init() 
		this.addEvent()
	}
	init(){
		var that=this;
		$.ajax({
			url:'/api/product',
			data:{
				dataName:'column',
				count:20
			},
			success:function(res){
				that.res=res.result
				that.display()
			}
		})  
	}
	display(){
		var str=""
		for(var i=0;i<this.res.length;i++){
			str+=`<li index="${this.res[i].time}">
								<img src="${this.res[i].auth_icon}" >
								<a href="#">${this.res[i].tall}</a></br>
								<span>${this.res[i].sc}</span></br>
								<em>${this.res[i].price}</em> <i>${this.res[i].car}</i>
							</li>`
		}
		this.ul.html(str)
	}
	addEvent(){
		var that=this
		$(this.ul).on("click","i",function(event){
			var target=$(event.target)
			that.id=$(this).parent("li").attr("index")
			that.setGoods()
		})
	}
	setGoods(){
		
		 this.goods = getCookie("goods")==="" ? [] : eval(getCookie("goods"));
		 if(this.goods.length<1){
			 this.goods.push({
				 id:this.id, 
				 num:1
			 })
		 }else{
			 var onoff = true;
			 for(var i=0;i<this.goods.length;i++){
				if(this.goods[i].id===this.id){
					this.goods[i].num++;
					onoff=false;
					break;
				}
			 }
			 if(onoff){
				 this.goods.push({
					 id:this.id,
					 num:1
				 })
			 }
			 
		 }
		 setCookie("goods",JSON.stringify(this.goods))
	}
	
}
new Xr()




class Xq{
    constructor() {
        this.ul=$(".commo").children("ul")
        this.init()
        
    }
    init(){
        var that=this
        this.ul.on("click","a",function(){
            that.id=$(this).parent().attr("index")
			that.setGoods()
			
        })
	}
	
    setGoods(){
            
             this.promise = getCookie("promise")==="" ? [] : eval(getCookie("promise"));
            
                 this.promise.push({
                     id:this.id
                     
                 })
             
             setCookie("promise",JSON.stringify(this.promise))
             location.href="project.html"
        }
        
	}
	



    new Xq()
	  $("#shop").on('click',function(){
		$.ajax({
				url:'/api/user',
				success:function(res){
					if(res.error===0){
					location.href="car.html"
					}
				}
			})
	  })



	