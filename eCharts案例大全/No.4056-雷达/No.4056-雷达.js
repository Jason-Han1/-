// See https://github.com/ecomfe/echarts-stat
var data = [
    [1, -3],
];

option = {

    // tooltip: {data
    //     position: 'top'
    // },
    backgroundColor:'#021D34',
    grid: {
        left: 0,
        right:0,
        top:0,
        bottom:0
    },
    xAxis: {
        min: -50,
        max: 50,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#38ACDC',
                width: 2, //这里是为了突出显示加上的
            }
        },
        splitLine: {
            show: false
        }, //去除网格线
    },
    yAxis: {
        min: -50,
        max: 50,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#38ACDC',
                width: 2, //这里是为了突出显示加上的
            }
        },
        splitLine: {
            show: false
        }, //去除网格线
    },
    series: [{
        type: 'scatter',
        symbolSize: 15,
        hoverAnimation: false,
        itemStyle: {
            color: '#38ACDC',
            emphasis: {
                color: '#38ACDC',
                label: {
                    show: false
                }
            },
        },
        data: [0, 0]
    }, {
        type: 'scatter',
        symbolSize: 15,
        hoverAnimation: false,
        itemStyle: {
            color: '#3AFA72',
            emphasis: {
                color: '#3AFA72',
                label: {
                    show: false
                }
            },
        },
        data: data
    }, 
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["16%", "17%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false,
              position: "left"
            },
            itemStyle: {
              color: "#38ACDC",
              emphasis: {
                color: "#38ACDC",
                label: {
                  show: false
                }
              }
            },
            data: "0"
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["34%", "35%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false,
              position: "left"
            },
            itemStyle: {
              color: "#38ACDC",
              emphasis: {
                color: "#38ACDC",
                label: {
                  show: false
                }
              }
            },
            data: "0"
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["49%", "50%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false,
              position: "left"
            },
            itemStyle: {
              color: "#38ACDC",
              emphasis: {
                color: "#38ACDC",
                label: {
                  show: false
                }
              }
            },
            data: "0"
          }]
};