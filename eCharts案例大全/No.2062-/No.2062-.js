
const colors = ['#87CEFA', '#FFA500', '#ADFF2F', '#48D1CC'];
const ratio = (val) => {
  return window.screen.width * val / 1980;

}
 option = {
  color: colors,
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
  //     type: 'cross'
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

  // 下载工具
  // toolbox: {
  //   feature: {
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
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
  // xAxis: [
  //   {
  //     type: 'category',
  //     axisTick: {
  //       alignWithLabel: true
  //     },
  //     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  //   }
  // ],
  xAxis: {
    type: "category",
    // x轴两两边留白
    boundaryGap: true,
    name: "",
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
  //     type: 'value',
  //     name: '',
  //     min: 0,
  //     max: 250,
  //     // position: 'left',
  //     axisLine: {
  //       show: true,
  //       lineStyle: {
  //         color: colors[0]
  //       }
  //     },
  //     // axisLabel: {
  //     //   formatter: '{value} ml'
  //     // }
  //   },


  // ],
  yAxis: {
    // type: 'value'
    type: "value",
    name: "",
    // min: 0,
    // max: 45,
    // interval: 5, //间隔
    // minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
    // splitNumber: 5,
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
      name: '围栏',
      type: 'bar',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      barGap: 0,
      barWidth: 6
    },
    {
      name: '跌到',
      type: 'bar',
      // yAxisIndex: 1,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      barGap: 0,
      barWidth: 6
    },
    {
      name: '门锁',
      type: 'bar',
      // yAxisIndex: 1,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      barGap: 0,
      barWidth: 6
    },
    {
      name: '体征',
      type: 'bar',
      // yAxisIndex: 2,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      barGap: 0,
      barWidth: 6
    },
    {
      name: '体征',
      type: 'line',
      // yAxisIndex: 2,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      barGap: 0,
    }
  ]
};

