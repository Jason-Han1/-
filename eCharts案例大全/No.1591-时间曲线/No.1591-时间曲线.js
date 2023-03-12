option = {
    grid: {
        left: '30',
        top: '30',
        bottom: '20',
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'category',
            data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
            // axisLine: {
            //     lineStyle: {
            //         //不显示x轴的数据
            //         color: 'transparent',
            //     },
            // },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#D4D4D4',
                },
            },
            axisLine: {
                show: false,
            },
            nameTextStyle: {
                color: '#999999',
                fontSize: '20',
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#D4D4D4',
                },
            },
            axisLine: {
                show: false,
            },
            nameTextStyle: {
                color: '#999999',
                fontSize: '20',
            },
        },
    ],
    series: [
        {
            type: 'line',
            data: [62, 65, 68, 66, 80, 136],
            lineStyle: {
                normal: {
                    color: '#FF9934',
                    shadowColor: 'rgba(0,0,0,0.16)',
                    shadowOffsetY: 2,
                },
            },
            itemStyle: {
                normal: {
                    color: '#FF9934',
                    borderColor: '#FF9934',
                    opacity: 0, // 设置透明度为0 不显示拐点
                },
            },
            smooth: true,
        },
    ],
};
