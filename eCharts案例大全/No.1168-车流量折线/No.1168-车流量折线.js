var option = {
  backgroundColor: 'rgba(0,0,0,.5)',
  grid: {
    top: '10%',
    left: '3%',
    right: '2%',
    bottom: '10%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,1)',
    textStyle: {
      show: true,
      color: '#fff',
    },
    axisPointer: {
      // hover时 css展示样式
      type: 'cross', // shadow,柱状,cross,y轴hover
      shadowStyle: {
        color: 'red',
        shadowColor: 'rgba(225,225,225,1)',
        shadowBlur: 5,
      },
    },
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: 'red', // x轴线
        },
      },
      axisLabel: {
        // 坐标轴刻度标签的相关设置
        textStyle: {
          color: '#fff',
          margin: 15,
          fontSize: 16,
        },
      },
      axisTick: { show: false },
      data: ['9-1', '9-2', '9-3', '9-4', '9-5', '9-6'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位：车辆',
      min: 0,
      max: 2500, // 可以不写
      splitNumber: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        },
      },
      nameTextStyle: {
        color: '#fff',
        fontSize: 16,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'red', // y轴线
        },
      },
      axisLabel: {
        margin: 20,
        textStyle: {
          color: '#fff',
          fontSize: 16,
        },
      },
      axisTick: { show: false }, // x/y分段的小标段
    },
  ],
  series: [
    {
      name: '车流量',
      type: 'line',
      smooth: false, // 是否平滑曲线显示
      // 默认是空心圆（中间是白色的），改成实心圆
      symbol: 'circle',
      symbolSize: 4,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: '#68a4fc', // 线条颜色
        },
      },
      itemStyle: {
        // 点的颜色
        normal: {
          color: 'red',
          borderColor: 'green',
        },
      },
      areaStyle: {
        // 区域填充样式
        normal: {
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: '#4ab9bc' },
              { offset: 1, color: '#68a4fc' },
            ],
            false
          ),
        },
      },
      data: [1880, 1560, 2200, 1980, 1790, 2367],
    },
  ],
};
