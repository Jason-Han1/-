option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'category',
            data: ['2', '4', '6', '8', '10', '12', '14'],
            position: 'bottom',
            // axisLabel: {
            //   padding: [0, 0, 0, -120]    // 四个数字分别为上右下左与原位置距离
            // }
        },
        {
            type: 'category',
            data: ['1', '3', '5', '7', '9', '11', '13'],
            position: 'bottom',
            axisLabel: {
                padding: [0, 0, 0, -120], // 四个数字分别为上右下左与原位置距离
            },
        },
    ],
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [150, , 224, 218, 135, 147, 260],
            type: 'line',
            connectNulls: true,
        },
        {
            data: [110, , 120, 318, 165, 177, 160],
            type: 'line',
            connectNulls: true,
        },
    ],
};
