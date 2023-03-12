option = {
    backgroundColor: '#0A0A1A',
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            '00:00',
            '01:15',
            '02:30',
            '03:45',
            '05:00',
            '06:15',
            '07:30',
            '08:45',
            '10:00',
            '11:15',
            '12:30',
            '13:45',
            '15:00',
            '16:15',
            '17:30',
            '18:45',
            '20:00',
            '21:15',
            '22:30',
            '23:45',
        ],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W',
        },
        axisPointer: {
            snap: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed', //虚线
                color: '#707070',
                opacity: 0.23,
            },
        },
    },

    series: [
        {
            name: '付款量',
            type: 'bar',
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            barWidth: 10,
            barGap: 1,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.01)',
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: '#43434F',
                },
            },
        },
        {
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: '#707070',
                },
            },
            markArea: {
                itemStyle: {
                    color: '#56E3F3',
                },
                data: [
                    [
                        {
                            name: '政府购买服务老人数\n政府购买服务人员',
                            xAxis: '20:00',
                        },
                        {
                            xAxis: '21:15',
                        },
                    ],
                ],
            },
        },
    ],
};
