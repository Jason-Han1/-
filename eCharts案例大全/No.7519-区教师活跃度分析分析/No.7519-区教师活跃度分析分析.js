option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '天河区教师活跃度分析分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['高一', '高二','高三'],
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
        data: ['非常活跃', '活跃', '一般','差'],
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
        max: 500,
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
            name: '高一',
            type: 'line',
            data: [345, 404, 370,12],
           
        },
        {
            name: '高二',
            type: 'line',
            data: [410,488, 291,42],
          
        },        
        {
            name: '高三',
            type: 'line',
            data: [370,388, 432,48],
          
        },
        
        
    ]
};
