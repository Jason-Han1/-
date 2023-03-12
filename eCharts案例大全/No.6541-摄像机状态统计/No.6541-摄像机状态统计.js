option = {
    title: {
        text: '摄像机状态统计',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        borderColor: "#fff",
        borderWidth: 0,
        containLabel: false,
        height: "20%",
        left: "50%",
        show: false,
        top: "40%",
        width: "50%"
    },
    legend: {
        x: 'center',
        y: 30,
        data: ['在线', '离线']
    },
    xAxis: [{
        type: 'category',
        data: ['G6001绕城高速',
            'G6002绕城高速',
            'G6003绕城高速',
            'G6004绕城高速',
            'G6005绕城高速',
            'G6006绕城高速',
            'G6007绕城高速',
            'G6008绕城高速',
            'G6009绕城高速',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#dadada",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#666",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#dadada",
            }
        }
    }],
    series: [{
        name: '摄像机状态统计饼图',
        type: 'pie',
        center: ['25%', '50%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                formatter: function(params) {
                    return params.data.name + ":" + params.data.value + "个";
                },
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: [{
                value: 335,
                name: '在线'
            },
            {
                value: 310,
                name: '离线'
            }
        ]
    }, {
        name: '在线',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42],
        barWidth: 10, //柱子宽度
        barGap: 0.5, //柱子之间间距
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }, {
        name: '离线',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86],
        barWidth: 10,
        barGap: 0.3,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }]
};