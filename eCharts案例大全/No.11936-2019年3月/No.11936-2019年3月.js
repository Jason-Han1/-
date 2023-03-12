option = {
    backgroundColor: '#011c3a',
    title: {
        text: '2019年3月',
        right: '10%',
        textStyle: {
            color: '#EFEFEF'
        }
    },
    grid: {
        containLabel: true,
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        show: true
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            start: 20,
            end: 100,
            handleSize: 8
        },
        {
            type: 'inside',
            start: 20,
            end: 100
        },
        
    ],
    tooltip: {
        show: true
    },
    xAxis: {
        data: ['国能电气', '栋良电气', '德辉电气', '方大电气', '宇辰电气', '益和电气'],
        axisLine: {
            lineStyle: {
                color: '#8C919B',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#8C919B',
            }
        }
    },
    yAxis: {
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#EFEFEF',
                type: 'dashed'
            }
        }


    },
    series: [{
        type: 'bar',
        name: '今年',
        barWidth: 24,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#134C7F'
                }, {
                    offset: 0.8,
                    color: '#093B48'
                }], false)
            }
        },
        data: [12, 354, 165, 144, 477, 211]
    }]
};