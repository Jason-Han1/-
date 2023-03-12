option =  {
        backgroundColor: '#111b29',
        color: ['#3D91F7', '#61BE67'],
        tooltip: {
          show: false // 弹层数据去掉
        },
        radar: {
          center: ['50%', '55%'], // 外圆的位置
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'PingFangSC-Regular,PingFang SC'
            }
          },
          // TODO:
          indicator: [
            {
              name: '主动阅读',
              max: 100
            },
            {
              name: '完成作业',
              max: 100
            },
            {
              name: '专注投入',
              max: 100
            },
            {
              name: '积极表达',
              max: 100
            },
            {
              name: '订正及时',
              max: 100
            }
          ],
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: ['#1c2330'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
              color: 'rgba(255,255,255,0.2)'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#fff', // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                // TODO:
                value: [80, 80, 80, 60, 20],
                name: 'a',
                areaStyle: {
                  normal: {
                    color: 'rgba(76,155,254,0.5)'
                  }
                }
              },
              {
                // TODO:
                value: [40, 70, 20, 60, 20],
                name: 'b',
                areaStyle: {
                  normal: {
                    color: 'rgba(35,189,84,0.4)'
                  }
                }
              }
            ]
          }
        ]
      }