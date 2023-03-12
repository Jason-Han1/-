option = {
    tooltip: {
        trigger: 'axis',
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
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick:{show:false},
        axisLine:{
            show:true,
            lineStyle:{
                color:'#2e81da'
            }
        },
        splitLine:{show:false}
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)'],
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:'#2e81da'
            }
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#fe8500' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#febf00' // 100% 处的颜色
                }], false)
              }
            }
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#0068e7' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#00c7fd' // 100% 处的颜色
                }], false)
              }
            }
        }
    ]
};
