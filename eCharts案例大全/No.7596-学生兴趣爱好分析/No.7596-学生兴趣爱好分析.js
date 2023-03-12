option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生兴趣爱好分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['阅读', '运动','文艺活动','手工','其他'],
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
        data: ['一班', '二班', '三班', '四班', '五班'],
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
            name: '阅读',
            type: 'line',
            axisLine:{
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
            data: [34, 18, 50, 44, 32, 25, 65],
           
        },
        {
            name: '运动',
            type: 'line',
            data: [66, 33, 29, 34, 52, 62, 75],
          
        },
        {
            name: '手工',
            type: 'line',
            data: [35, 66, 45, 32, 12, 32, 31],
          
        },
        {
            name: '其他',
            type: 'line',
            data: [18, 22, 45, 35, 44, 54,39],
          
        }
    ]
};
