var monthData = [];
var barData = [];
for (var i = 1; i <= 12; i++) {
    monthData.push(i + '月');
    var barNumber = Math.floor(Math.random() * 1000);
    barData.push(barNumber);
}

var option = {
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
            data: monthData,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            axisLabel: {
                margin: 10,
                color: '#FFFFFF',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
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
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: barData,
            barWidth: '28px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#FFC900', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FE7B00', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12,
                    },
                },
            },
        },
    ],
};
