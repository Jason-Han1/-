option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生作业完成情况分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '##fdfdfd'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['优秀', '良好', '一般'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    xAxis: [
        {
            type: 'category',
            data: ['一班', '二班', '三班', '四班'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine:{
			
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 80,
            interval: 10,
            axisLabel: {
                textStyle:{
				color:'white',  //坐标的字体颜色
			},
                formatter: '{value} '
            },
            axisLine:{
			
			lineStyle:{
				color:'white',  //坐标轴的颜色
			},
		},
            
        
        }
    ],
    series: [
        {
            name: '优秀',
            type: 'bar',
            data: [34, 12, 4, 7]
        },
        {
            name: '良好',
            type: 'bar',
            data: [40,20,8,2]
        },
        {
            name: '一般',
            type: 'bar',
            data: [24,33,12,7]
        }
    ]
};
