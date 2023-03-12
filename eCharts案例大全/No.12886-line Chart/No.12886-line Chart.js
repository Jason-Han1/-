option = {
    tooltip: {},
    xAxis: {
        type: 'category',
        data: ['周考', '月考', '期中考试', '期末考试', '月考'],
        axisLine: {
            onZero: false
        }
    },
    yAxis: {
        type: 'value',
        // min: 20,
        // max: 80,
        splitNumber: 3,
        // interval: 30,
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#fff', '#EBF8FE']
            }
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        data: [20, 75, 80, 40, 80],
        markLine: {
            label: {
                show: true,
                position: 'middle',
                color: '#333',
                formatter: '{b}'
            },
            lineStyle: {
                color: '#f00'
            },
            silent: true,
            data: [{
                yAxis: 60,
                name: '有效分'
            }]
        }
    }]
};