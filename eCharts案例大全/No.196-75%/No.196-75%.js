const innerCircler_PaddingColor = new echarts.graphic.RadialGradient(
    0.5,
    0.5,
    0.8,
    [
        {
            offset: 0,
            color: '#4978EC00',
        },
        {
            offset: 0.5,
            color: '#4978EC00',
        },
        {
            offset: 1,
            color: '#4978ECff',
        },
    ],
    false
);

option = {
    title: [
        {
            text: '75%',
            x: '50%',
            y: '37%',
            textAlign: 'center',
            textStyle: {
                fontSize: '70',
                fontWeight: '100',
                color: '#FF9933',
                textAlign: 'center',
            },
        },
        {
            text: 'DESIGN ELEMENTS',
            left: '50%',
            top: '52%',
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                fontWeight: '400',
                color: '#FFCC99',
                textAlign: 'center',
            },
        },
        {
            text: 'DONUT CHART',
            left: '50%',
            top: '57%',
            textAlign: 'center',
            textStyle: {
                fontSize: '14',
                fontWeight: '400',
                color: '#FFCC99',
                textAlign: 'center',
            },
        },
    ],
    polar: {
        radius: ['51%', '47%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: '45',
            endAngle: '-314.9999',
            splitNumber: 100,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#047fd7'],
                        [90/100, '#03275f'],
                        [1, '#047fd7'],
                    ],
                    width: 30,
                    shadowColor: 'rgba(33, 174, 234, 0)',
                    shadowBlur: 0,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 0)',
                    shadowOffsetY: '0',
                    color: '#020f18',
                    width: 3,
                },
            },
            axisLabel: {
                show: false,
            },
        },

        {
            name: '内部圈',
            type: 'gauge',
            colorBy: 'series',
            z: 2,
            splitNumber: 0,
            startAngle: 90,
            endAngle: -269.9999,
            radius: '50%',
            axisLine: {
                lineStyle: {
                    color: [[1, '#028ae8']],
                    width: 3,
                    shadowColor: '#00FFFF',
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                },
            },
            tooltip: { show: false },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: 90,
                },
            ],

            // 指针
            pointer: { show: false },
            animationDuration: 500,
        },
        {
            type: 'pie',
            tooltip: {
                show: false,
            },
            z: 10,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '49%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: innerCircler_PaddingColor,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 120,
                },
            ],
        },
    ],
};
