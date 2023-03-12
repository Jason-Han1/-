option = {
    tooltip: {
				trigger:'axis',
				formatter: '{b0}({a0}): {c0}<br />{b1}({a1}): {c1}%'
			},
            legend: {
                data:['销量','占比']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: [ {
                type: 'value',
                name: '销量',
                show:true,
				splitLine:{show:false},
                axisLine: {
                    lineStyle: {
                        color: '#5e859e',
                        width: 2
                    }
                }
            },
            {
                type: 'value',
                name: '占比',
                min: 0,
                max: 100,
                interval: 10,
				splitLine:{show:false},
                axisLabel: {
                    formatter: '{value} %'
                },
                axisLine: {
                    lineStyle: {
                        color: '#5e859e',//纵坐标轴和字体颜色
                        width: 2
                    }
                }
            }],
            series: [{
                name: '销量',
                stack: '总量',
                type: 'line',
				barWidth : '50%',
                data: [15, 30, 46, 20, 20, 30]
            },{
                name: '占比',
                stack: '总量',
                type: 'line',
				smooth:true,
                data: [5, 1, 2, -24, 9, 66]
            }]
};