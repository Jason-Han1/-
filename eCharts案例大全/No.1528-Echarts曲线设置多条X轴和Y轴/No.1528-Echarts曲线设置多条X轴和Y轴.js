option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
    },
    /* legend: {
data: ['直接访问']
}, */
    xAxis: [
        {
            /* name: "学程数", */
            /* max: "400", */
            type: 'category',
            /* position: 'bottom', */
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            offset: -80,
            axisPointer: {
                type: 'none',
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        {
            /* name: "总题数", */
            type: 'category',
            position: 'bottom',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            offset: 10,
            axisPointer: {
                type: 'none',
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        {
            /* name: "错题数", */
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            axisPointer: {
                type: 'none',
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            position: 'top',
            offset: -30,
        },
        {
            /* name: "错题数", */
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            axisPointer: {
                type: 'none',
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            position: 'top',
            offset: -120,
        },
    ],
    yAxis: [
        {
            name: '学程数',
            type: 'value',
        },
        {
            name: '总题数',
            type: 'value',
            offset: -230,
        },
        {
            name: '总题数2',
            type: 'value',
            offset: -430,
        },
        {
            name: '错题数',
            type: 'value',
            show: true,
            axisLabel: {
                formatter: '{value} %',
            },
            min: 10,
            max: 80,
        },
    ],
    series: [
        // {
        //     name: '学程数',
        //     type: 'line',
        //     xAxisIndex: 0,
        //     yAxisIndex: 0,
        //     data: [1, 2, 4, 5, 8, 9, 8, 6, 5, 9, 1, 2, 4, 5, 8, 9, 8, 6, 5, 9, 8, 4, 9, 6],
        // },
        // {
        //     name: '总题数',
        //     type: 'bar',
        //     xAxisIndex: 1,
        //     yAxisIndex: 1,
        //     data: [20, 10, 20, 49, 70, 180, 70, 88, 93, 72, 20, 10, 20, 49, 70, 180, 70, 88, 93, 72, 22, 32, 12, 25],
        // },
        {
            name: '错题数',
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 0,
            data: [5, 9, 9, 8, 24, 9, 11, 32, 13, 21, 5, 9, 9, 8, 24, 9, 11, 32, 13, 21, 21, 33, 16, 36],
        },
    ],
};
