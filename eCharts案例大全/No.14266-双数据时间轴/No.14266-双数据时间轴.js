//数据
var all = {
    "data": [
        [537, 120, 110, 449, 691],
        [145, 130, 917, 142, 665],
        [341, 413, 282, 741, 300],
        [441, 513, 672, 441, 500]
    ],
    "rote": [
        [12.0, 13.4, 15.0, 44.9, 69.1],
        [14.5, 13.0, 91.7, 12, 66.5],
        [34.1, 41.3, 28.2, 74.1, 30.0],
        [44.1, 51.3, 67.2, 44.1, 50.0]
    ],
    "provinces": ["四川", "西藏", "云南", "贵州", "广西"],
    "months": ["合计", "1月", "2月", "3月"]
};

//series样式
var itemStyle = {
    normal: {
        color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
                offset: 0,
                color: '#2af598'
            }, {
                offset: 1,
                color: '#009efd'
            }]
        ),
        barBorderRadius: 4
    },
    emphasis: {
        color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
                offset: 0,
                color: '#2af598'
            }, {
                offset: 1,
                color: '#009efd'
            }]
        ),
        barBorderRadius: 4
    }
};

// echarts配置项
option = {
    timeline: {
        axisType: 'category',
        show: true,
        autoPlay: false,
        playInterval: 1000,
        data: []
    },
    options: []
};

//循环数据
for (var n = 0; n < all.months.length; n++) {
    option.timeline.data.push(all.months[n]);
    option.options.push({
        title: {
            show: true,
            text: all.months[n]
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show: true,
            x: 'right',
            data: ['上客量', '百分比']
        },
        calculable: true,
        grid: {
            y: 80,
            y2: 100
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                interval: 0,
                rotate: 45
            },
            data: all.provinces
        }],
        yAxis: [{
            type: 'value',
            name: '上客量(人)'
        }, {
            type: 'value',
            name: '百分比(%)'
        }],
        series: [{
            name: '上客量',
            yAxisIndex: 0,
            type: 'bar',
            itemStyle: itemStyle,
            barWidth:40,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            },
            data: all.data[n]
        }, {
            name: '百分比',
            yAxisIndex: 1,
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'+'%'
                }
            },
            data: all.rote[n]
        }]
    });
}

//setOption
myChart.setOption(option);