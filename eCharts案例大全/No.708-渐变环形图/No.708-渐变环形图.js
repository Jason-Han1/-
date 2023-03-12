var t3 = {
    color: '#eef',
    fontSize: 16,
    fontFamily: 'pingfang sc, microsoft yahei',
};

var gradList = [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#03c',
        },
        {
            offset: 1,
            color: '#18f',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#46f',
        },
        {
            offset: 1,
            color: '#4cd',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#3a7',
        },
        {
            offset: 1,
            color: '#4db',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#03c',
        },
        {
            offset: 1,
            color: '#9db',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#06b',
        },
        {
            offset: 1,
            color: '#4bf',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#06b',
        },
        {
            offset: 1,
            color: '#0bb',
        },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#8ec',
        },
        {
            offset: 1,
            color: '#dea',
        },
    ]),
];

option = {
    // backgroundColor: '',
    tooltip: {
        confine: true,
        borderWidth: 0,
        padding: [15, 20],
        backgroundColor: 'rgba(0, 51, 204, .9)',
        textStyle: t3,
        formatter: '{b}-{d}%',
    },
    legend: {
        data: ['指标1', '指标2', '指标3', '指标4'],
        right: 20,
        bottom: 20,
        orient: 'vertical',
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontFamily: 'pingfang sc, microsoft yahei',
        },
    },
    series: [
        {
            name: '需求类型占比',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['55%', '75%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return gradList[params.dataIndex];
                    },
                    borderColor: '#007',
                    borderWidth: 4,
                },
            },
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{value|{c}}\n{label|{b}}',
                    rich: {
                        value: {
                            padding: 5,
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 48,
                            fontFamily: 'electronicFont, impact, pingfang sc, microsoft yahei',
                            color: '#fff',
                        },
                        label: {
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 16,
                            fontFamily: 'pingfang sc, microsoft yahei',
                            color: '#9cf',
                        },
                    },
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                    },
                },
            },
            labelLine: {
                show: false,
                length: 0,
                length2: 0,
            },
            data: [
                { name: '指标1', value: 10 },
                { name: '指标2', value: 30 },
                { name: '指标3', value: 15 },
                { name: '指标4', value: 23 },
            ],
        },

        {
            name: '刻度间隔',
            // z: 3,
            type: 'gauge',
            radius: '55%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 20,
            hoverAnimation: true,
            splitLine: {
                show: false,
                distance: 20,
                length: 10,
                lineStyle: {
                    width: 1,
                    color: 'rgba(17, 136, 255, .5)',
                },
            },
            axisTick: {
                // distance: -25,
                length: 20,
                lineStyle: {
                    width: 1,
                    color: 'rgba(17, 136, 255, .5)',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [0],
        },
    ],
};

let idx = -1;
setInterval(function () {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: idx,
    });
    idx = (idx + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: idx,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: idx,
    });
}, 1500);
