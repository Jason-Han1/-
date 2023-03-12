option = {
    backgroundColor: '#000',
    xAxis: {
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show:false
    },
    series: [{
        type: 'bar',
        barWidth: 14,
        label: {
          normal: {
            show: true,
            position: 'top',
            color: '#fff'
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 14,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#FFF5D5'
            }, {
              offset: 1,
              color: '#FF8576'
            }]),
          }
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};