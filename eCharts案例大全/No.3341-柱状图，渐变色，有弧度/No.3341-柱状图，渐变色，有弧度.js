option = {
    legend: {
        show: true,
        data: ['长输管网', '油气周边', '零散气', '商品量'],
    },
    color: ['rgb(255,166,77)', 'rgb(45,153,255)', 'rgb(113,113,204)', 'rgb(56,159,255)'],
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            color: '#59588D',
            data: ['5', '10', '15', '20', '25', '30'],
            axisLabel: {
                margin: 20,
                color: '#999',
                textStyle: {
                    // fontSize: 18,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '{value}',
                color: '#999',
                textStyle: {
                    // fontSize: 18,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(131,101,101,0.2)',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            data: [8, 80, 10, -6, 50, 80],
            type: 'line',
            smooth: true,
            name: '长输管网',
            symbol: 'none',
            lineStyle: {
                color: 'rgb(255,166,77)',
                width: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                shadowBlur: 15,
                shadowOffsetY: 20,
            },
        },
        {
            data: [20, 40, 60, 16, 120, 110],
            type: 'line',
            smooth: true,
            name: '油气周边',
            symbol: 'none',
            lineStyle: {
                color: 'rgb(45,153,255)',
                width: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                shadowBlur: 15,
                shadowOffsetY: 20,
            },
        },
        {
            data: [4, 40, 20, 6, 80, 20],
            type: 'line',
            smooth: true,
            name: '零散气',
            symbol: 'none',
            lineStyle: {
                color: 'rgb(113,113,204)',
                width: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                shadowBlur: 15,
                shadowOffsetY: 20,
            },
        },
        {
            type: 'bar',
            name: '商品量',
            data: [40, 80, 20, -16, 20, 10],
            // barWidth: '50px',
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr =
                            params.value > 0
                                ? ['rgb(56,159,255)', 'rgb(150,204,251)']
                                : ['rgb(150,204,251)', 'rgb(56,159,255)'];
                        return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: colorArr[0], // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: colorArr[1], // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                    barBorderRadius: [30, 30, 0, 0],
                },
            },
            label: {
                normal: {
                    show: false,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                    position: 'top',
                },
            },
        },
    ],
};
