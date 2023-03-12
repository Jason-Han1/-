option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '安全教育活动分析',
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
        data: ['安全教育讲座', '火灾演习', '地震演习', '地震安全教育讲座', '自我安全教育讲座'],
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
            name: '高一',
            type: 'line',
            axisLine:{
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
            data: [4, 8, 5, 4, 3],
           
        },
        {
            name: '高二',
            type: 'line',
            data: [6, 3, 9, 4, 5],
          
        },
        {
            name: '高三',
            type: 'line',
            data: [8, 9, 9, 5, 8, 8, 6],
          
        }
    ]
};
