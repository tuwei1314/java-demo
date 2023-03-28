var layer;
$(function(){
	layer=layui.use('layer');     
});


function adduser(){
	layer.open({
		  id :"addUser",
		  title :"添加历史人物",
		  type: 2, 
		  content: 'addUserPage', //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['${contextPath}/s/loadProdListPage', 'no']
		  area: ['400px', '280px']
		}); 
}


function queryuserList(){
	layer.open({
		  title :"今天你想穿越到哪个人物所处的时代",
		  type: 2, 
		  content: 'queryUserListPage', //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['${contextPath}/s/loadProdListPage', 'no']
		  area: ['1024px', '650px']
		}); 
}
