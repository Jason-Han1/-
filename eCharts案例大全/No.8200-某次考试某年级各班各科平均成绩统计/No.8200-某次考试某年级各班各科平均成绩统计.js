option = {
    backgroundColor: '#0A2E5D',
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
        data: ['语文', '数学', '英语','生物'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    xAxis: [
        {
            type: 'category',
            data: ['一班', '二班', '三班', '四班', '五班'],
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
            name: '分数',
            min: 0,
            max: 100,
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
            name: '语文',
            type: 'bar',
            data: [98, 92, 89, 93, 85]
        },
        {
            name: '数学',
            type: 'bar',
            data: [85,93,79,88,94]
        },
        {
            name: '生物',
            type: 'bar',
            data: [91,84,97,96,95.5]
        },
        {
            name: '英语',
            type: 'bar',
            data: [89,85,90,88,95]
        }
    ]
};
