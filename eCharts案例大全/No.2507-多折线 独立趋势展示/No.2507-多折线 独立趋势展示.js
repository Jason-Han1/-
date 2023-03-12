option = {
    title: {
        text: '多折线 独立趋势展示'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['占比', '人数', '价格']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: [
        {
        type: 'value',
        show: false,
    },
    {
        type: 'value',
        show: false,
    },
    {
        type: 'value',
        show: false,
    }
        ],
    series: [
        {
            name: '占比',
            type: 'line',
           yAxisIndex: 0,
            data: [0.1, 0.3, 0.7, 0.1, 0.1, 0.4, 0.8]
        },
        {
            name: '人数',
            type: 'line',
            yAxisIndex: 1,
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '价格',
            type: 'line',
          yAxisIndex: 2,
            data: [1506, 2327, 2018, 1549, 1900, 3306, 4100]
        }
      
    ]
};