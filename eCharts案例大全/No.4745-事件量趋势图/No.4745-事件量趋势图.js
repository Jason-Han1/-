  option = {
      backgroundColor: '#11183c',
      grid: {
          left: '5%',
          right: '5%',
          top: '20%',
          bottom: '5%',
          containLabel: true
      },
      tooltip: {
          show: true, //去除面板显示
          trigger: 'axis',
      },
      color: ['rgb(1, 208, 254)'],
      legend: {
          show: true,
          top: '5%',
          icon: 'bar',
          itemWidth: 20,
          itemHeight: 3,
          itemGap: 35, //图例间隔距离
          textStyle: {
              color: '#fff',
              fontSize: '16'
          },
          data: ['事件量']
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false, //图形距离y轴线的距离
          axisLabel: {
              interval: 0,
              color: '#fff',
              fontSize: 16
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: '#1B2937',
                  width: 1.5
              }
          },
          axisTick: {
              show: false,
          },
          splitLine: { //x轴分割线
              show: false,
              lineStyle: {
                  color: '#074069'
              }
          },
          data: ['0-3', '6-9', '2-15', '18-21', '24-27', '27-30'],
      }],
      yAxis: [{
          type: 'value',
          name: '(人次)     ',
          nameTextStyle: {
              fontSize: 16,
              color: '#fff'
          },
          axisLabel: {
              formatter: '{value}',
              textStyle: {
                  color: '#fff',
                  fontSize: 18
              },
          },
          splitLine: { //y轴分割线
              show: true,
              lineStyle: {
                  color: '#1B2937',
                  width: 2,
                  type: 'solid'
              }
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#074069',
                  width: 1.5
              }
          },
          axisTick: {
              show: false,
          },
      }],
      series: [{
              name: '事件量',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: 'rgb(1, 208, 254)',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(1, 208, 254,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(1, 208, 254,.6)'
                          }]),
                      }
                  }
              },
              data: [50, 56, 44, 30, 34, 12],
          },

      ]
  };