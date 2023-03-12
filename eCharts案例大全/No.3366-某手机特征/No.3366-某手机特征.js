var offset = 0;

option = {
    title: {
        text: '某手机特征',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: [''],
        show: false,
    },
    radar: [
        {
            indicator: [
                { text: '外观', max: 1 },
                { text: '拍照', max: 1 },
                { text: '系统', max: 1 },
                { text: '性能', max: 1 },
                { text: '屏幕', max: 1 },
            ],
            name: {
                textStyle: {
                    fontSize: '40',
                    color: '#6B99B7',
                },
            },
            splitNumber: 5,
            splitArea: {
                areaStyle: {
                    color: [
		                    'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
		                    'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
		                    'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
		                ].reverse(),
                },
            },
            label: {
                show: true,
                color: '#6B99B7',
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#FFFFFF',
                fontSize: 36,
                formatter: function (value, index) {
                    offset++;
                    if (offset < 6) {
                        if (value === 0.4) {
                            return [
                                '{yxStyle|优秀}',
                                '{lhStyle|良好}',
                                '{pjStyle|平均}',
                                '{jdStyle|较低}',
                                '{jcStyle|较差}',
                            ].join('\n');
                        }
                    }
                },
                rich: {
                    jcStyle: {
                        color: 'rgb(203, 119, 155)',
                        fontSize: 24,
                        width: 250,
                        height: 30,
                        align: 'right',
                    },
                    jdStyle: {
                        color: 'rgb(177, 158, 66)',
                        fontSize: 24,
                        width: 250,
                        height: 30,
                        align: 'right',
                        padding: [5, 30],
                    },
                    pjStyle: {
                        color: 'rgb(87, 217, 254)',
                        fontSize: 24,
                        width: 250,
                        height: 20,
                        align: 'right',
                        padding: [5, 70],
                    },
                    lhStyle: {
                        color: 'rgb(147, 194, 255)',
                        fontSize: 24,
                        width: 250,
                        height: 30,
                        align: 'right',
                        padding: [5, 100],
                    },
                    yxStyle: {
                        color: 'rgb(46, 208, 213)',
                        fontSize: 24,
                        width: 250,
                        height: 30,
                        align: 'right',
                        padding: [5, 140],
                    },
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(1,166,229,0.7)',
                },
            },
            center: ['50%', '50%'],
            radius: 300,
        },
    ],
    series: [
        {
            type: 'radar',
            symbolSize: [8, 8],
            lineStyle: {
                color: '#0099ff',
            },
            itemStyle: {
                borderWidth: 3,
                color: '#0099ff',
                borderColor: '#0099ff',
                shadowBlur: 8,
                shadowColor: '#0099ff',
            },
            areaStyle: {
                color: '#0099ff00',
            },
            data: [
                {
                    value: [0.6, 0.7, 0.8, 0.4, 0.9],
                    name: '',
                },
            ],
        },
    ],
};
