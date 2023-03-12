let dataC1 = [20, 30, 60, 40, 50, 30];
let xData = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];

var fontColor = '#30eee9';
option = {
    backgroundColor: 'transparent',
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: xData,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            name: '',
            type: 'line',
            stack: '总量',
            smooth: true,
            symbol: 'none',
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
                normal: {
                    // color: '#71bd27',
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#9085FF', // 0% 处的颜色
                                },
                                {
                                    offset: 0.8,
                                    color: '#674FE0', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#674FE0', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        width: 5,
                    },
                    areaStyle: {
                        opacity: 0,
                    },
                },
            },
            data: dataC1,
        },
    ],
};
