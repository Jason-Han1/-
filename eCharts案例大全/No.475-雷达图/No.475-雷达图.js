option =  {
        backgroundColor: '#111b29',
        color: ['#3D91F7', '#61BE67'],
        tooltip: {
          show: false // 弹层数据去掉
        },
        legend: {
            icon: 'roundRect',
            // left: '47%',
            top: '85%',
            show: true,
            padding: [3, 5],
            // right: '50',
            y: '1',
            center: 0,
            itemWidth: 20,
            itemHeight: 10,
            itemGap: 26,
            z: 3,
            // orient: 'horizontal',
            data: ['男', '女'],
            textStyle: {
                fontSize: 12,
                color: '#F1F7FF',
            },
        },
        radar: {
          center: ['50%', '50%'], // 外圆的位置
          radius: '55%',
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 400,
              fontFamily: 'PingFangSC-Regular,PingFang SC',
              fontStyle: 'normal',
            }
          },
          // TODO:
          indicator: [
            {
              name: '养老保险',
              max: 100
            },
            {
              name: '住房公积金',
              max: 100
            },
            {
              name: '生育保险',
              max: 100
            },
            {
              name: '工伤保险',
              max: 100
            },
            {
              name: '医疗保险',
              max: 100
            },
            {
              name: '失业保险',
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
              type: 'solid',
              color:'#1781BA', // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
        },
        series: [
          {
            type: 'radar',
            symbolSize: 5,
            data: [
              {
                // TODO:
                value: [80, 80, 80, 70, 60,50],
                name: '男',
                areaStyle: {
                  normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: 'rgba(46,203,255, 0.14)' // 0% 处的颜色
                        }, 
                        {
                            offset: 0.15, color: 'rgba(46,203,255, 0.14)' // 100% 处的颜色
                        },
                        {
                            offset: 0.75, color: 'rgba(46,203,255, 0.4)' // 100% 处的颜色
                        },
                        {
                            offset: 1, color: 'rgba(46,203,255, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                  }
                },
                itemStyle: { // 折线拐点标志的样式。
                    normal: { // 普通状态时的样式
                        lineStyle: {
                            width: 1
                        },
                        opacity: 0.3
                    },
                    emphasis: { // 高亮时的样式
                        lineStyle: {
                            width: 5
                        },
                        opacity: 0
                    }
                },
              },
              {
                // TODO:
                value: [40, 70, 50, 60, 30,80],
                name: '女',
                areaStyle: {
                  normal: {
                    color:{
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 127,0, 0.14)' // 0% 处的颜色
                        }, 
                        {
                            offset: 0.15, color: 'rgba(255, 127,0, 0.14)' // 100% 处的颜色
                        },
                        {
                            offset: 0.75, color: 'rgba(2255, 127,0, 0.4)' // 100% 处的颜色
                        },
                        {
                            offset: 1, color: 'rgba(255, 127,0, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                  }
                },
                itemStyle: { // 折线拐点标志的样式。
                    normal: { // 普通状态时的样式
                        lineStyle: {
                            width: 1
                        },
                        opacity: 0.3
                    },
                    emphasis: { // 高亮时的样式
                        lineStyle: {
                            width: 5
                        },
                        opacity: 0
                    }
                },
              }
            ]
          }
        ]
      }