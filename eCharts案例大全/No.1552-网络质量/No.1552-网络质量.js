// 饼图公共属性
const pieCommon = {
    type: 'pie',
    label: {
        show: false,
    },
    emphasis: {
        scale: false,
    },
    labelLine: {
        show: false,
    },
};

// 中间的渐变圆
const radius = [74, 62, 50];
const pieList = [];
for (let i = 0; i < 3; i++) {
    pieList.push({
        ...pieCommon,
        radius: `${radius[i]}%`,
        emptyCircleStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: '#32788B',
                    },
                    {
                        offset: 0.77,
                        color: 'rgba(28, 57, 64, 0)',
                    },
                ],
            },
        },
    });
}

option = {
    legend: {
        show: false,
    },
    series: [
        {
            ...pieCommon,
            radius: ['99%', '100%'],
            startAngle: 225,
            emptyCircleStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#296076',
                        },
                        {
                            offset: 1,
                            color: 'transparent',
                        },
                    ],
                },
            },
        },
        {
            ...pieCommon,
            radius: ['90%', '94%'],
            startAngle: 216,
            data: [30, 1, 30, 1, 30, 40],
            itemStyle: {
                color: ({ dataIndex }) => (dataIndex === 4 ? '#1D303F' : 'transparent'),
            },
        },
        {
            ...pieCommon,
            radius: ['84%', '88%'],
            startAngle: 216,
            data: [30, 1, 30, 1, 30, 40],
            itemStyle: {
                color: ({ dataIndex }) => (dataIndex === 4 ? '#1D303F' : 'transparent'),
            },
        },
        {
            ...pieCommon,
            radius: ['84%', '94%'],
            startAngle: 216,
            data: [30, 1, 30, 1, 30, 40],
            itemStyle: {
                color: ({ dataIndex }) => {
                    let color = '';
                    switch (dataIndex) {
                        case 0:
                        case 2:
                            color = '#FFB55B';
                            break;
                        default:
                            color = 'transparent';
                    }

                    return color;
                },
                borderWidth: 10,
                borderColor: 'transparent',
            },
        },
        // 中间的渐变圆
        ...pieList,
        // 里面的饼图，与指针进行搭档
        {
            ...pieCommon,
            radius: ['34%', '36%'],
            startAngle: 216,
            data: [30, 3, 30, 3, 30, 40],
            itemStyle: {
                color: ({ dataIndex }) => {
                    let color = '';
                    switch (dataIndex) {
                        case 0:
                            color = '#FF7979';
                            break;
                        case 2:
                            color = '#FFB55B';
                            break;
                        case 4:
                            color = '#29FF74';
                            break;
                        default:
                            color = 'transparent';
                    }

                    return color;
                },
                borderWidth: 10,
                borderColor: 'transparent',
            },
        },
        // 最里面的指针
        {
            type: 'gauge',
            radius: '85%',
            max: 132,
            splitNumber: 7,
            startAngle: 215,
            endAngle: -35,
            detail: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: true,
                length: '55%',
                radius: '20%',
                width: 5,
                icon: 'rect',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(183, 216, 255, 0)',
                            },
                            {
                                offset: 1,
                                color: '#B7D8FF',
                            },
                        ],
                    },
                },
            },
            data: [90],
            anchor: {
                show: true,
                showAbove: true,
                size: 30,
                itemStyle: {
                    color: '#B7D8FF',
                },
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 10,
                    color: '#51ABCF',
                },
                length: 4,
            },
        },
        // 外侧指针
        {
            type: 'gauge',
            radius: '100%',
            max: 132,
            detail: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: '18%',
                width: 5,
                icon: 'rect',
                offsetCenter: [0, '-78%'],
                itemStyle: {
                    color: '#B7D8FF',
                },
            },
            data: [86.5],
        },
    ],
};
