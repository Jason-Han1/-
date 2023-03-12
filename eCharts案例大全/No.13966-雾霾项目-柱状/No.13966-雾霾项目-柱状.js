
  var option = {
    backgroundColor: '#fff',
    // animation: false,
    grid: {
      left: '6',
      right: '4',
      bottom: '6%',
      top: '4%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#767676',
        fontSize: 10
      },
      interval: 1
    }],
    yAxis: [{
      type: 'value',
      show: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#767676',
        inside: true,
        margin: 4,
      },
      splitLine: false,
    }],
    series: [{
      type: 'bar',
      itemStyle: {
        color: '#E9E9E9',
      },
      barGap: '-3',
      barWidth: '1',
      data: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400],
      animation: false,
    },
    {
      // name: '直接访问',
      type: 'bar',
      barWidth: '6',
      hoverAnimation: false,
      data: [30, 52, 200, 334, 390, 330, 220, 30, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        color: function (params) {

          var aqiColorMap = {
            Healthy: '#26AA68',
            Moderate: '#F8C500',
            UnhealthySensitive: '#EF7F2B',
            Unhealthy: '#EF3F3F',
            VeryUnhealthy: '#8E3A5B',
            Hazardous: '#4F0B37',
          }

          if (params.value <= 50) {
            return aqiColorMap['Healthy'];
          } else if (params.value > 50 && params.value <= 100) {
            return aqiColorMap['Moderate'];
          } else if (params.value > 100 && params.value <= 150) {
            return aqiColorMap['UnhealthySensitive'];
          } else if (params.value > 150 && params.value <= 200) {
            return aqiColorMap['Unhealthy'];
          } else if (params.value > 200 && params.value <= 300) {
            return aqiColorMap['VeryUnhealthy'];
          } else {
            return aqiColorMap['Hazardous'];
          }
        },
        barBorderRadius: [4, 4, 4, 4]
      }
    }
    ]
  };
