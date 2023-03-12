option = {
    backgroundColor: '#040613',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: false
    },
    xAxis: [{
        show: false,
        type: 'value'
    }],
    yAxis: [{
        show: false,
        type: 'category',
        data: ['应急']
    }],
    series: [{
            name: '已处理',
            type: 'bar',
            stack: '应急',
            barWidth: '85%',
             label: {
                show: true,
                formatter:'{a}: {c}',
                position: ['-5%', '101%'],
                color:'#1683F3'
            },
            data: [{
                value: 60,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(10,60,154,0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(22,131,243,1)' // 100% 处的颜色
                        }],
                        global: false
                    }
                }
            }]
        },
        {
            name: '未处理',
            type: 'bar',
            stack: '应急',
            barWidth: '85%',
            label: {
                show: true,
                formatter:'{a}: {c}',
                 position: ['90%','101%'],
                color:'#FFBF10'
            },
            data: [{
                value: 40,
                itemStyle: {
                    color: 'rgba(22,131,243,0.30)'
                }
            }]
        }
    ]
};