option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
    },
    legend: {
        top: 'bottom',
        data: ['已上报', '未上报', '已发布'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true,
    },
    yAxis: {
        show: false,
    },
    xAxis: {
            show: false,
        type: 'category',
        data: ['车辆预警'],
        axisLine: {
            lineStyle: {
                color: '#D2E6F9',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#000',
        },
    },
    series: [
        {
            name: '已上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [18],
            itemStyle: {
                barBorderRadius: [4, 24, 0, 0],
                color: '#4594E8',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#000',
                },
                position: 'top',
                formatter: function (p) {
                    return p.value > 0 ? p.value + '%' : '';
                },
            },
        },
        {
            name: '未上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [23],
            itemStyle: {
                barBorderRadius: [4, 24, 0, 0],
                color: '#F45353',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#000',
                },
                position: 'top',
                formatter: function (p) {
                    return p.value > 0 ? p.value + '%' : '';
                },
            },
        },
        {
            name: '已发布',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [26],
            itemStyle: {
                barBorderRadius: [4, 24, 0, 0],
                color: '#37BDFF',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#000',
                },
                position: 'top',
                formatter: function (p) {
                    return p.value > 0 ? p.value + '%' : '';
                },
            },
        },
    ],
};
