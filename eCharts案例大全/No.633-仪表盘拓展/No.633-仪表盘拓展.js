 /*
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
重要的事情说三遍，没有脸的可以直接cv发布哈
*/
 
  var dataArry = {
      one: 500,
      two: 300,
      three: 200
  };
  option = {
      backgroundColor:'#040042',
      tooltip: {
          formatter: "{a} <br/>{c} {b}"
      },
      series: [{
              name: '第一部分',
              type: 'gauge',
              color: ['#f00'],
              min: 0,
              max: 8,
              splitNumber: 8,
              radius: '40%',
              center: ["15%", "55%"],
              axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                      width: 10,
                      color: [
                          [0.4, '#203add'],
                          [1, '#0d1758']
                      ]
                  },
                  backgroundColor: "none"
              },
              tooltip: {
                  formatter: function() {
                      if (dataArry.one) {
                          return "第一部分:" + dataArry.one;
                      }
                  }
              },
              axisTick: { // 坐标轴小标记
                  length: 12, // 属性length控制线长
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: 'auto'
                  }
              },
              splitLine: { // 分隔线
                  length: 5, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'rgba(255,255,255,0.7)',
                  }
              },
              axisLabel: {
                  borderRadius: 1,
                  color: 'rgba(255,255,255,0.7)',
                  padding: 1,
              },
              title: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  // fontWeight: 'bolder',
                  fontSize: 13,
                  fontColor: "#FFF",
                  color: "#FFF",
                  paddingTop: 10,
                  offsetCenter: [0, '90%']
                  // fontStyle: 'italic'
              },
              itemStyle: {
                  color: '#1092ff',
              },
              detail: {
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  // borderWidth: 1,
                  textBorderColor: '#000',
                  textBorderWidth: 1,
                  textShadowBlur: 1,
                  textShadowColor: '#fff',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 0,
                  paddingTop: 10,
                  fontFamily: 'digital',
                  fontSize: 20,
                  width: 30,
                  color: '#fff',
                  rich: {},
                  offsetCenter: [0, '65%'],
                  formatter: function(value) {
                      console.info(value)
                      return (value * 10 + "%");
                  }
              },
              data: [{
                  value: 5,
                  name: '第一部分'
              }]
          },
          {
              name: '第二部分',
              type: 'gauge',
              color: ['#f00'],
              min: 0,
              max: 8,
              splitNumber: 8,
              radius: '40%',
              center: ["50%", "55%"],
              axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                      width: 10,
                      color: [
                          [0.4, '#203add'],
                          [1, '#0d1758']
                      ]
                  },
                  backgroundColor: "none"
              },
              axisTick: { // 坐标轴小标记
                  length: 12, // 属性length控制线长
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: 'auto'
                  }
              },
              tooltip: {
                  formatter: function() {
                      if (dataArry.two) {
                          return "第二部分:" + dataArry.two;
                      }
                  }
              },
              splitLine: { // 分隔线
                  length: 5, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'rgba(255,255,255,0.7)',
                  }
              },
              axisLabel: {
                  borderRadius: 1,
                  color: 'rgba(255,255,255,0.7)',
                  padding: 1,
              },
              title: {
                  fontSize: 13,
                  fontColor: "#FFF",
                  color: "#FFF",
                  paddingTop: 10,
                  offsetCenter: [0, '90%']
              },
              itemStyle: {
                  color: '#1092ff'
              },
              detail: {
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  textBorderColor: '#000',
                  textBorderWidth: 1,
                  textShadowBlur: 1,
                  textShadowColor: '#fff',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 0,
                  paddingTop: 10,
                  fontFamily: 'digital',
                  fontSize: 20,
                  width: 30,
                  color: '#fff',
                  rich: {},
                  offsetCenter: [0, '65%'],
                  formatter: function(value) {
                      return (value * 10 + "%");
                  }
              },
              data: [{
                  value: 3,
                  name: '第二部分'
              }]
          },
          {
              name: '第三部分',
              type: 'gauge',
              color: ['#f00'],
              min: 0,
              max: 8,
              splitNumber: 8,
              radius: '40%',
              center: ["85%", "55%"],
              axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                      width: 10,
                      color: [
                          [0.4, '#203add'],
                          [1, '#0d1758']
                      ]
                  },
                  backgroundColor: "none"
              },
              axisTick: { // 坐标轴小标记
                  length: 12, // 属性length控制线长
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: 'auto'
                  }
              },
              splitLine: { // 分隔线
                  length: 5, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'rgba(255,255,255,0.7)',
                  }
              },
              tooltip: {
                  formatter: function() {
                      if (dataArry.three) {
                          return "第三部分:" + dataArry.three;
                      }
                  }
              },
              axisLabel: {
                  borderRadius: 1,
                  color: 'rgba(255,255,255,0.7)',
                  padding: 1,
              },
              title: {
                  fontSize: 13,
                  fontColor: "#FFF",
                  color: "#FFF",
                  paddingTop: 10,
                  offsetCenter: [0, '90%']
              },
              itemStyle: {
                  color: '#1092ff'
              },
              detail: {
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  textBorderColor: '#000',
                  textBorderWidth: 1,
                  textShadowBlur: 1,
                  textShadowColor: '#fff',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 0,
                  paddingTop: 10,
                  fontFamily: 'digital',
                  fontSize: 20,
                  width: 30,
                  color: '#fff',
                  rich: {},
                  offsetCenter: [0, '65%'],
                  formatter: function(value) {
                      return (value * 10 + "%");
                  }
              },
              data: [{
                  value: 2,
                  name: '第三部分'
              }]
          }
      ]
  }