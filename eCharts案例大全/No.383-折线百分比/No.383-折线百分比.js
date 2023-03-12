// 统计百分比
var option = {
    backgroundColor: '#03060F',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#15ecf4',
            },
        },
        // backgroundColor: 'rgba(0,0,0,.8)',
        formatter: function (params) {
            var result = params[0].name + '<br>';
            params.forEach(function (item) {
                result +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    item.color +
                    '"></span>';
                // 判断设置增长还是降低
                if (parseFloat(item.data) >= 50) {
                    result += item.seriesName + ': ' + item.data + '%<br>';
                } else if (parseFloat(item.data) < 50) {
                    result += item.seriesName + ': ' + item.data + '%<br>';
                }
            });
            return result;
        },
    },
    legend: {
        data: ['今年', '去年'],
        textStyle: {
            fontSize: 12,
            color: '#858ba1',
        },
        top: '2%',
        left: '5%',
    },
    grid: {
        bottom: 50,
        left: 70,
        right: 50,
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: '10%',
            bottom: 0,
            height: 8,
            borderColor: '#37558a',
            start: 1,
            end: 45, //初始化滚动条
            textStyle: {
                color: '#fff',
            },
        },
    ],
    xAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                color: '#15faff',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                //改变刻度字体样式
                color: '#fff',
            },
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
        max: 100,
        splitNumber: 4,
        interval: 25,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#4b4d64',
            },
        },
        axisLabel: {
            formatter: '{value} %',
            textStyle: {
                //改变刻度字体样式
                color: '#fff',
            },
        },
    },
    series: [
        {
            name: '今年',
            type: 'line',
            // smooth: true, // 设置拆线平滑
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#ffcb00',
                },
            },
            data: [14, 15, 65, 24, 75, 23, 24, 43, 27, 72, 12, 53],
        },
        {
            name: '去年',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#15faff',
                },
            },
            data: [45, 65, 24, 74, 75, 23, 42, 54, 13, 32, 52, 13],
        },
    ],
};
