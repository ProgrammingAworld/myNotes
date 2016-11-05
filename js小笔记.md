###js中的按钮类型###

>confirm 确认框<br/>
>propmt 提示框
 ###实例###

    <p id="confirm">确认按钮</p>
    <input type="button"  value="确认" onclick="confirm1()" />
    
    <p id="prompt">提示按钮</p>
    <input type="button" value="提示按钮" onclick="prompt1()" />
    
    <script>
    	function confirm1(){
    		var x;
    		var y=confirm("确认按钮");
    		if (y) {
    			document.getElementById("confirm").innerHTML="您按下确认按钮";
    		}else{
    			document.getElementById("confirm").innerHTML="你按下取消按钮";
    		}
    	}
    	function prompt1(){
    		var msg=document.getElementById("prompt");
    		var y=prompt("请输入姓名：");
    		alert(y);
    		if (y!=null&&msg!="") {
    			msg.innerHTML="你好"+y+"how are you";
    		}
    	}
    </script>

