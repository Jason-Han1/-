let data = [{
    "name": "第一季度",
    "value": 20
}, {
    "name": "第二季度",
    "value": 37.8
}, {
    "name": "第三季度",
    "value": 41
}, {
    "name": "第四季度",
    "value": 50
}, {
    "name": "第五季度",
    "value": 66
}, {
    "name": "第六季度",
    "value": 80
}];
let xData = [],
    yData = [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
});
option = {
    backgroundColor: '#0F2B5E',
    grid: {
        left: '1%',
        right: '1%',
        bottom: '30%',
        top: '30%',
        // containLabel: true,
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 12,
            interval: 0,
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            splitNumber: 20,
            max: 100,
            inverse: true,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '16%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00FCFE'
                            },
                            {
                                offset: 1,
                                color: '#0993FD'
                            }
                        ]
                    )
                }
            },
            data: [40, 50, 60, 70, 80, 90],
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '16%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: [{
                value: 100,
                name: '260万',
            }, {
                value: 100,
                name: '270万',
            }, {
                value: 100,
                name: '280万',
            }, {
                value: 100,
                name: '290万',
            }, {
                value: 100,
                name: '300万',
            }, {
                value: 100,
                name: '350万',
            }],
            label: {
                show: true,
                position: 'top',
                distance: 15,
                formatter: '{b}',
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            zlevel: 9
        },
    ]
};