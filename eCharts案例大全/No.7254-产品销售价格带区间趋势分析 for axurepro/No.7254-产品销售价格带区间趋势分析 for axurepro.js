option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['备案产品数', '占比']
    },
    yAxis: [{
        type: 'category',
        data: ['2000以上', '1500-2000', '1000-1500', '900-1000', '800-900', '700-800', '600-700', '500-600', '400-500', '300-400', '200-300', '150-200', '100-150', '50-100', '0-50'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    xAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1700,
            interval: 400,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 150,
            interval: 50,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '销售金额（万元）',
            type: 'bar',
            data: [767, 1356, 1622, 326, 200, 64, 33, 254, 321, 33, 123, 555, 334, 164, 343]
        },

        {
            name: '产品销售数量（万）',
            type: 'line',
            xAxisIndex: 1,
            data: [50, 56, 125, 23, 65, 35, 62, 42, 78, 58, 25, 45, 25, 35, 42]
        }
    ]
};