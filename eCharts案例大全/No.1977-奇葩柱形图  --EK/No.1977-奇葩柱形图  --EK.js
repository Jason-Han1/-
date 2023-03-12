info = [
    {
        name: '1月',
        value: 200,
    },
    {
        name: '2月',
        value: 170,
    },
    {
        name: '3月',
        value: 280,
    },
    {
        name: '4月',
        value: 120,
    },
    {
        name: '5月',
        value: 400,
    },
    {
        name: '6月',
        value: 200,
    },
    {
        name: '7月',
        value: 160,
    },
    {
        name: '8月',
        value: 300,
    },
    {
        name: '9月',
        value: 550,
    },
    {
        name: '10月',
        value: 120,
    },
    {
        name: '11月',
        value: 280,
    },
    {
        name: '12月',
        value: 390,
    },
];

option = {
    backgroundColor: '#113888',
    xAxis: {
        type: 'category',
        data: info.map((item) => item.name),
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 20,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#fff',
            },
            formatter: function (value, index) {
                return value + 'W';
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#7D8CB1', '#7687A9'],
            },
        },
    },
    series: [
        {
            data: info.map((item) => item.value),
            type: 'bar',
            barWidth: 16, //柱图宽度
            label: {
                show: true,
                position: 'inside',
            },
            showBackground: false,
            backgroundStyle: {
                color: '#4F5B84',
                barBorderRadius: 0,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#006799',
                        },
                        {
                            offset: 1,
                            color: '#00cbcb',
                        },
                    ]),
                },
            },
        },
    ],
};
