var yData = ['张江微电子港', '张江科技园', '高科技园', '浦东软件园', '张江镇']
var data = [211, 264, 310, 350, 391, 391]
var color = [{
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#bc3535' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ff5b7a' // 100% 处的颜色
            }]}, {
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#f66800' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ffb400' // 100% 处的颜色
            }]}, {
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#278d65' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#62c467' // 100% 处的颜色
            }]}, {
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#2a54' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00ccff' // 100% 处的颜色
            }]}, {
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#754abf' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#f75271' // 100% 处的颜色
            }]}]
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
    backgroundColor: '#292743',
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
      axisLine: {
        show: false
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#6e69b2',
          fontSize: 24
        },
        margin: 30,
      },
      data: yData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
    }, 
    {
      type: 'category',
      axisLine: {
        show: false
      },
    }
    ],
  series: [
    {
      name: '',
      type: 'bar',
      stack: '1',
      yAxisIndex: 0,
      data: seriesData,
      barWidth: 20,
      z: 3,
      label: {
        normal: {
          show: true,
          fontSize: 30,
          padding: [0, 0, 0, 20],
          position: 'insideBottomRight',
          distance: 20,
          formatter: function (params) {
            return data[params.dataIndex]
          }
        }
      },
    },
    {
      name: '',
      type: 'bar',
      yAxisIndex: 2,
      barWidth: 20,
      itemStyle: {
        color: '#292743',
        barBorderRadius: 12
      },
      z: 0
    }
  ]
}
