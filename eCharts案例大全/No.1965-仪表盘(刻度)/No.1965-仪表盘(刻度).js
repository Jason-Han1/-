let lineWidth = 15;//线宽
let lineValue = 0.828;//百分比值

option = {
  backgroundColor: '#121E35',
  series: [{
    type: 'gauge',
    startAngle: 200,
    endAngle: -20,
    radius:'100%',//仪表盘半径
    pointer: { show: false },//是否显示指针
    splitLine: { show: false },//是否显示分隔线
    axisLine: {//仪表盘轴线
      show: true,
      lineStyle: {
        width: lineWidth,
        color: [[0.1, '#08B8FF'], [0.2, '#f00'],[lineValue, '#08B8FF'], [1, '#121E35']],
      }
    },
    axisTick: {//刻度
      distance: -lineWidth,
      length: lineWidth,
      lineStyle: {
        color: '#1E2F45',//
        width: 7
      }
    },
    axisLabel:{show:false},//不显示刻度标签
    data: [{
      value: lineValue,
      name: 'gauge1',
      title: {show:false},//不显示标题
      detail: {show:false},//不显示详情
    }]
  }]
}
/*
https://echarts.apache.org/zh/option.html#series-gauge.type 文档地址
注意:radius为100%时，注意dom最好是正方形，不然也会等比例缩小

*/
