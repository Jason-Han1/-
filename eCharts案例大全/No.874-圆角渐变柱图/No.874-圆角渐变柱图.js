var option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '16%',
        containLabel: true,
    },
    legend: {
        data: ['1', '2', '3'],
        right: 10,
        top: 12,
        textStyle: {
            color: '#dddddd',
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        axisLine: {
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisTick: {
            show: false,

            alignWithLabel: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                color: '#dddddd',
                fontFamily: 'Microsoft YaHei',
            },
        },
    },

    yAxis: {
        type: 'value',
        max: '1200',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#dddddd',
            },
        },
        axisLabel: {},
    },
    series: [
        {
            name: '1',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#01e7ff',
                        },
                        {
                            offset: 1,
                            color: '#0490fc',
                        },
                    ]),
                    barBorderRadius: [12, 12, 0, 0],
                },
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
        },
    ],
};
