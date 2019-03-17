class Tab{
	constructor() {
	    this.span=$(".user-intro-text").children("span")
		this.main=$(".user-intro-main").children("div")
		this.a=$(".user-intro-main").children("div").find("a")
		this.init()
	}
	init(){
		var that=this;
		this.span.on("mousemove",function(){
			$(this).css({color:"blue",borderBottom:"2px solid blue"}).siblings().css({color:"gray",border:0})
			
			that.main.css({display:"none"}).eq($(this).index()).css({display:"block"})
		})
		this.a.hover(function(){
			$(this).css({color:"blue"})
		},function(){
			$(this).css({color:"black"})
		})
	}
}
new Tab()