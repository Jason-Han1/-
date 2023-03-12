let splitColor='#167374';
option =  {
        backgroundColor: '#111b29',
        color: ['#3D91F7', '#61BE67'],
        tooltip: {
          show: false // 弹层数据去掉
        },
        legend: {
            show: false,
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
              name: '人脉',
              max: 100
            },
            {
              name: '资产证明',
              max: 100
            },
            {
              name: '守约记录',
              max: 100
            },
            {
              name: '身份证明',
              max: 100
            },
            {
              name: '行为积累',
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
              color: splitColor
            }
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color:splitColor, // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
        },
        series: [
          {
            type: 'radar',
            symbolSize: 10,
            itemStyle:{
               borderColor: 'rgba(66, 242, 185, 1)',
               color: '#fff',
               borderWidth:0.2
            },
            lineStyle: {
               normal:{
                 width:1,
                 color: 'rgba(66, 242, 185, 1)',
               }
            },
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
              },
              {
                // TODO:
                value: [40, 70, 50, 60, 30,80],
                name: '女',
                itemStyle:{
                   borderColor: 'rgba(245, 196, 85, 1)',
                   color: '#fff',
                   borderWidth: 0.2
                },
                lineStyle: {
                   normal:{
                     width:1,
                     color: 'rgba(245, 196, 85, 1)',
                   }
                },
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
              }
            ]
          }
        ]
      }