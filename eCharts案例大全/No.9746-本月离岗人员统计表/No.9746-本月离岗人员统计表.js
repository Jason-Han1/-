option = {
    title: {
        text: '本月离岗人员统计表',
        subtext: 'TOP10',
        top: "18%",
        left: "center",
        textStyle: {
            color: '#333',
            fontSize: 23
        },
        subtextStyle: {
            verticalAlign: 'bottom',
            lineHeight: 30,
            color: '#666'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '2%',
        top: '35%',
        bottom: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        data: ['海淀区万泉庄xxx', '海淀区中关村xxx', '海淀区永定路xxx', '海淀区中关村xxx', '海淀区永定路xxx', '海淀区中关村xxx', '海淀区永定路xxx', '海淀区中关村xxx', '海淀区永定xxx', '海淀区中关xxx'],
        axisLabel: {
            color: '#5e6877',
            interval: 0,
            rotate: 20
        },
        axisLine: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#5e6877'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#5e6877'
        },
        name: '(人)',
        axisLine: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#5e6877'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        name: '加油车辆',
        type: 'bar',
        barMaxWidth: '50%',
        itemStyle: {
            normal: {
                color: function(params) {
                    if (params.dataIndex % 2 == 0) {
                        return {
                            type: 'bar',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(221, 77, 70,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(221, 77, 70,0)'
                            }],
                            global: false
                        }

                    } else {
                        return {
                            type: 'bar',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(215, 145, 110,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(215, 145, 110,0)'
                            }],
                            global: false
                        }
                    }
                }
            }
        },
        data: [331, 123, 112, 432, 442, 22, 444, 854, 113, 523]
    }]
}