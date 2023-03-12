  //显示数据
    data = 300;
    //总数据
    max = 600;
    //分割线宽度
    width = data === 0 ? 0 : 4;
    //指定数值在圆弧中所占角度
    scaleAn = 270/max;
    //圆弧起始位置的角度
    startAngle = 225-data*scaleAn;
    if(max-data == max/100*25){
      startAngle = 225-max*scaleAn;
    }
    //分割比例
    scaleSp = 80/max;
    //分割线的分割数值
    splitNum = data*scaleSp

    option = {
      title:{
        text:'测试',
        x:'center',
        top:'15%'
      },
      backgroundColor: '#fff',
      tooltip: {
        trigger: "item"
      },
      series: [{
        name: "",
        type: "gauge",
        radius: "58%",
        center: ['50%', '50%'],
        startAngle: startAngle,
        endAngle: 225,
        splitNumber: splitNum,
        hoverAnimation: false,
        axisTick: {
          show: false
        },
        splitLine: {
          length: 11,
          lineStyle: {
            width: width,
            color: "#00a2ff"
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
        {
          name: "",
          type: "pie",
          radius: ["45%", "50%"],
          center: ['50%', '50%'],
          silent: true,
          clockwise: true,
          startAngle: 225,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: "center",

            }
          },
          data: [{
            value: data,
            name: "",
            label: {
              normal: {
                formatter: function(param) {
                  return param.data.value
                },
                fontSize: 24,
                color: '#333',
                fontFamily: 'Microsoft YaHei'
              }
            },
            itemStyle: {
              normal: {
                color: "#63EBFF"
              }
            }
          },
            {
              value: max-data-max/100*25,
              name: "",
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: "#63EBFF"
                }
              }
            },

            {
              name: '剩余',
              value: max/100*25,
              label: {
                show:false
              },
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              }
            }
          ]
        },

      ]
    }
    myChart.setOption(option)