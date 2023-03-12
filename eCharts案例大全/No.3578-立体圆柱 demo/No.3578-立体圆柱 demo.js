data = [{
        name: "常规",
        value: 175.17
    },
    {
        name: "紧急",
        value: 148.35
    },
    {
        name: "疑难",
        value: 95.36
    },
    {
        name: "特殊",
        value: 123.36
    }
];
xAxisData = [];
seriesData1 = [];
sum = 0;
barTopColor = ["rgba(0, 168, 255, 0.7)",
                "rgba(240, 208, 60, 0.8)",
                "rgba(0,229,255, 0.7)",
                "rgba(0,255,182, 0.7)"];
barBottomColor = ["rgba(0, 168, 255, 0.7)",
                    "rgba(240, 208, 60, 0.8)",
                    "rgba(0,229,255, 0.7)",
                    "rgba(0,255,182, 0.7)"];
barCenterColor = ["rgba(0, 102, 171, 0.42)",
                    "rgba(240, 208, 60, 0.42)",
                    "rgba(0, 165, 201, 0.42)",
                    "rgba(0,255,182, 0.42)"];
barSideColor = ["rgba(0, 168, 255,0.8)",
                "rgba(240, 208, 60, 0.9)",
                "rgba(0, 229, 255, 0.9)",
                "rgba(0,255,182)"];
data.forEach(item => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
option = {
    backgroundColor: '#061326',
    title: {
        text: '多色立体圆柱',
        top:20,
        left:'center',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    grid:{
        top:'25%',
        bottom:'15%'
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function(params, index) {
                return '{a|' + (seriesData1[index] / sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
            },
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
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
            show: true
        },
        axisLabel: {
            show: true
        }
    },
    series: [{
        name: '柱顶部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
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
        symbolPosition: 'end',
        data: seriesData1,
    }, {
        name: '柱底部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: seriesData1
    },{
        type: 'bar',
        itemStyle: {
            normal: {
                // color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 1,
                //     y2: 0,
                //     colorStops: [{
                //         offset: 0, color:function(params) {
                //                     return barSideColor[params.dataIndex];
                //                 } // 0% 处的颜色
                //     },
                //     {
                //         offset: 0.35, color: function(params) {
                //                     return barCenterColor[params.dataIndex];
                //                 } // 35% 处的颜色
                //     },
                //     {
                //         offset: 0.65, color: function(params) {
                //                     return barCenterColor[params.dataIndex];
                //                 } // 65% 处的颜色
                //     },
                //     {
                //         offset: 1, color: function(params) {
                //                     return barSideColor[params.dataIndex];
                //                 } // 100% 处的颜色
                //     }],
                //     global: false // 缺省为 false
                // },
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: barSideColor[params.dataIndex]
                            },
                            {
                                offset: 0.25,
                                color: barCenterColor[params.dataIndex]
                            },
                            {
                                offset: 0.75,
                                color: barCenterColor[params.dataIndex]
                            },
                            {
                                offset: 1,
                                color: barSideColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.8
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: seriesData1
    }]
};
