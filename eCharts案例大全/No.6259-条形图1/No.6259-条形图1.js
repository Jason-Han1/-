var top10CityList = ['数学学院', '物理学院', '化学学院', '生命科学学院', '工学院','材料科学与工程学院','生物医学工程学院'];
var top10CityData = [15, 14, 13, 11,10,9,8];

option = {
  backgroundColor: '#0C2540',
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    borderWidth: 0,
    top: '5%',
    left: '8%',
    right: '8%',
    bottom: '3%'
  },
  color: '#9A9A9A',
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
      barWidth: '10px',
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#6569FF'
          }, {
            offset: 1,
            color: '#00C0F0'
          }], false),
          barBorderRadius: 4,
        },
        emphasis: {
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        }
      },
      data: top10CityData,
      //animationDuration: 1500,
      label: {
        normal: {
          color: '#6F84BD',
          show: true,
          position: 'right',
          textStyle: {
            fontSize: 12,
            //fontStyle: 'italic',
            fontFamily: 'DINPro-Light'
          },
          formatter:'{c}人',
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
        position: ['0', '-45px'],
        fontSize: 12,
        color: '#6F84BD',
        formatter: function (param) {
          return param.name
        }
      },
      data: top10CityData
    }
  ],
  animationEasing: 'cubicOut'
}
