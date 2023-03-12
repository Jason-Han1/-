var colorList = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(3, 251, 71, 1)' },
        { offset: 1, color: 'rgba(19, 218, 140, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(36, 250, 173, 1)' },
        { offset: 1, color: 'rgba(16, 202, 151, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(33, 245, 219, 1)' },
        { offset: 1, color: 'rgba(19, 201, 183, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(37, 250, 245, 1)' },
        { offset: 1, color: 'rgba(11, 190, 204, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(48, 220, 243, 1)' },
        { offset: 1, color: 'rgba(8, 183, 231, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(23, 158, 221, 1)' },
        { offset: 1, color: 'rgba(8, 150, 231, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(57, 105, 250, 1)' },
        { offset: 1, color: 'rgba(41, 85, 237, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(98, 85, 255, 1)' },
        { offset: 1, color: 'rgba(0, 102, 255, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(150, 71, 254, 1)' },
        { offset: 1, color: 'rgba(92, 31, 228, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(205, 100, 250, 1)' },
        { offset: 1, color: 'rgba(149, 70, 254, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(242, 10, 247, 1)' },
        { offset: 1, color: 'rgba(171, 28, 221, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(247, 10, 144, 1)' },
        { offset: 1, color: 'rgba(176, 1, 180, 1)' },
    ]),
];
option = {
    backgroundColor: '#00265f',
    // "title": {
    //     "text": "政策补贴额度",
    //     x: "center",
    //     y:"4%",
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: '22'
    //     },
    //     subtextStyle: {
    //         color: '#90979c',
    //         fontSize: '16',

    //     },
    // },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '20%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['宝塔路支行', '秦淮支行', '毛公铺支行', '中山支行', '乌山支行', '共和支行','群力支行','永阳支行','晶桥支行','明觉支行','致远路支行','云鹤支行'],
            axisLine: {
                lineStyle: {
                    color: '#02D2D6',
                },
            },
            axisLabel: {
                margin: 10,
                interval: 0,
                rotate: 70,
                textStyle: {
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 400,
                    color: '#00FFFF',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            show: false,
            name: '单位：万元',
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: [50, 26, 13, 13, 12.5, 15,50, 26, 13, 13, 12.5, 15],
            barWidth: '11px',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                },
            },
            label: {
                normal: {
                    show: true,
                    // lineHeight: 30,
                    // width: 80,
                    // height: 30,
                    // backgroundColor: 'rgba(0,160,221,0.1)',
                    // borderRadius: 200,
                    position: ['-10', '-20'],
                    distance: 1,
                    formatter: ' {a|{c}%}',
                    rich: {
                        a: {
                            color: '#00B8FC',
                            align: 'center',
                            fontSize: 12,
                            fontFamily: 'Microsoft YaHei',
                            fontWeight: 400,
                        },
                    },
                },
            },
        },
    ],
};

