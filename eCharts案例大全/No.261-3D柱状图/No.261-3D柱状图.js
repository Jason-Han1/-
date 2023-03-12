// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 33, shape.y - 10];
    const c2 = [xAxisPoint[0] - 33, xAxisPoint[1] - 0];
    const c3 = [xAxisPoint[0], xAxisPoint[1] + 13];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1] + 14];
    const c3 = [xAxisPoint[0] + 33, xAxisPoint[1] - 9];
    const c4 = [shape.x + 33, shape.y - 9];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 33, shape.y - 9];
    const c3 = [shape.x, shape.y - 18];
    const c4 = [shape.x - 33, shape.y - 10];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});

// 注册三个面图形;
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

const MAX = [100, 100, 100, 100];
yList = [32, 58, 64, 64];
xList = [10, 55, 44, 55];
// color = ['#59FDFE', '#ECED05', '#44BEFF', '#3EFAAC'];
color = ['#CEF4FF', '#CEF4FF', '#CEF4FF', '#CEF4FF'];
xData = xList.map((item, index) => {
  return {
    value: item,
    textStyle: {
      color: color[index],
    },
  };
});
dom = 1300;
barWidth = dom / 20;
colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#00FFFF',
      },
      {
        offset: 0.5,
        color: '#00FFFF',
      },
      {
        offset: 0.5,
        color: '#11A6D0',
      },
      {
        offset: 1,
        color: '#11A6D0',
      },
    ],
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#FFD05C',
      },
      {
        offset: 0.5,
        color: '#FFD05C',
      },
      {
        offset: 0.5,
        color: '#DEA821',
      },
      {
        offset: 1,
        color: '#DEA821',
      },
    ],
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      // {
      //   offset: 0,
      //   color: 'rgba(89,253,254,1)',
      // },
      {
        offset: 0.5,
        color: 'rgba(68,190,255,1)',
      },
      {
        offset: 0.5,
        color: 'rgba(53,133,177,1)',
      },
      {
        offset: 1,

        color: 'rgba(53,133,177,1)',
      },
    ],
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      // {
      //   offset: 0,
      //   color: '#89FF5E',
      // },
      {
        offset: 1,
        color: '#3BECA2',
      },
      {
        offset: 0.5,
        color: '#2DB47C',
      },
      {
        offset: 1,
        color: '#2DB47C',
      },
    ],
  },
];
option = {
  backgroundColor: '#010d3a',
  // backgroundColor: '#ddd',
  //标题
  title: {
    text: '志愿项目服务时长变化趋势',
    textStyle: {
      color: '#00FFFF',
      fontWeight: '800',
      fontSize: `20`,
    },
    left: 'center',
    top: '5%',
  },
  //提示框
  tooltip: {
    trigger: 'axis',
    formatter: '{c1}',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  /**区域位置*/
  grid: {
    left: '10%',
    right: '10%',
    top: 150,
    bottom: 70,
  },
  /**图例大小*/
  // legend: {
  //   type: 'plain',
  //   left: 0,
  //   top: 20,
  //   itemGap: 20,
  //   itemWidth: 35,
  //   itemHeight: 20,
  // },

  // //X轴
  // xAxis: {
  //   name: 'X',
  //   nameTextStyle: {
  //     color: '#FFFFFF',
  //     padding: [0, 0, 0, 20],
  //   },
  //   // data: xData,

  //   axisTick: {
  //     show: false
  //   },
  //   data: xData,

  //   show: true,
  //   type: 'category',
  //   axisLine: {
  //     show: true,
  //     lineStyle: {
  //       color: 'rgba(255,255,255,1)',
  //       shadowColor: 'rgba(255,255,255,1)',
  //       shadowOffsetX: '20',
  //     },
  //     symbol: ['none', 'arrow'],
  //     symbolOffset: [0, 25],
  //   },
  //   splitLine: {
  //     show: true,
  //     lineStyle: {
  //       color: 'rgba(255,255,255,0.2)',
  //     },
  //   },
  //   axisLabel: {
  //     show: true,
  //     // rotate: -1,
  //     fontSize: 12,
  //     textStyle: {
  //       fontSize: 25,
  //       // fontFamily: PangMenZhengDao,
  //       // fontWeight: 400,
  //       color: '#CEF4FF',
  //       lineHeight: 45,
  //     },
  //   },
  // },

  xAxis: [
    {
      axisTick: {
        show: false,
      },
      data: xData,

      show: true,
      type: 'category',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        textStyle: {
          fontSize: 25,
          fontFamily: 'PangMenZhengDao',
          fontWeight: 'bold',
          color: '#CEF4FF',
          lineHeight: 45,
        },
      },
    },
    {
      axisLine: {
        show: false, //不显示坐标轴线
      },
      axisTick: {
        show: false,
      },
      data: yList, //y轴数据
      show: true,
      type: 'category',
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        textStyle: {
          fontSize: 25,
          fontFamily: 'PangMenZhengDao',
          fontWeight: 'bold',
          color: '#CEF4FF',
          lineHeight: 45,
        },
      },
    },
  ],

  yAxis: {
    show: true,
    splitNumber: 4,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.2)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.2)',
      },
    },
    axisLabel: {
      color: '#CEF4FF',
      textStyle: {
        fontSize: 15,
      },
    },
  },
  series: [
    {
      type: 'custom',
      renderItem: function (params, api) {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft',
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(221,221,221,0.2)',
              },
            },
            {
              type: 'CubeRight',
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(221,221,221,0.3)',
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(221,221,221,0.4)',
              },
            },
          ],
        };
      },
      data: MAX,
    },
    {
      type: 'bar',
      barWidth: barWidth,
      itemStyle: {
        normal: {
          color: function (params) {
            return colors[params.dataIndex % 7];
          },
        },
      },
      // label: {
      //   show: true,
      //   // position: [barWidth / 2, -(barWidth + 20)],
      //   // position: [barWidth / 2, -220],
      //   position: 'top',
      //   color: '#ffffff',
      //   fontSize: 22,
      //   fontStyle: 'bold',
      //   align: 'center',
      // },
      data: yList,
    },
    {
      z: 2,
      type: 'pictorialBar',
      data: yList,
      symbol: 'diamond',
      symbolOffset: [0, '50%'],
      symbolSize: [barWidth, barWidth * 0.4],
      itemStyle: {
        normal: {
          color: function (params) {
            return colors[params.dataIndex % 7];
          },
        },
      },
    },
    {
      z: 3,
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: yList,
      symbol: 'diamond',
      symbolOffset: [0, '-50%'],
      symbolSize: [barWidth, barWidth * 0.4],
      itemStyle: {
        normal: {
          borderWidth: 0,
          color: function (params) {
            return colors[params.dataIndex % 7].colorStops[0].color;
          },
        },
      },
    },
  ],
};
