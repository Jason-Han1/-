const dfColor = ['#92E1FF', '#0097FB', '#30ECA6', '#FFC227', '#FF4848'];
option = {
  backgroundColor:'#031d33',
  title: {
        text:"总数（次)"+'\n\n'+'322',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 30,
            color: '#CFEFFF'
      
        }
    },
  dataset: {
    dimensions: ['name','订单'],
    source: [
      {name: '已发现', '订单': 50},
      {name: '待受理', '订单': 40},
      {name: '待派遣', '订单': 30},
      {name: '待接单', '订单': 20},
      {name: '待处理', '订单': 30}
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
    startAngle:270
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
  // angleAxis:{
  //     clockwise:false
  // },
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
      
      barWidth: 10,
      roundCap: true,
      showBackground: true,
      backgroundStyle: {
        color: 'RGBA(0, 69, 117, 0.5)',
      },
    }
  ],
};
