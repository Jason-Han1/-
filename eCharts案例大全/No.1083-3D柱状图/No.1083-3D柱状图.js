option = {
  tooltip: {
    trigger:'axis'
  },
  legend: {
    data: [{
      name:'1',
      icon:'rect',
      color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(5, 75, 170, 1)' },
            { offset: 1, color: 'rgba(11, 151, 232, 1)' }
          ]
        } //盖子的颜色
    }, {
      name:'2',
      icon:'rect',
      color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(90, 45, 192, 1)' },
            { offset: 1, color: 'rgba(184, 91, 225, 1)' }
          ]
        } //盖子的颜色
    }, {
      name:'3',
      icon:'rect',
      color: {
          type: 'linear',
          x: 0,
          x2: 0,
          y: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(3, 120, 134, 1)' },
            { offset: 1, color: 'rgba(0, 200, 188, 1)' }
          ]
        } //盖子的颜色
    },'4'],
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      fontWeight: 'normal',
      color: '#A2A5AA'
    }
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false, // 不留白，从原点开始
    axisLine: {
      //设置坐标轴线
      lineStyle: {
        color: '#6C6F79' //改轴颜色
      }
    },
    axisTick: { show: false }, //设置刻度线颜色
    axisLabel: {
      //坐标轴刻度标签的相关设置。
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
      //	margin:15,
      textStyle: {
        color: '#A2A5AA',

        fontSize: 10
      }
    },
    data: ['1日', '2日', '3日', '4日', '5日', '6日']
  },
  yAxis: [
    {
      type: 'value',
      name: '金额(万元)',
      min: 0,
      max: 1000,
      interval: 200,
      nameTextStyle: {
        color: '#A2A5AA',
        fontSize: 10
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#6C6F79' //改轴颜色
        }
      },
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#A2A5AA', //改轴数值颜色
          fontSize: 10
        }
      }
    },
    {
      type: 'value',
      name: '环比(%)',
      min: 0,
      max: 100,
      interval: 20,
      nameTextStyle: {
        color: '#A2A5AA',
        fontSize: 10
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)' //改轴颜色
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#6C6F79' //改轴颜色
        }
      },
      axisLabel: {
        formatter: '{value}%',
        textStyle: {
          color: '#A2A5AA', //改轴数值颜色
          fontSize: 10
        }
      }
    }
  ],
  series: [
    {
      z: 2,
      name: '1',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: [410, 420, 520, 520, 610, 450],
      symbol: 'diamond',
      symbolOffset: ['-150%', '-65%'], //盖子的位置
      symbolSize: [8, 6], //盖子的大小
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(94, 232, 252, 1)' },
            { offset: 1, color: 'rgba(30, 169, 237, 1)' }
          ]
        } //盖子的颜色
      },
      tooltip: {
        show: false
      }
    },
    {
      z: 1,
      type: 'bar',
      name: '1',
      barWidth: 8,
      barGap: '50%',
      data: [410, 420, 520, 520, 610, 450],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(5, 75, 170, 1)' },
            { offset: 0.5, color: 'rgba(11, 151, 232, 1)' },
            { offset: 0.5, color: 'rgba(10, 57, 123, 1)' },
            { offset: 1, color: 'rgba(117, 77, 253, 1)' }
          ]
        }
      }
    },
    {
      z: 2,
      name: '2',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: [310, 320, 420, 420, 510, 350],
      symbol: 'diamond',
      symbolOffset: ['0%', '-65%'],
      symbolSize: [8, 6],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(220, 149, 251, 1)' },
            { offset: 1, color: 'rgba(119, 62, 247, 1)' }
          ]
        }
      },
      tooltip: {
        show: false
      }
    },
    {
      z: 1,
      type: 'bar',
      name: '2',
      barWidth: 8,
      // barGap: '-50%',
      data: [310, 320, 420, 420, 510, 350],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(90, 45, 192, 1)' },
            { offset: 0.5, color: 'rgba(184, 91, 225, 1)' },
            { offset: 0.5, color: 'rgba(50, 13, 133, 1)' },
            { offset: 1, color: 'rgba(90, 45, 192, 1)' }
          ]
        }
      }
    },
    {
      z: 2,
      name: '3',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: [310, 320, 420, 420, 510, 350],
      symbol: 'diamond',
      symbolOffset: ['150%', '-65%'],
      symbolSize: [8, 6],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(34, 255, 242, 1)' },
            { offset: 1, color: 'rgba(30, 169, 237, 1)' }
          ]
        }
      },
      tooltip: {
        show: false
      }
    },
    {
      z: 1,
      type: 'bar',
      name: '3',
      barWidth: 8,
      // barGap: '-50%',
      data: [310, 320, 420, 420, 510, 350],
      itemStyle: {
        color: {
          type: 'linear',
          x: 1,
          x2: 0,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(3, 120, 134, 1)' },
            { offset: 0.5, color: 'rgba(0, 200, 188, 1)' },
            { offset: 0.5, color: 'rgba(0, 66, 73, 1)' },
            { offset: 1, color: 'rgba(0, 127, 119, 1)' }
          ]
        }
      }
    },
    {
      name: '4',
      type: 'line',
      symbol: 'circle',
      symbolSize: 10, //设定实心点的大小
      yAxisIndex: 1,
      lineStyle:{
        color:'rgba(180, 34, 80, 1)'
      },
      itemStyle:{
        borderWidth:2,
        borderColor: '#fff' ,
         color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(176, 29, 81, 1)' },
            { offset: 1, color: 'rgba(249, 117, 60, 1)' }
          ]
        }
      },
      data: [70, 65, 83, 79, 67, 73]
    }
  ]
};
