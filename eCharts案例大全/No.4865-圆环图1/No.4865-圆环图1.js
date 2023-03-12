var data = [{
    name: '群众',
    value: 40
}, {
    name: '其他',
    value: 7
}, {
    name: '共青团员',
    value: 25
}, {
    name: '预备党员',
    value: 8
}, {
    name: '中共党员',
    value: 20
}];

var newdata = [];
var color = ['#48E681', '#2D70F9', '#EB2E7F', '#50EFFF', '#FCEB82']
for (var i = 0; i < data.length; i++) {
    newdata.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}
var seriesOption = [
    {
        type: 'pie',
        zlevel: 4,
        silent: true,
        radius: ['30%', '29%'],
        center:['50%','60%'],
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: _pie3()
    },
    {
        type: 'pie',
        zlevel: 20,
        silent: true,
        radius: ['20%', '19%'],
        center:['50%','60%'],
        hoverAnimation: false,
        color: '#184F81',
        // animation:false,
        data: [1],
        labelLine: {
            normal: {
                show: false
            }
        }
    },
    {
        type: 'pie',
        zlevel: 20,
        silent: true,
        radius: ['20%', '19%'],
        center:['50%','60%'],
        hoverAnimation: false,
        color: '#184F81',
        // animation:false,
        data: [1],
        labelLine: {
            normal: {
                show: false
            }
        }
    },
    {
        name: '',
        type: 'gauge',
        splitNumber: 30, //刻度数量
        min: 0,
        max: 100,
        radius: '80%', //图表尺寸 
        center:['50%','60%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [0, '#0dc2fe'],
                    [1, '#rgba(243, 243, 243,.5)']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0dc2fe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#051349' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 2
            },
            length: 10,
            splitNumber: 5
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0dc2fe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#051349' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        axisLabel: {
            show: false
        },
        pointer: { //仪表盘指针
            show: 0,
        },
        detail: {
            show: false,
        },
    },
];

function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "#113C70",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}
option = {
    color: color,
    tooltip: {
        show: false
    },
    legend: {
        show: false,
    },
    series: seriesOption
}
// return option;  