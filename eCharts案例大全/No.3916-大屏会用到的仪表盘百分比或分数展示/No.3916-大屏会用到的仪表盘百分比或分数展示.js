var dataArr={
    data:65,
    percent:0.65
}
option = {
    backgroundColor:'#031245',
    title:[
        {
          text: `{a|${dataArr.data}}{b|%}`,
          top: 'center',
          left: 'center',
          textStyle: {
            fontWeight: 'normal',
            rich: {
              a: {
                fontWeight: 'normal',
                fontSize: 45,
                color: '#FFF',
                textShadowColor: '#7f00fcff',
                textShadowBlur: 10,
                fontFamily: 'Microsoft YaHei',
                // textShadow: [5, 5, 10, '#7ff06fff']
              },
              b: {
                fontWeight: 'normal',
                fontSize: 30,
                padding:[0,0,5,5],
                color: '#FFF',
                textShadowColor: '#7f00fcff',
                textShadowBlur: 10,
              }
            }
          }
        }
      ],
    series: [{
      name: "内层进度条", 
      z:3,
      type: "gauge", // 仪表盘
      center:['center','center'],
      radius:'35%',
      detail: {
          show:false,
        formatter: `${dataArr.data}%`
      },
      title: {
        show: false
      },
      data: [{
        value: dataArr.data,
        name: "Percent"
      }],
      startAngle:'225', // 仪表盘起始角度
      endAngle :'-45', // 仪表盘结束角度
      min:0,
      max:100,
      splitNumber:20,
      axisLine:{
        show:true,
        lineStyle:{
            roundCap:true,
            width:30,
            color:[[dataArr.percent, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
               offset: 0,
               color: '#6FE9FE'
            },
            {
               offset: 1,
               color: '#FFC4DD' // 100% 处的颜色
            }
            ])],
            [1, '#15337C']],
            // shadowColor: 'rgba(145,207,255,.5)',
            // shadowBlur: 20,
        }
     },
     axisTick: {
        show: false
     },
     axisLabel: {
        show: false
     },
     splitLine: {
        show: false,
     },
     pointer: {
        show: false  // 不展示指针
     }
  },
  {
      name: "外层进度条", 
      type: "gauge", // 仪表盘
      z:2,
      center:['center','center'],
      radius:'43%',
      detail: {
        show: false,
      },
      title: {
        show: false
      },
      data: [{
        value: dataArr.data,
        name: "Percent"
      }],
      startAngle:'225', // 仪表盘起始角度
      endAngle :'-45', // 仪表盘结束角度
      min:0,
      max:100,
      axisLine:{
        show:true,
        lineStyle:{
            roundCap:true,
            width:35,
            color:[[dataArr.percent, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
               offset: 0,
               color: 'RGB(111,233,254,0.1)'
            },
            {
               offset: 1,
               color: '#FFC4DD' // 100% 处的颜色
            }
            ])],
            [1, '#15337C']],
        }
     },
     axisTick: {
        show: false
     },
     axisLabel: {
        show: false
     },
     splitLine: {
        show: false,
     },
     pointer: {
        show: false  // 不展示指针
     }
  },
  {
      name:'外层刻度',
      type:'gauge',
      center:['center','center'],
      radius:'27%',
      detail: {
        show: false,
      },
      min:0,
      max:100,
      startAngle:'225', // 仪表盘起始角度
      endAngle :'-45', // 仪表盘结束角度
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false,
      },
      pointer: {
        show: false  // 不展示指针
      },
      axisLine:{
        show: false
      },
      axisTick:{
        show: true,
        splitNumber: 4,
        lineStyle: {
            color: '#7987AE', //用颜色渐变函数不起作用
            width: 3
        },
        length: 6
      }
  },
  {
      name:'内部刻度',
      type:'gauge',
      center:['center','center'],
      radius:'20%',
      detail: {
        show: false,
      },
      startAngle:'0', // 仪表盘起始角度
      endAngle :'360', // 仪表盘结束角度
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false,
      },
      pointer: {
        show: false  // 不展示指针
      },
      axisLine:{
        show: false
      },
      axisTick:{
        show: true,
        splitNumber: 8,
        lineStyle: {
            color: '#7987AE', //用颜色渐变函数不起作用
            width: 2
        },
        length: 3
      }
  },
  {
      name:'内部实心圆',
      type:'pie',
      silent:true,
      center:['center','center'],
      radius:'19%',
      label:{
          show:false,
      },
      itemStyle: {
            normal: {
              color: '#041a63'
            }
          },
      data: [{ value: 100 }]
  },
  {
      name:'外层背景',
      z:1,
      type:'gauge',
      center:['center','center'],
      radius:'45%',
      detail: {
        show: false,
      },
      startAngle:'225', // 仪表盘起始角度
      endAngle :'-45', // 仪表盘结束角度
      splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: [[1, '#15337C']],
              width: '100%'
            }
          },
  },
  
  ]
}