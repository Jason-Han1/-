var yData = [80, 80, 97, 53, 95, 26, 72];
var lastNum = yData[yData.length - 1];

option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF',
                },
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(0,186,255,.6)',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#EBEDF0',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: yData,
            barWidth: '28px',
            itemStyle: {
                normal: {
                    color: function (params) {
                        // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                        var colorList = [
                            'rgba(135,163,210,.4)',
                            'rgba(135,163,210,.4)',
                            'rgba(135,163,210,.4)',
                            'rgba(135,163,210,.4)',
                            'rgba(135,163,210,.4)',
                            'rgba(135,163,210,.4)',
                            'green',
                        ];
                        return colorList[params.dataIndex];
                    },
                    // color: 'rgba(0,244,255,1)',
                    shadowBlur: 4,
                },
            },
            markPoint: {
                // symbol: 'image:// ' + require(`../../../../assets/images/barIcon.png`),
                symbol: 'circle',
                symbolKeepAspect: false,
                symbolSize: [32, 32],
                symbolOffset: [0, '-50%'],
                silent: true,
                itemStyle: {
                    color: 'green',
                },
                label: {
                    show: true,
                    offset: [0, -3],
                    // textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                data: [{ name: '某个坐标', value: lastNum, coord: [6, lastNum] }],
            },
        },
    ],
};
