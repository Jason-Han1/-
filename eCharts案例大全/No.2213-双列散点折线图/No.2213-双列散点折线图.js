option = {
    color: ['#FFE426', '#e43c59'],
    grid: {
        top: '10%',
        right: '6%',
        left: '6%',
        bottom: '5%',
    },
    // 图例
    legend: {
        show: true,
        data: ['test1', 'test2'],
        top: '3%',
        icon: 'rect',
        itemWidth: 10, // 设置宽度
        itemHeight: 5, // 设置高度
        textStyle: {
            fontFamily: 'PingFang SC',
            fontSize: 20,
            color: '#BFEBFF',
        },
    },
    xAxis: [
        {
            boundaryGap: false,
            data: ['0时', '4时', '8时', '12时', '16时'],
            axisLine: {
                show: true,
                lineStyle: {
                    fontSize: 20,
                    type: 'solid',
                    color: '#BFEBFF',
                    width: '1',
                },
            },
            axisLabel: {
                fontSize: 20,
                color: '#BFEBFF',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(240, 240, 240, 1)',
                    type: 'dashed',
                },
            },
        },
    ],
    yAxis: [
        {
            name: '单位:件',
            axisLine: {
                show: true,
                lineStyle: {
                    fontSize: 20,
                    type: 'solid',
                    color: '#fff',
                    width: '1',
                },
            },
            nameTextStyle: {
                fontFamily: 'PingFang SC',
                fontSize: 20,
                color: '#BFEBFF',
            },
            axisLabel: {
                fontSize: 20,
                color: '#BFEBFF',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(240, 240, 240, 1)',
                    type: 'dashed',
                },
            },
        },
        {
            type: 'value',
            name: '单位:%',
            min: 0,
            max: 100,
            interval: 20,
            nameTextStyle: {
                fontFamily: 'PingFang SC',
                fontSize: 20,
                color: '#BFEBFF',
            },
            axisLabel: {
                formatter: '{value}',
                fontSize: 20,
                color: '#BFEBFF',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    fontSize: 20,
                    type: 'solid',
                    color: '#fff',
                    width: '1',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: 'test1',
            symbolSize: 15,
            data: [
                ['0时', 10.0, 8.04],
                ['4时', 8.07, 6.95],
                ['8时', 13.0, 7.58],
                ['12时', 9.05, 8.81],
                ['16时', 11.0, 8.33],
            ],
            type: 'scatter',
        },
        {
            name: 'test2',
            type: 'line',
            data: [5, 5, 5, 5, 5],
        },
    ],
};
