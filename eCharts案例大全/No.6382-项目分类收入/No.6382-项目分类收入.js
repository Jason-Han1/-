var fontColor = '#fff';
option = {
    color: ['#bf19ff', '#854cff', '#5f45ff', '#02cdff', '#0090ff', '#f9e264', '#f47a75', '#009db2', '#0780cf', '#765005'],
    backgroundColor: '#0f375f',
    
    textStyle: {
        fontSize: 18
    },
    grid: {
        left: '20',
        right: '50',
        bottom: '50',
        top: '80',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        x: 'center',
        top: '20',
        textStyle: {
            color: fontColor
        },
        data: ['MRI', 'CT', '放射', '心电', '超声', '检验']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五']
    }],
    yAxis: [{
        type: 'value',
        name: '元',
        axisLine: {
            lineStyle: {
                color: fontColor
            }
        }
    }],
    series: [{
            name: 'MRI',
            type: 'line',
            stack: '收入',
            symbolSize: 8,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)'
                        }]),
                    }
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
        },
        {
            name: 'CT',
            type: 'line',
            stack: '收入',
            symbol: 'circle',
            symbolSize: 8,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250]
        },
        {
            name: '放射',
            type: 'line',
            stack: '收入',
            symbol: 'circle',
            smooth: true,
            symbolSize: 8,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)'
                        }]),
                    }
                }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
        },
        {
            name: '心电',
            type: 'line',
            stack: '收入',
            symbol: 'circle',
            symbolSize: 8,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,46,101,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,166,246,0.9)'
                        }]),
                    }
                }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
        },
        {
            name: '超声',
            type: 'line',
            stack: '收入',
            symbol: 'circle',
            symbolSize: 8,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
        },
        {
            name: '检验',
            type: 'line',
            stack: '收入',
            symbol: 'circle',
            symbolSize: 8,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)'
                        }]),
                    }
                }
            },
            data: [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190]
        }
    ]
};