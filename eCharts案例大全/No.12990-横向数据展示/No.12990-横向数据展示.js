option = {
    color: ['#6BCD07', '#FBD029', '#FE8800', '#FE0000', '#970454', '#62001E'],

    grid: {
        top: 32,
        left: 48,
        right: 32,
        bottom: 48
    },
    xAxis: {
        type: 'value',
        show: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 2
            }
        }
    },
    yAxis: {
        type: 'category',
        show: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 2
            }
        },
        data: ['2013']
    },
    series: [{
        name: '谨慎',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'insideTopRight',
                distance: -15,
                offset: [-10, 0],

            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [20, 0, 0, 20], //统计条弧度
            },
        },
        data: [20]
    }, {
        name: '维持',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'insideTopRight',
                distance: -15,
                offset: [-10, 0],

            }
        },
        data: [30]
    }, {
        name: '推荐',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'insideTopRight',
                distance: -15,
                offset: [-10, 0],

            }
        },
        data: [25]
    }, {
        name: '强烈推荐',
        type: 'bar',
        stack: 1,
        barWidth: 10,
        borderRadius: '20px',
        label: {
            normal: {
                show: true,
                position: 'insideTopRight',
                distance: -15,
                offset: [-10, 0],

            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [0, 20, 20, 0], //统计条弧度
            },
        },
        data: [25]
    }]
}