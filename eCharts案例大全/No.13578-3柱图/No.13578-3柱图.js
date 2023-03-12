var data = ['1班','2班','3班','4班','5班','6班','7班','8班','9班','10班','11班','12班','13班'];
var data1 = ['45','23','65','45','54','45','56','54','67','43','34','5','46'];
var data2 = ['23','44','24','34','23','23','23','15','5','14','25','57','34'];
for (var i = 0; i < data.length; i++) {
  if (data[i] == '3班') {
    data[i] = {
      value: '3班',
      textStyle: {
        color: '#1FBCD2'
      }
    }
  }
}
option = {
  backgroundColor: '#000',
  width: '410',
    height: '150',
  title: {
    text: '男女总人数对比',
    left: 10,
    top: 10
  },

  grid: {
    right: '30px',
    left: '60px',
    top: '80px',
    bottom: '40px'

  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    }
  },
  legend: {
    left: '83%',
    top: '40px',
    data: ['男生', '女生','中性']
  },
  xAxis: {
     name:'班级',
    triggerEvent: true,
    data: data,
    axisLabel: {
      interval: 0,
      show: true,
      textStyle: {
        color: "#B4B5BE"
      }
    },
    axisLine: {
      lineStyle: {
        show: false,
        color: "#F3F3F3",
        width: 2
      }
    }
  },
  yAxis: [{
      name: '数量',
      type: 'value',
      nameTextStyle: {
        "color": "#AEA4A8"
      },
      axisLabel: {
        interval: 0,
        show: true,
        textStyle: {
          color: "#B4B5BE"
        }
      },
      axisLine: {
        lineStyle: {
          color: "#F3F3F3",
          width: 0
        }
      },
      splitLine: {
        lineStyle: {
          color: "#F3F3F3",
          width: 0
        }
      }
    },
    {
      nameTextStyle: {
        "color": "#AEA4A8"
      },
      axisLabel: {
        interval: 0,
        show: false,
        textStyle: {
          color: "#B4B5BE"
        }
      },
      axisLine: {
        lineStyle: {
          color: "#F3F3F3",
          width: 0
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#F3F3F3",
          width: 2
        }
      }

    }
  ],
  series: [{
    name: '男生',
    type: 'bar',
    silent: true,
    itemStyle: {
      normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e3f726'
                    }, {
                        offset: 1,
                        color: '#6cfc33'
                    }]
                )
            }
    },
    data: data1
  }, {
    name: '女生',
    type: 'bar',
    silent: true,
    
    itemStyle: {
      normal: {
        barBorderRadius: 5,
        color: '#bcbbba'
      }
    },
    data:data2
  },{
    name: '中性',
    type: 'bar',
    silent: true,
    
    itemStyle: {
      normal: {
        barBorderRadius: 5,
        color: '#737270'
      }
    },
    data:data2
  }]
};
myChart.on('click', function(param) {
  for (var i = 0; i < data.length; i++) {
    if (data[i] == param.value || data[i].value == param.value) {
      data[i] = {
        value: param.value,
        textStyle: {
          color: '#1FBCD2'
        }
      }
    } else {
      if (typeof data[i] == 'object') {
        if ("textStyle" in data[i]) {
          delete data[i].textStyle;
        }
      }
    }
  }
  option.xAxis.data = data;
  myChart.setOption(option);
  provName = param.value;
  var list = ["chart41", "chart42", "chart51", "chart52"];
  refreshPage("sDate", "eDate", "selInterval", editControl, list, {
    "prov_code": getProvCode(param.value)
  });
});