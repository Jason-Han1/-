let maxRadius = 100,
    pieWidth = 22,
    splitNumber = 12;
let angle = ['-180', '-145', '-90', '-45'];
let datas = [
    {
        name: '海军',
        value: 1200,
    },
    {
        name: '空军',
        value: 2400,
    },
    {
        name: '火箭军',
        value: 700,
    },
    {
        name: '陆军',
        value: 200,
    },
];
const color = [
    '#04BFFC',
    '#048AFC',
    '#FDDF03',
    '#F98519',
    '#FFFEFF',
    '#89A6FF',
    '#FF8181',
    'orange',
    '#FBBC05',
    '#EA4335',
];
let series = [
    // 外圈白点
    {
        name: '外圈白点',
        type: 'gauge',
        radius: `${maxRadius}%`,
        center: ['50%', '50%'],
        startAngle: 90,
        splitNumber: 24,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                color: [[1, '#FFF']],
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            length: 2,
            lineStyle: {
                color: 'auto',
                width: 2,
            },
        },
        axisLabel: {
            show: false,
        },
        detail: {
            show: false,
        },
    },
    // 内圈
    {
        type: 'pie',
        radius: '40%',
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                shadowBlur: 18,
                shadowColor: 'rgba(124, 187, 235, 0.6)',
                color: 'rgba(221, 240, 249, 0.6)',
            },
        },
        label: {
            show: false,
        },
        data: [100],
    },
];
for (let i = 0; i < datas.length; i++) {
    series.push({
        type: 'gauge',
        radius: `${maxRadius - (i + 1) * 11}%`,
        center: ['50%', '50%'],
        clockwise: false,
        startAngle: '90',
        endAngle: angle[i],
        splitNumber: splitNumber * (datas.length - i),
        borderColor: 'rgba(0,0,0,0)',
        detail: {
            show: false,
        },
        pointer: {
            show: false,
        },
        textStyle: {
            shadowColor: '#000', //默认透明
            shadowBlur: 0,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0, '#A1D2EE'],
                    [0.0001, color[i]],
                    [1, '#A1D2EE'],
                ],
                width: pieWidth,
                shadowColor: '#000', //默认透明
                shadowBlur: 0,
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            length: pieWidth,
            lineStyle: {
                color: '#A1D2EE',
                width: 2,
            },
        },
        axisLabel: {
            show: false,
        },
    });
}
option = {
    backgroundColor:'#CBE9EE',
    title: {
        text: '外部\n数据',
        left: 'center',
        top: 'middle',
        textStyle: {
            color: '#222',
            fontSize: 20,
            fontWeight: 600,
        },
        textAlign: 'auto',
    },
    series: series,
};
