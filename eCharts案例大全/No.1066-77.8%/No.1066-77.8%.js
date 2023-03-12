
var num = 77.8
var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {
        offset: 0,
        color: 'rgb(255,46,46)', // 0% 处的颜色
    },
    {
        offset: 1,
        color: 'rgb(255,100,46)', // 100% 处的颜色
    },
]);
let data1 = {
    name:'',
    value:num
}
let n = num;
let progress = (n * 0.01).toFixed(2);
var colorSet = [
    [progress, color],
    [1, 'rgba(0, 97, 226, 0.25)'],
];
let sizeC1 = 'rgb(255,215,37)';
let fontSize = 20;
var rich = {
    white: {
        height: 30,
        fontSize: fontSize * 0.6,
        color: 'rgba(255,255,255,0.5)',
    },
    bule: {
        fontSize: fontSize * 2,
        color: sizeC1,
    },
    radius: {
        height: 35,
        fontSize: 20,
        color: sizeC1,
        textAlign: 'center',
    },
    size: {
        height: 400,
    },
};
option = {
    backgroundColor: '#36467E',
     title: [
        {
            text: '处理率',
            x: 'center',
            top: '32%',
            textStyle: {
                color: '#fff',
                fontSize: 44,
                fontWeight: '100',
            },
        },
        {
            text: num + '%',
            x: 'center',
            top: '50%',
            textStyle: {
                fontSize: 76,
                color: '#00f0ff',
                foontWeight: '500',
            },
        },
    ],
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '110%',
            startAngle: '210',
            endAngle: '-30',
            pointer: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    return '{radius|' + value + '}{radius|%}\n{bule|处置率}';
                },
                rich: rich,
                offsetCenter: ['0%', '20%'],
            },
            data: data1,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 20,
                    // shadowBlur: 15,
                    // shadowColor: '#fff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
        },
        // 左边刻度线
        {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '120%',
            startAngle: '210',
            endAngle: '-30',
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: false,
            },
            // 仪表盘指针
            pointer: {
                show: false,
            },
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, 'transparent']],
                    width: 20,
                },
            },
            // 刻度样式
            axisTick: {
                show: false,
            },
            // 分隔线样式
            splitLine: {
                show: false,
            },
            // 刻度标签
            axisLabel: {
                show: true,
                distance: -24,
                formatter: function (value) {
                    if (value === 0) {
                        return '{white|' + value + '}';
                    }
                    return '';
                },
                rich: rich,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
        // // 又边刻度线
        {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '120%',
            startAngle: '210',
            endAngle: '-30',
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: false,
            },
            // 仪表盘指针
            pointer: {
                show: false,
            },
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, 'transparent']],
                    width: 20,
                },
            },
            // 刻度样式
            axisTick: {
                show: false,
            },
            // 分隔线样式
            splitLine: {
                show: false,
            },
            // 刻度标签
            axisLabel: {
                show: true,
                distance: -30,
                formatter: function (value) {
                    if (value === 100) {
                        return '{white|' + value + '}';
                    }
                    return '';
                },
                rich: rich,
                color: 'rgba(255,255,255,.85)',
                fontSize: 12,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                },
            ],
        },
    ],
};
