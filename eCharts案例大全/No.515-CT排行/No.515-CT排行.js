option = {
    backgroundColor: '#01030b',
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        splitLine: {
            show: false
        },
        type: 'value',
        show: false,
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: false
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        "data": ['850002', '850003', '850004', '850005', '850006'],
        axisLabel: {
            color: '#A7D6F4',
            fontSize: 14,
        }
    }],
    series: [{
        name: '标准化',
        type: 'bar',
        barWidth: 15, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#A7D6F4',
            fontSize: 14,
            distance: 15, // 距离
			formatter: '{c} %' // 这里是数据展示的时候显示的数据
        }, 
        itemStyle: {
           normal: {
                barBorderRadius: [10, 10, 10, 10],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(65,250,240,0.5)'
                    },
                    {
                        offset: 1,
                        color: "rgba(65,250,240,1)"
                    }
                ])
            }
        },
        "data": [556, 456,350 ,208, 123],
    }, ]
};