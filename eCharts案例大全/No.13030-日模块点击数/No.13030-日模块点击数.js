let yAxisData = ["在线值机", "航班查询", "机场地图", "机场商业", "中转流程", "操作演示", "中转优惠", "酒店服务"];
let contData = [41, 88, 24, 21, 2, 5, 4, 2];
let yesterdayList = [61, 165, 44, 47, 7, 6, 35, 8];

let maxpoint = Math.max.apply(null, contData);
  if (maxpoint < 50) {
    maxpoint = 50;
  } else if (maxpoint < 100) {
    maxpoint = 100;
  } else if (maxpoint < 150) {
    maxpoint = 150;
  } else if (maxpoint < 300) {
    maxpoint = 300;
  } else if (maxpoint < 500) {
    maxpoint = 500;
  } else if (maxpoint < 700) {
    maxpoint = 700;
  } else if (maxpoint < 1000) {
    maxpoint = 1000;
  }
  let _bgshow = [];
  for (let j = 0; j < contData.length; j++) {
    _bgshow.push(maxpoint)
  }
  
  var option = {
    backgroundColor: '#0a2a43',
    tooltip: {},
    grid: {
      top: "3%",
      left: "20%",
      right: "20%"
    },
    xAxis: [
      {
        type: "value",
        show: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        position: "left",
        data: yAxisData,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#ced0d3",
            fontSize: 12
          }
        },
        nameTextStyle: {
          fontSize: 16,
          color: "#ced0d3"
        },
        splitLine: {
          show: false
        }
      },
      {
        type: "category",
        position: "left",
        data: yAxisData,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#ced0d3",
            fontSize: 12
          }
        },
        nameTextStyle: {
          fontSize: 16,
          color: "#ced0d3"
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 20, //柱图宽度
        silent: true,
        yAxisIndex: 0,
        label: {
          normal: {
            show: true,
            color: "#fff",
            formatter: function(data) {
              // return contData[data.dataIndex];
              return (
                contData[data.dataIndex] + "/" + yesterdayList[data.dataIndex]
              );
            },
            position: "right",
            textStyle: {
              color: "#ff7e00",
              fontSize: 16
            }
          }
        },
        itemStyle: {
          normal: {
            color: "transparent"
          }
        },
        data: _bgshow
      },
      {
        name: "",
        type: "bar",
        barWidth: 20,
        silent: false,
        yAxisIndex: 1,
        label: {
          normal: {
            show: true,
            position: "insideRight",
            formatter: "   ",
            color: "#fff"
          }
        },
        itemStyle: {
          emphasis: {},
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#09394e" },
              { offset: 1, color: "#01bad5" }
            ])
          }
        },
        data: contData
        // data: contData.map(function(item, index) {
        //     return parseInt(item / _boyShould[index] * 100)
        // }),
      }
    ]
  };