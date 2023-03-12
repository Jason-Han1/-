// import echarts from 'echarts'
let charts = {
  xAxis: ['江东大队', '城区大队', '滨海大队', '江北大队', '高新大队', '沿江大队'],
  value: [896, 725, 648, 423, 409, 347]
}

option =  {
  backgroundColor: '#000',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '15%',
    left: '8%',
    right: '8%',
    bottom: '15%'
  },
  color: '#fff',
  xAxis: [{
    type: 'category',
    data: charts.xAxis,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,1)'
      }
    },
    axisLabel: {
      color: '#B1BCD2',
      textStyle: {
        fontSize: 12
      }
    }
  }],
  yAxis: [{
    axisLabel: {
      formatter: '{value}',
      color: '#B1BCD2'
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.2)'
      }
    }
  }],
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: '20px',
      itemStyle: {
        color: 'rgba(255,255,255,0.1)',
        borderColor: '#FFF',
        borderWidth: 2,
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: 'rgba(255,255,255,0.1)'
          },
          {
            offset: 0.989,
            color: 'rgba(255,255,255,0.1)'
          },
          {
            offset: 0.99,
            color: 'rgba(255,255,255,1)'
          },
          {
            offset: 1,
            color: 'rgba(255,255,255,1)'
          }], false)
        }
      },
      data: charts.value,
      animationDuration: 1500,
      label: {
        normal: {
          color: '#fff',
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 12,
            fontStyle: 'italic',
            fontFamily: 'DINPro-Light'
          }
        }
      }
    }
  ],
  animationEasing: 'cubicOut'
}
