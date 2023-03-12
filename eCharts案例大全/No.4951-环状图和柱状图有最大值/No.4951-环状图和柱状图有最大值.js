var colorList = ['104,199,254', '249,162,68']
option = {
    backgroundColor: 'transparent',
    grid: {
      width: '48%',
      height: '40%',
      left: '50%',
      top: 'center',
      right: '2%'
      // padding: ['30%', 0]
      // containLabel: true
    },
    title: [{
      text: '\xa0\xa0' + '{name|70}%',
      top: '47%',
      left: '22%',
      textStyle: {
        rich: {
          name: {
            fontSize: 32,
            fontWeight: 'normal',
            color: '#303133',
            padding: [5, 5, 5, 0]
          },
          val: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#606266'
          }
        }
      }
    }],
    /* legend: {
      orient: 'horizontal',
      width: '100%',
      heihgt: '500px',
      left: 'cneter',
      bottom: '5%',
      data: ['业务办理次数', '超时次数'],
      icon: 'circle',
      textStyle: {
        color: '#282828',
        fontSize: 14,
        fontFamily: 'PingFangSC',
        fontWeight: 400
      }
    },*/
    xAxis: [
      {
        // 左侧柱状图的X轴
        gridIndex: 0, // x 轴所在的 grid 的索引
        show: false
      }],
    yAxis: [
      {
        // 左侧柱状图的Y轴
        gridIndex: 0, // y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          verticalAlign: 'bottom',
          align: 'left',
          padding: [0, 0, 5, 10],
          textStyle: {
            color: '#282828',
            fontSize: '14'
          }
        },
        data: ['男性占比', '女性占比'],
        inverse: true
      },
      {
        // 左侧柱状图的Y轴
        gridIndex: 0, // y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        data: [70, 30],
        inverse: true,
        axisLabel: {
          show: true,
          verticalAlign: 'bottom',
          align: 'right',
          padding: [0, 10, 5, 0],
          textStyle: {
            color: '#282828',
            fontSize: '14'
          },
          formatter: function(value) {
            return '{x|' + value + '%' + '}'
          },
          rich: {
            y: {
              color: '#67C8FD',
              fontSize: 14
            },
            x: {
              color: '#606266',
              fontSize: 14
            }
          }
        }
      },
      {
        // 左侧柱状图的Y轴
        gridIndex: 0, // y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        data: []
      }
    ],
    series: [
      {
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['25%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            rich: {
              top: {
                fontSize: 18,
                color: '#EBE806',
                fontWeight: 400,
                fontFamily: 'PingFangSC'
              },
              bottom: {
                fontSize: 18,
                color: '#EBE806',
                padding: [0, 0, 12, 0],
                fontWeight: 400,
                fontFamily: 'PingFangSC'
              }
            }
          }
        },
        emphasis: {
          label: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 70,
            name: '业务办理次数',
            highlight: true,
            label: {
              show: false
            },
            itemStyle: {
              color: ' #68C7FE'
            }
          },
          {
            value: 30,
            name: '超时次数',
            label: {
              show: false
            },
            itemStyle: {
              color: '#FB9E48'
            }
          }
        ],
        z: 0
      },

      {
        name: '值',
        type: 'bar',
        xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
        yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
        data: [70, 30],
        barWidth: 8,
        itemStyle: {
          normal: {
            color:
              function(params) {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: `rgb(${colorList[params.dataIndex]},1)`
                }, {
                  offset: 1,
                  color: `rgb(${colorList[params.dataIndex]},0.6)`
                }])
              }
          }
        },
        z: 10
      },
      {
        name: '外框',
        type: 'bar',
        xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
        yAxisIndex: 2, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
        data: [100, 100],
        barWidth: 8,
        itemStyle: {
          normal: {
            color: '#E4E7ED'
          }
        },
        z: 0
      }
    ]
};