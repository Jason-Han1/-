const disabledColor = ''
    const primaryColor = ''
    const textColor = ''
    const fontSizeBase = '14px'
    const mapCompanys = {}
    const fontSizeSm = '12px'
    // 轴配置
    const axisOption = {
      min: 0,
      max: 100,
      nameGap: 10,
      nameLocation: 'middle',
      nameTextStyle: {
        fontSize: 14,
        color: disabledColor
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: disabledColor
        },
        symbol: ['none', 'arrow']
      },
      axisLabel: {
        show: false
      }
    }
    // 标记区域标签样式
    const markAreaLabelStyle = {
      position: [17, 16],
      fontSize: 14,
      padding: [6, 12],
      borderRadius: 24,
      color: '#fff',
      backgroundColor: 'rgba(0, 0, 0, .6)'
    }
    // 区域缩放样式函数
    const makeDataZoom = function (opt) {
      return echarts.util.extend({
        type: 'slider',
        // fillerColor: '#f6f8fb',
        // borderColor: '#777',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '60%',
        handleStyle: {
          color: '#aaa'
        },
        textStyle: {
          color: '#aaa'
        },
        filterMode: 'empty',
        realtime: false
      }, opt)
    }
    // elements
    const elements = [{
      type: 'sector',
      left: 30,
      bottom: 90,
      z: 2,
      scale: [2, 2],
      silent: true,
      shape: {
        r: 220,
        r0: 110,
        startAngle: -Math.PI / 2,
        endAngle: 0
      },
      style: {
        fill: 'rgba(255,162, 162,0.3)',
        stroke: '#FF4747',
        lineWidth: 1
      }
    },
    {
      type: 'text',
      id: 'textGlst',
      left: 130,
      bottom: 96,
      z: 2,
      scale: [1, 1, 0, 130, 96],
      style: {
        x: 100,
        text: '区间a',
        fill: '#A3A9C6'
      }
    },
    {
      type: 'text',
      id: 'textFhqj',
      left: 380,
      bottom: 96,
      z: 2,
      scale: [1, 1],
      style: {
        text: '区间b',
        font: '12px',
        fill: '#FF4545'
      }
    },
    {
      type: 'text',
      id: 'textEwjl',
      left: 560,
      bottom: 96,
      z: 2,
      scale: [1, 1],
      style: {
        text: '区间c',
        font: '12px',
        fill: '#A3A9C6'
      }
    }
    ]

    var option = {
      title: [{
        top: 24,
        right: 24,
        textStyle: {
          fontSize: 18,
          color: '#A3A9C6',
          fontWeight: 'normal'
        }
      }],
      tooltip: {
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#E3E8FF',
        borderWidth: 1,
        formatter: function (obj) {
          if (obj.componentType === 'series') {
            var value = obj.value
            return `<span style="color: ${textColor}; font-size: ${fontSizeBase}">${mapCompanys[value[4]].full.slice(0, 13)}${mapCompanys[value[4]].full.slice(13).length > 0 ? '<br>' + mapCompanys[value[4]].full.slice(13) : ''}</span><br><span style="color: ${disabledColor}; font-size: ${fontSizeSm}">${value[5]} 加入</span>`
          } else if (obj.componentType === 'timeline') {
            return `<span style="color: ${disabledColor}; font-size: ${fontSizeSm}">${obj.name}</span>`
          }
        }
      },
      grid: {
        containLabel: true,
        top: 20,
        right: 30,
        left: 30,
        bottom: 90
      },
      xAxis: {
        ...axisOption,
        type: 'value',
        name: '资金贡献'
      },
      yAxis: {
        ...axisOption,
        type: 'value',
        name: '学术贡献'
      },
      dataZoom: [
        makeDataZoom({
          // height: 20,
          // bottom: 60,
          // orient: 'horizontal',
          xAxisIndex: 0,
          type: 'inside'
        }),
        makeDataZoom({
          // width: 20,
          // left: 0,
          // orient: 'vertical',
          yAxisIndex: 0,
          type: 'inside'
        })
        // {
        //   type: 'inside'
        // }
      ],
      graphic: {
        elements: elements
      },
      series: {
        name: 'scatter',
        type: 'scatter',
        z: 10,
        zlevel: 10,
        itemStyle: {
          opacity: 1,
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: true,
          position: 'bottom',
          fontSize: 14,
          color: textColor,
          distance: 8
        },
        data: [
          [43, 71, 3, 3, 'fmsk', '2020-10-12'],
          [83, 65, 4, 3, 'czc', '2018-12-18'],
          [57, 90, 4, 3, 'sdsm', '2020-02-22'],
          [22, 51, 3, 3, 'tkyywl', '2020-08-24'],
          [79, 99, 2, 2, 'jnrlzb', '2019-03-02'],
          [77, 64, 2, 2, 'sdrczx', '2018-10-31'],
          [92, 99, 1, 3, 'lgxk', '2018-02-05']
        ],
        symbolSize: function (val) {
          return val[2] * 10
        },
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: {
            color: '#000',
            width: 2,
            type: 'solid'
          },

          data: [{
            name: 'Y 轴值为 100 的水平线',
            label: {
              formatter: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
              position: 'middle'
            },
            yAxis: 50
          },
          {
            name: 'Y 轴值为 100 的水平线',
            label: {
              formatter: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
              position: 'middle'
            },
            xAxis: 50
          }
          ]
        },
        markArea: {
          silent: true,
          data: [
            [{
              name: 'a象限',
              xAxis: 1,
              yAxis: 50,
              label: {
                position: [17, 16],
                fontSize: 14,
                padding: [6, 12],
                borderRadius: 24,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .6)'
              },
              itemStyle: {
                color: '#ff0'
              }
            },
            {
              xAxis: 50,
              yAxis: 100
            }
            ],
            [{
              name: 'b象限',
              xAxis: 50,
              yAxis: 50,
              label: {
                position: [17, 16],
                fontSize: 14,
                padding: [6, 12],
                borderRadius: 24,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .6)'
              },
              itemStyle: {
                color: '#fff'
              }
            },
            {
              xAxis: 100,
              yAxis: 100
            }
            ],
            [{
              name: 'c象限',
              xAxis: 1,
              yAxis: 1,
              label: {
                position: [17, 16],
                fontSize: 14,
                padding: [6, 12],
                borderRadius: 24,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .6)'
              },
              itemStyle: {
                color: '#fff'
              }
            },
            {
              xAxis: 50,
              yAxis: 50
            }
            ],
            [{
              name: 'd象限',
              xAxis: 50,
              yAxis: 1,
              label: {
                position: [17, 16],
                fontSize: 14,
                padding: [6, 12],
                borderRadius: 24,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .6)'
              },
              itemStyle: {
                color: '#F6F8FB'
              }
            },
            {
              xAxis: 100,
              yAxis: 50
            }
            ]
          ]
        }
      }
    }