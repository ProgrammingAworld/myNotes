---
title: rem的实现原理
categories: 移动端布局
tags: 学习笔记
---

##rem自适应布局的回顾总结

**rem自适应原理**

rem是根据html的font-size大小来变化，正是基于这个出发，我们可以在每一个设备下根据设备的宽度设置对应的html字号，从而实现了自适应布局。

**具体的实现方法**

*  **使用媒体查询的方法**
	* js方式  
	###获取移动设备宽高的方法：
	
		document.documentElement.clientWidth;
		document.documentElement.clientHeight;
	* 媒体查询来调整字号

			@media only screen and (min-width: 481px) {
			html {
			font-size:94%!important
			}
			}
			
			@media only screen and (min-width: 561px) {
			html {
			font-size:109%!important
			}
			}
			
			@media only screen and (min-width: 641px) {
			html {
			font-size:125%!important
			}