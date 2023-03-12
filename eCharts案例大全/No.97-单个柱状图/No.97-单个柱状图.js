option = {
  backgroundColor:"#000a3f",
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          },
          backgroundColor: 'rgba(9, 24, 48, 0.5)',
          borderColor: 'rgba(75, 253, 238, 0.4)',
          textStyle: {
              color: '#CFE3FC',
          },
          borderWidth: 1,
      },
      grid: {
          top: '15%',
          right: '5%',
          left: "5%",
          bottom: '12%'
      },
      xAxis: [{
          name: "月份",
          type: 'category',
          data: ["一月","二月","三月","四月","五月"],
          axisLine: {
              lineStyle: {
                  color: '#FFFFFF'
              }
          },
          axisLabel: {
              margin: 10,
              color: '#e2e9ff',
              textStyle: {
                  fontSize: 12
              },
          },
          axisTick: {
              show: false
          }
      }],
      yAxis: [{
          name: "消费（元）",
          axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: '#FFFFFF'
              }
          },
          splitLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.12)'
              }
          }
      }],
      series: [{
          type: 'bar',
          data: [2000,1520,1850,3400,2756],
          barWidth: '30%',
          itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0,244,255,1)' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: 'rgba(0,77,167,1)' // 100% 处的颜色
                  }], false),
                  shadowColor: 'rgba(0,160,221,1)',
                  shadowBlur: 4,
              }
          },
          label: {
              normal: {
                  show: true,
                  lineHeight: 10,
                  formatter: '{c}',
                  position: 'top',
                  textStyle: {
                      color: '#00D6F9',
                      fontSize: 12
                  }

              }
          }
      }]
  };