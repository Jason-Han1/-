var datacolor= [1, 28, 3, 12, 13, 68]
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
    legend: {
        data: ['2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // visualMap: {
    //     orient: 'horizontal',
    //     left: 'center',
    //     min: 10,
    //     max: 200000,
    //     text: ['High', 'Low'],
    //     // Map the score column to color
    //     dimension: 0,
    //     inRange: {
    //         color: ['#D7DA8B', '#E15457']
    //     }
    // },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
