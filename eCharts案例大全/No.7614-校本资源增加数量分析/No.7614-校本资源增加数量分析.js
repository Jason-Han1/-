option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '校本资源增加数量分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['教学视频', '教学文档','教学课件'],
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
        data: ['5月18日', '5月19日', '5月20日', '5月21日', '5月22日', '5月23日', '5月24日'],
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
            name: '教学视频',
            type: 'line',
            axisLine:{
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
            data: [34, 18, 50, 44, 32, 25, 65],
           
        },
        {
            name: '教学文档',
            type: 'line',
            data: [66, 33, 29, 34, 52, 62, 75],
          
        },
        {
            name: '教学课件',
            type: 'line',
            data: [78, 92, 99, 95, 85, 82, 90],
          
        }
    ]
};
