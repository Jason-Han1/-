option = {
    title: {
        text: ['{a|准点率}', '{b|80%    }'].join('\n\n'),
        subtext: ['{a|昨日同比}', '{b|15%}'].join('\t\t\t\t'),
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 26,
                    align: 'center',
                    textAlign: 'left'
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "rgba(229, 244, 255, 1)",
                    fontSize: 36,
                    align: 'right',
                    backgroundColor: {
                        // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                    },
                    width: 15
                }
            }
        },
        subtextStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 22,
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "RGBA(197, 69, 130, 1)",
                    fontSize: 30,
                }
            }
        }
    },
    backgroundColor: '#011128',
    series: [{
            name: '准点率',
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
                    color: 'RGBA(54, 107, 231, 1)'
                }
            },
            hoverAnimation: false,
            data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
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