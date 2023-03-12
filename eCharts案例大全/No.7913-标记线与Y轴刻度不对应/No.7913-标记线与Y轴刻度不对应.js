var point_lines = [];
line_avg = {
    name: '平均线',
    symbol: 'none',
    label: {
        show: true,
        position: 'end',
        formatter: '平均线:0.025'
    },
    yAxis: 0.025,
    lineStyle: {
        color: 'red'
    }
};
line_ucl = {
    name: 'UCL',
    symbol: 'none',
    label: {
        show: true,
        position: 'end',
        formatter: 'UCL:0.064'
    },
    yAxis: 0.064,
    lineStyle: {
        color: 'green'
    }
};
line_lcl = {
    name: 'LCL',
    symbol: 'none',
    label: {
        show: true,
        position: 'end',
        formatter: 'LCL:-0.013'
    },
    yAxis: -0.013,
    lineStyle: {
        color: 'green'
    }
};
point_lines.push(line_avg);
point_lines.push(line_ucl);
point_lines.push(line_lcl);


option = {
    grid: {
        show: true,
        left: '50px',
        right: '100px'
    },
    legend: {
        data: ['观测值'],
        show: true,
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true
        },
        axisTick: {
            show: false
        },
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    },
    tooltip: {
        trigger: 'item',
        formatter: function(tt) {
            return tt.data.test;
        },
    },

    yAxis: {
        type: 'value',
        name: '平均值',
        min: -0.020,
        max: 0.070,
        splitNumber: 9,
        splitLine: {
            show: false
        },
    },
    series: [{
            name: '观测值',
            data: [0.0018384, 0.0152306, 0.0074356, 0.036553, 0.0288826, 0.02679, 0.0331038, 0.0302074, 0.0280466, 0.0113556, 0.023038, 0.0297852, 0.0281324, 0.0248124, 0.029635, 0.0140564, 0.030563, 0.0476536, 0.0151396, 0.000421999999999999, 0.0373148, 0.0399284, 0.0291302, 0.03796, 0.0297578],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                color: '#084081'
            },
            itemStyle: {
                color: '#084081'
            },
            label: {
                normal: {
                    show: true
                }
            },
            markLine: {
                symbol: ['none', 'none', 'none'],
                silent: true,
                data: point_lines
            }

        }
    ]
};