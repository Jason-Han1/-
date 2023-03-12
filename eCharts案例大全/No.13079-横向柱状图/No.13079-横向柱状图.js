  var option = {
      backgroundColor: 'black',
      color: ['#2adecf'],
      textStyle: {
          color: 'rgb(222,222,222)',
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          top: '10%',
          containLabel: true
      },
      yAxis: [{
              data: [
                  "NB01直流电压",
                  "NB02直流电压",
                  "NB03直流电压",
                  "NB04直流电压",
                  "NB05直流电压",
                  "NB06直流电压",
                  "NB07直流电压",
                  "NB08直流电压",
                  "NB09直流电压",
                  "NB10直流电压"
              ],
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  interval: 0,
              }
          },
          {
              data: [
                  80,
                  114,
                  210,
                  320,
                  540,
                  650,
                  760,
                  850,
                  960,
                  1000
              ],
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  interval: 0,
              }
          }
      ],
      xAxis: [{
          type: 'value',
          name: '',
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
              show: false,
              interval: 0
          },
      }],
      series: [{
          name: '',
          type: 'bar',
          barGap: '10%',
          barCategoryGap: '60%',
          itemStyle: {
              normal: {
                  barBorderRadius: [0, 30, 30, 0],
                  color: new echarts.graphic.LinearGradient(
                      1, 0, 0, 0, [{
                              offset: 0,
                              color: '#90e6ff'
                          },
                          {
                              offset: 1,
                              color: '#6eb2fe'
                          }
                      ]
                  )
              }
          },
          data: [
              80,
              114,
              210,
              320,
              540,
              650,
              760,
              850,
              960,
              1000
          ],
          zlevel: 11
      }]
  }