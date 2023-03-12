option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '某年级成绩变化趋势',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['语文', '数学','英语'],
         textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['一班', '二班', '三班', '四班', '五班', '六班', '七班'],
        axisLine:{
			
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
        },
        axisLabel: {textStyle:{
				color:'white',  //坐标的字体颜色
			},
        
			
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {textStyle:{
				color:'white',  //坐标的字体颜色
			},
            formatter: '{value}'
        },
        axisLine:{
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
    },
    series: [
        {
            name: '语文',
            type: 'line',
            data: [92, 89, 72, 85, 91, 85, 94],
           
        },
        {
            name: '数学',
            type: 'line',
            data: [89, 85, 80, 91, 93, 82, 85],
          
        },
        {
            name: '英语',
            type: 'line',
            data: [78, 92, 99, 95, 85, 82, 90],
          
        }
    ]
};
