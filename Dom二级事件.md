##DOM2级事件-非IE##

>非IEDOM2级事件：addEventListener()与removeEventListener()，DOM节点中都包含这个两个方法，它们接收三个参数：事件名(无on前缀)、处理函数、捕获和冒泡(true\false)。
通过addEventListenter()添加的事件必须通过removeEventListener()来移除，使用移除事件时参数必须与添加事件时一致，否则无法移除，使用匿名函数也无法移除。
DOM2级事件的优势可以在同一个节点上绑定多个事件处理函数。


##DOM2级事件-IE##

>IEDOM2级事件：attachEvent()与detachEvent()，DOM节点中都包含这个两个方法，它们接收两个参数：事件名(注意加on前缀)、处理函数。
通过attachEvent()添加的事件必须通过detachEvent()来移除，使用移除事件时参数必须与添加事件时一致，否则无法移除，使用匿名函数也无法移除。
IE低版本中绑定事件处理函数后执行顺序与绑定顺序相反。
DOM2级事件的优势可以在同一个节点上绑定多个事件处理函数。但要注意事件处理程序作用域不属于元素(this指向问题，可以使用target或srcElement)。
