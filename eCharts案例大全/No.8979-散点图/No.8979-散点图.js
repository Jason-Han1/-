var xdata = [
    "02:00:02",
    "01:00:02",
    "12:00:02",
    "11:00:02",
    "10:00:02",
    "09:00:02",
    "08:00:03",
    "07:00:02",
    "06:00:02",
    "05:00:02",
    "05:00:02",
    "02:00:02",
    "01:00:02",
    "12:00:02",
    "11:00:02",
    "10:00:02",
    "09:00:02",
    "08:00:03",
    "07:00:02",
    "06:00:02",
    "05:00:02",
    "05:00:02",
    "02:00:02",
    "01:00:02",
    "12:00:02",
    "11:00:02",
    "10:00:02",
    "09:00:02",
    "08:00:03",
    "07:00:02",
    "06:00:02",
    "05:00:02",
    "05:00:02",
    "02:00:02",
    "01:00:02",
    "12:00:02",
    "11:00:02",
    "10:00:02",
    "09:00:02",
    "08:00:03",
    "07:00:02",
    "06:00:02",
    "05:00:02",
    "05:00:02",
];
var dataArr1 = [-1.3,
    -3.8,
    0.76,
    -3.3,
    0.75,
    -0.5,
    -3.5,
    -0.3,
    -3.4,
    -0.7,
    -3.1,
    -2.1,
    -0.9,
    0.2,
    -1.6,
    -1.1,
    -0.1,
    -1.7,
    -2.6,
    -2.5,
    0.26,
    0.64,
    -1,
    -3,
    -0.5,
    -3.3,
    0.3,
    -0.1,
    0.02,
    -1.4,
    -1.3,
    -0.2,
    -0.3,
    -0.8,
    -1.2,
    0.3,
    -3.2,
    -1.2,
    -2.7,
    -2.9,
    -2.2,
    -0.1,
    -0.6,
    -3.4,
];
var min = -1;
var max = 1;
var seriesYData = [];
seriesYData = dataArr1.map(function(item) {
    var reItem = item;
    if (reItem > min && reItem < max) {
        reItem = {
            value: reItem,
            itemStyle: {
                normal: {
                    color: 'rgb(65,226,255)'
                }
            }
        };
        return reItem;
    }
})
var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(26, 53, 56, .8)' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: 'rgba(26, 53, 56, 0)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(26, 53, 56, .8)' // 100% 处的颜色
                }
            ])
        }
    },
    data: [
        [{
            // name: '预警区域',
            // xAxis: '产品4',
            yAxis: 20,
            label: {
                normal: {
                    offset: [500, 500],

                    fontSize: 14
                }
            }
        }, {
            yAxis: 60,
            // xAxis: '产品9'
        }]
    ]
};
// var fittingData = [95.6301275477034, 95.6253622963783, 95.6205972825058, 95.615832506074, 95.6110679670711, 95.6063036654853, 95.6015396013048, 95.5967757745176, 95.5920121851121, 95.5872488330763, 95.5824857183985, 95.5777228410667, 95.5729602010693, 95.5681977983943, 95.5634356330299, 95.5586737049644, 95.5539120141858, 95.5491505606824, 95.5443893444423, 95.5396283654537, 95.5348676237048, 95.5301071191837, 95.5253468518787, 95.520586821778, 95.5158270288696, 95.5110674731418, 95.5063081545828, 95.5015490731807, 95.4967902289238, 95.4920316218001, 95.487273251798, 95.4825151189055, 95.4777572231109, 95.4729995644024, 95.4682421427681, 95.4634849581962, 95.4587280106749, 95.4539713001925, 95.449214826737, 95.4444585902967, 95.4397025908597];
option = {
    backgroundColor: 'rgba(19, 30, 94,.8)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        top: '20%',
        bottom: '10%'
    },
    legend: {
        show: true,
        x: 'center',
        y: '35',

        itemGap: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#fff',
            fontSize: 20
        },
        // data: ['响应时间', '合格线']
        data: [{
            name: "a",
            icon: 'circle',
        }, {
            name: "b",
            icon: 'line',
        }]

    },
    xAxis: {
        name: '',
        nameTextStyle: {
            fontSize: 20,
            color: '#fff'
        },
        type: 'category',
        data: xdata,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        splitLine: { //网格线
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,.3)' //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
        }
    },
    yAxis: {
        name: 'b(%)',
        // axisLabel: {
        //     formatter: '{value}%'
        // },
        nameTextStyle: {
            fontSize: 20,
            color: '#fff'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        splitLine: { //网格线
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.3)' //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
        }
    },
    visualMap: {
        show: false,
        seriesIndex: 0,
        // dimension: 0,
        pieces: [{
                type: 'effectScatter',
                lte: 0,
                color: "rgb(65,226,255)",
                symbolSize: 8
            },
            {
                type: 'effectScatter',
                gt: 0,
                lt: max,
                color: "red",
                symbolSize: 8
            },
        ]
    },
    series: [{
            type: 'effectScatter',
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke"
            },
            hoverAnimation: true,
            name: 'a',
            symbolSize: 8,
            color: '#00F18E',
            data: seriesYData,
        },
        {
            name: "b",
            tooltip: {
                show: false
            },
            type: "line",
            smooth: false,
            symbolSize: 0,
            symbol: "none",
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            markArea: {
                silent: false,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(104, 20, 62,.8)' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(104, 20, 62, 0)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(104, 20, 62,.8)' // 100% 处的颜色
                            }
                        ])
                    }
                },
                data: [
                    [{
                        // name: '预警区域',
                        // xAxis: '产品4',
                        yAxis: max,
                        label: {
                            normal: {
                                offset: [500, 500],

                                fontSize: 14
                            }
                        }
                    }, {
                        yAxis: min,
                        // xAxis: '产品9'
                    }]
                ]
            },
            data: []
        }
    ]
};