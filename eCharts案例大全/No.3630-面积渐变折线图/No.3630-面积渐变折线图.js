option = {
  tooltip: {
    trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    axisPointer: {
      //坐标轴指示器（axisPointer）的全局公用设置。
      type: 'cross', //设置为 'cross' 则默认显示标签，否则默认不显示
      label: {
        //坐标轴指示器的文本标签。
        backgroundColor: '#6a7985',
      },
    },
  },
  grid: {
    top: '3%', //组件离容器左侧的距离
    left: '3%',
    right: '3%',
    bottom: '2%',
    containLabel: true, //防止标签溢出
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
    boundaryGap: false, //坐标轴两边是否留白
    axisLabel: {
      show: true, //是否显示刻度标签
      textStyle: {
        color: '#333333',
      },
      interval: 0, //坐标轴刻度标签的显示间隔,设置成 0 强制显示所有标签
    },
    splitLine: {
      //是否显示分隔线
      lineStyle: {
        // 使用深浅的间隔色
        color: 'rgb(0,0,0,.1)',
      },
    },
    axisLine: {
      lineStyle: { color: 'rgb(31,99,163,0.501961)' }, // x轴坐标轴颜色
    },
  },
  yAxis: [
    {
      name: '单位 / 起',
      type: 'value',
      position: 'top',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#333333',
        },
      },
      splitLine: {
        lineStyle: {
          // 使用深浅的间隔色
          color: 'rgb(31,99,163,0.501961)',
        },
      },
      axisLine: {
        lineStyle: { color: 'rgb(31,99,163,0.501961)' }, // x轴坐标轴颜色
      },
    },
  ],
  series: [
    {
      name: '用户',
      data: [100, 280, 300, 250, 350, 320, 360, 210, 360, 110],
      type: 'line',
      yAxisIndex: 0, // 通过这个判断左右
      // smooth: true,
      // stack:'1',
      itemStyle: {
        normal: {
          color: 'rgba(245, 61, 95, 1)',
          lineStyle: {
            color: 'rgba(245, 61, 95, 1)',
          },
        },
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear', //设置线性渐变
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(245, 61, 95, 1)', // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(255, 102, 34, 0.5)', // 100% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(255, 102, 34, 0.1)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
        },
      },
    },
  ],
};
