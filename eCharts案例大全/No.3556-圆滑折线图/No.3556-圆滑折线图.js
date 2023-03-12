option = {
    title: {
        text: '比例',
    },
    xAxis: {
        type: 'category',
        data: ['2016', '2017', '2018', '2019', '2020'],
        axisTick: { show: false }, //不显示坐标轴刻度线
        axisLine: {
            lineStyle: {
                color: '#e0e8f0', //x轴线条颜色
            },
        },
        axisLabel: {
            textStyle: {
                color: '#979797', //x轴字体颜色
            },
        },
    },
    yAxis: {
        type: 'value',
        // splitLine: { show: false }, //不显示横线
        // axisLabel: { show: false }, //y轴不显示数据
        axisLine: { show: false }, //不显示坐标轴线
        axisTick: { show: false }, //不显示坐标轴刻度线
    },
    series: [
        {
            data: [61, 58, 68, 65, 85],
            type: 'line',
            smooth: true,
            // symbol: 'circle', //数值点设定为实心点
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#f7af5c', //点的颜色
                    lineStyle: {
                        color: '#f7af5c', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
    ],
};
