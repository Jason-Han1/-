option = {
    color: ['#F4AD17', '#FFC9AC', '#1CF793', '#FD69F4', '#05FFF0', '#E7F505', '#F54D80', '#95B0FF', '#F4AD17'],
    grid: {
        bottom: 150,
        left: 0,
        right: '10%',
    },
    series: [
        // 内层
        {
            radius: '42%',
            center: ['55%', '50%'],
            type: 'pie',
            startAngle: 150,
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 100,
                },
                lineStyle: {
                    color: '#fff',
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        console.log('%c [ params ]', 'font-size:13px; background:pink; color:#bf2c9f;', params);
                        return `{nameStyle|${params.name}}\n{valueStyle|${params.value}}`;
                    },
                    padding: [0, -100, 0, -100],
                    lineHeight: 28,
                    avoidLabelOverlap: true,
                    rich: {
                        nameStyle: {
                            fontSize: 20,
                            color: '#8499FF',
                            align: 'left',
                        },
                        valueStyle: {
                            fontSize: 20,
                            color: '#00D6E9',
                            align: 'left',
                        },
                        percent: {
                            fontSize: 20,
                            lineHeight: 20,
                            height: 20,
                            color: '#00D6E9',
                            align: 'right',
                        },
                    },
                },
            },
            itemStyle: {
                borderColor: '#1C4387',
                borderWidth: 2,
            },
            animation: false,
            tooltip: {
                show: false,
            },
            data: [
                 {
                    name: '盖伦',
                    value: 43,
                },
                {
                    name: '卡特琳娜',
                    value: 33,
                },
                {
                    name: '乌迪尔',
                    value: 12,
                },
                {
                    name: '崔丝塔娜',
                    value: 16,
                },
                {
                    name: '德莱厄斯',
                    value: 2,
                },
                {
                    name: '璐璐',
                    value: 13,
                },
                {
                    name: '烬',
                    value: 8,
                },
                {
                    name: '维克托',
                    value: 15,
                }
            ],
        },
        // 外层
        {
            radius: '52%',
            center: ['55%', '50%'],
            type: 'pie',
            labelLine: {
                show: false,
            },
            z: -2,
            animation: false,
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 10,
                    itemStyle: {
                        color: 'rgba(0, 72, 182, 0.1)',
                    },
                },
            ],
        },
    ],
};
