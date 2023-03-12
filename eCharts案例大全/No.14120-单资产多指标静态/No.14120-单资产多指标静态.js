option = {
    title: {
        text: '单资产多指标静态'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
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
        data: ['收包数', '发包数', '收丢包数', '发丢包数', '收字节数', '发字节数']
    },
    xAxis: [{
        type: 'category',
        data: ['2018-01-01 12:00:00', '2018-01-01 12:00:05', '2018-01-01 12:00:10', '2018-01-01 12:00:15', '2018-01-01 12:00:20', '2018-01-01 12:00:25', '2018-01-01 12:00:30', '2018-01-01 12:00:35', '2018-01-01 12:00:40', '2018-01-01 12:00:45', '2018-01-01 12:00:50', '2018-01-01 12:00:55']
    }],
    yAxis: [{
            type: 'value',
            name: '包个数',
            min: 0,
            //max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '字节数',
            min: 0,
            //max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} 个'
            }
        }
    ],
    series: [{
            name: '收包数',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '发包数',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '收丢包数',
            type: 'bar',
            data: [2.1, 3.9, 6.0, 13.2, 29.6, 66.7, 330.6, 132.2, 39.6, 10.0, 16.4, 13.3]
        },
        {
            name: '发丢包数',
            type: 'bar',
            data: [2.2, 51.9, 19.0, 26.5, 23.7, 78.7, 135.6, 122.2, 68.7, 38.8, 16.0, 12.3]
        },
        {
            name: '收字节数',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name: '发字节数',
            type: 'line',
            yAxisIndex: 1,
            data: [2.1, 4.2, 3.4, 4.7, 6.8, 10.6, 10.1, 23.2, 20.3, 16.1, 10.0, 6.0]
        }
    ],
    dataZoom: [{
        end: '80'
    }, {
        type: 'inside'
    }],
};;