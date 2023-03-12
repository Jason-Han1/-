option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0 // 不绘制hover线
            }
        }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false // 坐标轴
        },
        splitLine: {
            show: false
        },
        axisTick: {
            lineStyle: {
                color: '#bae0e8' // 坐标刻度线设置
            }
        },
        axisLabel: {
            color: '#999999'
        },
        data: ['08-30', '09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10', '09-12', '09-13', '09-14', '09-15', '09-16']
    },
    yAxis: [{
        axisLine: {
            show: false
        }, // 控制网格线是否显示

        splitLine: {
            lineStyle: {
                color: '#bae0e8'
            }
        }, // 去除y轴上的刻度线
        axisTick: {
            show: false
        },
        type: 'value',
        name: '峰值（Mbps）',
        nameGap: '20',
        position: 'left',
        nameTextStyle: {
            color: '#999999'
        },
        axisLabel: {
            formatter: '{value} ',
            color: '#999999'
        }
    }],
    series: [{
            name: '流量统计',
            type: 'line',
            smooth: 0,    //曲线是否平滑
            showSymbol: false,
            symbol: false,
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#2ef4db' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#4e8aff' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 0.9
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0.2,
                        color: '#ffffff'
                    }, {
                        offset: 1,
                        color: 'rgba(48,223,255,0.71)'
                    }]),
                    opacity: 0.7
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb547c', // 会设置点和线的颜色，所以需要下面定制 line
                    borderColor: '#fff' // 点边线的颜色
                },
                emphasis: {
                    color: '#eb547c',
                    borderWidth: 6,
                    borderColor: 'rgba(235,84,124,0.4)'
                }
            },
            data: [100, 128, 137, 150, 100, 120, 110, 99, 120, 138, 90, 110, 157, 85, 145, 96, 123]
        }

    ]
};