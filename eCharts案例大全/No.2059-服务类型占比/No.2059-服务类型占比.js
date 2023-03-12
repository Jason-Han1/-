
// var colorArr = ['#55d7f2', '#4BFFFC']; //颜色
 option = {
  // backgroundColor: '#101736',
  // color: colorArr,
  // legend: {
  //   orient: 'vertical',
  //   // icon: 'circle', //图例形状
  //   data: ['车辆数'],
  //   top: 20,
  //   left: 20,
  //   itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
  //   itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
  //   itemGap: 22, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
  //   textStyle: {
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //     color: '#00E4FF',
  //   },
  // },
  title: {
    text: '服务类型占比',
    // subtext: '纯属虚构',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 24,
      // lineHeight: 56,
    },
    padding: [26, 0],
  },
  radar: {
    // shape: 'circle',
    radius: '46%',

    name: {

      formatter: function (value, indicator) {
        return value;
      },

      // formatter: [
      //   '{a|这段文本采用样式a}',
      //   '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
      // ].join('\n'),


      //   rich: {
      //     a: {
      //       color: 'red',
      //       lineHeight: 10
      //     },
      //     b: {
      //       backgroundColor: {
      //         image: 'xxx/xxx.jpg'
      //       },
      //       height: 40
      //     },
      //     x: {
      //       fontSize: 18,
      //       fontFamily: 'Microsoft YaHei',
      //       borderColor: '#449933',
      //       borderRadius: 4
      //     },


      // },
      textStyle: {

        color: '#f0f',
        fontSize: 12,
        fontWeight: 'normal'
      },
    },
    indicator: [
      {
        text: '养老服务',
        max: 100
      },
      {
        text: '安全监测',
        max: 100,
      },
      {
        text: '生命体征' + '\n监测',
        max: 100,
        color: 'red'
      },
      {
        text: '一键呼救',
        max: 100
      },
      {
        text: '指标监测',
        max: 100,
      },
      {
        text: '健康服务',
        max: 100
      }
    ],
    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: false,
      areaStyle: { // 分隔区域的样式设置。
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      }
    },
    axisLine: { //指向外圈文本的分隔线样式
      lineStyle: {
        color: 'rgba(0,0,0,0)'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#72B1DA', // 分隔线颜色
        width: 1, // 分隔线线宽
      }
    },
  },
  series: [{
    type: 'radar',
    symbolSize: 4,
    symbol: 'circle',
    data: [{
      value: [10, 10, 30, 10, 10, 40, 10, 10],
      name: '服务类型占比',
      itemStyle: {
        color: '#fff'
      },
      lineStyle: {
        color: '#72B1DA'
      },
      areaStyle: {
        normal: { // 单项区域填充样式
          color: {
            type: 'linear',
            x: 1, //右
            y: 0, //下
            x2: 1, //左
            y2: 1, //上
            colorStops: [{
              offset: 0,
              color: '#4A99FF'
            }, {
              offset: 1,
              color: 'rgba(0,0,0,0)'
            }],
            globalCoord: false
          },
        }
      }
    }]
  }]
};
