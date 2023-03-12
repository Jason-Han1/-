option = {
    title: {
        text: ['{a|到岗率}', '{b|90%}'].join('\n\n\n'),
        subtext: ['{a|昨日同比}', '{b|15%}', '{c|}'].join('\t\t\t\t'),
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 30,
                    align: 'center',
                    textAlign: 'left'
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "rgba(229, 244, 255, 1)",
                    fontSize: 46,

                }
            }
        },
        subtextStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 25,
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "RGBA(197, 69, 130, 1)",
                    fontSize: 25,
                },
                c: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "RGBA(197, 69, 130, 1)",
                    fontSize: 30,
                    // backgroundColor: {
                    //     // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                    // },
                    width: 25
                }
            }
        }
    },
    backgroundColor: '#011128',
    series: [{
            name: '到岗率',
            type: 'pie',
            clockWise: true,
            radius: [190, 200],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(14, 252, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(54, 107, 231, 1)'
                    }])
                }
            },
            hoverAnimation: false,
            data: [{
                    value: 90,
                    name: '01'
                }, {
                    value: 10,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'none', //未完成的圆环的颜色
                        }
                    }
                }

            ]
        }, {
            name: '外框',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [220, 218],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'RGBA(30, 68, 96, 1)'
                }
            },
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '02',
                }, {
                    value: 0,
                    name: 'invisible',
                }

            ]
        },


    ]
};