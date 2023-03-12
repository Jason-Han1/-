const colorList = ['#A7DA4C', '#45A6F7'];
option = {
  backgroundColor: '#030A41',
  title: {
    text: '温湿度统计',
    textStyle: {
      fontSize: 12,
      fontWeight: 400,
      color: '#c9c9c9',
    },
    left: 'center',
    top: '5%',
  },
  legend: {
    icon: 'circle',
    top: '5%',
    right: '8%',
    itemWidth: 6,
    itemGap: 20,
    textStyle: {
      color: '#c9c9c9',
    },
  },
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //     label: {
    //         show: true,
    //         backgroundColor: '#fff',
    //         color: '#556677',
    //         borderColor: 'rgba(0,0,0,0)',
    //         shadowColor: 'rgba(0,0,0,0)',
    //         shadowOffsetY: 0
    //     },
    //     lineStyle: {
    //         width: 0
    //     }
    // },
    backgroundColor: '#fff',
    textStyle: {
      color: '#5c6c7c',
    },
    padding: [10, 10],
    extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
  },
  grid: {
    top: '15%',
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '2021-07-29 16:40:00',
        '2021-07-29 16:45:00',
        '2021-07-30 08:40:00',
        '2021-07-30 09:40:00',
        '2021-07-30 10:42:36',
        '2021-07-30 12:42:36',
        '2021-07-30 15:45:36',
      ],
      axisLine: {
        lineStyle: {
          color: '#c9c9c9',
        },
      },
      axisTick: {
        show: false,
      },
      // axisLabel: {
      //     interval: 0,
      //     textStyle: {
      //         color: '#556677'
      //     },
      //     // 默认x轴字体大小
      //     fontSize: 12,
      //     // margin:文字到x轴的距离
      //     margin: 15
      // },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          color: '#c9c9c9',
          fontWeight: 'normal',
          fontSize: '12',
          lineHeight: 22,
        },
        interval: 0, //标签设置为全部显示
        margin: 15,
        lineHeight: 15,
        // fontSize: 11,
        formatter: function (params) {
          var a = params.substring(0, params.length - 8);
          var b = params.substring(params.length - 8, params.length);
          //   console.log(params.substring(0, params.length - 3));
          var newParamsName = a + '\n' + b;

          //将最终的字符串返回
          return newParamsName;
        },
      },
      axisPointer: {
        label: {
          // padding: [11, 5, 7],
          padding: [0, 0, 10, 0],

          margin: 15,
          // 移入时的字体大小
          fontSize: 12,
          backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#fff', // 0% 处的颜色
              },
              {
                // offset: 0.9,
                offset: 0.86,

                color: '#fff', // 0% 处的颜色
              },
              {
                offset: 0.86,
                color: '#33c0cd', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#33c0cd', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      name: '温度',
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#c9c9c9',
        },
      },
      axisLabel: {
        formatter: '{value}℃',
        textStyle: {
          color: '#A3D752',
        },
      },
      splitLine: {
        show: false,
      },
    },
    {
      name: '湿度',
      type: 'value',
      position: 'right',
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#45A6F7',
        },
        formatter: '{value}%',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#c9c9c9',
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '温度',
      type: 'line',
      data: [10, 10, 30, 12, 15, 3, 7],
      symbolSize: 1,
      symbol: 'circle',
      // smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: '#A7DA4C',
        shadowColor: 'rgba(158,135,255, 0.3)',
        // shadowBlur: 10,
        // shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0],
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(147,208,52,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(147,208,52,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,202,149, 0.9)',
          shadowBlur: 20,
        },
      },
    },

    {
      name: '湿度',
      type: 'line',
      data: [150, 120, 170, 140, 500, 160, 110],
      symbolSize: 1,
      yAxisIndex: 1,
      symbol: 'circle',
      // smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: '#45A6F7',
        shadowColor: 'rgba(254,154,139, 0.3)',
        // shadowBlur: 10,
        // shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[1],
          borderColor: colorList[1],
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(71,168,247,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(71,168,247,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,202,149, 0.9)',
          shadowBlur: 20,
        },
      },
    },
  ],
};
