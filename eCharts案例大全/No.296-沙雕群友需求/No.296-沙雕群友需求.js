option = {
  series: [
    {
      type: 'gauge',
        hoverAnimation: false,
      center: ['50%', '50%'],
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'auto',
        distance: 40,
        fontSize: 20
      },
      detail: {
        offsetCenter: [0, '20%'],
        valueAnimation: true,
        formatter: '{value} km/h',
        color: 'auto'
      },
      data: [
        {
          value: 70
        }
      ]
    },
    {
      //内圆
      type: 'pie',
      radius: '90%',
      silent: false,
      center: ['50%', '50%'],
      z: 0,
      itemStyle: {
        normal: {
          color: new echarts.graphic.RadialGradient(
            0.5,
            0.5,
            1,
            [
              {
                offset: 0,
                color: 'rgba(17,24,43,0)'
              },
              {
                offset: 0.5,
                // color: '#1E2B57'
                color: 'rgba(28,42,91,.6)'
              },
              {
                offset: 1,
                color: '#141C33'
                // color:'rgba(17,24,43,0)'
              }
            ],
            false
          ),
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      label: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: [100]
    },
    {
      tooltip: {
        show: false
      },
      name: 'wrap',
      z: 1,
      type: 'pie',
      hoverAnimation: false,
      legendHoverLink: false,
      center: ['50%', '80%'],
      radius: ['0%', '90%'],
      startAngle: 0,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 50,
          itemStyle: {
            normal: {
              color: '#fff'
            },
            emphasis: {
              color: '#fff'
            }
          }
        },
        {
          value: 50,
          name: '1',
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          }
        }
      ]
    }
  ]
};

setInterval(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {
            value: +(Math.random() * 100).toFixed(2)
          }
        ]
      }
    ]
  });
}, 2000);
