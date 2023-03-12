var optionParam	=  {
  	xAxisData :  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  	seriesData :  [10, 52, 200, 334, 390, 330, 220],
  	yAxisName : 'y轴名称',
  	barWidth : 40
};

var option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: optionParam.xAxisData,//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                }
            },
        }
    ],
    yAxis: [{
    		name : optionParam.yAxisName || '',
            type: 'value',
            minInterval: 1,
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                }
            },
        }
    ],
    series: [
        {
            name: '参与项目',
            type: 'bar',
            barWidth: optionParam.barWidth || 30,
            data: optionParam.seriesData// [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};