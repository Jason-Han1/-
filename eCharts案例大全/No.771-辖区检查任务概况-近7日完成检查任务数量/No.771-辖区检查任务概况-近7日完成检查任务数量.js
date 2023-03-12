let XData = ['12', '13', '14', '15', '16','17','18日']
let valueData = [117,47,68,118,138,38,58]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: 'rgba(81, 138, 252, 0.1)',
            },
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 1)'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(193, 207, 220, 1)',
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: XData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            minInterval: 50,
            // maxInterval: 5,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 1)',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(193, 207, 220, 1)',
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    series: [
        {
            name: '近7日完成检查任务数量',
            type: 'bar',
            data: valueData,
            itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(124, 135, 254, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(81, 138, 252, 1)"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "rgba(63, 149, 218, 1)",
                        fontSize: 18,
                        fontFamily: 'DIN',
                        fontWeight: 'bold'
                    }
                }
            },
            barMaxWidth: '25%',
        }
    ]
};