var itemArr = [22, 16, 33, 0]; //数据数组
var n1 = [itemArr[0], '', '', '']
var n2 = ['', itemArr[1], '', '']
var n3 = ['', '', itemArr[2], '']
var n4 = ['', '', '', itemArr[3]]
var labelArr = ['在办', '办结', '逾期 ', '逾期办结'] //显示图例用
option = {
    // backgroundColor:black,
    legend: {
        orient: 'vertical',
        top:'center',
        left:'50',
        icon: 'circle',
        data: labelArr,
        textStyle: {
            color: '#000000'
        }
    },
    radar: [{
            splitLine: {
                lineStyle: {
                    color: '#000'
                }
            }
        },
        {
            indicator: [ //绘制总的图形
                {
                    text: '在办(22)',
                    max: 50,
                    color: '#35A1E7'
                },
                {
                    text: '办结(16)',
                    max: 50,
                    color: '#F53640'
                },
                {
                    text: '逾期在办(33)',
                    max: 50,
                    color: '#90D96B'
                },
                {
                    text: '逾期办结(0)',
                    max: 50,
                    color: '#FBC24F'
                },
            ],
            nameGap: 5,
            center: ['50%', '50%'],
            radius: 100,
            name: {
                textStyle: {
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 400,
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['none',
                        'none', 'none',
                        'none', 'none'
                    ],
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#cde6f5'
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#cde6f5' //网格的颜色
                },
            }
        }
    ],
    series: [{
            type: 'radar', //绘制总的图形不设置拐点
            radarIndex: 1,
            data: [{
                value: itemArr,
                symbolSize: 7,
                lineStyle: {
                    width: 2,
                    color: '#29B8FF'
                },
                areaStyle: {
                    normal: {
                        opacity: 0.75,
                        color: '#f8f7f7'
                    }
                }
            }],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: '#000',
                    // show:false
                }
            },
            silent: true,
            z: 1 //图层是一层一层叠加，所以这个也是一级一级递增
        },
        {
            type: 'radar', //绘制第一个点
            radarIndex: 1,
            name: labelArr[0],
            silent: true,
            z: 2, //图层是一层一层叠加，所以这个也是一级一级递增
            data: [{
                value: n1,
                symbolSize: 7,
            }],
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: '#35A1E7'
                }
            },
            lineStyle: {
                width: 0,
                labelLine: {
                    show: false //隐藏标示线
                }
            }
        },
        {
            type: 'radar',
            radarIndex: 1, //绘制第二个点
            name: labelArr[1],
            silent: true,
            z: 3, //图层是一层一层叠加，所以这个也是一级一级递增
            data: [{
                value: n2,
                symbolSize: 7,
            }],
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: '#F53640'
                }
            },
            lineStyle: {
                width: 0,
                labelLine: {
                    show: false //隐藏标示线
                }
            },

        },
        {
            type: 'radar', //绘制第三个点
            radarIndex: 1,
            name: labelArr[2],
            silent: true,
            z: 4, //图层是一层一层叠加，所以这个也是一级一级递增
            data: [{
                value: n3,
                symbolSize: 7,
            }],

            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: '#90D96B'
                }
            },
            lineStyle: {
                width: 0,
                labelLine: {
                    show: false //隐藏标示线
                }
            }

        },
        {
            type: 'radar', //绘制第三个点
            radarIndex: 1,
            name: labelArr[3],
            silent: true,
            z: 5, //图层是一层一层叠加，所以这个也是一级一级递增
            data: [{
                value: n4,
                symbolSize: 7,
            }],

            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: '#FBC24F'
                }
            },
            lineStyle: {
                width: 0,
                labelLine: {
                    show: false //隐藏标示线
                }
            }

        }
    ]
}