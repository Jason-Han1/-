 option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['总承包', '专业承包', '劳务分配'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            color: '#e2e9ff',
            textStyle: {
              fontSize: 14,
            },
          },
        },
      ],
      yAxis: {
        type: 'value',
        name: '万元',
        nameTextStyle: {
          color: '#204c6f',
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#204c6f',
        },
        splitLine: {
          lineStyle: {
            color: '#0b2234',
          },
        },
      },
      series: [
        {
          type: 'bar',
          data: [2501, 2600, 2121, 300, 1250, 120, 1120, 4521, 120, 2046],
          barWidth: '15px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#287CE8', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#060A10', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          type: 'bar',
          data: [3256, 4585, 3245, 4300, 1250, 1366, 1200, 1500, 1400, 2356],
          barWidth: '15px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#60CBF8', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#060A10', // 100% 处的颜色
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 1,
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          type: 'bar',
          data: [2356, 2600, 3333, 4500, 2012, 1200, 1200, 2121, 1212, 1414],
          barWidth: '15px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#41E4DE', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#060A10', // 100% 处的颜色
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 1,
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          type: 'bar',
          data: [1542, 2121, 3232, 3023, 2012, 1540, 5600, 1100, 2222, 3023],
          barWidth: '15px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#5941A7', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#060A10', // 100% 处的颜色
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 1,
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
        },
      ],
    };