var labelData = ['一月', '二月', '三月', '四月', '五月'];
var valueData = [52, 32, 12, 53, 65];
var option = {
    backgroundColor: '#012729',
    xAxis: {
        show: false,
    },
    tooltip: {
        show: true,
    },
    yAxis: [
        {
            splitLine: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 0, 15, 15],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: '16',
                },
            },
            data: labelData,
        },
        {
            axisLine: 'none',
            data: valueData,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 15, 15, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                }
            },
        },
    ],
    series: [
        {
            type: 'bar',
            showBackground: true,
            data: valueData,
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(23, 77, 77, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(76, 228, 230, 1)',
                        },
                    ]),
                },
            },
        },
    ],
};
