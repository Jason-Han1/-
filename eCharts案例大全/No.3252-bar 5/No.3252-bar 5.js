var echartData = [
    { name: '1-2小时', data: [25] },
    { name: '3-4小时', data: [19] },
    { name: '5小时以上', data: [18] },
];

var option = {
    backgroundColor: '#fff',
    grid: {
        containLabel: true,
        left: 20,
        right: -20,
        top: 0,
        bottom: 40,
    },
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
    },
    xAxis: {
        axisLine: {
            show: false,
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
    yAxis: {
        data: ['sss'],
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    color: [
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
                offset: 0,
                color: '#1daaf0',
            },
            {
                offset: 1,
                color: '#2ae0fc',
            },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
                offset: 0,
                color: '#ef7915',
            },
            {
                offset: 1,
                color: '#f7ce04',
            },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
                offset: 0,
                color: '#d3f904',
            },
            {
                offset: 1,
                color: '#49d673',
            },
        ]),
    ],
    series: [],
};

echartData.forEach((item, index) => {
    option.series.push({
        type: 'bar',
        name: item.name,
        stack: '1',
        label: {
            normal: {
                show: true,
                position: [20, 80],
                formatter: `{name|${item.name}}:{value|${item.data}}人`,
                align: 'left',
                textStyle: {
                    color: '#000',
                    rich: {
                        name: {
                            fontSize: '12',
                            fontWeight: 500,
                            color: 'gray',
                        },
                        value: {
                            fontSize: '18',
                            fontWeight: 500,
                            color: '#000',
                        },
                    },
                },
            },
        },
        labelLine: {
            length: 50,
            length2: 150,
            show: true,
            minTurnAngle: 60,
            color: '#00ffff',
        },
        barWidth: 20,

        data: item.data,
        itemStyle: {
            normal: {
                barBorderRadius: [0],
            },
        },
    });
    if (index === 0) {
        option.series[index].itemStyle.normal.barBorderRadius = [15, 0, 0, 15];
    } else if (index === echartData.length - 1) {
        option.series[index].itemStyle.normal.barBorderRadius = [0, 15, 15, 0];
    } else {
        return;
    }
});
