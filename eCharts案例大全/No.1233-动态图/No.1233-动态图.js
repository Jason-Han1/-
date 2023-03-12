let num = 0;
let value =100;
var option = {
    title: {
      text: '{a|' + value + '}{c|%}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 18,
            color: '#29EEF3'
          },

          c: {
            fontSize: 10,
            color: '#ffffff',
            // padding: [5,0]
          }
        }
      }
    },
    backgroundColor: "rgba(0, 0, 0, 0)",
    series: [{
        type: 'pie',
        zlevel: 2,
        silent: true,
        radius: ['70%', '71%'],
        startAngle: 50,
        hoverAnimation: false,
        // animation:false,    //charts3 no
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie2()
      },
      // 
      {
        type: 'pie',
        zlevel: 3,
        silent: true,
        radius: ['67%', '68%'],
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie2()
      },
      // 虚线
      {
        type: 'pie',
        zlevel: 4,
        silent: true,
        radius: ['64%', '65%'],
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie3()
      },
      // 完整圈
      {
        type: 'pie',
        zlevel: 5,
        silent: true,
        radius: ['60%', '61%'],
        color: ["#0dc2fe", "#46d3f3", "rgba(203,203,203,.2)"],
        startAngle: 50,
        hoverAnimation: false,
        // animation:false,    //charts3 no
        label: {
          normal: {
            show: false
          },
        },
        data: [90]
      },
      {
        name: '党建领办事完成率',
        type: 'pie',
        radius: ['58%', '45%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",

          }
        },
        data: [{
            value: value,
            name: "",
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#4FADFD' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#28E8FA' // 100% 处的颜色
                  }]
                },
              }
            }
          },
          {
            value: 100 - value,
            name: "",
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#173164"
              }
            }
          }
        ]
      },
      {
        name: "",
        type: "gauge",
        radius: "58%",
        center: ['50%', '50%'],
        startAngle: 0,
        endAngle: 359.9,
        splitNumber: 8,
        hoverAnimation: true,
        axisTick: {
          show: false
        },
        splitLine: {
          length: 60,
          lineStyle: {
            width: 5,
            color: "#061740"
          }
        },
        axisLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [{
          value: 0,
          name: ""
        }]
      },
    ]
  }
  function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgba(88,142,197,0.5)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 20,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      }

    }
    return dataArr

  }

  function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgb(126,190,255)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 20,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      }

    }
    return dataArr
 }

//鼠标事件：'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'。

var timer;

function doing() {
    let option = myChart.getOption();
    option.series[1].startAngle = option.series[1].startAngle - 1;
    option.series[2].startAngle = option.series[2].startAngle + 1;
    myChart.setOption(option);

}

function startTimer() {

    timer = setInterval(doing, 100);

}
function numb() {
    num = num + 5
    // myChart.setOption(option, true)
}
setInterval(function() {
    numb()
}, 100);
setTimeout(startTimer, 500);