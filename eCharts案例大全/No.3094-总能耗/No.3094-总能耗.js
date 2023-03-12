option = {
  backgroundColor: '#04101d',
  title: {
    top: '20px',
    left: 'center',
    text: '总能耗',
    textStyle: {
      color: '#FFFFFF',
      fontSize: '30',
    },
  },
  xAxis: {
    data: [2,4,6,8,10,12,14,16,18,20,22,24],
    axisLine: {
      show: true, //隐藏X轴轴线
      lineStyle: {
        color: '#414047',
        width:2
      }
    },
    axisTick: {
      show: false //隐藏X轴刻度
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#d2d2d2", //X轴文字颜色
        fontSize: 16
      }
    },
  },
  yAxis: {
    type: "value",
    name: 'kwh',
    nameTextStyle: {
      color: '#d2d2d2',
      fontSize: 16,
      padding: [0, 0, 0, -40],
      lineHeight: 30
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#414047',
        width:2
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#d2d2d2",
        fontSize: 16
      }
    },
  },
  series: [
    {
      name: "业务",
      type: "bar",
      barWidth: 15,
      showBackground: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, 
          [{offset: 0, color: '#2c9bec'}, {offset: 1, color: '#084061'}]),
        }
      },
      data: [78,56,34,89,109,34,70,60,69,54,66,88]
    }
  ]
};