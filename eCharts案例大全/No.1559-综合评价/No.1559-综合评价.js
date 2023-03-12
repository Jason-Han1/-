var data = [
    {
        name: '风险合规',
        value: 200,
        max: 300,
    },
    {
        name: '经营状态',
        value: 80,
        max: 100,
    },
    {
        name: '社会责任',
        value: 80,
        max: 200,
    },
    {
        name: '贡献能力',
        value: 60,
        max: 200,
    },
    {
        name: '创新发展',
        value: 150,
        max: 300,
    },
];

let valueObj = {};
let totalObj = {};
data.forEach((m) => {
    valueObj[m.name] = m.value;
    totalObj[m.name] = m.max;
});

let dataArr = [];
data.forEach((item) => {
    dataArr.push(item.value);
});
option = {
    backgroundColor: '#101736',
    title: {
        text: '9月',
        subtext: 'A级',
        top: 'center',
        left: 'center',
        itemGap: 0,
        textStyle: {
            color: '#fff',
            fontSize: 20,
            fontFamily: 'OPPOSans-M',
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 20,
            fontFamily: 'SourceHanSansCN-Normal',
        }
    },
    radar: {
        center: ['50%', '50%'],
        radius: '50%',
        splitNumber: 5,
        name: {
            formatter: function (name, indicator) {
                var value = valueObj[name];
                let total = totalObj[name];
                return '{name|' + name + '}\n' + '{value|' + value + '} {total|/' + total + '}';
            },
            rich: {
                name: {
                    fontSize: 14,
                    color: '#fff',
                    align: 'center',
                },
                value: {
                    fontSize: 30,
                    color: '#0ff',
                },
                total: {
                    fontSize: 20,
                    color: '#fff',
                    lineHeight: 40,
                },
            },
        },
        nameGap: '5',
        indicator: data,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(108, 254, 255, 0.1)',
                width: 1,
            },
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(119, 140, 162, 0.1)',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0, 233, 234, 0.1)',
            },
        },
    },
    series: [
        {
            name: '',
            type: 'radar',
            symbol: 'circle',
            data: [
                {
                    value: dataArr,
                    name: '综合评价',
                    symbolSize: 8,
                    itemStyle: {
                        show: true,
                        color: 'rgba(108, 254, 255, 1)'
                    },
                    areaStyle: {
                        // 内网颜色
                        normal: {
                            color: {
                                type: 'radial',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(108, 254, 255, 0.6)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(108, 254, 255, 0.1)',
                                    },
                                ],
                                globalCoord: false,
                            },
                            opacity: 1,
                        },
                    },
                },
            ],
        },
    ],
};
