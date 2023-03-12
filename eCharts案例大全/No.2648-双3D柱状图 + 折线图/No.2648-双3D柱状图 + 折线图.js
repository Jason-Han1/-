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
    const c1 = [shape.x - 18, shape.y - 10];
    const c2 = [xAxisPoint[0] - 18, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
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
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
    const c4 = [shape.x + 18, shape.y - 9];
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
    const c2 = [shape.x + 18, shape.y - 9];
    const c3 = [shape.x, shape.y - 18];
    const c4 = [shape.x - 18, shape.y - 10];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

// 绘制左侧面
const CubeLeft1 = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x + 30, shape.y - 10];
    const c2 = [xAxisPoint[0] + 30, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0] + 48, c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0] + 48, c3[1])
      .closePath();
  },
});
// 绘制右侧面
const CubeRight1 = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 66, xAxisPoint[1] - 9];
    const c4 = [shape.x + 66, shape.y - 9];
    ctx
      .moveTo(c1[0] + 48, c1[1])
      .lineTo(c2[0] + 48, c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
// 绘制顶面
const CubeTop1 = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x + 48, shape.y];
    const c2 = [shape.x + 66, shape.y - 9];
    const c3 = [shape.x + 48, shape.y - 18];
    const c4 = [shape.x + 30, shape.y - 10];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft1', CubeLeft1);
echarts.graphic.registerShape('CubeRight1', CubeRight1);
echarts.graphic.registerShape('CubeTop1', CubeTop1);

const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654];
option = {
  backgroundColor: '#012366',
  // color: ['#02E4FF','#F6AE31'],
  title: {
    text: '',
    top: 32,
    left: 18,
    textStyle: {
      color: '#00F6FF',
      fontSize: 24,
    },
  },
  grid: {
    left: 20,
    right: 40,
    bottom: '19%',
    top: 107,
    containLabel: true,
  },
  legend: {
    tyle: 'plain',
    show: true,
    left: '50%',
    orient: 'horizontal',
    align: 'left',
    // data: ['地点','用电量'],
    data: [
      {
        name: '地点',
        // icon: 'rect',
        itemStyle: {
          color: '#02E4FF',
        },
        textStyle: {
          color: '#A9C0FF',
        },
      },
      {
        name: '移动',
        // icon: 'rect',
        itemStyle: {
          color: '#02E4FF',
        },
        textStyle: {
          color: '#A9C0FF',
        },
      },
      {
        name: '用电量',
        // icon: 'rect',
        // itemStyle: {
        //   color: '#02E4FF',
        // },
        textStyle: {
          color: '#A9C0FF',
        },        
      },
    ],
  },
  xAxis: {
    type: 'category',
    data: [
      '德州',
      '德城区',
      '陵城区',
      '禹城市',
      '乐陵市',
      '临邑县',
      '平原县',
      '夏津县',
      '武城县',
      // '庆云县',
      // '宁津县',
      // '齐河县',
    ],
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(255,255,255,1)',
        shadowColor: 'rgba(255,255,255,1)',
        shadowOffsetX: '20',
      },
      symbol: ['none', 'arrow'],
      symbolOffset: [0, 25],
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      margin: 30,
      fontSize: 15,
    },
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        },
      },
      splitLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
      },
      boundaryGap: ['20%', '20%'],
    },
    {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        fontSize: 16,
      },
      boundaryGap: ['20%', '20%'],
    },
  ],
  series: [
    {
      name: '地点',
      type: 'custom',
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00F6FF',
                    // color: 'transparent',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(7, 185, 244, 0.46)',
                    // color: 'transparent',
                  },
                  {
                    offset: 1,
                    // color: '#49BEE5',
                    // color: 'transparent',
                    color: 'rgba(48, 91, 251, 0.01)',
                  },
                ]),
              },
            },
            {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00F6FF',
                    // color: 'transparent',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(7, 185, 244, 0.46)',
                    // color: 'transparent',
                  },
                  {
                    offset: 1,
                    // color: '#49BEE5',
                    // color: 'transparent',
                    color: 'rgba(48, 91, 251, 0.01)',
                  },
                ]),
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2F80ED',
                  },
                  {
                    offset: 1,
                    color: '#56CCF2',
                  },
                ]),
              },
            },
          ],
        };
      },
      data: VALUE,
    },

    {
      name: '移动',
      type: 'custom',
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft1',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00F6FF',
                    // color: 'transparent',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(7, 185, 244, 0.46)',
                    // color: 'transparent',
                  },
                  {
                    offset: 1,
                    // color: '#49BEE5',
                    // color: 'transparent',
                    color: 'rgba(48, 91, 251, 0.01)',
                  },
                ]),
              },
            },
            {
              type: 'CubeRight1',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00F6FF',
                    // color: 'transparent',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(7, 185, 244, 0.46)',
                    // color: 'transparent',
                  },
                  {
                    offset: 1,
                    // color: '#49BEE5',
                    // color: 'transparent',
                    color: 'rgba(48, 91, 251, 0.01)',
                  },
                ]),
              },
            },
            {
              type: 'CubeTop1',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2F80ED',
                  },
                  {
                    offset: 1,
                    color: '#56CCF2',
                  },
                ]),
              },
            },
          ],
        };
      },
      data: VALUE,
    },

    {
      name: '用电量',
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: 'circle',
      yAxisIndex: 1,
      symbolSize: 16,
      lineStyle: {
        normal: {
          color: '#F6AE31',
          width: 5,
        },
      },
      zlevel: 1,
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#6c50f3',
        },
      },
      itemStyle: {
        // color: '#fff',
        // borderColor: '#F6AE31',
        color: '#F6AE31',
        borderColor: '#fff',
        borderWidth: 3,
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
                color: 'rgba(251,176,48,0.8)',
              },
              {
                offset: 1,
                color: 'rgba(239, 170, 52, 0.02)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 96, 255, 0.9)',
          shadowBlur: 10,
        },
      },
      data: [4600, 4790, 4900, 5130, 5600, 5800, 5700, 5600, 5400],
    },
  ],
};
