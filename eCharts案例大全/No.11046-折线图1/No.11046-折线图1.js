option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#5f5f6b',
            fontWeight: 'bold'
        },
        axisLine: {
            onZero: false
        },
        data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis: {
        type: 'value',
        name: '温度（单位：℃）',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            fontFamily: '苹方'
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#5f5f6b',
                type: 'dashed'
            }
        },
        axisLabel: {
            color: '#5f5f6b',
            fontWeight: 'bold'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            color: '#2e73ff'
        },
        itemStyle: {
            color: "#2e73ff",
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#c6dbf8'
            }, {
                offset: 1,
                color: '#ffffff'
            }], false),
            origin: 'start'
        },
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值',
                    // symbol:'triangle',
                    label: {
                        show: true
                    }
                },
                {
                    type: 'min',
                    name: '最小值'
                } //标记的图形
            ]
        },
        data: [-1, 18, 20, 31, 25, 35, 45, 32, 24, 16, 33, 2],
    }]
};