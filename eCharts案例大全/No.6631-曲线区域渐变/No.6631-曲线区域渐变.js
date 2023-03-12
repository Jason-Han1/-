option = {
    backgroundColor: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1.23', '2.34', '3.24', '4.01', '4.14', '5.12', '5.23'],
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#57617B'
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#57617B'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.2)'
            }
        }
    }],
    series: [{
            name: '',
            type: 'line',
            data: [100, 90, 120, 300, 90, 330, 170],
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#4bc8db',
                    areaStyle: {
                        type: 'default',
                        opacity: 0.4
                    }
                }
            },
            lineStyle: {
                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(129, 71, 155, 0.8)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(26, 61, 98, 0.8)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                width: 2,
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear', //设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(129, 71, 155, 0.8)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(26, 61, 98, 0.8)' // 100% 处的颜色
                            }
                        ],

                        globalCoord: false // 缺省为 false
                    }
                }
            },

        },

    ]
};