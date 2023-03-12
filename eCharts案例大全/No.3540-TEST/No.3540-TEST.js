option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.2, 0.2, 1, [{
        offset: 0,
        color: '#d6b3d1'
    }, {
        offset: 1,
        color: '#7e6b87'
    }]),
    yAxis: {
        show: false,
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
    }, ],
    series: [
        {
            name: '',
            type: 'pictorialBar',
            zlevel: 1,
            symbol:'rect',
            itemStyle: {
                normal: {
                    shadowColor: '#ff00f7',
                    shadowBlur: 15,
                    shadowOffsetY:-50,
                    shadowOffsetX:0,
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#9f009a'
                        }, {
                            offset: .1,
                            color: 'rgba(255, 0, 247,.6)'
                        }, {
                            offset: .3,
                            color: '#fff'
                        },{
                            offset: .8,
                            color: '#fff'
                        }, {
                            offset: .9,
                            color: 'rgba(255, 0, 247,.6)'
                        }, {
                            offset: 1,
                            color: '#9f009a'
                        }],
                        globalCoord: false
                    },
                },
                emphasis: {
                    opacity: 1,
                    shadowColor: '#ff00eb',
                    shadowBlur: 25,
                    shadowOffsetY:-0,
                    shadowOffsetX:0,
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#9f009a'
                        }, {
                            offset: .1,
                            color: 'rgba(255, 0, 247,.6)'
                        }, {
                            offset: .3,
                            color: '#fff'
                        },{
                            offset: .8,
                            color: '#fff'
                        }, {
                            offset: .9,
                            color: 'rgba(255, 0, 247,.6)'
                        }, {
                            offset: 1,
                            color: '#9f009a'
                        }],
                        globalCoord: false
                    },
                },
            },
            barWidth: '15',
            data: [5, 12, 30, 45, 20, 16],
        },
        {
            name: '',
            type: 'bar',
            barGap: '-100%',
            barWidth: '40',
            data: [35, 32, 50, 65, 50, 36],
            label: {
                show: true,
                formatter: "{c}%",
                position: 'top',
                color: '#fff',
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 4,
                    shadowOffsetY: 3,
                    shadowOffsetX: 3,
                    barBorderRadius: 3,
                    borderColor: '#292a3f',
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#242537'
                        }, {
                            offset: .3,
                            color: '#583b51'
                        },{
                            offset: .7,
                            color: '#583b51'
                        }, {
                            offset: 1,
                            color: '#242537'
                        }],
                        globalCoord: false
                    },
                }
            },
        },
    ]
};