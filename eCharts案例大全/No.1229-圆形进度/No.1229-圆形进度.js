var chartData = {
    value: 92,
    total: 100,
};

let max = chartData.total;
let value = chartData.value;
option = {
    backgroundColor: '#313131',
    title: {
        text: (value || '-') + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize: '20',
            fontWeight: 'normal',
        },
    },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 100,
        startAngle: 90,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
        data: [],
    },
    polar: {
        radius: '100%',
        center: ['50%', '50%'],
    },
    series: [
        // 极坐标系下柱状图
        // 实际值
        {
            type: 'bar',
            data: [value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 15,
            name: '出租率',
            roundCap: 1,
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //         offset: 0,
            //         color: 'rgba(22,255,241,.1)'
            //     },
            //     {
            //         offset: 0.5,
            //         color: 'rgba(22,255,241,.5)'
            //     },
            //     {
            //         offset: 1,
            //         color: 'rgba(22,255,241,1)'
            //     }
            // ]),
            color: 'rgba(97,93,228,1)',
        },
        // 背景图形
        {
            type: 'bar',
            data: [max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 15,
            roundCap: true,
            color: 'rgba(40,68,115,1)',
            barGap: '-100%',
        },
        // 尾端小圆点 饼图
        {
            type: 'pie',
            // 饼图大小跟外层极坐标系相同，需手动调试
            radius: '98%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 180,
            endAngle: 0,
            silent: 1,
            z: 10,
            data: [
                // 实际值，背景色透明
                {
                    name: '',
                    value: value > 75 ? (25 - (100 - value)) / max : (25 + value) / 100,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'transparent',
                    },
                },
                {
                    // 画中间的图标
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: 'rgba(170, 87, 254, 1)',
                        borderRadius: 8,
                        padding: 8,
                        borderWidth: 20,
                        borderColor: 'rgba(155, 133, 241, 0.24)',
                    },
                },
                // 透明填充 angleAxis 的max相同 max : 2
                {
                    value: value > 75 ? 1 - (25 - (100 - value)) / max : 1 - (25 + value) / 100,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
    ],
};
