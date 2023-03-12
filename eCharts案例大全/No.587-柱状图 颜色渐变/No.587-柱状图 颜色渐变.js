option = {
    backgroundColor: '#0B1535',
    textStyle: {
        fontSize: 0,
    },
    xAxis: {
        nameTextStyle: {
            color: '#c0c3cd',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            color: '#8BA0C4',
            fontWeight: 400,
            fontFamily: 'SourceHanSansCN-Regular, SourceHanSansCN',
            fontSize: 20,
        },
        axisTick: {
            lineStyle: {
                color: '#0B1535',
                width: 1,
            },
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#384267',
                width: 1,
                type: 'dashed',
            },
            show: true,
        },
        data: ['w1', 'w2', 'w3', 'w4', 'w5'],
        type: 'category',
    },
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#c0c3cd',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            margin: 20,
            color: '#8BA0C4',
            fontWeight: 400,
            fontFamily: 'SourceHanSansCN-Regular, SourceHanSansCN',
            fontSize: 20,
        },
        axisTick: {
            lineStyle: {
                color: '#384267',
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#384267',
                type: 'line',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'line',
            },
            show: false,
        },
    },
    series: [
        {
            data: [22.0, 21.3, 19, 19, 18.8],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 35,
            itemStyle: {
                color: {
                    x: 0, y: 0, x2: 0, y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [   
                        {
                            offset: 0,
                            color: '#00BFFF',
                        },
                        {
                            offset: 1,
                            color: '#54FF9F',
                        },
                    ],
                },
            },
            label: {
                show: true,
                position: 'top',
                distance: 10,
                color: '#fff',
                position: [30, 10],
            },
        },
        
    ],
};
