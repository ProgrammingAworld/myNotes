
>.currentTarget//绑定事件的对象

>.target//出发事件的对象

>.delegateTarget//当前事件的委托者，$(e.delegateTarget)


>ul是被委托的对象，li是委托的对象click是委托的事件类型，function是回调函数

>$("ul").delegate("li","click",function(){...});

>>ul是被委托的对象，click是委托的事件类型，li是委托的对象,function是回调函数

>$("ul").on("click","li",function(){...});

>one 事件只执行一次的事件

>e.preventDefault(); 阻止默认事件

>change 事件只适用于input textarea select

>select 事件只适用于input type=“text” textarea

>submit 只能绑定到form表单上

>focus和blur适用于所有元素