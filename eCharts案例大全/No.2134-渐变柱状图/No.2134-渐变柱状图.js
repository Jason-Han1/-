var dataAxis = ['生产', '加油站', '帮存储', '使用', '运输', '废墟', '仓储'];
    var data = [220, 182, 191, 234, 290, 330, 310];

    option = {
      grid: {
        right: 0,
        top: 20,
        bottom: 20
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        data: dataAxis,
        type: 'category',
        axisLabel: {
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#057bbb'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(5, 123, 187,0.5)'
          }
        }
      },
      series: [
        {
          type: 'bar',
          name: '999',
          itemStyle: {
            borderColor: '#7bd7fc',
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#1AF1C5' },
                // { offset: 0.5, color: '#1a5c96' },
                { offset: 1, color: '#035398' }
              ]
            )
          },
          emphasis: {},
          data: data
        }
      ]
    };
