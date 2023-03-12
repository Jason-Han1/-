option={
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        top: "1%",
        data: ['利润', '收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },

          data: ['天津', '湖南', '湖北']
        }

      ],
      yAxis: [{
        type: 'value',
        splitNumber: 3,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },

      }],
      series: [{
          name: '利润',
          type: 'bar',
          stack: 'sum',
          color: '#00706B',
          data: [50, 70, 40]
        },
        {
          name: '收入',
          type: 'bar',
          stack: 'sum2',
          color: '#F99A14',
          data: [32, 32, 41]
        }, {
          name: '新增',
          type: 'bar',
          stack: 'sum',
          barWidth: '15px',
          data: [10, 0, 7],
          itemStyle: {
            normal: {
              color: 'rgba(245, 77, 80, 0.09)',
              barBorderColor: 'tomato',
              borderType: "dashed",
            }
          }
        },
        {
          name: '新增',
          type: 'bar',

          stack: 'sum2',
          barWidth: '15px',
          data: [20, 0, 21],
          itemStyle: {
            normal: {
              color: 'rgba(245, 77, 80, 0.09)',
              barBorderColor: 'tomato',
              borderType: "dashed"
            }
          }

        }, {
          name: '减少',
          type: 'bar',
          stack: 'sum',

          data: [0, -12, 0],
          itemStyle: {
            normal: {
              color: 'rgba(245, 77, 80, 0.09)',
              barBorderColor: 'tomato',
              borderType: "dashed"
            }
          }
        },
        {
          name: '减少',
          type: 'bar',
          stack: 'sum2',

          data: [0, -22, 0],
          itemStyle: {
            normal: {
              color: 'rgba(245, 77, 80, 0.09)',
              barBorderColor: 'tomato',
              borderType: "dashed"
            }
          }
        }
      ]
    };
