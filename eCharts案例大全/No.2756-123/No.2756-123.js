option = {
    title: {
        text: '',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#B4B4B4',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    legend: {
        // 修改legend的高度宽度
        itemHeight: 5,
        itemWidth: 24,
        itemGap: 40,
        data: [
            {
                name: '较月初',
            },
            {
                name: '较年初',
            },
            {
                name: '当前值',
            },
        ],
        textStyle: {
            color: '#fff',
        },
        top: '7%',
    },
    grid: {
        x: '8%',
        width: '82%',
        y: '12%',
    },
    xAxis: [
        {
            // type:'category',
            data: ['2020-12', '2021-01', '2021-02', '2021-03', '2021-04', '2021-05'],
            boundaryGap: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#067eb0',
                },
            },
            axisTick: {
                show: false,
            },axisLabel: {
                show: false,
                textStyle: {
                    color: '#fff',
                },
            },
        },
    ],
    yAxis: [
        {
            nameLocation: 'middle',
            nameTextStyle: {
                padding: [3, 4, 50, 6],
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#fff',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
                formatter: '{value} ',
            },
        },
    ],
    series: [
        {
            name: '较月初',
            type: 'line',
            smooth: true,
            showSymbol: true,
            // 矢量画五角星
            symbolSize: 12,
            lineStyle: {
                color: '#e49550',
            },
            itemStyle: {
                normal: {
                    color: '#e49550',
                },
            },
            // data中可以使用对象，value代表相应的值，另外可加入自定义的属性
            data: [
                {
                    value: 1,
                    stationName: 's1',
                },
                {
                    value: 3,
                    stationName: 's2',
                },
                {
                    value: 4,
                    stationName: 's3',
                },
                {
                    value: 9,
                    stationName: 's4',
                },
                {
                    value: 3,
                    stationName: 's5',
                },
                {
                    value: 2,
                    stationName: 's6',
                },
            ],
        },
        {
            name: '较年初',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 12,
            lineStyle: {
                color: '#e27a79',
            },
            itemStyle: {
                normal: {
                    color: '#e27a79',
                },
            },
            data: [
                {
                    value: 31,
                    stationName: 's1',
                },
                {
                    value: 36,
                    stationName: 's2',
                },
                {
                    value: 54,
                    stationName: 's3',
                },
                {
                    value: 89,
                    stationName: 's4',
                },
                {
                    value: 73,
                    stationName: 's5',
                },
                {
                    value: 22,
                    stationName: 's6',
                },
            ],
        },
        {
            name: '当前值',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#049ff9',
                        },
                        {
                            offset: 1,
                            color: '#0257b1',
                        },
                    ]),
                },
            },
            lineStyle: {
                color: '#038fee',
            },
            data: [
                {
                    value: 11,
                    stationName: 's1',
                },
                {
                    value: 34,
                    stationName: 's2',
                },
                {
                    value: 54,
                    stationName: 's3',
                },
                {
                    value: 39,
                    stationName: 's4',
                },
                {
                    value: 63,
                    stationName: 's5',
                },
                {
                    value: 24,
                    stationName: 's6',
                },
            ],
        },
    ],
};
