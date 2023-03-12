option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#44cef6'],
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [{
            name: '2011年',
            barWidth: 20,
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },

    ]
};