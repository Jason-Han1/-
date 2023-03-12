var xname=["08-01","08-02","08-03","08-04", "08-05","08-06", "08-07"]
var data=[50.02, 53.4, 57.3,50.02, 53.4, 57.3,50.00]
option = {
  grid: {
    top: '20%',
    left: '8%',
    right: '8%',
    bottom: '15%',
  },
  xAxis: [{
    type: 'category',
    axisLine: {
      show: false,
    }, 
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false
    },
    boundaryGap: false,
    data: xname
  }],

  yAxis: [{
    type: 'value',
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      margin: 0,
      textStyle: {
        color: '#fff',
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name:'最近7天安全评分',
      type: 'line',
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 8,
      smooth: false,
      lineStyle: {
        normal: {
          color: "#6DB9FF ",
        },
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#000',
          fontSize:14
        }
      },
      itemStyle: {
        color: "#46A7FF",
        borderColor: "#46A7FF",
        borderWidth: 2,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#BADEFF'
            },
            {
              offset: 1,
              color: '#ffffff'
            }
          ], false),
        }
      },
      data: data
    },
    {
        type: 'effectScatter',
        showEffectOn: 'render',
        rippleEffect: {
            period: 10,
            scale: 2,
            brushType: 'fill'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
              color: '#46A7FF',
              shadowBlur: 10,
              shadowColor: '#fff'
            }
        },
        data: data,
    },
  ]
}