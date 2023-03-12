option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        top:'3%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    series: [
        {
            name: '2020年退款金额',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#29acff',
                        },
                        {
                            offset: 1,
                            color: '#4bdfff',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
        show: true,
        position: 'top'
      },
            data: [0, 0, 0, 0, 0, 0, 8196, 3052, 5853, 6145, 7590.66, 1315.1],
        },
        {
            name: '2021年退款金额',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#01c871',
                        },
                        {
                            offset: 1,
                            color: '#55f49c',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
        show: true,
        position: 'top'
      },
            data: [269, 229, 199, 2374.22, 1020.22, 31027.95, 5011.4, 9326.7, 3966.76, 5606, 9901.08, 5361.9],
        },
    ],
};
