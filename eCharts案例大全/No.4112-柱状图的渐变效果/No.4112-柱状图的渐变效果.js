var data = [{
        name: "已完成",
        value: 175
    },
    {
        name: "未改造",
        value: 148
    },
    {
        name: "进行中",
        value: 95
    }
];
var xAxisData = [];
var seriesData1 = [];
var sum = 0;
var barTopColor = ["#58C942", "#FCCA01", "#E4A2FB"];
var barBottomColor = ["rgba(89,202,66,0.1)", "rgba(252, 202, 0, 0.1)", "rgba(228, 162, 251, 0.1)"];
data.forEach(item => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
var option = {
    title: {
        top: 20,
        left: 'center',
        textStyle: {
            // color:'#00F6FF',
            fontSize: 20
        }
    },
    grid: {
        top: '25%',
        bottom: '15%'
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            textStyle: {
                fontSize: 14,
                color: '#00F6FF',
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    b: {
                        height: 20,
                        fontSize: 14,
                        color: '#ffffff'
                    }
                }
            }
        },
        interval: 0
    },
    yAxis: {
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
    series: [{
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: 0,
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return barTopColor[params.dataIndex];
                    }
                }
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 16
            },
            data: seriesData1,
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: function(params) {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: barTopColor[params.dataIndex]
                                },
                                {
                                    offset: 1,
                                    color: barBottomColor[params.dataIndex]
                                }
                            ]
                        );
                    },
                    opacity: 0.8
                }
            },
            z: 16,
            silent: true,
            barWidth: 56,
            barGap: '-100%', // Make series be overlap
            data: seriesData1
        }
    ]
};