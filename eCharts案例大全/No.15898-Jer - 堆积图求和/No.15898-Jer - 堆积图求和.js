option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
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

