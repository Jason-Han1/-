option = {
    backgroundColor: '#0f375f',
    grid: {
        left: '10%',
        top: '5%',
        bottom: '10%',
        right: '5%',
    },
    tooltip: {
        trigger: 'axis',
        show: true,
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
        backgroundColor: 'rgba(50,50,50,0.7)',
        borderWidth: 0,
    },
    dataZoom: [
        {
            show: true,
            height: 10,
            xAxisIndex: [0],
            bottom: 10,
            start: 0,
            end: 80,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: 'rgba(255, 255, 255,0.5)',
            },
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },
            fillerColor: 'rgba(42, 131, 223,1)',
            borderColor: 'rgba(66, 130, 197,1)',
            backgroundColor: 'rgba(12, 67, 124,0.5)',
            showDataShadow: false,
            brushSelect: false,
        },
        {
            type: 'inside',
        },
    ],
    yAxis: {
        show: true,
        min: 90,
        max: 100,
        type: 'value',
        nameTextStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 12,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(28, 158, 222, 1)',
                type: 'solid',
            },
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: 'rgba(28, 158, 222, 1)',
            },
        },
        axisLabel: {
            formatter: '{value}%',
            color: 'rgba(28, 158, 222, 1)',
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: 'rgba(0, 206, 209, 0.3)',
                width: 0.5,
            },
        },
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        nameTextStyle: {
            fontSize: 14,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(28, 158, 222, 1)',
            },
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    series: [
        {
            type: 'line',
            smooth: true,
            symbolSize: 5,
            data: [97, 97, 91, 98, 92, 91, 91],
            itemStyle: {
                normal: {
                    width: 1,
                    color: 'rgb(0, 255, 255)',
                },
            },
            lineStyle: {
                normal: {
                    color: 'rgb(0, 146, 246)',
                    width: 0.5,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0, 146, 246,0.2)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0, 146, 246,0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 146, 246,0)',
                            },
                        ],
                        false
                    ),
                },
            },
        },
    ],
}