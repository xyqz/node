define(function(){
	class Option{
		constructor() {
		    this.a=$(".header-r-t").children("a");
			this.left=$("#header").find(".left")
			this.init()
		}
		init(){
			var that=this;
			this.a.on("click",function(){
				$(this).css({background:"blue",color:"white"}).siblings().css({background:"none",color:"blue"});
				switch($(this).index()){
					case 0:
					that.left.get(0).placeholder="请输入商品名称";
					break;
					case 1:
					that.left.get(0).placeholder="请输入企业名称";
					break;
					case 2:
					that.left.get(0).placeholder="请输入采购商品名称";
					break;
				}
				
			})
		}
	}
	
	return {
		option:Option
	}
})



