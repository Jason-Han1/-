option = {
    grid: {
        left: 150
    },
    legend:{
      show: true,
      icon: 'circle',
      orient: 'vertical',
      top: '50%',
      left: 10,
      data: [{
        name: '上月'
      },{
        name: '本月'
      }]
    },
    xAxis: {
        type: 'category',
        data: ['电影', '少儿', '电视剧', '综艺', '纪实', '4k'],
        axisTick: {
            show: false,
        },
        axisLine: {
            color: '#203756'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#203756'
                
            }
        }
    },
    series: [{
        name: '上月',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 5,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#007be4'// 0% 处的颜色
                }, {
                    offset: 1, color: '#08baa2' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },{
        name: '本月',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 5,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#df2679'// 0% 处的颜色
                }, {
                    offset: 1, color: '#e69029' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },
    ]
};