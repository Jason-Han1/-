var yData = ['11.05', '11.04', '11.03', '11.02', '11.01', '10.31', '10.30']
var data = [15.3, 13.8, 11.3, 11.5, 12.9, 12.1, 14.9]
const blueItem = {
    type: 'linear',
    colorStops: [{
        offset: 0,
        color: '#0e1b55' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#1970ff' // 100% 处的颜色
}]}
var color = [blueItem, blueItem, blueItem, blueItem, blueItem, blueItem,  blueItem]
var seriesData = []
data.map((item, index) => {
    seriesData.push({
        name: '',
        value: item,
        itemStyle: {
            normal: {
              color: color[index],
            //   barBorderRadius: 12
            }
          }
    })
})
option = {
    backgroundColor: '#061247', 
  legend: {
    show: false
  },
  grid: {
    left: '8%',
    right: '12%',
    bottom: '10%',
    top: '10%',
    containLabel: true,
    // width: '50%'
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
    },
    nameTextStyle: {
        color:'#6e69b2'
    }
  },
  yAxis: [
    {
      type: 'category',
        axisTick: {
          show: false
        },
    // boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
            type: 'dashed',
            color: '#093052'
            
        }
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#0075db',
          fontSize: 24
        },
        margin: 20,
        align: 'right',
      },
      data: yData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: yData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel: {
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
      barWidth: 20,
      z: 3
    },
    {
      name: '',
      type: 'bar',
      yAxisIndex: 2,
      data: [15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3],
      barWidth: 20,
      itemStyle: {
        color: '#061247',
        barBorderRadius: 12
      },
      z: 0,
      label: {
        normal: {
          show: true,
          fontSize: 30,
          padding: [0, 0, 0, 20],
          position: 'right',
          color: '#fff',
          distance: 20,
          formatter: function (params) {
            return data[params.dataIndex] + 'TB'
          }
        }
      }
    }
  ]
}
