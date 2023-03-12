  var totalData = [{
          timeIndex: '2-4点',
          value: 105
      },
      {
          timeIndex: '6-8点',
          value: 85
      },
      {
          timeIndex: '12-14点',
          value: 65
      },
      {
          timeIndex: '10-12点',
          value: 145
      },
      {
          timeIndex: '8-10点',
          value: 55
      },
      {
          timeIndex: '18-20点',
          value: 200
      },
      {
          timeIndex: '16-18点',
          value: 185
      }
  ]

  var timeGroup = [
      '0-2点',
      '2-4点',
      '4-6点',
      '6-8点',
      '8-10点',
      '10-12点',
      '12-14点',
      '14-16点',
      '16-18点',
      '18-20点',
      '20-22点',
      '22-24点'
  ]
  var timeGroupReverse = timeGroup.slice(0).reverse()
  var timeMap = []
  timeGroupReverse.forEach((x) => {
      var h = 0
      totalData.forEach((item) => {
          if (item.timeIndex === x) {
              h = item.value
          }
      })
      timeMap.push(h)
  })
  var maxLst = []
  var sortDesc = function(x, y) {
      return y - x
  }
  var timeMapBeforeSort = [...timeMap]
  maxLst.push(timeMap.sort(sortDesc)[0])
  var max = maxLst.sort(sortDesc)[0]
  var labelData = []
  var indicator = []
  for (var i = 0; i < timeGroup.length; ++i) {
      labelData.push({
          value: 1,
          name: timeGroup[i],
          tooltip: {
              formatter: function() {
                  return ''
              }
          }
      })
      indicator.push({
          name: timeGroup[i],
          max: max
      })
  }

  option = {
      title: {
          text: '24h内点击次数分布'
      },

      color: ['#73a0fa'],
      tooltip: {
          trigger: 'item',
          position: ['50%', '20%'],
          formatter: (params) => {
              var result = ''
              var timeGroupData = [...params.value]
              var timeGroupName = [...timeGroupReverse]
              if (timeGroupData.length) {
                  result += params.name
                  timeGroupData.forEach((item, index) => {
                      result += `<br/>${timeGroupName[index]} : ${Number(
                  item
                ).toLocaleString()}`
                  })
              }
              return result
          }
      },
      radar: {
          shape: 'circle',
          scale: true,
          indicator: indicator.reverse(),
          center: ['50%', '50%'],
          radius: '60%',
          startAngle: 105,
          name: {
              show: true,
              color: 'transparent'
          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(65, 217, 199, 1)',
                  opacity: 0.2
              }
          },
          splitLine: {
              lineStyle: {
                  color: 'rgba(65, 217, 199, 1)',
                  opacity: 0.2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(65, 217, 199, 0.1)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15
              }
          }
      },
      series: [{
              type: 'radar',
              data: [{
                  value: timeMapBeforeSort,
                  name: '时间'
              }],
              zlevel: 2,
              z: 4
          },
          {
              type: 'pie',
              data: labelData,
              radius: ['65%', '85%'],
              zlevel: -1,
              name: '',
              itemStyle: {
                  normal: {
                      color: '#22C3AA',
                      borderColor: 'white'
                  }
              },
              label: {
                  normal: {
                      position: 'inside'
                  }
              }
          }
      ]
  };