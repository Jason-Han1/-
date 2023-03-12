option = {
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    // icon: "circle",
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
    orient: "horizontal",
    // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    x: "right",
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    y: "6%",
    // data: [1, 2, 3, 4, 5, 6, 7],
    // lineStyle: {
    //   formatter: function (name: any) {
    //     return name;
    //   }
    // },
    textStyle: {
      color: "#72B1DA",
      fontSize: 10,
      fontWeight: 300,
      padding: [0, 0, 0, 0],
    },
    // 点的联动
    selectedMode: false,
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '2%',
    top: "20%",
    containLabel: true
  },
  xAxis: {
    type: 'value',
    min: -100,
    max: 100,
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitNumber: 10,
    splitLine: {
      show: true,
      interval: 20,
      lineStyle: {
        // 使用深浅的间隔色
        color: '#345468',
        type: 'dashed'
      }
    }


  }
  ,
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 30,
        formatter: '{value} kg',
        color: '#000',
        fontSize: 14
      },

      triggerEvent: true,   //让x轴可以点击

      data: ['0 惠阳区淡水社康服务中心', '1 惠阳区淡水社康服务中心', '2 惠阳区淡水社康服务中心', '3 惠阳区淡水社康服务中心', '4 惠阳区淡水社康服务中心', '5 惠阳区淡水社康服务中心', '6 惠阳区淡水社康服务中心']
    }
  ],
  series: [
    {
      name: '收入',
      type: 'bar',
      stack: '总量',
      label: {
        show: false
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#7161C7'
        }, {
          offset: 1,
          color: '#B365C7'
        }])
      },
      emphasis: {
        focus: 'series'
      },
      barWidth: 8,
      data: [32, 32, 34, 30, 40, 60, 10]
    },
    {
      name: '支出',
      type: 'bar',
      stack: '总量',
      label: {
        show: false,
        position: 'left'
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#3DA4BE'
        }, {
          offset: 1,
          color: '#2764C0'
        }])
      },
      emphasis: {
        focus: 'series'
      },
      barWidth: 8,
      data: [-10, -32, -11, -34, -20, -30, -10]
    }
  ]
};