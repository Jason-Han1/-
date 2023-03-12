// 根据报警总数比例显示表盘颜色
var colorFormatOnChart = (value,max) =>{
  if (value/max < 0.1) {
    return [[0.1, '#17D5F7'],
      [1, '#464646']]
  } else if (value / max < 0.2) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [1, '#464646']]
  } else if (value / max < 0.3) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [1, '#464646']]
  } else if (value / max < 0.4) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [1, '#464646']]
  } else if (value / max < 0.5) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [0.5, '#DBF743'],
      [1, '#464646']]
  } else if (value / max < 0.6) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [0.5, '#DBF743'],
      [0.6, '#F4DE48'],
      [1, '#464646']]
  } else if (value / max < 0.7) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [0.5, '#DBF743'],
      [0.6, '#F4DE48'],
      [0.7, '#F3B92F'],
      [1, '#464646']]
  } else if (value / max < 0.8) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [0.5, '#DBF743'],
      [0.6, '#F4DE48'],
      [0.7, '#F3B92F'],
      [0.8, '#F5841F'],
      [1, '#464646']]
  } else if (value / max > 0.9) {
    return [[0.1, '#17D5F7'],
      [0.2, '#1BF0AC'],
      [0.3, '#3ED25E'],
      [0.4, '#A2DA2A'],
      [0.5, '#DBF743'],
      [0.6, '#F4DE48'],
      [0.7, '#F3B92F'],
      [0.8, '#F5841F'],
      [0.9, '#F15041'],
      [1, '#F12C2C']]
  }
}
option = {
     backgroundColor: '#0e202d',
    series: [
      {
        name: '统计',
        type: 'gauge',
        splitNumber: 8, //刻度数量
        min: 0,
        max: 200,
        radius: '80%', //图表尺寸
        center: ['50%', '80%'],
        startAngle: 180,//刻度起始
        endAngle: 0,//刻度结束
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: colorFormatOnChart(100,200)
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 4
          },
          length: 22,
          splitNumber: 2
        },
        splitLine: {
          show: false,
          length: 22,
          lineStyle: {
            color: 'auto',
          }
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: 0,
          length: '70%',
          width: 2
        },
        title: {
          show: true,
          offsetCenter: [0, '5%'], // x, y，单位px
          textStyle: {
            color: '#ddd',
            fontSize: 12
          }
        },
        detail: {
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 2,
          offsetCenter: [0, '-15%'], // x, y，单位px
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#fff',
            fontSize: 62,
            fontWeight:'bold'
          },
          formatter: '{value}'
        },
        data: [{
          name: "今日报警",
          value: 100
        }]
      },
      {
        name: '内部白色刻度',
        type: 'gauge',
        splitNumber: 8, //刻度数量
        min: 0,
        max: 100,
        radius: '70%', //图表尺寸
        center: ['50%', '80%'],
        startAngle: 180,//刻度起始
        endAngle: 0,//刻度结束
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [
              [0.2, '#fff'],
              [1, '#fff']
            ]
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 1
          },
          length: 5,
          splitNumber: 2
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 1
          },
          length: 8,
          splitNumber: 10
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show:false
        },
        data: [{name:'',value:0}]
      },
    ]
};