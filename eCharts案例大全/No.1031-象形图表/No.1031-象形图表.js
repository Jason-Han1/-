 var maxData = 2500
     var option = {
        color: ['#FAA24B', '#32A3FA'],

        tooltip: {
          //提示框组件
          trigger: 'axis',
          formatter: '{b}<br />{a0}: {c0}<br />{a2}: {c2}',
          axisPointer: {
            type: 'shadow',
            label: {
              backgroundColor: 'rgba(45, 140, 240, 0.1)'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //type: "shadow",
              textStyle: {
                color: '#fff'
              }
            }
          },
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14
          }
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '6%',
          top: 30,
          padding: '0 0 10 0',
          containLabel: true
        },
        legend: {
          //图例组件，颜色和名字
          left: '45%',
          top: 0,
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 10,
          data: ['行政', '刑事'],
          textStyle: {
            color: '#616D80',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 16,
            fontWeight: 400
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, //坐标轴两边留白
            data: ['民警01', '民警02', '民警03', '民警04', '民警05', '民警06', '民警07', '民警08', '民警09', '民警10', '民警11',],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 15,
              textStyle: {
                color: '#748299',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
                fontWeight: 400
              }
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: true
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: '#C1CCE6'
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#8898B3',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
                fontWeight: 400
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#C1CCE6'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#DCE4F5',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '行政',
            type: 'pictorialBar', //设置类型为象形柱状图
            symbol: 'rect', //图形类型，带圆角的矩形
            symbolOffset: [6, 0],
            symbolMargin: '4', //图形垂直间隔
            barWidth: '15%', //柱图宽度
            barMaxWidth: '20%', //最大宽度
            cursor: "pointer",
            animationDelay: (dataIndex, params) => {
              //每个图形动画持续时间
              return params.index * 50
            },
            itemStyle: {
              normal: {
                color: params => {
                  //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: '#FAA24B'
                    },
                    {
                      offset: 1,
                      color: '#FAA24B'
                    }
                  ])
                }
              }
            },
            z: 2,
            barGap: 0, //柱间距离
            symbolRepeat: true, //图形是否重复
            symbolSize: [24,6], //图形元素的尺寸
            data: [900, 500, 1400, 2000, 900, 2000, 2400, 2200, 1000, 500, 9],
            animationEasing: 'elasticOut', //动画效果
            stack: '2'
          },
          {
            name: '',
            type: 'pictorialBar', //设置类型为象形柱状图
            symbol: 'rect', //图形类型，带圆角的矩形
            symbolOffset: [-7, 0],
            symbolMargin: '4', //图形垂直间隔
            barWidth: '15%', //柱图宽度
            barMaxWidth: '20%', //最大宽度
            selectedMode: true,
            itemStyle: {
              normal: {
                color: '#D7DFF5'
              }
            },
            barGap: 0, //柱间距离
            symbolSize: [24,6], //图形元素的尺寸
            data: [900, 500, 1400, 2000, 900, 2000, 2400, 2200, 1000, 500, 9],
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolBoundingData: maxData,
            z: 1
          },
          {
            name: '刑事',
            type: 'pictorialBar', //设置类型为象形柱状图
            symbol: 'rect', //图形类型，带圆角的矩形
            barWidth: '15%', //柱图宽度
            symbolOffset: [6, 0],
            barMaxWidth: '20%', //最大宽度
            symbolMargin: '4', //图形垂直间隔
            cursor: "pointer",
            animationDelay: (dataIndex, params) => {
              //每个图形动画持续时间
              return params.index * 50
            },
            itemStyle: {
              normal: {
                color: params => {
                  //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: '#32A3FA'
                    },
                    {
                      offset: 1,
                      color: '#32A3FA'
                    }
                  ])
                }
              }
            },
            z:2,
            barGap: 0, //柱间距离
            symbolRepeat: true, //图形是否重复
            symbolSize: [24,6], //图形元素的尺寸
            data: [2009, 590, 494, 2097, 557, 954, 553, 445, 442, 1234, 1000],
            animationEasing: 'elasticOut', //动画效果
            stack: '1'
          }, {
            name: '',
            type: 'pictorialBar', //设置类型为象形柱状图
            symbol: 'rect', //图形类型，带圆角的矩形
            symbolOffset: [-10, 0],
            symbolMargin: '4', //图形垂直间隔
            barWidth: '15%', //柱图宽度
            barMaxWidth: '20%', //最大宽度
            selectedMode: true,
            itemStyle: {
              normal: {
                color: '#D7DFF5'
              }
            },
            barGap: 0, //柱间距离
            symbolSize: [24,6], //图形元素的尺寸
            data: [900, 500, 1400, 2000, 900, 2500, 2400, 2200, 1000, 500, 9],
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolBoundingData: maxData,
            z: 1
          },
        ]
      }
