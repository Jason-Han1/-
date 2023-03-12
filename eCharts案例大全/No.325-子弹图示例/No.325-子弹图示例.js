option = {
    title: {
        text: '子弹图示例',
    },
    yAxis: [
        {
            type: 'category',
            data: ['利润'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            data: [''],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    tooltip: {
        formatter: '{a}: {c}',
    },
    legend: {
        data: [
            '差',
            '良',
            '优',
            '实际值',
            {
                name: '目标值',
                icon: 'path://M0 0M443.733333 0 h145.066667 v1024 H443.733333z',
            },
        ],
        selectedMode: false,
    },
    grid: {
        containLabel: true,
        width: '99%',
        height: 120,
        left: 0,
        top: 50,
    },
    series: [
        {
            name: '差',
            data: [60],
            type: 'bar',
            yAxisIndex: 0,
            stack: 'range',
            silent: true,
            barWidth: 90,
            color: '#F5B4AE',
        },
        {
            name: '良',
            data: [30],
            type: 'bar',
            yAxisIndex: 0,
            stack: 'range',
            silent: true,
            barWidth: 90,
            color: '#FADCA9',
        },
        {
            name: '优',
            data: [10],
            type: 'bar',
            yAxisIndex: 0,
            stack: 'range',
            silent: true,
            barWidth: 90,
            color: '#BFE9C3',
        },
        {
            name: '实际值',
            data: [75],
            type: 'bar',
            yAxisIndex: 1,
            barWidth: 60,
            color: '#434778',
            z: 3,
        },
        {
            name: '目标值',
            type: 'scatter',
            symbol: 'rect',
            symbolSize: [8, 50],
            data: [85],
            color: '#000000',
            hoverAnimation: false,
            z: 4,
        },
    ],
};

// setInterval(function() {
//     option.series[3].data[0] = Math.round(Math.random() * 100);
//     myChart.setOption(option, true);
// }, 2000);
