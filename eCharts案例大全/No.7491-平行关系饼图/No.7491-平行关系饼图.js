var color= ['#02afe7', '#ffa12e','#f25185', '#0bbcb7','#1a9bfc','#7049f0'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: 'transparent',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#eee'
    }
};
var placeHolderStyle1 = {
    normal: {
        color: '#ddd',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#eee'
    }
};
option = {
    // backgroundColor: '#142058',
    title: {
        show: false,
        text: '匹配度',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.1)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        // icon: 'circle',
        right: '20',
        top: '40%',
        itemGap:20,
        data: ['A业务', 'B业务', 'C业务'],
        textStyle: {
            color: '#fft'
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [196, 200],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: 44,
                    name: 'A业务',
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    }
                },
                {
                    value: 56,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle1
                },
            ]
        },{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [186, 200],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: 44,
                    name: 'A业务',
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    }
                },
                {
                    value: 56,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [156, 160],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 56.7,
                    name: 'B业务',
                    itemStyle: {
                        normal: {
                            color: color[1]
                        }
                    }
                },
                {
                    value: 43.3,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle1
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [146, 160],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 56.7,
                    name: 'B业务',
                    itemStyle: {
                        normal: {
                            color: color[1]
                        }
                    }
                },
                {
                    value: 43.3,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [116, 120],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 30,
                    name: 'C业务',
                    itemStyle: {
                        normal: {
                            color: color[2]
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle1
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [106, 120],
            center:['30%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 30,
                    name: 'C业务',
                    itemStyle: {
                        normal: {
                            color: color[2]
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        }
    ]
};