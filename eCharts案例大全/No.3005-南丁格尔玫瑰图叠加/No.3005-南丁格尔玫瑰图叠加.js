let echartData = {
    // 外圆数据
    outer: [
        {
            value: 3,
            name: '3',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(12,209,135,0.6)',
                    },
                    {
                        offset: 0.5,
                        color: 'rgb(10,133,88,0.6)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(23,162,110,0.6)',
                    },
                ]),
            },
        },
        {
            value: 4,
            name: '4',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(100,121,248,0.6)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(39,52,183,0.6)',
                    },
                ]),
            },
        },
        {
            value: 5,
            name: '5',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(28,124,151,0.6)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(12,70,94,0.6)',
                    },
                ]),
            },
        },
    ],
    // 内圆数据
    inner: [
        {
            value: 3,
            name: '>500M',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#0CD187',
                    },
                    {
                        offset: 0.5,
                        color: '#0A8558',
                    },
                    {
                        offset: 1,
                        color: '#17A26E',
                    },
                ]),
            },
        },
        {
            value: 4,
            name: '1-100M',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#8F9DF6',
                    },
                    {
                        offset: 1,
                        color: '#5664E9',
                    },
                ]),
            },
        },
        {
            value: 5,
            name: '100-500M',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#00C7FB',
                    },
                    {
                        offset: 1,
                        color: '#008AC5',
                    },
                ]),
            },
        },
    ],
};
// 总数
let sum = 0;
echartData.outer.forEach((item) => {
    sum += item.value;
});

option = {
    title: [
        {
            text: '总量',
            top: '56%',
            left: '50%',
            textStyle: {
                color: '#999',
                fontSize: 34,
            },
        },
        {
            text: sum,
            left: '50%',
            top: '45%',
            textStyle: {
                color: '#fff',
                fontSize: 54,
            },
        },
    ],
    series: [
        // 外圆
        {
            type: 'pie',
            center: ['55%', '55%'],
            radius: ['45%', '85%'],
            roseType: 'area',
            data: echartData.outer,
            itemStyle: {
                borderColor: '#191919',
                borderWidth: 2,
            },
            label: {
                position: 'inner',
            },
            labelLine: {
                show: false,
            },
        },

        {
            // 内圆
            type: 'pie',
            center: ['55%', '55%'],
            radius: ['35%', '60%'],
            roseType: 'area',
            itemStyle: {
                borderColor: '#191919',
                borderWidth: 2,
            },
            label: {
                position: 'inner',
                rotate: 'tangential',
            },
            labelLine: {
                show: false,
            },
            data: echartData.inner,
        },
    ],
};

option && myChart.setOption(option);
