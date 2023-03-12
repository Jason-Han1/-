var data = [{
    name: '高级',
    value: 25
}, {
    name: '副高级',
    value: 34
}, {
    name: '中级',
    value: 37
}, {
    name: '初级',
    value: 3
}, {
    name: '未评级',
    value: 1
}];

var newdata = [];
var color = ['#4B93FE', '#7487FF', '#8DFAEE', '#ECC091', '#F4EB8F']
for (var i = 0; i < data.length; i++) {
    newdata.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 3,
                shadowBlur: 10,
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
var seriesOption = [{
        name: '',
        type: 'pie',
        // clockWise: false,
        radius: ["50%", "70%"],
        center: ['30%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                }
            }
        },
        data: newdata
    },

    {
        type: 'pie',
        zlevel: 20,
        silent: true,
        radius: ['85%', '84%'],
        center: ['30%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            color: '#3690D7',
            shadowColor: '#3690D7',
            shadowBlur: 10
        },
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
        radius: ['90%', '89%'],
        center: ['30%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            color: '#092563',
            shadowColor: '#092563',
            shadowBlur: 10
        },
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
        detail: false,
        splitNumber: 10, //刻度数量
        radius: '35%', //图表尺寸
        center: ['30%', '50%'],
        startAngle: 0, //开始刻度的角度
        endAngle: -356, //结束刻度的角度
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#194482',
                width: 1
            },
            length: 5,
            splitNumber: 5
        },
        splitLine: {
            show: false,
            length: 5,
            lineStyle: {
                color: '#194482',
            }
        },
        axisLabel: {
            show: false
        },
    }
];

option = {
    color: color,
    tooltip: {
        show: false
    },
    legend: {
        show: true,
        right: 20,
        y: 'center',
        icon: 'circle',
        itemWidth: 5,
        textStyle: {
            color: '#94B7CC'
        },
        formatter: params => {
            var onData = data.find(item => item.name == params)
            console.log(onData)
            return `{a|${onData.name}}    {b|${onData.value}%}`
        },
        textStyle: {
            rich: {
                a: {
                    color: '#CEF6FA',
                    width: 60
                },
                b: {
                    color: '#52D3F9',
                    width: 20,
                    textAlign: 'right'
                }
            },
        },

    },
    series: seriesOption
}
// return option;