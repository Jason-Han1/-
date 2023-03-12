option =  {
      title: {
        top: '0%',
        left: '4%',
        subtext: '单位：万'
      },
      grid: {
        top: '18%',
        left: '15%',
        right: '10%',
        bottom: '10%'
      },
      tooltip: {
        show: true
      },
      calculable: true,
      // @ts-ignore
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#a3a4a9',
              margin: 15
            }
          },
          data: ['2016', '2017', '2018', '2019', '2020']
        }
      ],
      // @ts-ignore
      yAxis: [
        {
          type: 'value',
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
            //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#a3a4a9',
              margin: 15
            }
          }
        }
      ],
      series: [
        {
          name: '存活',
          type: 'bar',
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: '#01e6dd' }, //柱图渐变色
              { offset: 1, color: '#0c67fe' } //柱图渐变色
            ],
            false
          ),
          data: [1000, 1500, 2000, 2500, 3000],
          barWidth: 20,
          markPoint: {
            data: [{ type: 'max', name: '最大值' }]
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }]
          }
        }
      ]
    };