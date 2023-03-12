option ={
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
    legend: {
        data: ['AUT', 'PAUT', 'RT'],
        textStyle:{
            color:'#fff'
        }
    },
    yAxis: {
        show: true,
        name: '%',
        min: 90,
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
            name: 'AUT',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'PAUT',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'RT',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
    ]
}