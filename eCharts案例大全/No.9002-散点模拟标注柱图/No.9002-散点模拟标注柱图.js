option = {
    tooltip: {
    trigger: "axis",
    axisPointer: {
      "type": "shadow"
    },
    formatter: null
  },
    grid: {
        // left: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['一月','二月','三月','四月','五月','六月','七月','八月',]
    },
    series: [{
        name: '公司',
        type: 'bar',
         itemStyle: {
            color: "#3fa7dc"
        },
        data: [8000, 3489, 9034, 2121, 1535, 3657, 3321, 3665, 3214, 7687, 2121]
    }, {
        name: '公司',
        type: 'scatter',
        symbol: 'rect',
        symbolSize: [90,3],
        // symbolOffset: [0, '-140%'],
        itemStyle: {
            color: '#000'
        },
        silent: true,
        data: [
            ['一月',1000],
            ['二月',2000],
            ['三月',3000],
            ['四月',1000],
            ['五月',2000],
            ['六月',3000],
            ['七月',1000],
            ['八月',2111]
        ]
    }]
};