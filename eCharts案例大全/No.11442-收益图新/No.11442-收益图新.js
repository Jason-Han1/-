option = {
    xAxis: {
        type: 'category',
        name: '',
        nameGap: -15,
        nameTextStyle: {
            color: '#999',
            padding: [30, 0, 0, 0]
        },
        data: ['小于一万元', '大于一万元'],
        axisLabel: {
            color: '#333',
            textStyle: {
                color: '#333'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#CACACA',
                shadowColor: '#CACACA',
                shadowOffsetX: '14'
            },
            symbol: ['none', 'arrow'],
            symbolSize: [5, 7],
            symbolOffset: [0, 14]
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '急速支取收益率 %',
        nameGap: 20,
        boundaryGap: true,
        nameTextStyle: {
            color: '#333'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#CACACA',
                shadowColor: '#CACACA',
                shadowOffsetY: '-14'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#333',
            textStyle: {
                color: '#333'
            }
        },
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b}<br>急速支取收益率：{c}'
    },
    series: [{
        data: [0.0035, 3.55],
        type: 'bar',
        barGap: 0,
        barMinHeight: '10%',
        barCategoryGap: 0,
        itemStyle: {
            color: '#ffe9da',
            shadowColor: '#ff8b46',
            shadowOffsetX: 0,
            shadowOffsetY: -3
        },
        emphasis: {
            itemStyle: {
                color: '#ffe9da'
            }
        },
        markLine: {
            silent: false,
            symbol: 'none',
            label: {
                show: true,
                position: 'start'
            },
            data: [
                [{
                        name: '0.35',
                        yAxis: 0.8,
                        x: '8%'
                    },
                    {
                        yAxis:0.8,
                        x: '8%'
                    }
                ],
                [{
                        name: 3.55,
                        yAxis: 3.55,
                        x: '10%'
                    },
                    {
                        name: 3.55,
                        yAxis: 3.55,
                        x: '50%'
                    }
                ]
            ],
            lineStyle: {
                color: '#ff8b46',
                width: 1
            }
        }
    }]
};