var dataStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    },
};
var placeHolderStyle = {
    normal: {
        color: '#1C6785', //未完成的圆环的颜色
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: 'rgba(44,59,70,1)', //未完成的圆环的颜色
    },
};

option = {
    backgroundColor: '#011128',
     tooltip: {
            trigger: 'axis',
            // 坐标轴指示器，坐标轴触发有效(axis)
            axisPointer: {
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} : {c}kw"
          },
          grid: {
            top: '8%',
            left: '7%',
            right: '7%',
            bottom: '10%',
            // height:'51%',
            // containLabel: true,
          },
          legend: {
            itemGap: 50,
            data: ['人员出入总数'],
            textStyle: {
              color: '#f9f9f9',
              borderColor: '#fff'
            },
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#707993'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#9ebfdb',
                fontSize: 11,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['00:00', '01:10', '02:20', '03:30', '04:40', '05:50', '07:00', '08:10', '09:20',
              '10:30', '11:40', '12:50', '14:00', '15:10', '16:20', '17:30', '18:40', '19:50', '21:00',
              '22:10', '23:20'
            ],
          }],
          yAxis: [{
            name: '单位（%）',
            type: 'value',
            min: 0,
            max: 100,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#206587',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: '#9ebfdb',

              },
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '数据统计',
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#FBB50B", // 线条颜色
              },
            },
            markLine: {
              // symbol: "none",
              label: {
                position: "end" //三个值“start”,"middle","end"  开始  中点 结束
              },
              data: [{
                  silent: true,
                  lineStyle: {
                    color: "#E0BC30",
                    borderWidth:4,
                  },
                  label: {
                    show: true,
                    position: 'end',
                    formatter: '预警'
                  },
                  yAxis: 60
                },
                {
                  silent: true,
                  lineStyle: {
                    color: "#BB6D1A",
                  },
                  label: {
                    show: true,
                    position: 'end',
                    formatter: '重载'
                  },
                  yAxis: 80
                },
                {
                  silent: true, //鼠标悬停事件  true没有，false有
                  lineStyle: {
                    color: "#771132",
                  },
                  label: {
                    show: true,
                    position: 'end',
                    formatter: '过载'
                  },
                  yAxis: 100
                }
              ]
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: '#EFBA2E'

              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [{
                      offset: 0,
                      color: '#3F444D',
                    },
                    {
                      offset: 1,
                      color: 'transparent',
                    },
                  ],
                  false
                ),
              },
            },
            data: [8, 30, 40, 58, 41, 40, 55, 58, 62, 58, 68, 85, 55, 58, 62, 62, 62, 70, 78, 85, 68]
          }]
};
