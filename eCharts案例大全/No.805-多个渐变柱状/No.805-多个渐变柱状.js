var xData = [
    '2021-01',
    '2021-02',
    '2021-03',
    '2021-04',
    '2021-05',
    '2021-06',
    '2021-07',
    '2021-08',
    '2021-09',
    '2021-10',
    '2021-11',
    '2021-12',
];
var zdjc = [0, 6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
var zyrsrm = [0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0];
var zdxmap = [0, 2, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0];
var dedzjyz = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
var option = {
    backgroundColor: '#0a1a38',
    title: {
        text: '趋势分析',
        textStyle: {
            color: '#e2f7fc',
        },
        top: 30,
        left: 20,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#202630',
        borderColor: '#202630',
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'solid',
            },
        },
    },
    grid: {
        bottom: '35%',
        top: '17%',
        left: '7%',
        right: '7%',
        // containLabel: true,
    },
    legend: {
        icon: 'circle',
        data: ['重大决策', '重要人事任免', '重大项目安排', '大额度资金运作'],
        right: 120,
        top: 12,
        textStyle: {
            color: '#fff',
        },
        itemWidth: 12,
        itemHeight: 12,
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#457fa3',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#99b3d6',
            },
        },
        axisTick: {
            show: false,
        },
    },

    yAxis: {
        name: '单位/项',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#2badbb',
            fontSize: 12,
            padding: 10,
        },
        type: 'value',
        max: '6',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#5d8fb3',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#99b3d6',
            },
        },
    },
    series: [
        {
            name: '重大决策',
            type: 'bar',
            barWidth: '15%',
            
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#6ee7da',
                        },
                        {
                            offset: 1,
                            color: 'rgba(110, 232, 218, .2)',
                        },
                    ]),
                    // barBorderRadius: 12,
                },
            },
            data: zdjc,
        },
        {
            name: '重要人事任免',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#4ad9fc',
                        },
                        {
                            offset: 1,
                            color: 'rgba(71, 218, 252, .2)',
                        },
                    ]),
                    // barBorderRadius: 11,
                },
            },
            data: zyrsrm,
        },
        {
            name: '重大项目安排',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(101, 105, 246)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(101, 105, 246,.2)',
                        },
                    ]),
                    // barBorderRadius: 11,
                },
            },
            data: zdxmap,
        },
        {
            name: '大额度资金运作',
            type: 'bar',
            barWidth: '15%',
            barGap:0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(229, 200, 104)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(229, 200, 104,.2)',
                        },
                    ]),
                    // barBorderRadius: 11,
                },
            },
            data: dedzjyz,
        },
    ],
};
