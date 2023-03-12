
 
var date = [];
var randomData = [];
 
for(var i = 0; i<30; i++){
	date.push('第' + (i+1) + '天');
	randomData.push(Math.floor(Math.random()*100));
}
 
// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
      },
    xAxis: {
        type: 'category',
        data: date
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: randomData,
        type: 'line'
    }]
};
 
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);	
 
var len = date.length;
 
setInterval(function(){
	randomData.push(Math.floor(Math.random()*100));
	randomData.shift();
	date.push(len++);
	date.shift();
	myChart.setOption({
	    xAxis: {
	        data: date
	    },
        series: [{
            data: randomData
        }]
    });	
}, 2000)