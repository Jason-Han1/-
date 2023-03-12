option = {
    backgroundColor: 'blurScope',
    title: {
        text: '时段-进出港流量',
        left: '5%',
        top: '5%',
        textStyle: {
            color: '#fff',
            fontSize: '18px',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: [
        {
            icon: 'react',
            right: '5%',
            top: '5%',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            itemGap: 30,
            itemWidth: 30,
            itemHeight: 4,
            data: ['进港量', '出港量'],
        },
    ],
    grid: {
        top: '20%',
        right: '3%',
        left: '10%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['9:00', '10:00', '11:00', '12:00', '13:00'],
            axisLine: {
                lineStyle: {
                    color: '#184D9A',
                    width: 2,
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 10,
                color: '#6895CA',
                textStyle: {
                    fontSize: 14,
                },
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '{value}',
                color: '#6895CA',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: '#184D9A',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    // 使用深浅的间隔色
                    color: '#184D9A',
                },
            },
        },
    ],
    series: [
        {
            name: '进港量',
            type: 'bar',
            data: [300, 450, 770, 203, 255],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#35FFF5', //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: '#41ec21', //  100%  处的颜色
                            },
                        ],
                        global: false, //  缺省为  false
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 20,
                    width: 80,
                    height: 20,
                    borderRadius: 200,
                    position: ['-0', '-20'],
                    color: '#fff',
                },
            },
        },
        {
            name: '出港量',
            type: 'bar',
            data: [300, 450, 770, 203, 255],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#35FFF5', //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: '#41ec21', //  100%  处的颜色
                            },
                        ],
                        global: false, //  缺省为  false
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 20,
                    width: 80,
                    height: 20,
                    borderRadius: 200,
                    position: ['-0', '-20'],
                    color: '#fff',
                },
            },
        },
    ],
};
