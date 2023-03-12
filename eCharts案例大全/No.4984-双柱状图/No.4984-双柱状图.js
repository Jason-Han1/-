//颜色没配
var aData = {
    area:["生态文旅区", "涟水县", "苏淮高新区", "洪泽县", "淮阴区", "清江浦区", "开发区", "金湖县", "盱眙县", "淮安市", "淮安区", "淮安工业园区"],
    ggxtlz:[2, 20, 2, 14, 22, 2, 18, 218, 30, 4, 0, 10],
    xms:[20, 120, 88, 34, 66, 100, 90, 200, 60, 14, 0, 100]
}
var data = [];
var area = []
data[0] = aData.xms
data[1] = aData.ggxtlz
area = aData.area
let bottom = 10;
option = {

    grid: [{
        top: '10%',
        left: '0%',
        width: '38%',
        containLabel: true,
        bottom
    }, {
        top: '10%',
        left: '55%',
        width: '0%',
        bottom: bottom + 16
    }, {
        top: '10%',
        right: '0%',
        width: '38%',
        containLabel: true,
        bottom
    }],
    xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255,255,256,0.4)',
                margin: 10
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    color: '#2B3B7F',
                    type: 'solid'
                }
            }
        },
        {
            gridIndex: 1,
            show: true,
            axisLabel: {
                color: 'rgba(255,255,256,0.4)',
                margin: 0
            },
        }, {
            gridIndex: 2,
            type: 'value',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255,255,256,0.4)',
                margin: 10
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    color: '#2B3B3F',
                    type: 'solid'
                }
            }
        }
    ],
    yAxis: [{
            position: 'left',
            type: 'category',
            axisLabel: {
                color: ['rgba(0,0,0,0.6)'],
                show: true,
            },
            axisTick: {
                show: false
            },
            data: data[0]
        },
        {
            gridIndex: 1,
            axisLabel: {
                color: `#000`,
                formatter: (value, index) => {
                    return `{rank|${value}} `
                },
                rich: {
                    rank: {
                        color: '#000',
                        fontSize: 14,
                        width: 90,
                        align: 'center',
                    },
                },
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: area
        },
        {
            gridIndex: 2,
            position: 'right',
            type: 'category',
            axisLabel: {
                color: ['rgba(0,0,0,0.6)'],
                show: true,
                inside: false,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'transparent'
                }
            },
            axisTick: {
                show: false
            },

            data: data[1]
        },
    ],
    series: [{
            type: 'bar',
            label: {
                show: false,
                position: 'left'
            },
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#51A7A9'
                        }, {
                            offset: 1,
                            color: '#4375A8'
                        }]
                    },
                },
            },
            showBackground: true,
            backgroundStyle: {
                color: "#131423"
            },
            data: data[0]
        },
        {
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                show: false,
                position: 'right'
            },
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#4458AF'
                        }, {
                            offset: 1,
                            color: '#595BA7'
                        }]
                    },
                },
            },
            showBackground: true,
            backgroundStyle: {
                color: "#131423",
                shadowColor: "#131423",
                shadowOffsetX: 1
            },
            data: data[1]
        }
    ]

};