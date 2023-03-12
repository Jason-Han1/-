let max = 42,
  min = 30,
  temp = 36,
  tempColor = 'lime';
option = {
  grid: {
    right: '71%',
    left: '25%',
  },
  title: {
    bottom: 'bottom',
    left: 'center',
    textStyle: { fontSize: 14 },
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: min,
      max: max,
      interval: 1,
      axisTick: {
        show: true,
        length: 5,
        lineStyle: {
          // color: 'white',
        },
      },
      minorTick: {
        show: true,
      },
      nameTextStyle: {
        color: 'white',
      },
      axisLine: {
        // onZero:false,
      },
      splitLine: {
        show: false,
      },
      offset: 10,
      axisLabel: {
        margin: 20,
        // color: '#fff',
        fontSize: 12,
      },
    },
  ],
  series: [
    {
      name: '透明框',
      type: 'bar',
      // xAxisIndex: 2,
      data: [max],
      barWidth: 6,
      itemStyle: {
        color: 'transparent',
        barBorderRadius: 50,
        borderWidth: 20,
        borderType: 'solid',
        borderColor: 'grey',
      },
      z: 1,
    },
    {
      z: 19,
      barGap: '-100%',
      type: 'bar',
      barWidth: 6,
      label: {
        show: true,
        formatter: function (p) {
          return '{temp|' + p.value.toFixed(1) + '℃}';
        },
        position: [10, -20],
        rich: {
          temp: {
            // color: 'white',
            lineHeight: 30,
            padding: [0, 0, 0, 3],
            fontSize: 18,
            verticalAlign: 'middle',
            align: 'center',
            height: 30,
          },
        },
      },
      itemStyle: {
        color: tempColor,
        barBorderRadius: 50,
      },
      showBackground: true,
      backgroundStyle: {
        color: '#cccccc',
      },
      data: [temp],
    },

    {
      name: '圆',
      type: 'scatter',
      hoverAnimation: false,
      data: [min],
      symbolSize: 58,
      itemStyle: {
        normal: {
          color: 'grey',
          opacity: 1,
        },
      },
      z: 12,
    },
    {
      name: '白圆',
      type: 'scatter',
      hoverAnimation: false,
      data: [min],
      symbolSize: 30,
      itemStyle: {
        normal: {
          color: 'lime',
          opacity: 1,
        },
      },
      z: 18,
    },
  ],
};
