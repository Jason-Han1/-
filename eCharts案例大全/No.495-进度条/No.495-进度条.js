var dataArr = [
    {
        value: 79.8,
        name: '设备完好率',
    },
];
var color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    {
        offset: 0,
        color: '#38A4FF', // 0% 处的颜色
    },
    {
        offset: 1,
        color: '#77BBFF', // 100% 处的颜色
    },
]);
var colorSet = [
    [0.8, color],
    [1, '#2F3764'],
];
option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '76%',
            center:['50%','60%'],
            startAngle: '180',
            endAngle: '0',
            splitNumber: '100',
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, 'rgba(68,168,255,0.3)']],
                    width: 2,
                    opacity: 1,
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
        },
        {
            type: 'gauge',
            radius: '70%',
            center:['50%','60%'],
            startAngle: '180',
            endAngle: '0',
            pointer: {
                show: false,
            },
            title: {
                //标题
                show: true,
                offsetCenter: [0, '16%'], // x, y，单位px
                textStyle: {
                    color: '#C2DDEE',
                    fontSize: 16, //表盘上的标题文字大小
                    fontFamily: 'PingFang',
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '-20%'],
                color: '#ffffff',
                formatter: function (params) {
                    return params + '%';
                },
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'PingFang',
                },
            },
            data: dataArr,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width:10,
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
            },
            axisLabel: {
                show: false,
            },
        },
    ],
};
