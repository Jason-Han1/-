option = {

    tooltip: {
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
    axisLine: {
      show: true,
      lineStyle: {
          color: '#0058FF'
      }
    },
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    yAxis: {
        type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
          color: '#0058FF'
      }
    },
        "splitLine": {
             show: false,
        },
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1CFFD3'
                }, {
                    offset: 1,
                    color: '#019D6180'
                }])
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#31CCFA'
                }, {
                    offset: 1,
                    color: '#0058FF80'
                }])
        }
    ]
};