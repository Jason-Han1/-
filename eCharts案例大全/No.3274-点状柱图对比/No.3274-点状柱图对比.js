option = {
    title: {
        text: '单位：吨',
        textStyle: {
        	 align: 'right',
            color: '#A3C0DF',
            fontSize: 14,
        },
        left: '5%',
        top: '2%',
    },
    backgroundColor: '#0f375f',
    animation: false,
    legend: {
      selectedMode: false,
      right: 20,
      top: 20,
      textStyle: {
        color: '#b9baba',
      },
      data: [{
          name:'2020年',
          itemStyle:{
              color:'#08CB96'
          }
      },{
          name:'2021年',
          itemStyle:{
              color:'#CCAA16'
          }
      }]
    },
    grid: {
      right: 20,
      top: 90,
      bottom: 55,
    },
    xAxis: {
        data: [
            "10.21",
            "10.20",
            "10.19",
            "10.18",
            "10.17",
            "10.16",
            "10.15"
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#273639'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
                color: "#A3C0DF" //X轴文字颜色
            }
        },
    },
    yAxis: [
          {
              type: "value",
              gridIndex: 0,
              min: 0,
              max: 100,
              splitLine: {
                show: true, //隐藏X轴轴线
                lineStyle:{
                  width: 1,
                  color:'#273639',
                }
              },
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  margin: 14,
                  fontSize: 14,
                  textStyle: {
                      color: "#A3C0DF" //X轴文字颜色
                  }
              },
          },
        ],
    series: [
          {
            name: "2020年",
            type: "bar",
            barWidth: 14,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "#07CB96"
                    },
                    {
                      offset: 1,
                      color: "#098F8E"
                    }
                ])
              }
            },
            data: [20, 80, 100, 40, 34, 90, 60],
            z: 10,
            zlevel: 0,
          }, 
          {
            name: "2021年",
            type: "bar",
            barGap: '50%',
            barWidth: 14,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#CCB015"
                    },
                    {
                        offset: 1,
                        color: "#CC8B1D"
                    }
                ])
              }
            },
            data: [10, 60, 50, 80, 45, 50, 68],
            z: 10,
            zlevel: 0,
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal:{
                color:"#0F375F"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [15, 2],
            symbolPosition: "start",
            symbolOffset: [-10, -1],
            // symbolBoundingData: this.total,
            data: [20, 80, 100, 40, 34, 90, 60],
            width: 20,
            z: 0,
            zlevel: 1,
          },
          {
              // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal:{
                color:"#0F375F"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [15, 3],
            symbolPosition: "start",
            symbolOffset: [10, -5],
            // symbolBoundingData: this.total,
            data: [10, 60, 50, 80, 45, 50, 68],
            width: 20,
            z: 0,
            zlevel: 1,
          },
        ]
};