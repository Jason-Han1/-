option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['多头', '空头']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8' ]
        }
    ],
    series : [
        {
            name:'多',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[320, 302, 301, 334, 390, 330, 320, 234]
        },
        {
            name:'空',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 232, 201, 134, 90, 230, 210, 90]
        }
    ]
};
var ser = option.series;
var seriesLen = ser.length;
var sum = [];
for (var i = 0; i < ser[0].data.length; i++) {
	sum.push(0);
}
for (var i = 0; i < seriesLen; i++) {
	var dataLen = ser[i].data.length;
  	for (var j = 0; j < dataLen; j++) {
    	sum[j] += ser[i].data[j];
    }
}

option.series.push({
            name:'总和',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:sum
        });
option.legend.data.push('总和')
myChart.setOption(option);             