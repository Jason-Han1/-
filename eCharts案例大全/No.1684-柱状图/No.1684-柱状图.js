
  var name = ['仁济医院1', '仁济医院2', '仁济医院3', '仁济医院4', '仁济医院5', '仁济医院6'];
   var data = [200, 100, 200, 200, 100, 123];
  var max = data.map(() => {
    return Math.max(...data);
  });

  if (data) {
    var databottom = data.map(() => {
      return 0.1;
    });
  }

  var data2 = max * 1.3;
  option = {
      backgroundColor:'#000',
    tooltip: {
      show: false
    },
    grid: {
      top: '8%',
      left: '13%',
      right: '2%',
      bottom: '22%'
    },
    xAxis: {
      data: name,
      show: true,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12,
          fontFamily: 'pangmen'
        },
        margin: 5 // 刻度标签与轴线之间的距离。
      }
    },
    yAxis: {
      name: '',
      nameTextStyle: {
        color: 'white',
        fontSize: '12',
        fontWeight: 400,
        align: 'right',
        lineHeight: 46
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          opacity: 0.1
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
          fontFamily: 'pangmen'
        }
      }
    },
    series: [
      { // 三个最低下的圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [10, 5],
        symbolOffset: [-2.5, 0],
        z: 12,

        itemStyle: {
          opacity: 1,
          color: function (params) {
            var a = params.name;
            console.log(a);
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#2CBEFF' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#0D7BE1' // 100% 处的颜色
            }], false);
          }
        },
        emphasis: {
          show: false
        },
        data: databottom
      },
      // 下半截柱状图
      {
        name: '',
        type: 'bar',
        barWidth: 10,
        barGap: '-100%',
        lineStyle: {
          color: '#2CBEFF'
        },
        tooltip: {
          show: true,
          trigger: 'item',
          textStyle: {
            fontFamily: 'pangmen'
          },
          formatter: (res) => {
            console.log(res);
            return `<span style="width:10px;height:10px;border-radius:10px;background-color:#2CBEFF;display:block;float:left;margin-right:5px;margin-top:5px"></span>${res.name} : ${res.data}万人`;
          }
        },
        itemStyle: { // lenged文本
          opacity: 0.7,
          color: function () {
            // var a = params.name.slice(0, 2);
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#2CBEFF' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#0D7BE1' // 100% 处的颜s色
            }], false);
          }
        },

        data: data
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [10, 5],
        symbolOffset: [-2.5, 0],
        z: 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            var a = params.name;
            console.log(a);
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#2CDFFF' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#2CDFFF' // 100% 处的颜色
            }], false);
          }
        },
        symbolPosition: 'end',
        data: data
      },
      {
        name: '',
        type: 'bar',
        barWidth: 20,
        silent: true, // 不响应鼠标事件
        barGap: '-150%',
        z: 0,
        itemStyle: {
          color: 'rgba(255,255,255,0.06)'
          // opacity: 0.2
        },
        data: data2
      }
    ]
  };
