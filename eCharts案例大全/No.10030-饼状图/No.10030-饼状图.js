let scaleData = [
   
    {
        //'name': '可派人员1',
        'value': 30
    },
    {
        //'name': '已派人员2',
        'value': 10
    },{
       // 'name': '可派人员3',
        'value': 30
    },
    {
       // 'name': '已派人员4',
        'value': 10
    },{
       // 'name': '可派人员5',
        'value': 30
    },
    {
       // 'name': '已派人员6',
        'value': 10
    }

];
let colorgraphic = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#5CF9FE' // 0% 处的颜色
    },
    {
        offset: 0.4,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 0.6,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
    }
]);

let grid = {
    left: '5px', // 与容器左侧的距离
    right: '5px', // 与容器右侧的距离
    top: '5px', // 与容器顶部的距离
    bottom: '5px', // 与容器底部的距离
};
let placeHolderStyle = {
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
};
let data = [];
let color = ['#5CF9FE'];
let colorSet = [
    [0.91, color],
    [1, '#15337C']
];
let rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0]
    },
    bule: {
        fontSize: 120,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
};
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        label: {
            color: '#dfe9e3'
        },
        labelLine: {
            show: true,
            length: 20,
            length2: 40,
            lineStyle: {
                color: '#053256',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                borderWidth:0,
                shadowBlur: 20,
                borderColor:'#00f948',
                shadowColor: '#12b4ff',

            }
        }

    }, {
        value: 0.5,
        name: '',
        itemStyle: placeHolderStyle
    });
}
let seriesObj = [{ //内圆
            type: 'pie',
            radius: '66%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
                            offset: 0,
                            color: 'rgba(17,24,43,0)'
                        },
                        {
                            offset: .5,
                            // color: '#1E2B57'
                            color:'rgba(28,42,91,.6)'
                        },
                        {
                            offset: 1,
                            color: '#141C33',
                            // color:'rgba(17,24,43,0)'
                        }
                    ], false),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
        { //内圆
            type: 'pie',
            radius: '56%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                            offset: 0,
                            color: '#4978EC'
                        },
                        {
                            offset: .5,
                            color: '#1E2B57'
                        },
                        {
                            offset: 1,
                            color: '#141F3D'
                        }
                    ], false),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '60%',
            startAngle: '225',
            endAngle: '-134.999',
            splitNumber: '100',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        }, {
            type: 'gauge',
            name: '外层辅助',
            radius: '45%',
            startAngle: '225',
            endAngle: '-134.999',
            splitNumber: '100',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },  
        
        {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['50%', '56%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#f4fff7',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        //return params.name + '\n' + '' + percent + '%';
                    } else {
                        return '';
                    }
                },
    
            },


        }
    },
    data: data
}];
option = {
    backgroundColor: '#04243E',
    color: color,
    grid: grid,
    title: {
        text: '基础设施\n平台',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 64,
            color: "#fff",
        }
    },
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    series: seriesObj
};