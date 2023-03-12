option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        className: 'tooltip-common',
        position: 'top',
        formatter: function (params, ticket, callback) {
            return (
                '<div class="tooltip-l"><div class="tooltip-t">' +
                params.value +
                '</div><div class="tooltip-line"></div></div>'
            );
        },
    },
    grid: {
        left: 15,
        right: 8,
        top: 37,
        bottom: 15,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisTick: {
                alignWithLabel: true,
            },
            offset: 5,
            axisLabel: {
                color: '#333',
                fontSize: 13,
            },
            axisLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: '#333',
                fontSize: 13,
            },
            offset: 6,
            name: '人数（万人）',
            nameTextStyle: {
                color: 'rgba(255,255,255,0.75)',
                fontSize: 14,
                padding: [0, 10],
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitNumber: 6,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(0, 170, 255, 0.75)',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                borderRadius: [10, 10, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#fdff7f' },
                    { offset: 1, color: '#1e55ff' },
                ]),
            },
            data: [950, 780, 1050, 500, 390, 960],
        },
    ],
};