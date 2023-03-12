option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    top: '20%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: 'rgba(255,171,93,0.5)',
        shadowColor: 'rgba(255,171,93,0.5)',
        type: 'dotted', // 设置tooltip线类型
      },
    },
    triggerOn: 'mousemove',
  },
  legend: {
    icon: 'rect',
    itemWidth: 20,
    itemHeight: 3,
    right: '10%',
    top: '0%',
    textStyle: {
      color: 'rgba(175,188,196,1)',
      fontSize: 10,
    },
    data: [],
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      textStyle: {
        color: 'blue',
        fontSize: 12,
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(35, 44, 67, 1)', // 定义坐标轴刻度颜色及线类型
        type: 'dashed',
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    boundaryGap: false,
    data: ['00','02','04','06','08','10','12','14','16','18']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      color: 'rgba(255,255,255,0.5)',
    },
    nameTextStyle: {
      fontSize: 10,
      color: '#AFBCC4',
      align: 'left',
    },
  },
  dataZoom: [
    {
      type: 'inside',
      show: true,
      left: '5%',
      right: '5%',
      bottom: '2%',
      start: 0,
      end: 100, // 初始化滚动条
    },
    {
      type: 'slider',
      show: true,
      left: '5%',
      right: '5%',
      bottom: '5%',
      start: 0,
      end: 100,
      textStyle: {
        color: '#ffffff',
      },
      handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
      handleColor: '#00C1DE',
      handleSize: 10,
      height: 4,
      backgroundColor: 'rgba(221, 221, 221, 0.26)',
      borderColor: 'rgba(221, 221, 221, 0.26)',
      fillerColor: 'rgba(41, 179, 255, 0.2)',
    },
  ],
  color: ['#29B3FF', '#F6795B', '#33CCFF'],
  series: [
    {
      type: 'line',
      smooth: true,
      showSymbol: false,
      itemStyle: {
        // color: '#479be6'
      },
      data: [10,20,02,39,92,22,32,32,45,23]
    },
    {
      type: 'line',
      smooth: true,
      showSymbol: false,
      itemStyle: {
        // color: '#479be6'
      },
      data: [10,22,02,33,42,22,12,32,25,23]
    }
  ],
};
