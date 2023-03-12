option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '各班迟到人数统计',
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
            name: '高一',
            type: 'line',
            axisLine:{
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
            data: [3, 5, 10, 2, 8],
           
        },
        {
            name: '高二',
            type: 'line',
            data: [4, 8, 9, 2, 0, 7, 5],
          
        },
        {
            name: '高三',
            type: 'line',
            data: [3, 6, 5, 3, 6],
          
        }
    ]
};
