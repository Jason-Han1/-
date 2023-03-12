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

const MAX = [100, 100];
yList = [32, 58];
xList = ['光伏', '风力'];

xData = xList.map((item, index) => {
  return {
    value: item,
  };
});
dom = 1300;
barWidth = dom / 20;
colors = [
  {
    type: 'linear',
    x: 0,
    x2: 0,
    y: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#EB5118',
      },
      {
        offset: 0.5,
        color: '#EB5118',
      },
      {
        offset: 0.5,
        color: '#EB5118',
      },
      {
        offset: 1,
        color: '#EB5118',
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
        color: '#239cf9',
      },
      {
        offset: 0.5,
        color: '#239cf9',
      },
      {
        offset: 0.5,
        color: '#239cf9',
      },
      {
        offset: 1,
        color: '#239cf9',
      },
    ],
  },
];
option = {
  backgroundColor: '#010d3a',
  //提示框
  tooltip: {
    trigger: 'axis',
    formatter: '{b} : {c}',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
        data: [
          {
            name: '风力',
            icon: 'rect',
            itemStyle: {
              color: '#239cf9'
            },
          },
          {
            name: '光伏',
            icon: 'rect',
            itemStyle: {
              color: '#EB5118'
            },
          },
        ],
        itemWidth: 20,
        itemHeight: 20,
        itemGap:100,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        top:'3%',
        right: '2%'
      },
  /**区域位置*/
  grid: {
    left: '10%',
    right: '10%',
    top: 150,
    bottom: 70,
  },
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
          fontWeight: 'bold',
          color: '#CEF4FF',
          lineHeight: 45,
        },
      },
    }
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
      formatter: function(item) {
          return item + '%'
        }
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
                fill: '#239cf920',
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
                fill: '#239cf930',
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
                fill: '#239cf940',
              },
            },
          ],
        };
      },
      data: MAX,
    },
    {
      name: '光伏',
      type: 'bar',
      barWidth: barWidth,
      itemStyle: {
        normal: {
          color: function (params) {
            return colors[params.dataIndex % 7];
          },
        },
      },
      label: {
        show: true,
        position: [barWidth / 2, -40],
        color: '#ffffff',
        fontSize: 22,
        fontStyle: 'bold',
        align: 'center',
        formatter: function(item) {
          return item.data + '%'
        }
      },
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
      name: '风力',
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
