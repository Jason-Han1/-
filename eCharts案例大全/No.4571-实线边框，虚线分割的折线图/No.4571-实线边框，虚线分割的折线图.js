option = {
    grid: [{
            x: '7%',
            y: '10%',
            width: '86%',
            height: '82%'
        },
        {
            x: '7%',
            y: '0%',
            width: '86%',
            height: '10%'
        },
        {
            x: '7%',
            y: '10%',
            width: '86%',
            height: '82%'
        },
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999'
            },
            axisTick: false,
            axisLine: {
                show: false,
            },
            gridIndex: 0
        },
        {
            //上方线
            gridIndex: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            }
        },
        {
            //下方线
            gridIndex: 2,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            }
        }
    ],
    yAxis: [{
            name: "单位（个）",
            type: 'value',
            boundaryGap: [0, '30%'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999'
            },
            axisTick: false,
            //左侧线
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5
                }
            },
            gridIndex: 0
        },
        {
            name: this.rightUnit,
            type: 'value',
            splitLine: {
                show: !this.unit,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999',
                fontSize: this.yTextSize,
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei'
            },
            axisTick: false,
            splitNumber: 5,
            //右侧线
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            },
            gridIndex: 0
        },
        {
            gridIndex: 1,
            axisLine: {
                show: false,
            }
        },
        {
            gridIndex: 2,
            axisLine: {
                show: false,
            }
        }
    ],
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 180, 0, 0.5)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 180, 0, 0.5)'
        }]
    },
    series: [{
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
            color: 'green',
            width: 2
        },
        data: [
            ['2019-10-10', 200],
            ['2019-10-11', 400],
            ['2019-10-12', 650],
            ['2019-10-13', 500],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
        ]
    }]
};