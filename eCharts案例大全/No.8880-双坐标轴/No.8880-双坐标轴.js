var xData = ['2019-01-15', '2019-01-30', '2019-02-15', '2019-02-28', '2019-03-15', '2019-03-30', '2019-04-15', '2019-04-30', '2019-05-15', '2019-05-30', '2019-06-15', '2019-06-30'];
option = {
    xAxis: [
        {
            type: 'category',
            data: xData,
            splitLine: { show:  false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                interval: function (i, value) {
                    if (i === 0 || i === xData.length - 1 || i === parseInt((xData.length + 1)/2)) return true
                    return false
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: function (n, index) {
                    return Number(n).toFixed(2)
                }
            },
            axisLine: { show: false },
            axisTick: { show: false },
            scale: true
        },
        {
            type: 'value',
            axisLabel: {
                formatter: function (n, index) {
                    return Number(n).toFixed(2)
                }
            },
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            scale: true
        }
    ],
    series: [
        {
            name: '2018EPS',
            type: 'line',
            silent: true,
            yAxisIndex: 0,
            animation: false,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '2019EPS',
            type: 'line',
            silent: true,
            yAxisIndex: 0,
            animation: false,
            data: [2, 4, 8, 16, 32, 64, 128, 144, 120, 60, 10, 20]
        },
        {
            name: '前复权股价',
            type: 'line',
            yAxisIndex: 1,
            silent: true,
            animation:false,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
    ]
};
