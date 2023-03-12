var container = `
    <div id="main1" style="height:350px"></div>
    <div id="main2" style="height:350px"></div>`;
$('body').append(container);
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));

var xAxisData = ['A-001', 'A-002', 'A-003', 'A-004', 'A-005'];

var option1 = {
    title: {
        text: '交流干扰数据',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'right',
        textStyle: {
            fontSize: 14,
            fontWeight: 400
        },
        data: ['交流电压', '交流电流密度'],
        left: 'center',
        icon: 'circle'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: false
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'stack', 'tiled']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    grid: {
        borderColor: 'blue',
        borderWidth: 0,
        show: true,
        containLabel: true,
        left: '70',
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: true,
        },
        axisLabel: {
            color: '#000'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: xAxisData,

    }],
    yAxis: [{
        type: 'value',
        splitNumber: 5,
        scale: true,
        splitArea: {
            show: true
        },
        textStyle: {
            color: '#000'
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000',
            }
        },
    }],
    series: [{
            name: '交流电压',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            data: [2.4, 4.4, 1.8, 2.8, 3],
            lineStyle: {
                color: '#ee7b31'
            },
            itemStyle: {
                normal: {
                    color: '#ee7b31'
                },
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#ee7b31' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#ee7b3111' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowBlur: 10,
                }
            },
            stack: 'stack01'
        },
        {
            name: '交流电流密度',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            data: [4.2, 2.3, 3.5, 4.5, 2],
            lineStyle: {
                color: '#5a9ad4'
            },
            itemStyle: {
                normal: {
                    color: '#5a9ad4'
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#5a9ad4' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#5a9ad411' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowBlur: 10,
                },
            },
            stack: 'stack01'
        },
    ],

}



var option2 = {
    title: {
        text: '通断电电位'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        textStyle: {
            fontSize: 18,
            fontWeight: 400,
        },
        data: ['通电电位', '断点电位', '土壤电阻率'],
        left: 'center'
    },
    toolbox: {
        y: -30,
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        borderColor: '#fff'
    },
    xAxis: [{
        show: true,
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        splitArea: {
            show: true,
        },
        boundaryGap: false,
        data: xAxisData,
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 8,
        splitNumber: 4,
        scale: true,
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
    }],
    axis: {
        data: xAxisData
    },
    series: [{
            name: '通电电位',
            type: 'line',
            symbol: 'circle',
            smooth: false,
            data: [2, 5, 1, 3, 4],
            lineStyle: {
                color: '#5a9ad4'
            },
            itemStyle: {
                normal: {
                    color: '#5a9ad4'
                }
            },
        },
        {
            name: '断点电位',
            type: 'line',
            symbol: 'circle',
            smooth: false,
            data: [4.2, 2.2, 1.8, 2.8, 3],
            lineStyle: {
                color: '#ee7b31'
            },
            itemStyle: {
                normal: {
                    color: '#ee7b31'
                }
            },
        }, {
            name: '土壤电阻率',
            type: 'line',
            symbol: 'circle',
            smooth: false,
            data: [2, 3, 4, 5, 6],
            lineStyle: {
                color: '#a7a7a7'
            },
            itemStyle: {
                normal: {
                    color: '#a7a7a7'
                },
            },
        }
    ]
}


// 为echarts对象加载数据
myChart1.setOption(option1);
myChart2.setOption(option2);
//联动配置
echarts.connect([myChart1, myChart2]);