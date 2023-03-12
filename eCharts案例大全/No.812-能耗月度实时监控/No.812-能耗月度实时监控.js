option = {
    backgroundColor: '#080b30',
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    legend: {
        top: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        padding: 0,
        right: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },
        data: ['当前值', '去年平均值'],
    },
    xAxis: [
        {
            type: 'category',
            position: 'bottom',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
                margin: 15,
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
        },
    ],

    yAxis: [
        {
            name: '(kw·h)',
            nameTextStyle: {
                color: '#fff',
                padding: [0, 60, 10, 0],
            },
            type: 'value',
            min: 0,
            max: 1000,
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    width: 1,
                    type: 'dashed',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '当前值',
            type: 'line',
            smooth: true, //是否平滑
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: '#00E39A',
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                },
            },
            itemStyle: {
                color: '#00E39A',
            },
            tooltip: {
                show: false,
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
                                color: 'rgba(0, 227, 154, 0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 227, 154, 0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [260, 350, 270, 150, 240, 300, 340, 400, 520, 650, 580, 500],
        },
        {
            name: '去年平均值',
            type: 'line',
            showAllSymbol: true,
            symbol: 'none',
            itemStyle: {
                color: '#FFBE0F',
            },
            lineStyle: {
                width: 2,
                color: '#FFBE0F',
                shadowColor: '#FFF500',
                shadowBlur: 12,
            },
            data: [450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450],
        },
    ],
};
