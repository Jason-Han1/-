const ratio = (val) => {
  return window.screen.width * val / 1980;

}

option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  grid: {
    top: "20%", // 等价于 y: '16%'
    left: "4%",
    right: "2%",
    bottom: "6%",
    containLabel: true,
  },
  // tooltip: {
  //   trigger: 'axis',
  //   axisPointer: {
  //     // 横向 x轴
  //     // type: 'cross',
  //     label: {
  //       backgroundColor: '#6a7985'
  //     }
  //   }
  // },
  tooltip: {
    //鼠标悬停提示内容
    trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
    axisPointer: {
      label: {
        formatter(params) {
          return ''
        }
      },
      // 坐标轴指示器，坐标轴触发有效
      type: "line", // 默认为直线，可选为：'line' | 'shadow'
      // label: "cross",
      // show: true,
    },
    backgroundColor: 'rgba(52, 84, 104, 0.8)',
    borderColor: 'rgba(52, 84, 104, 0)',
    textStyle: {
      color: 'rgba(0, 249, 255, 1)'
    }
  },
  legend: {
    itemWidth: ratio(10),
    itemHeight: ratio(10),
    icon: "circle",
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
    orient: "horizontal",
    // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    x: "right",
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    y: "6%",
    // data: [1, 2, 3, 4, 5, 6, 7],
    textStyle: {
      color: "#00ffff",
      fontSize: ratio(10),
      fontWeight: 300,
      padding: [0, 0, 0, 0],
    },
    // 点的联动
    selectedMode: false,
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },

  // xAxis: [
  //   {
  //     type: 'category',
  //     boundaryGap: false,
  //     data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  //   }
  // ],
  xAxis: {
    type: "category",
    // x轴两两边留白
    boundaryGap: true,
    name: "",
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    //  改变x轴颜色
    axisLine: {
      lineStyle: {
        color: "#345468",

      },

    },
    //  改变x轴字体颜色和大小
    axisLabel: {
      interval: 0,
      inside: false,
      rotate: 30,
      textStyle: {
        color: "#62B4BB",
        fontSize: ratio(12),

      },
    },
    // 坐标刻度
    axisTick: {
      show: false,
      alignWithLabel: true
    },


  },
  // yAxis: [
  //   {
  //     type: 'value'
  //   }
  // ],
  yAxis: {
    // type: 'value'
    type: "value",
    name: "",
    // min: 0,
    // max: 45,
    // interval: 5, //间隔
    // minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
    axisLine: {
      lineStyle: {
        color: "#2A5D75",
      },
    },
    //  改变y轴字体颜色和大小
    axisLabel: {
      formatter: "{value}", //  给y轴添加单位
      textStyle: {
        color: "#8ACDF3",
        fontSize: "12",
      },
    },
    // x轴平行线
    splitLine: {
      lineStyle: {
        color: "#345468",
        type: 'dashed'
      },
    },
  },
  series: [
    {
      name: '未完成',
      type: 'line',
      stack: '总量',
      smooth: true,
      lineStyle: {
        //设置折线色颜色
        color: "#07DAFF",
      },
      itemStyle: {
        //设置折线折点的颜色
        normal: {
          color: "#07DAFF",
          // 标记内容
          // label: { show: true }
        },
      },
      // lineStyle: {
      //   width: 0
      // },
      // 点的展示
      showSymbol: true,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(50, 175, 195)'
        }, {
          offset: 1,
          color: 'rgb(25, 88, 98)'
        }])
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: '已完成',
      type: 'line',
      stack: '总量',
      // 平滑曲线
      smooth: true,
      // lineStyle: {
      //   width: 0
      // },
      lineStyle: {
        //设置折线色颜色
        color: "#1753D9",
      },
      itemStyle: {
        //设置折线折点的颜色
        normal: {
          color: "#1753D9",
          // label: { show: true }
        },
      },
      // 点的展示
      showSymbol: true,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(23, 83, 217)'
        }, {
          offset: 1,
          color: 'rgb(52, 84, 104)'
        }])
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
  ]
};
