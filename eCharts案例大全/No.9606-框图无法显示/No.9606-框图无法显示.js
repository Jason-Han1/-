
    option = {
        title: {
            text: 'K线图'
        },
        legend: {
            left: 'center',
            data: ['k', 'CK', 'L1', 'L2'],
            selected: {
                'K': true,
                'CK': false,
                'L1': true,
                'L2': true
            }
        },
        grid: [{
            left: '10%',
            right: '10%',
            height: '50%'
        }, {
            left: '10%',
            right: '10%',
            top: '61%',
            height: '10%'
        }, {
            left: '10%',
            right: '10%',
            top: '75%',
            height: '12%'
        }],
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: {onZero: false},
            splitLine: {show: false},
            data: []
        }, {
            type: 'category',
            gridIndex: 1,
            boundaryGap: true,
            axisLine: {onZero: false},
            splitLine: {show: false},
            axisLabel: {show: false},
            data: []
        }, {
            type: 'category',
            gridIndex: 2,
            axisLabel: {show: false},
            data: []
        }],
        yAxis: [{
            scale: true,
            splitArea: {show: true}
        }, {
            scale: true,
            gridIndex: 1,
            splitArea: {show: true}
        }, {
            gridIndex: 2,
            splitNumber: 4,
            axisLine: {onZero: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: true}
        }],
        axisPointer: {
            link: [{
                xAxisIndex: [0, 1]
            }]
        },
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 0],
                start: 0,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                xAxisIndex: [0, 1],
                top: '90%',
                start: 0,
                end: 100
            },
            {
                show: false,
                xAxisIndex: [0, 2],
                type: 'slider',
                start: 0,
                end: 100
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'line'}
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {yAxisIndex: false},
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'K',
                type: 'candlestick',
                itemStyle: {
                    normal: {
                        color: '#B22222',
                        color0: '#008000',
                        opacity: 0.4
                    }
                },
                data: []
            },
            {
                name: 'CK',
                type: 'candlestick',
                data: []
            },
            {
                name: 'L1',
                type: 'line',
                lineStyle: {
                    normal: {
                        color: 'rgba(0, 0, 255, 1)',
                        width: 2
                    }
                },
                markArea: {
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,255,0.3)',
                            borderColor: 'rgba(0,0,255,1)',
                            borderWidth: 2
                        }
                    },
                    data: []
                },
                data: []
            },
            {
                name: 'L2',
                type: 'line',
                lineStyle: {
                    normal: {
                        color: 'rgba(255,0,0,1)',
                        width: 3
                    }
                },
                markArea: {
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,0,0,0.3)',
                            borderColor: 'rgba(255,0,0,1)',
                            borderWidth: 3
                        }
                    },
                    data: []
                },
                data: []
            },
            {
                name: 'Volume',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: []
            },
            {
                name: 'MACD',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: []
            }, {
                name: 'DIF',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: []
            }, {
                name: 'DEA',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: []
            }
        ]
    }
