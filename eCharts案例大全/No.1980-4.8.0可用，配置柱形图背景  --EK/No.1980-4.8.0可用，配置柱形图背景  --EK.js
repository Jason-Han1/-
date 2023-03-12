info = [
    {
        name: '国家级',
        value: 110,
    },
    {
        name: '省部级',
        value: 220,
    },
    {
        name: '市级',
        value: 200,
    },
    {
        name: '校级',
        value: 300,
    },
    {
        name: '其他',
        value: 400,
    },
];

option = {
    backgroundColor: '#112C67',
    xAxis: {
        type: 'value',
        axisTick: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                margin: '20px',
                color: '#fff',
            },
        },
    },
    yAxis: [
        {
            type: 'category',
            axisTick: false,
            inverse: true,
            data: info.map((item) => item.name),
            axisLabel: {
                margin: 30,
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#01f7f9',
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
                formatter: function (value, index) {
                    return value + 'W';
                },
            },
            data: info.map((item) => item.value),
        },
    ],
    series: [
        {
            data: info.map((item) => item.value),
            type: 'bar',
            showBackground: true,
            barWidth: 16, //柱图宽度
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7,
                },
                normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#336cf9',
                        },
                        {
                            offset: 1,
                            color: '#45fac9',
                        },
                    ]),
                },
            },
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                barBorderRadius: 7,
            },
        },
    ],
};
