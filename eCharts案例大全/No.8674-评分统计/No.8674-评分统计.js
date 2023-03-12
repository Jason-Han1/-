let bgColor = "rgba(19,22,24,1)";
let echartData = [{
        name: "1分",
        value: 100
    },
    {
        name: "2分",
        value: 138
    },
    {
        name: "3分",
        value: 350
    },
    {
        name: "4分",
        value: 173
    },
    {
        name: "5分",
        value: 180
    },
    {
        name: "6分",
        value: 150
    },
    {
        name: "7分",
        value: 180
    },
    {
        name: "8分",
        value: 230
    }
];

let xAxisData = echartData.map(v => v.name);
let yAxisData = echartData.map(v => v.value);

option = {
    backgroundColor: bgColor,
    title: {
      text: '评分统计',
      left: 'center',
      top: '20',
      textStyle: {
          color: '#FFFFFF'
      }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color:"rgba(84, 242, 0, 0.1)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(84, 242, 0, 0.3)"
                  },
                  {
                    offset: 1,
                    color: "rgba(84, 242, 0, 0.1)"
                  }
                ],
                false
              ),
              width: 30,
              shadowBlur: 10,
              shadowColor: "rgba(84, 242, 0, 0.1)"
            }
          }
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: "#FFFFFF"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#5A717A"
            }
        },
        axisTick: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '',
        splitNumber: 6,
        axisLabel: {
            textStyle: {
                color: "#5A717A"
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#5A717A"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: "移动",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 12,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
                color: "rgba(84, 242, 0, 1)"
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
                            color: "rgba(84, 242, 0, 0.5)"
                        },
                        {
                            offset: 1,
                            color: "rgba(84, 242, 0, 0.1)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
            }
        },
        // itemStyle: { 
        //     normal: {
        //         color:  "rgba(84, 242, 0, 1)",
        //         borderColor: "rgba(84, 242, 0, 0.2)",
        //         borderWidth: 12
        //     }
        // },
        itemStyle: {
              normal: {
                color: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(84, 242, 0, 1)" // 0% 处的颜色
                    },{
                      offset: 0.1,
                      color: "rgba(84, 242, 0, 1)" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(84, 242, 0, 0.1)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderColor: "rgba(84, 242, 0, 1)",
                borderWidth: 1
              }
            },
        data: yAxisData
    }]
};