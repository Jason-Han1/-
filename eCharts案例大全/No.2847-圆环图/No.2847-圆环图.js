data = [
    {
        name: '超短流程',
        value: 25,
    },
    {
        name: '终止流程', // 实际显示部分是总量-用量
        value: 75,
    },
    {
        name: '低压流程',
        value: 100,
    }
];
option = {
    backgroundColor: '#0B2C6F',
    title: {
        text: '{a|9634}{b|个}',
        x: '37%',
        y: 'center',
        textStyle: {
            fontSize: 12,
            rich: {
                a: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 15,
                    align: 'center',
                },
                b: {
                    color: 'rgba(133, 178, 233, 0.8)',
                    fontSize: 12,
                    height: 16,
                    align: 'center',
                },
            },
        },
    },
    legend: {
        itemGap: 20,
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        align: 'left',
        right: 50,
        top: 'center',
        textStyle: {
            color: '#77899c',
            fontSize: 12,
            rich: {
                a: {
                    color: '#999',
                    width: 70,
                },
                b: {
                    color: '#999',
                    width: 40,
                    align: 'right',
                },
                c: {
                    color: '#fff',
                    width: 60,
                    align: 'right',
                },
            },
        },
        formatter: function (name) {
            if (!name) return null
            let target;
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == name) {
                    target = data[i].value;
                }
            }
            return `{a|${name}}{c|${target} 人}`;
        },
        data: data.map(item => ({ name:  item.name }))
    },
    series: [
        {
            type: 'pie',
            label: {
                show: false,
            },
            center: ['40%', '50%'],
            radius: ['60%', '75%'],
            data: [
                {
                    name: '超短流程',
                    value: 25,
                    itemStyle: {
                        color: 'rgba(235, 185, 33, 1)',
                    },
                },
                {
                    name: '终止流程', // 实际显示部分是总量-用量
                    value: 75,
                    itemStyle: {
                        color: 'rgba(17, 180, 234, 1)',
                    },
                },
                {
                    name: '低压流程',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(14, 204, 93, 1)',
                    },
                },
            ],
        },
        {
            hoverAnimation: false,
            type: 'pie',
            label: {
                show: false,
            },
            center: ['40%', '50%'],
            radius: ['50%', '60%'],
            data: [
                {
                    name: '超短流程',
                    value: 25,
                    itemStyle: {
                        color: '#262c25',
                    },
                },
                {
                    name: '终止流程', // 实际显示部分是总量-用量
                    value: 75,
                    itemStyle: {
                        color: '#002c47',
                    },
                },
                {
                    name: '低压流程',
                    value: 100,
                    itemStyle: {
                        color: '#003737',
                    },
                },
            ],
        },
        {
            hoverAnimation: false,
            type: 'pie',
            label: {
                show: false,
            },
            center: ['40%', '50%'],
            radius: ['49%', '50%'],
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(31, 151, 237, 0.3)',
                    },
                },
            ],
        },
        {
            name: '',
            type: 'gauge',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 40, //刻度数量
            center: ['40%', '50%'],
            radius: '54%',
            startAngle: 180,
            endAngle: -180,
            axisLine: {
                show: false,
            }, //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: 'rgba(31, 151, 237, 0.3)', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: 0, //不显示的刻度长度
            }, //刻度样式
            splitLine: {
                show: true,
                length: 12, //显示的刻度长度
                lineStyle: {
                    color: 'rgba(31, 151, 237, 0.3)', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};
