option = {
          backgroundColor: 'transparent',
          grid: {
            left: '0',
            right: '0'
          },
          xAxis: {
            show: false,
          },
          yAxis: {
            type: 'category',
            inverse: true,
            axisLabel: {
              margin: 30,
              show: false,
              color: '#000',
              fontSize: 30
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: [ 'PML #1 (cP)', 'PML #2 (cP)','PML #3 (cP)' ]
          },
          series: [
            {
            type: 'bar',
            barGap: '-100%',
            label: {
              normal: {
                show: true,
                position: ['40%', '-100%'],
                color: '#000',
                fontSize: 20,
                formatter:
                  function(param) {
                    return param.name
                  },
              }
            },
            barWidth: '30%',
            itemStyle: {
              normal: {
                borderColor: '#4DCEF8',
                borderWidth: 0,
                barBorderRadius: 15,
                color: function(params) {
                  let data = [2600, 3510, 1150]
                  let threshold = [
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000}
                  ]
                  if(data[params.dataIndex] <= threshold[params.dataIndex]['lcl']
                    || data[params.dataIndex] >= threshold[params.dataIndex]['ucl']) {
                    return '#fff2cc'
                  }
                  return '#e2f0d9'
                },
              },
            },
            z: 1,
            data: [5000, 5000, 5000],
            // data: da
          },
	          {
            type: 'bar',
            barGap: '-100%',
            barWidth: '30%',
            itemStyle: {
              normal: {
                barBorderRadius: 16,
                color: function(params) {
                  let threshold = [
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000}
                  ]
                  if(params.value <= threshold[params.dataIndex]['lcl']
                    || params.value >= threshold[params.dataIndex]['ucl']) {
                    return '#fda924'
                  }
                  return '#70ad47'
                },
              }
            },
            max: 1,
            label: {
              normal: {
                show: true,
                position: [0, '-150%'],
                formatter: function(params) {
                  let threshold = [
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000},
                    {lcl: 2000, ucl: 3000}
                  ]
                  if(params.value <= threshold[params.dataIndex]['lcl']
                    || params.value >= threshold[params.dataIndex]['ucl']) {
                    return '{orangeData|' + params.data + '}'
                  }
                  return '{greenData|' + params.data + '}'
                },
                textStyle: {
                  rich: {
                    greenData: {
                      fontSize: 35,
                      fontWeight: 800,
                      color: '#00b050'
                    },
                    orangeData: {
                      fontSize: 35,
                      fontWeight: 800,
                      color: '#fda924'
                    }
                  }
                }
              }
            },
            labelLine: {
              show: true,
            },
            z: 2,
            data: [2600, 3510,1150 ],
          },
          {
            type: 'bar',
            barGap: '-100%',
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: "transparent" // 0% 处的颜色
            }, {
                offset: 0.99,
                color: "transparent" // 60% 处的颜色
            }, {
                offset: 0.999,
                color: "red" // 100% 处的颜色
            }, {
                offset: 1,
                color: "red" // 100% 处的颜色
            }], false)
              }
            },
            max: 1,
            z: 2,
            data: [2600, 3510,1150 ],
          },
          {
            type: 'bar',
            barGap: '-100%',
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: "transparent" // 0% 处的颜色
            }, {
                offset: 0.99,
                color: "transparent" // 60% 处的颜色
            }, {
                offset: 0.999,
                color: "red" // 100% 处的颜色
            }, {
                offset: 1,
                color: "red" // 100% 处的颜色
            }], false)
              }
            },
            max: 1,
            z: 2,
            data: [2600, 3510,1150 ],
          }]
        };