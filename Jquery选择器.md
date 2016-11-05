##jquery选择器方法总结##

$("*")	选取所有元素	

$(this)	选取当前 HTML 元素	

$("p.intro")	选取 class 为 intro 的 <p> 元素	

$("p:first")	选取第一个 <p> 元素	在线实例

$("ul li:first")	选取第一个 <ul> 元素的第一个 <li> 元素	

$("ul li:first-child")	选取每个 <ul> 元素的第一个 <li> 元素	

$("[href]")	选取带有 href 属性的元素	

$("a[target='_blank']")	选取所有 target 属性值等于 "_blank" 的 <a> 元素

$("a[target!='_blank']")	选取所有 target 属性值不等于 "_blank" 的 <a> 元素

$(":button")	选取所有 type="button" 的< input> 元素 和 < button> 元素

$("tr:even")	选取偶数位置的<tr > 元素	

$("tr:odd")	选取奇数位置的

$("div:animated") 选择有动画效果的div

$("input[name~='input2']")  选择所有name为input2的input

$("input[id][name$='man']") 选择有id属性，并且以name名称以man结尾的input标签

$("li+li") 选择所有的除了自身的li标签


$("#li1~li") 选取除了本身之后相同父元素下的所有的li标签
