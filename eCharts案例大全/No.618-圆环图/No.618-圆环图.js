var chartData = {
    total: 100,
    value: 77,
};
var total = chartData.total;
var value = [chartData.value];
var color = 'rgba(240,87,91,1)';
var bgColor = 'rgba(240,87,91,.1)';
option = {
    backgroundColor: 'transparent',
    angleAxis: {
        max: total,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
    },
    series: [
        {
            stack: 'round',
            type: 'bar',
            data: value,
            showBackground: true,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            silent: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: bgColor,
                        },
                        {
                            offset: 1,
                            color: color,
                        },
                    ]),
                },
            },
        },
        {
            stack: 'round',
            type: 'bar',
            data: [0.01],
            showBackground: true,
            backgroundStyle: {
                color: bgColor,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
                shadowOffsetY: 2,
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            itemStyle: {
                color: color,
                borderColor: color,
                borderWidth: 5,
            },
        },
    ],
};
