option = {
    title: {
        textStyle: {
            color: 'rgb(0, 0, 0)',
        },
    },
    tooltip: {
        trigger: 'axis',
    },
    toolbox: {
        feature: {
            mark: {
                show: true,
            },
            dataView: {
                show: true,
                readOnly: true,
            },
            magicType: {
                show: false,
                type: ['line', 'bar'],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    xAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle: {
                color: 'rgb(0, 0, 0)',
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            data: ['1#-AHU-3F-1', '2#-PAU-302', 'CT-02冷却塔', 'CT-04冷却塔', 'CH-P1冷冻水泵'],
            nameTextStyle: {
                color: 'rgb(0, 0, 0)',
            },
            scale: true,
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: 'rgb(7, 7, 7)',
                },
                margin: 15,
            },
        },
    ],
    series: [
        {
            name: '告警次数',
            type: 'bar',
            data: [9, 3, 3, 2, 1],
            itemStyle: {
                normal: {
                    color: 'rgb(0, 165, 235)',
                    label: {
                        show: true,
                        position: 'insideRight',
                        textStyle: {
                            color: 'rgb(255, 255, 255)',
                            fontWeight: 'bold',
                        },
                    },
                },
                emphasis: {
                    label: {
                        textStyle: {
                            color: 'rgb(0, 0, 0)',
                        },
                    },
                },
            },
            markPoint: {
                data: [],
            },
        },
    ],
    backgroundColor: 'rgb(249, 249, 249)',
    animation: true,
    grid: {
        width: 420,
        height: 200,
    },
};

option && myChart.setOption(option);
