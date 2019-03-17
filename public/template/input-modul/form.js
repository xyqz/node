define(function(){
	class Inp{
		constructor() {
		this.left=$("#header").find(".left");
		this.init()
	}
	init(){
		this.left.on("focus",function(){
					$(this).get(0).placeholder=""
				})
		this.left.on("blur",function(){
					$(this).get(0).placeholder="请输入商品名称"
				})
	}
	
		}
	
	
	return {
		inp:Inp
	}
})



