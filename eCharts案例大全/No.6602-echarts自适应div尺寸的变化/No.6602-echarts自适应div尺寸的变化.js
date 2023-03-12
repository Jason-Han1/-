option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

// 方法一：使用ResizeObserver
// 文档地址：https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver
// 关注：https://www.pmlab.top
// 元素改变时会执行
const resizeObserver = new ResizeObserver(eles => {
  	for (let ele of eles) {
  		// 根据当前dom获取图表实例，并且实例进行resize
  		echarts.getInstanceByDom(ele.target).resize();
  	}
});
// 添加观察，实际应用时一个页面上有多个图表，所以一般会绑定在class上
resizeObserver.observe(document.querySelector('#chart-panel'));

// 取消观察
// resizeObserver.unobserve();

//-----------------------------------------------------

// 方法二：使用扩展js库
// 需引入js：https://cdn.bootcss.com/jquery-resize/1.1/jquery.ba-resize.min.js
// 该方式就像普通思路一样监听div
// $.getScript('https://cdn.bootcss.com/jquery-resize/1.1/jquery.ba-resize.min.js', function(){
//	  $('.right-panel').each(function(em,dm){
//	  $('#chart-panel').each(function(em,dm){
//	 	 $(dm).resize(function(){
//			 echarts.getInstanceByDom(dm).resize();
//		 });
//	  });
//});

// 模拟div尺寸变化
setInterval(function(){
	$('#chart-panel').css({
		width: parseInt(Math.random()*(1000-500)+500)+'px',
		height: parseInt(Math.random()*(600-500)+500)+'px'
	})
},3000);