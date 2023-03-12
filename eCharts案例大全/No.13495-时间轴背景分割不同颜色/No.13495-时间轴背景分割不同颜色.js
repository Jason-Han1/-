option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return params[0].value[1];
        },
        axisPointer: {
            type: 'line',
            axis: 'x',
            animation: false,
            snap: true,
            lineStyle: {
                color: '#fff',
                type: 'dashed'
            }
        },
    },
    color: [
        '#db4d4c',
        '#ffcf49',
        '#27ccc8',
        '#d3df62',
        '#07479d',
        'rgba(7, 71, 157, 0.46)',
    ],
    grid: {
        left: '10%',
        top: '13%',
        right: '10%',
        bottom: '18%',
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12,
            interval: 0,
        },
        axisTick: {
            inside: true,
            alignWithLabel: true,
            interval: 0,
            lineStyle: {
                color: ['rgba(255,255,255,.5)'],
            }
        },
        axisLine: {
            lineStyle: {
                color: ['rgba(255,255,255,0.25)'],
                type: 'dashed',
            }
        }
    },
    yAxis: [{
            position: 'right',
            type: 'value',
            splitNumber: 10,
            min: 40,
            max: 195,
            name: 'bpm',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
            },
            axisLabel: {
                color: '#fff',
                fontSize: 12,
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: ['rgba(255,255,255,0.25)'],
                }
            },
            axisLine: {
                lineStyle: {
                    color: ['rgba(255,255,255,0.25)'],
                }
            },
            splitLine: {
                show: false,
            }
        },
        {
            type: 'category',
            splitNumber: 10,
            data: [ 90, 117, 136, 156, 175, 195],
            name: 'bpm',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: ['rgba(255,255,255,0.25)'],
                }
            },
            axisLine: {
                lineStyle: {
                    color: ['rgba(255,255,255,0.25)'],
                }
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    color: ['rgba(255,255,255,0.25)'],
                    type: 'dashed',
                    width: 1,
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: [
                        'rgba(7, 71, 157, 0.2)',
                        'rgba(7, 71, 157, 0.4)',
                        'rgba(7, 71, 157, 0.6)',
                        'rgba(7, 71, 157, 0.8)',
                        'rgba(7, 71, 157, 0.9)',
                        'rgba(7, 71, 157, 1)',
                    ]
                }
            },
        },
        {
            type: 'category',
            position: 'left',
            offset: -20,
            data: ['安静心率区间', '热身区间', '燃烧脂肪区间', '有氧运动区间', '无氧运动区间', '最大强度'],
            axisLabel: {
                color: '#fff',
                fontSize: 12,
                align: 'top',
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            }
        },
    ],
    series: [{
        type: 'line',
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#c205c0',
                lineStyle: {
                    color: '#c205c0',
                    shadowColor: 'rgba(188,138,187,0.8)',
                    shadowBlur: 10,
                }
            },
        },
        zlevel: 100,
        data: [
            [1527476583000, 100],
            [1527476584000, 195],
            [1527476585000, 100],
            [1527476593000, 90]
        ]
    }],
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            height: 20, //组件高度
            bottom: 10,
            start: 0,
            end: 100,
            backgroundColor: '#0355c3',
            fillerColor: 'rgba(43, 187, 239, 0.2)',
            borderColor: '#2bbbef',
            showDataShadow: false,
            showDetail: false,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '20',
            handleStyle: {
                color: '#2bbbef',
            },
            axisTick: {
                inside: true,
                alignWithLabel: true,
                lineStyle: {
                    color: ['rgba(255,255,255,.5)'],
                }
            },
        },
        {
            type: 'inside',
        }
    ],
};