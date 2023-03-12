option = {
    backgroundColor:'rgba(0,0,0,0.6)',
    legend: {
        left: '10%',
        orient: 'vertical',
        selectedMode: false,
        data: [{
            name: 'Android',
            icon: 'rect',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            name: 'IOS',
            icon: 'rect',
            textStyle: {
                color: '#ffffff'
            }
        }]
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'white',
                fontSize: '28',
                width: '0'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: '16'
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show: false,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'white'
            }
        }
    },
    series: [{
            name: 'Android',
            type: 'bar',
            barWidth: 17,
            itemStyle: {
                normal: {
                    color: 'rgba(0,252,255,0.8)',
                    barBorderRadius: [0, 0, 0, 180],
                    opacity: '1'
                }
            },
            data: [220, 260, 191, 234, 290, 330, 310]
        },
        {
            name: 'Android',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 17,
            itemStyle: {
                normal: {
                    color: 'rgba(0,252,255,0.8)',
                    barBorderRadius: [0, 0, 180, 0],
                    opacity: '0.3'
                }
            },
            data: [220, 260, 191, 234, 290, 330, 310],
            barGap: 0
        },
        {
            name: 'Android',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#00FCFF',
                    borderWidth: 1,
                    borderColor: 'rgba(0,252,255,0.6)',
                    opacity: '1',
                    shadowColor: 'rgb(0,0,0,0.1)',
                    shadowOffsetX: '0.5',
                    shadowOffsetY: '0.5'
                }
            },
            label: {
                show: true,
                color: '#ffffff',
                offset: [-20, 0],
                position: 'top',
                fontSize: '16',
                fontWeight: 'bolder'
            },
            symbol: 'rect',
            symbolRotate: 45,
            symbolSize: ['24', '24'],
            symbolOffset: ['-17', '-12'],
            symbolPosition: 'end',
            data: [220, 260, 191, 234, 290, 330, 310],
            z: 3
        },
        {
            name: 'IOS',
            type: 'bar',
            barWidth: 17,
            itemStyle: {
                normal: {
                    color: '#6F57C9',
                    barBorderRadius: [0, 0, 0, 180],
                    opacity: '1'
                }
            },
            data: [220, 182, 191, 234, 290, 120, 310]
        },
        {
            name: 'IOS',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 17,
            itemStyle: {
                normal: {
                    color: '#5c93fc',
                    barBorderRadius: [0, 0, 180, 0],
                    opacity: '0.5'
                }
            },
            data: [220, 182, 191, 234, 290, 120, 310],
            barGap: 0
        },
        {
            name: 'IOS',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#6F57C9',
                    borderWidth: 1,
                    borderColor: '#6F57C9',
                    opacity: '1',
                    shadowColor: 'rgb(0,0,0,0.1)',
                    shadowOffsetX: '0.5',
                    shadowOffsetY: '0.5'
                }
            },
            label: {
                show: true,
                color: '#ffffff',
                offset: [20, 0],
                position: 'top',
                fontSize: '16',
                fontWeight: 'bolder'
            },
            symbol: 'rect',
            symbolRotate: 45,
            symbolSize: ['24', '24'],
            symbolOffset: ['17', '-12'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 120, 310],
            z: 3
        }
    ]
};