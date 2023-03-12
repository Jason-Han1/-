// import echarts from 'echarts'
var charts = { // 按顺序排列从大到小
  cityList: ['环城东路（鲁迅东路-胜利东路）', '环城东路（鲁迅路-胜利东路）', '环城东路（鲁迅路-胜利路）', '环城东路（鲁迅东路-胜利东路）'],
  cityData: [6200, 5700, 4200, 3500]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData

option = {
  backgroundColor: '#000',
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    borderWidth: 0,
    top: '15%',
    left: '8%',
    right: '8%',
    bottom: '3%'
  },
  color: '#fff',
  yAxis: [{
    type: 'category',
    inverse: true,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    data: top10CityList
  }],
  xAxis: {
    type: 'value',
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
      show: false
    }
  },
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: '20px',
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgba(255,255,255,0.3)'
          }, {
            offset: 1,
            color: 'rgba(255,255,255,1)'
          }], false),
          barBorderRadius: 10
        },
        emphasis: {
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        }
      },
      data: top10CityData,
      animationDuration: 1500,
      label: {
        normal: {
          color: '#fff',
          show: true,
          position: 'right',
          textStyle: {
            fontSize: 16,
            fontStyle: 'italic',
            fontFamily: 'DINPro-Light'
          }
        }
      }
    },
    {
      type: 'bar',
      barGap: '2px',
      barWidth: 2,
      animation: false,
      itemStyle: {
        // color: 'rgba(255,255,255,0.2)'
        color: 'transparent'
      },
      tooltip: {
        show: false
      },
      label: {
        show: true,
        position: ['0', '-80px'],
        fontSize: 12,
        color: '#fff',
        formatter: function (param) {
          return param.name
        }
      },
      data: top10CityData
    }
  ],
  animationEasing: 'cubicOut'
}
