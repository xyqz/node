require.config({
	baseUrl:"./input-modul",
	paths:{
		option:"option",
		inp:"form",
		jq:"../libs/jquery"
	}
})


require(["jq","option","inp"],function(_,option,inp){
	new option.option()
	new inp.inp()
})