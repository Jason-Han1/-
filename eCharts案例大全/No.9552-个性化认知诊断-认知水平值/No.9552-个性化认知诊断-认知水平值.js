var Threshold = { //认知水平分析
    "StuThreshold": 20, //number类型，个人认知水平值
    "GroupThreshold": 40, //number类型，整体认知水平值
    "MaxThreshold": 100 //number类型，认知水平上限值
}
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
        color: '#e4e4e4',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#e4e4e4'
    }
};
option = {
    backgroundColor: '#fff',
    title: {
        text: '认知\n水平值',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#000",
        }
    },
    cursor: 'default',
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: [60, 75],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label: {
                borderRadius: '10',
            },
            data: [{
                    value: Threshold.GroupThreshold,
                    name: '整体认知水平',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00d1ff'
                            }, {
                                offset: 1,
                                color: '#0092e4'
                            }])
                        }
                    }
                },
                {
                    value: Threshold.MaxThreshold - Threshold.GroupThreshold,
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
            clockWise: true,
            radius: [40, 55],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: Threshold.StuThreshold,
                    name: '个人认知水平',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffc336'
                            }, {
                                offset: 1,
                                color: '#ff7f1d'
                            }])
                        }
                    }
                },
                {
                    value: Threshold.MaxThreshold - Threshold.StuThreshold,
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