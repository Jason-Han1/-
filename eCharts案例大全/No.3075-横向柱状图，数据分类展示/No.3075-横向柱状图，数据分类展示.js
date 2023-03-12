option = {
  legend: {
    data: ['专利授权数量', '专利申请数量'],
    textStyle: {
      color: '#ADADAD',
      fontWeight: '400',
      fontSize: 13,
    },
    icon: 'rect',
    itemWidth: 10,
    itemHeight: 10,
    bottom: '2%',
  },
  grid: {
    top: '1%',
    left: '5%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    backgroundColor: 'rgba(0,0,0,0.6)', //设置背景图片 rgba格式
    color: '#000',
    borderWidth: '1', //边框宽度设置1
    borderColor: 'rgba(0,0,0,0.6)', //设置边框颜色
    textStyle: {
      color: '#000', //设置文字颜色
    },
  },
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#000',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: ['2020年1季度', '2020年2季度', '2020年3季度', '2020年3季度', '2020年3季度', '2020年3季度'],
      axisLabel: {
        margin: 20,
        textStyle: {
          color: '#000',
          fontSize: 14,
        },
      },
    },
  ],
  series: [
    {
      name: '专利授权数量',
      type: 'bar',
      barWidth: 15,
      zlevel: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0.6,
                color: 'rgba(2,198,249,1)',
              },
              {
                offset: 1,
                color: 'rgba(8,255,205,1)',
              },
            ],
            false
          ),
          barBorderRadius: [0, 15, 15, 0],
        },
      },
      data: [5, 6, 60, 30, 20, 80],
    },
    {
      name: '专利申请数量',
      type: 'bar',
      barWidth: 15,
      barGap: '-100%',
      data: [35, 15, 80, 90, 67, 90],
      itemStyle: {
        normal: {
          color: ['#2764FAFF'],
          barBorderRadius: [0, 15, 15, 0],
        },
      },
    },
  ],
};
