option = {
  backgroundColor: '#031245',
  // title: {
  //   text: '性能(ms)',
  //   textStyle: {
  //     color: '#fff',
  //   },
  // },
  grid: {
    left: '10%',
    top: '10%',
    bottom: '10%',
    right: '10%',
  },
  xAxis: {
    // name: 'X',
    nameTextStyle: {
      color: '#FFFFFF',
      padding: [0, 0, 0, 20],
    },
    show: true,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(91,100,134,1)',
        shadowColor: 'rgba(91,100,134,1)',
        shadowOffsetX: '20',
      },
      symbol: ['none', 'arrow'],
      symbolOffset: [0, 25],
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(255,255,255,0.2)',
      },
    },
    axisLabel: {
      show: true,
      // rotate: -1,
      fontSize: 12,
      textStyle: {
        fontSize: 25,
        // fontFamily: PangMenZhengDao,
        // fontWeight: 400,
        color: '#CEF4FF',
        lineHeight: 45,
      },
    },
    axisTick: {
      show: false,
    },
    data: ['驯鹿', '火箭', '飞机', '高铁', '轮船'],
  },
  yAxis: [
    {
      nameTextStyle: {
        color: '#FFFFFF',
        padding: [0, 0, 0, 20],
      },
      show: true,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        symbol: ['none', 'arrow'],
        symbolOffset: [0, 15],
        lineStyle: {
          // color: 'rgba(255, 129, 109, 0.1)',
          width: 1, //这里是为了突出显示加上的
          color: 'rgba(91,100,134,1)',
          shadowColor: 'rgba(91,100,134,1)',
        },
      },
      axisLabel: {
        show: true,
        // rotate: -1,
        fontSize: 12,
        textStyle: {
          fontSize: 25,
          // fontFamily: PangMenZhengDao,
          // fontWeight: 400,
          color: '#CEF4FF',
          lineHeight: 45,
        },
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(255,255,255,.5)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(68,76,116,1)',
          width: 1,
          type: 'solid',
        },
      },
    },
  ],
  series: [
    {
      type: 'pictorialBar',
      barCategoryGap: '5%',
      // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
         symbol: 'path://M0,10 L10,10 C5.5,10 6.5,5 5,0 C3.5,5 4.5,10 0,10 z',
      label: {
        show: true,
        position: 'top',
        distance: 15,
        color: '#08DFFE',
        fontWeight: 'bolder',
        fontSize: 15,
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#9A11FF',
              },
              {
                offset: 1,
                color: '#08DFFE',
              },
            ],
            global: false, //  缺省为  false
          },
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [123, 60, 25, 18, 12],
    },
  ],
};
