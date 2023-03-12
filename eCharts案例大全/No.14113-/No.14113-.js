option = {
  backgroundColor: '#0B1834',
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%"
  },
  series: [{
    name: "仪盘表",
    type: "gauge",
    splitNumber: 20,
    zlevel: 1,
    radius: '75%',
    axisLine: {
      "lineStyle": {
        "color": [
          [0, "#0B1834"],
          [1, "#0B1834"]
        ],
        shadowColor: 'transparent',
        // shadowBlur: 10,
        shadowOffsetX: '-10',
        shadowOffsetY: '-10',
        width: 25,
        opacity: 1,
      },
      show: true,
    },
    axisTick: { // 坐标轴小标记
      lineStyle: { // 属性lineStyle控制线条样式
        color: '#0B1834',
        width: 15,
        borderColor: '#0B1834',
        type: 'solid',
        opacity: '1'
      },
      length: 30, // 属性length控制线长
      splitNumber: 1,
    },
    pointer: { // 指针分隔线
      shadowColor: '#0B1834', //默认透明
      shadowBlur: 10,
      show: false
    },
    axisLabel: { // 坐标轴小标记
      show: false,
    },
    splitLine: { // 分隔线
      "show": false
    },
    detail: {
      formatter: "{value}%",
      offsetCenter: [0, "50%"],
      textStyle: {
        fontSize: 30,
        color: "#FF5A00"
      }
    },
    title: {
      offsetCenter: [0, "10%"],
      color: '#fff',
    },
    data: [{
      name: "误报率",
      value: 31
    }]
  }]
};