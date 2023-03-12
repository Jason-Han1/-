var yData = ['河南', '福建', '浙江', '广东', '江苏']
var data = [211, 264, 310, 376, 391]
var color = ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F']
var seriesData = []
data.map((item, index) => {
    seriesData.push({
        name: '',
        value: item,
        itemStyle: {
            normal: {
              color: color[index],
              barBorderRadius: 12
            }
          }
    })
})
option = {
    backgroundColor: '#001a2b',
  legend: {
    show: false
  },
  grid: {
    left: '8%',
    right: '12%',
    bottom: '8%',
    top: '3%',
    containLabel: true
  },
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
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#363e83'
        }
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#00FFEC',
          fontWeight: 'normal',
          fontSize: 30
        }
      },
      data: yData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: yData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: yData
    }],
  series: [
    {
      name: '',
      type: 'bar',
      stack: '1',
      yAxisIndex: 0,
      data: seriesData,
      color: ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F'],
      barWidth: 20,
      z: 3
    },
    {
      name: '',
      type: 'bar',
      yAxisIndex: 2,
      data: [400, 400, 400, 400, 400],
      barWidth: 20,
      itemStyle: {
        color: '#001a2b',
        barBorderRadius: 12
      },
      label: {
        normal: {
          show: true,
          color: '#00FFEC',
          fontSize: 30,
          padding: [0, 0, 0, 20],
          position: 'right',
          formatter: function (params) {
            return data[params.dataIndex]
          }
        }
      },
      z: 0
    }
  ]
}
