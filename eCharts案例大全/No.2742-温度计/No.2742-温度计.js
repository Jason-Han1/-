var TP_value = 10;  // 温度
var kd = [];        // 刻度
var Gradient = [];  // 存放颜色的数组
var leftColor = ''; // 显示文本的颜色
var showValue = ''; // 显示内容 温度数字
var boxPosition = [65, 0];  // 显示内容的定位
var TP_txt = '';    // 显示内容 文本

// 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
for (var i = 0, len = 135; i <= len; i++) {
  if (i < 10 || i > 130) {
    kd.push('')
  } 
  else {
    if ((i - 10) % 20 === 0) {
      kd.push('-3');
    } 
    else if ((i - 10) % 4 === 0) {
      kd.push('-1');
    } 
    else {
      kd.push('');
    }
  }
}

//中间线的渐变色和文本内容
if (TP_value > 20) {
  TP_txt = '温度偏高';
  Gradient.push({
    offset: 0,
    color: '#93FE94'
  }, {
    offset: 0.5,
    color: '#E4D225'
  }, {
    offset: 1,
    color: '#E01F28'
  })
} 
else if (TP_value > -20) {
  TP_txt = '温度正常';
  Gradient.push({
    offset: 0,
    color: '#93FE94'
  }, {
    offset: 1,
    color: '#E4D225'
  })
} 
else {
  TP_txt = '温度偏低';
  Gradient.push({
    offset: 1,
    color: '#93FE94'
  })
}
if (TP_value > 62) {
  showValue = 62
} 
else {
  if (TP_value < -60) {
    showValue = -60
  } 
  else {
    showValue = TP_value
  }
}
// 避免温度过低 右侧指示内容出界
if (TP_value < -10) {
  boxPosition = [65, -120];
}

leftColor = Gradient[Gradient.length - 1].color;
// 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10


option = {
  backgroundColor: '#0C2F6F',
  title: {
    text: '温度计',
    show: true,
    textStyle: {
      color: '#fff'
    }
  },
  yAxis: [
    {
      show: false,
      data: [],
      min: 0,
      max: 135,
      axisLine: {
        show: false
      }
    }, 
    {
      show: false,
      min: 0,
      max: 50,
    }, 
    {
      type: 'category',
      data: ['', '', '', '', '', '', '', '', '', '', '°C'],
      position: 'left',
      offset: -150,
      axisLabel: {
        fontSize: 18,
        color: 'white'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }
  ],
  xAxis: [
    {
      show: false,
      min: -10,
      max: 80,
      data: []
    }, 
    {
      show: false,
      min: -10,
      max: 80,
      data: []
    }, 
    {
      show: false,
      min: -10,
      max: 80,
      data: []
    }, 
    {
      show: false,
      min: -5,
      max: 80,
    }
  ],
  series: [{
    name: '条/温度计柱',
    type: 'bar',
    // 对应上面XAxis的第一个对象配置
    xAxisIndex: 0,
    data: [{
      value: (showValue + 70),
      label: {
        normal: {
          show: true,
          position: boxPosition,
          backgroundColor: {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsT%0AAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNn%0AVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8ig%0AiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfA%0ACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAH%0AvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCd%0AmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7%0AAKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7%0AAGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkX%0AKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G%0A/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUA%0AoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7i%0AJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5E%0AmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcA%0AAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCB%0AKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv%0A1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggX%0AmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyG%0AvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+%0AQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXA%0ACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIx%0Ah1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBoj%0Ak8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU0%0A5QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgX%0AaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+Y%0ATKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV%0A81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkG%0AWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2q%0AqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxr%0AqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acK%0ApxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VH%0ADFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYP%0AjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x%0A1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l%0A1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6T%0AvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPj%0AthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWd%0Am7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+B%0AZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nv%0Anl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5%0AQRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeG%0AP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8Yu%0AZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxap%0ALhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgq%0ATXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqoh%0ATZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdl%0AV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxx%0AedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWF%0Afevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavE%0AuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/%0APLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttV%0AAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRS%0Aj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92%0AHWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLT%0Ak2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy%0A2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L15%0A8Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfV%0AP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L9%0A6fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bC%0Axh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz%0A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%0AAElFTkSuQmCC', //文字框背景图
          },
          width: 100,
          height: 30,
          padding: [30, -40, 0, 0],
          formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
          rich: {
            back: {
              align: 'right',
              lineHeight: 36,
              fontSize: 24,
              fontFamily: '微软雅黑',
              color: leftColor
            },
            unit: {
              align: 'right',
              fontFamily: '微软雅黑',
              fontSize: 14,
              lineHeight: 36,
              color: '#fff'
            },
            downTxt: {
              lineHeight: 36,
              fontSize: 24,
              align: 'right',
              color: leftColor
            }
          }
        }
      }
    }],
    barWidth: 20,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
      }
    },
    z: 2
  }, {
    name: '白框/里面填充柱',
    type: 'bar',
    xAxisIndex: 1,
    barGap: '-100%',
    data: [134],
    barWidth: 28,
    itemStyle: {
      normal: {
        color: '#0C2E6D',
        barBorderRadius: 50,
      }
    },
    z: 1
  }, {
    name: '外框',
    type: 'bar',
    xAxisIndex: 2,
    barGap: '-100%',
    data: [135],
    barWidth: 38,
    itemStyle: {
      normal: {
        color: '#4577BA',
        barBorderRadius: 50,
      }
    },
    z: 0
  }, {
    name: '圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 0,
    symbolSize: 48,
    itemStyle: {
      normal: {
        color: '#93FE94',
        opacity: 1,
      }
    },
    z: 2
  }, {
    name: '白圆/温度计圆下方圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 1,
    symbolSize: 60,
    itemStyle: {
      normal: {
        color: '#0C2E6D',
        opacity: 1,
      }
    },
    z: 1
  }, {
    name: '外圆/最外层圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 2,
    symbolSize: 70,
    itemStyle: {
      normal: {
        color: '#4577BA',
        opacity: 1,
      }
    },
    z: 0
  }, {
    name: '刻度',
    type: 'bar',
    yAxisIndex: 0,
    xAxisIndex: 3,
    label: {
      normal: {
        show: true,
        position: 'left',
        distance: 10,
        color: 'white',
        fontSize: 14,
        formatter: function(params) {
          if (params.dataIndex > 130 || params.dataIndex < 10) {
            return '';
          } else {
            if ((params.dataIndex - 10) % 20 === 0) {
              return params.dataIndex - 70;
            } else {
              return '';
            }
          }
        }
      }
    },
    barGap: '-100%',
    data: kd,
    barWidth: 1,
    itemStyle: {
      normal: {
        color: 'white',
        barBorderRadius: 120,
      }
    },
    z: 0
  }]
};