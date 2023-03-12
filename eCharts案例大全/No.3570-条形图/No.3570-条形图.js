option = {
    backgroundColor: '#0f375f',
    grid: {
        left: '10%',
        top: '7%',
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
        name: '%',
        min: 0,
        max: 100,
        type: 'value',
        nameTextStyle: {
            color: 'rgba(28, 158, 222, 1)',
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
            name: '检测合格率',
            type: 'bar',
            data: [50, 26, 10, 13, 15, 50],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: '#00E0CD',
                    barBorderRadius: [30, 30, 30, 30],
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}',
                    textStyle: {
                        color: '#00E0CD',
                        fontSize: 14,
                    },
                },
            },
        },
    ],
};
