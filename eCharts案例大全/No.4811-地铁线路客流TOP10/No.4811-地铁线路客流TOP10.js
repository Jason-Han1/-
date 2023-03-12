option = {
    backgroundColor: '#315267',
    title: {
        text: "地铁线路客流TOP10",
        left: "5%",
        top: "8%",
        textStyle: {
            color: '#c4f5ff',
            fontSize: '20',
            fontWeight: "normal"
        },
    },
    grid: { //图表距离上下左右的距离
        top: '15%',
        bottom: '10%',
        right: '5%',
        left: '5%',
        containLabel: true
    },
    tooltip: { //提示
        trigger: "axis",
    },
    xAxis: {
        type: 'value',
        show: true,
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '#7F9BAE'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7F9BAE'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        type: 'category',
        triggerEvent: true,
        show: true,
        inverse: true, //是否反转
        boundaryGap: true,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7F9BAE'
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#fff',
            align: 'right',
            margin: 10,
            fontSize: 16,
        },
        data: ['1号线', '5号线', '3号线', '7号线', '9号线', '2号线', '4号线', '11号线'],
    },
    series: [{
        name: '',
        type: 'bar',
        barWidth: 10,
        yAxisIndex: 0,
        data: [120, 90, 70, 60, 50, 40, 30, 35],
        itemStyle: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(67, 211, 244,0.2)'
                },
                {
                    offset: 1,
                    color: "rgba(67, 211, 244,1)"
                }
            ])
        },
    }]
};