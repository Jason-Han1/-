  let legendData = ['科目一', '科目二', '科目三', '科目四']
  // 预约数
  let seriesData1 = [434, 231, 112, 140]
  // 已考试数
  let seriesData2 = [200, 150, 100, 40]
  // 计算百分比
  let seriesData3 = []
  let seriesData4 = []
  for (let i in seriesData1) {
      seriesData3.push(Math.round(seriesData2[i] / seriesData1[i] * 10000) / 100)
      seriesData4.push(100)
  }

  option = {
      grid: {
          left: 120,
          top: 10,
          bottom: 10,
          right: 60
      },
      yAxis: [{
          type: 'category',
          data: legendData,
          axisPointer: {
              type: 'line'
          },
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
              margin: 20,
              textStyle: {
                  fontSize: 14,
              },
              formatter: function(value, index) {
                  let res = '{grey|' + value + '}{blue|' + seriesData3[index] + '%}';
                  return res;
              },
              rich: {
                  blue: {
                      color: '#6bb6fd',
                      width: 60,
                      align: 'right',
                  },
                  grey: {
                      color: '#adb1b3'
                  }
              }
          },
      }],
      xAxis: [{
          min: 0,
          max: 100,
          axisLabel: {
              show: false
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          }
      }],
      series: [{
              type: 'bar',
              data: seriesData3,
              barWidth: '12px',
              z: 100,
              itemStyle: {
                  normal: {
                      color: '#2c96f8',
                      barBorderRadius: [10, 10, 10, 10],
                  }
              }
          },
          {
              name: '进度条背景',
              type: 'bar',
              barGap: '-100%',
              data: seriesData4,
              barWidth: 12,
              itemStyle: {
                  barBorderRadius: [10, 10, 10, 10],
                  color: '#f7b534'
              },
              z: 90,
              yAxisIndex: 0,
              xAxisIndex: 0,
              label: {
                  normal: {
                      show: true,
                      position: 'right',
                      distance: 10,
                      color: '#6bb6fd',
                      formatter: function(params) {
                          let res = '{blue|' + seriesData2[params.dataIndex] + '/}{orange|' + seriesData1[params.dataIndex] + '}';
                          return res;
                      },
                      rich: {
                          blue: {
                              color: '#6bb6fd'
                          },
                          orange: {
                              color: '#f7b534'
                          }
                      }
                  }
              }
          }
      ]
  };