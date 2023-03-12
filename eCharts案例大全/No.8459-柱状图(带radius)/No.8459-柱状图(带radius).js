option = {
      grid: {
        top: '12%',
        left: '1%',
        right: '2%',
        bottom: '20%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        textStyle: {
          fontSize: 60,
          color: '#fff',
        },
      },
      xAxis: [
        {
          type: 'category',
          show: true,
          axisLabel: {
            fontSize: 22,
            margin: 25,
            // lineHeight: 56,
            // rotate: -30
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: '0',
              color: 'white'
            }
          },
          data: ['徐家汇', '虹梅路', '田林', '漕河泾', '枫林', '龙华', '斜土', '天平', '湖南', '华泾镇', '长桥', '康健', '凌云路'],
        }
      ],
      yAxis: [
        {
          show: false,
        }
      ],
      series: [
        {
          name: '各街镇药店统计',
          type: 'bar',
          barWidth: '12',
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 50, 50],
              color: 'rgb(8, 251, 245)',
              label: {
                show: true,
                position: 'top',
                formatter: '{c}',
                color: '#fff',
                fontSize: 30
              }
            }
          },
          data: [40, 30, 29, 26, 18, 16, 15, 12, 11, 9, 8, 5, 4]
        }
      ]
    }

