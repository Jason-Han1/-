option = {
    title: {
    show: false,
    text: '',
    textStyle: {
      fontSize: 20,
      color: "#ffffff",
      width: "300",
      height: 40,
      lineHeight: 40,
      overflow: "truncate",
      ellipsis: "...",
    },
    padding: [10, 15],
    left: "left",
    // 副标题
    subtext: "",
    subtextStyle: {
      show: false,
      fontSize: 16,
      color: "#ffffff",
      width: "300",
      height: 20,
      lineHeight: 20,
      overflow: "truncate",
      ellipsis: "...",
      align: "center",
    }
  },
  legend: {
    show: false,
    data: ["类别1","类别2","类别3"],
    textStyle: {
      color: "#fff",
      fontSize: 16,
    },
    itemStyle: {
    },
    top: "top",
    left: "left",
    padding: [15, 15, 0, 15],
    icon: 'circle',
    orient: 'horizontal',
  },
  grid: {
    containLabel: true,
    left: 15,
    right: 15,
    bottom: 15,
    top: 50,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    nameTextStyle: {
      color: '#ffffff',
      fontSize: 14,
    },
    axisLabel: {
      show: true,
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'Microsoft YaHei',
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#dadada',
        width: 1,
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,1)',
      },
      show: false,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(255,255,255,0.12)',
        type: 'dashed',
      },
    },
    axisTick: {
      show: false,
    },
    data: ['系列1', '系列2', '系列3', '系列4', '系列5', '系列6'],
    type: 'category',
  },
  yAxis: {
    axisLabel: {
      show: true,
      color: '#ffffff',
      fontSize: 14,
      fontFamily: 'Microsoft YaHei',
    },
    axisTick: {
      lineStyle: {
        color: 'rgba(255,255,255,0.12)',
        width: 1,
      },
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.12)',
        type: 'dashed',
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,1)',
        width: 1,
        // "type": "dashed"
      },
      show: false,
    },
    name: '',
  },
    series: [{
            name: "类别1",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one',
            itemStyle: {
                borderWidth: 10,
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#2FCAFD',
                                    },
                                    {
                                        offset: 1,
                                        color: '#2450F0',
                                    },
                                ]),
                barBorderRadius: 120
            },

            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }
        },
        {
            name: "类别2",
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 40,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#FFE131',
                                    },
                                    {
                                        offset: 1,
                                        color: '#FFB200',
                                    },
                                ]),
            itemStyle: {
                borderWidth: 10, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 120
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            name: "类别3",
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 40,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#6DFF6D',
                                    },
                                    {
                                        offset: 1,
                                        color: '#00DB00',
                                    },
                                ]),
            itemStyle: {
                borderWidth: 10, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 120
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        }
    ]
};