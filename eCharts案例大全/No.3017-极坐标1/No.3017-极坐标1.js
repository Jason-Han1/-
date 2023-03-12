const dfColor = ['#9FD993', '#95BDD0', '#00ACAC', '#005C9F', '#A750FF'];
option = {
  dataset: {
    dimensions: ['name','车辆'],
    source: [
      {name: '小汽车', '车辆': 84635},
      {name: '出租车', '车辆': 23211},
      {name: '货车', '车辆': 26353},
      {name: '公交车', '车辆': 34432},
      {name: '大客车', '车辆': 14432}
    ]
  },
  tooltip: {
    trigger: 'item',
    position: function (point, params, dom, rect, size) {
      const x = point[0];
      const y = point[1];
      const viewWidth = size.viewSize[0];
      const viewHeight = size.viewSize[1];
      const boxWidth = size.contentSize[0];
      const boxHeight = size.contentSize[1];
      let posX = 0;
      let posY = 0;
      if (x < boxWidth) {
        // 左边放不开
        posX = 5;
      } else {
        // 左边放的下
        posX = x - boxWidth;
      }
      if (y < boxHeight) {
        // 上边放不开
        posY = 5;
      } else {
        // 上边放得下
        posY = y - boxHeight;
      }
      return [posX, posY];
    },
  },
  angleAxis: {
    max(value) {
      return value.max * 1.1;
    },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
  },
  radiusAxis: {
    type: 'category',
    minorTick: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
  },
  polar: {
    radius: ['40%', '90%'],
  },
  series: [
    {
      type: 'bar',
      coordinateSystem: 'polar',
      itemStyle: {
        color(params) {
          const idx = params.dataIndex;
          return dfColor[idx];
        },
      },
      barWidth: 20,
      roundCap: true,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(17, 43, 74, .4)',
      },
    }
  ],
};
