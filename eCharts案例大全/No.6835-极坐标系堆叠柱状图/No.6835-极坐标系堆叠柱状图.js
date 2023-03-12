option = {
    backgroundColor: '#05224d',
    tooltip: {
        show: true,
        formatter: `{a}:{b}`
    },
    grid: {
        top: '11%',
        bottom: '55%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(params) {
                // let item = chartData[params];
                console.log(params)
                return '{name|' + params + '%}{line|}'
            },
            interval: 0,
            inside: false,
            margin: 0,
            textStyle: {
                color: "red",
                fontSize: 14,
                rich: {
                    line: {
                        width: 400,
                        height: 1,
                        backgroundColor: 'rgba(22,121,238,.6)'
                    },
                    name: {
                        width: 60,
                        height: 40,
                        color: '#fbb748',
                        fontSize: 14,
                        align: 'center',
                        borderWidth: 1,
                        borderColor: 'rgba(22,121,238,.6)',
                        backgroundColor: 'rgba(22,121,238,.2)',
                        borderRadius: 5,
                    },

                }
            },
            show: true
        },
        data: [10, 20, 30, 40]
    }],
    angleAxis: {
        show: false
    },
    radiusAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            color: '#fff',
            fontSize: 12,
            align: 'right'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.2)",
                width: 1,
                type: "solid",
            },
        },
        axisTick: {
            show: false

        },
        data: ['三级', '二级', '一级', 'S级'],
        z: 10
    },
    polar: {
        radius: '75%',
        center: ['50%', '45%']
    },

    xAxis: [{
        show: false
    }],
    series: [{
            type: 'bar',
            data: [0, 10, 20, 20],
            coordinateSystem: 'polar',
            name: '1',
            stack: 'a',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#3ac4a1'
                        }, {
                            offset: 1,
                            color: '#1b6a56'
                        }],
                    },
                }
            },


            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,.1)"
            },
        },
        {
            type: 'bar',
            data: [0, 20, 10, 20],
            coordinateSystem: 'polar',
            name: '2',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#05819c'
                        }, {
                            offset: 1,
                            color: '#057d9b'
                        }],

                    },
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,.1)"
            },
        },
        {
            type: 'bar',
            data: [20, 30, 30, 20],
            coordinateSystem: 'polar',
            name: '3',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#bef88f'
                        }, {
                            offset: 1,
                            color: '#94c86a'
                        }],
                    },
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,.1)"
            },
        },
        {
            type: 'bar',
            data: [30, 0, 0, 20],
            coordinateSystem: 'polar',
            name: '4',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#f5cb78'
                        }, {
                            offset: 1,
                            color: '#c48d23'
                        }],
                    },
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,.1)"
            },
        },
        {
            type: 'bar',
            data: [20, 30, 30, 20],
            coordinateSystem: 'polar',
            name: '5',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#f17470'
                        }, {
                            offset: 1,
                            color: '#b84743'
                        }],
                    },
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,0.1)"
            },
        },
        {
            type: 'bar',
            data: [20, 0, 30, 20],
            coordinateSystem: 'polar',
            name: '6',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#52ace6'
                        }, {
                            offset: 1,
                            color: '#37749c'
                        }],

                    },
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(255,255,255,0.1)"
            },
        },
    ],
    legend: {
        show: true,
        data: ['1', '2', '3', '4', '5', '6'],
        x: 'center',
        bottom: '5%',
        icon: 'circle',
        itemWidth: 6,
        itemHeight: 6,
        textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: 14,
            width: 70
        },
    }
}