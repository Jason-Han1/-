option = {
    legend: {
        bottom: '0',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 40,
        icon: 'rect',
        data: ['Google', 'Facebook', 'QR']
    },
    xAxis: {
        type: 'value',
        show: false,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },
    series: [
        {
            type: 'bar',
            name: 'Google',
            stack: '总量',
            barWidth: 45,
            label: {
                show: true
            },
            data: [500, 400, 300, 200, 100]
        },
        {
            type: 'bar',
            name: 'Facebook',
            stack: '总量',
            barWidth: 45,
            label: {
                show: true
            },
            data: [50, 40, 30, 20, 10]
        },
        {
            type: 'bar',
            name: 'QR',
            stack: '总量',
            barWidth: 45,
            label: {
                show: true,
                formatter(params) {
                    return -params.value
                }
            },
            data: [-500, -400, -300, -200, -100]
        }
    ]
};