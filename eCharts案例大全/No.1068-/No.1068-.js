let data1 = [
    {
        name: '谷类',
        value: 175.17,
    },
    {
        name: '豆类',
        value: 148.35,
    },
    {
        name: '油料作物',
        value: 95.36,
    },
    {
        name: '中草药材',
        value: 56,
    },
    {
        name: '蔬菜及食用菌',
        value: 45,
    },
    {
        name: '瓜果类',
        value: 34,
    },
    {
        name: '其他作物',
        value: 95.36,
    },
];
let xAxisData = [];
let seriesData1 = [];
let sum = 0;
let barTopColor = ['#02c3f1', '#53e568','#02c3f1', '#53e568','#02c3f1', '#53e568','#02c3f1', '#53e568',];
let barBottomColor = [
    'rgba(2,195,241,0.1)',
    'rgba(83, 229, 104, 0.1)',

    'rgba(2,195,241,0.1)',
    'rgba(83, 229, 104, 0.1)',

    'rgba(2,195,241,0.1)',
    'rgba(83, 229, 104, 0.1)',

    'rgba(2,195,241,0.1)',
    'rgba(83, 229, 104, 0.1)',
];
data1.forEach((item) => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
option = {
    backgroundColor: '#000',
    grid: {
        top: '20%',
        bottom: '100',
        left: '50',
        right: '100',
        containLabel: false,
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 25,
            rotate: 25,
            align: 'center',
            textStyle: {
                fontSize: 12,
                color: '#ffffff',
            },
        },
        interval: 0,
    },
    yAxis: {
        type: 'value',
        // name: '件',
        nameTextStyle: {
            color: '#FFFFFF',
            fontSize: 12,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barTopColor[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
            },
            symbolPosition: 'end',
            data: seriesData1,
        },
        {
            name: '柱底部',
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barTopColor[params.dataIndex];
                    },
                },
            },
            data: seriesData1,
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 1,
                                color: barTopColor[params.dataIndex],
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex],
                            },
                        ]);
                    },
                    opacity: 0.8,
                },
            },
            z: 16,
            silent: true,
            barWidth: 26,
            barGap: '-100%', // Make series be overlap
            data: seriesData1,
        },
    ],
};
