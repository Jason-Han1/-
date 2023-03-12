option  = {
 
   backgroundColor: {
     type: 'linear',
     x: 0,
     y: 0,
     x2: 0,
     y2: 1,
     colorStops: [
       {
         offset: 0,
         color: '#061B31', // 0% 处的颜色
       },
       {
         offset: 0.25,
         color: '#123457', // 25% 处的颜色
       },
       {
         offset: 0.75,
         color: '#0C254A', // 75% 处的颜色
       },
       {
         offset: 1,
         color: '#0A213E', // 100% 处的颜色
       },
     ],
     global: false, // 缺省为 false
   },
  grid: [
    {
      //左侧的柱状图grid
      width: '46%',
      left: '1%',
      top: '15',
      right: '0',
      bottom: '0',
    },
    {
      //右侧的柱状图grid
      width: '46%',
      left: '51%',
      height: '78%',
      top: '15',
      right: '0',
      bottom: '0',
    },
  ],
  xAxis: [
    {
      //左侧柱状图的X轴
      gridIndex: 0, //x 轴所在的 grid 的索引
      show: false,
    },
    {
      //右侧柱状图的X轴
      gridIndex: 1, //x 轴所在的 grid 的索引
      show: false,
    },
  ],
  yAxis: [
    {
      //左侧柱状图的Y轴
      gridIndex: 0, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        verticalAlign: 'bottom',
        align: 'left',
        padding: [0, 0, 15, 15],
        textStyle: {
          color: '#befbff',
          fontSize: '12',
        },
      },
      data: ['冰毒', '海洛因', '鸦片', '大麻', '摇头丸'],
      inverse: true,
    },
    {
      //左侧柱状图的Y轴
      gridIndex: 0, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: [15, 18, 10, 10, 10],
      inverse: true,
      axisLabel: {
        show: true,
        verticalAlign: 'bottom',
        align: 'right',
        padding: [0, 20, 15, 0],
        textStyle: {
          color: '#fff',
          fontSize: '16',
        },
        formatter: function (value) {
          return '{x|' + value + '}  {y|' + '%}'
        },
        rich: {
          y: {
            color: '#befbff',
            fontSize: 12,
          },
          x: {
            color: '#f6cf42',
            fontSize: 12,
          },
        },
      },
    },
    {
      //左侧柱状图的Y轴
      gridIndex: 0, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: [],
    },

    {
      //右侧柱状图的Y轴
      gridIndex: 1, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        verticalAlign: 'bottom',
        align: 'left',
        padding: [0, 0, 15, 15],
        textStyle: {
          color: '#befbff',
          fontSize: '12',
        },
      },
      data: ['K粉', '吗啡', '可卡因', '其它'],
      inverse: true,
    },
    {
      //右侧柱状图的Y轴
      gridIndex: 1, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: [15, 18, 10, 10],
      inverse: true,
      axisLabel: {
        show: true,
        verticalAlign: 'bottom',
        align: 'right',
        padding: [0, 20, 15, 0],
        textStyle: {
          color: '#fff',
          fontSize: '14',
        },
        formatter: function (value) {
          return '{x|' + value + '}  {y|' + '%}'
        },
        rich: {
          y: {
            color: '#befbff',
            fontSize: 12,
          },
          x: {
            color: '#f6cf42',
            fontSize: 12,
          },
        },
      },
    },
    {
      //右侧柱状图的Y轴
      gridIndex: 1, //y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: [],
    },
  ],
  series: [
    {
      name: '值',
      type: 'bar',
      xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [15, 18, 10, 10, 10],
      barWidth: 8,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            ['#57A2FF', '#39FFDC'].map((color, offset) => ({
              color,
              offset,
            }))
          ),
          borderRadius: 10,
          // label: {
          //   show: true,
          //   formatter: '{c}%', //百分比显示
          // },
        },
      },
      z: 2,
    },
    {
      name: '外框',
      type: 'bar',
      xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      barGap: '-100%',
      data: [100, 100, 100, 100, 100],
      barWidth: 8,
      itemStyle: {
        normal: {
          color: '#2d5271',
          barBorderRadius: 6,
        },
      },
      z: 0,
    },
    {
      // 分隔
      type: 'pictorialBar',
      itemStyle: {
        normal: {
          color: '#022539',
        },
      },
      symbolRepeat: 'fixed',
      symbolMargin: 4,
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [2, 6],
      symbolPosition: 'start',
      symbolOffset: [-1, 0],
      data: [15, 18, 10, 10, 10],
      // symbolBoundingData: [120, 100, 90, 60, 30],
      z: 66,
      animationEasing: 'elasticOut',
    },

    {
      name: '值',
      type: 'bar',
      xAxisIndex: 1, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 3, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [15, 18, 10, 10],
      barWidth: 8,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            ['#57A2FF', '#39FFDC'].map((color, offset) => ({
              color,
              offset,
            }))
          ),
          borderRadius: 10,
          // label: {
          //   show: true,
          //   formatter: '{c}%', //百分比显示
          // },
        },
      },

      z: 2,
    },
    {
      name: '外框',
      type: 'bar',
      xAxisIndex: 1, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 5, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      barGap: '-100%',
      data: [100, 100, 100, 100],
      barWidth: 8,
      itemStyle: {
        normal: {
          color: '#2d5271',
          barBorderRadius: 6,
        },
      },
      z: 0,
    },
    {
      // 分隔
      type: 'pictorialBar',
      xAxisIndex: 1, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 3, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      itemStyle: {
        normal: {
          color: '#022539',
        },
      },
      symbolRepeat: 'fixed',
      symbolMargin: 4,
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [2, 6],
      symbolPosition: 'start',
      symbolOffset: [-1, 0],
      data: [15, 18, 10, 10],
      // symbolBoundingData: [120, 100, 90, 60, 30],
      z: 66,
      animationEasing: 'elasticOut',
    },
  ],
}
