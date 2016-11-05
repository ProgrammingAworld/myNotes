##Ajax异步步骤及其用法##
**1.**创建XMLHttpRequest
**2.**.open("GET","api/Products",true);	方法		
**3.**.onreadystatechange 方法
**4.**.send（）方法


具体的代码实例：
			
异步:

	var xhr;
	if (window.XMLHttpRequest) {
		xhr=new XMLHttpRequest();
	}else{
	    xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET","api/Products",true);//true代表异步
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4) {
			if (xhr.status==200) {
				var str=xhr.responseText;
				var arrstr=eval("("+str+")");
				for (var i=0;i<arrstr.length;i++) {
					showMsg.innerHTML=showMsg.innerHTML+arrstr[i].Name;
				}
			}
		}
	}
	xhr.send();


##Ajax同步步骤及其用法##
**1.**创建XMLHttpRequest

**2.**.open("GET","api/Products",true);	方法	

**3.**.send（）方法	



同步
	
		var xht;
		if(window.XMLHttpRequest){
			xht=new XMLHttpRequest();
		}else{
			xht=new ActiveXObject("Microsoft.XMLHTTP");
				}
		xht.open("GET","Ajax.txt",false);
		xht.send();
		if(xht.status==200){
			div2.innerHTML=xht.responseText;
		}else{
			div2.innerHTML="未获得数据";
		}