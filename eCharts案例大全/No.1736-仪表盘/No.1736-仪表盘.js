var value = 3248;
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#08daaa',
    },
    {
        offset: 1,
        color: '#05a984',
    },
]);
option = {
    series: [
        {
            type: 'gauge',
            splitNumber: 1,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 8000,
            radius: '60%',
            center: ['50%', '74%'],
            axisLine: {
                show: false,
            },
            //刻度标签。
            axisTick: {
                show: false,
            },
            //刻度样式
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#999',
                distance: -60,
                fontSize: 20,
            },
            //指针
            pointer: {
                width: 14,
                length: '55%',
            },
            //指针样式
            itemStyle: {
                color: '#0c928a',
                borderWidth: 3,
                borderColor: '#08daaa',
                shadowColor: 'rgba(12,146,138,0.5)',
                shadowBlur: 6,
                shadowOffsetX: 0,
                shadowOffsetY: 5,
            },
            title: {
                //标题
                show: true,
                offsetCenter: [0, 140], // x, y，单位px
                textStyle: {
                    color: '#212b43',
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    lineHeight:20,
                },
            },
            detail: {
                fontSize: 36,
                offsetCenter: [0, 90],
                valueAnimation: true,
                color: '#212b43',
                fontFamily: 'Din',
                // formatter: function(value) {
                //     return value + '\n先锋指数'
                // }
            },
            data: [
                {
                    value: value,
                    name: '碳排放总资产\n(万吨)',
                },
            ],
        },
        {
            type: 'gauge',
            radius: '70%',
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 8000,
            title: {
                show: false,
            },
            detail: {
                show: false,
            },
            axisLine: {
                show: true,
                roundCap: true,
                lineStyle: {
                    width: 16,
                    color: [
                        [value / 8000, color],
                        [1, 'rgba(225,225,225,0.4)'],
                    ],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#54F200',
                },
            },
        },
        {
            type: 'gauge',
            splitNumber: 10,
            radius: '40%',
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            pointer: {
                show: false,
                width: 7,
                length: '60%',
            },
            axisLine: {
                show: true,
                roundCap: true,
                lineStyle: {
                    width: 8,
                    color: [[1, '#999']],
                    opacity: 0.1,
                },
            },
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            }, //分隔线样式
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
        },
    ],
};
