//表盘数据
let chartData = {
    data: 30,
    min: 0,
    max: 100,
};
let colorStr='#00BA65';
let min = chartData.min || 0;
let max = chartData.max || 100;
let data1 = chartData.data !== undefined ? chartData.data - 0 : undefined;

option = {
    backgroundColor:"#313131",
    tooltip: {
        show: false,
    },
    series: [
        {
            name: '内部进度条',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '60%'],
            min: min, // 最小刻度
            max: max, // 最大刻度
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [[1, colorStr]],
                    width: 25,
                },
            },
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
                color: [[1, colorStr]]
            },
            detail: {
                formatter: function (value) {
                    return value;
                },
                offsetCenter: [0, 200],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 24,
                    color: '#fff',
                },
            },

            data: [
                {
                    name: '',
                    value: data1,
                },
            ],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 6, // 指针粗细
            },
            animationDuration: 2000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '95%',
            center: ['50%', '60%'],
            min: min, // 最小刻度
            max: max, // 最大刻度
            splitNumber: 4, // 刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, // 仪表盘轴线
            axisLabel: {
                show: true,
                color: '#CCCED7',
                distance: 10,
                fontSize: 14,
                formatter: function (value) {
                    return value;
                },
            }, // 刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#CCCED7',
                    width: 1,
                },
                length: -2,
            }, // 刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: '#CCCED7',
                },
            }, // 分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        {
            name: '小圆形',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            tooltip: {
                show: false,
            },
            radius: ['6%', '9%'],
            center: ['50%', '60%'],
            z: 10,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: '#BFBFBF',
                    },
                },
            ],
        },
        {
            name: '小圆形',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            tooltip: {
                show: false,
            },
            radius: ['0%', '6%'],
            center: ['50%', '60%'],
            z: 10,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: '#FFF',
                    }
                }
            ]
        }
    ]
};
