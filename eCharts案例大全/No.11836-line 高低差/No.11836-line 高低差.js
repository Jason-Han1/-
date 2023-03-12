
option = {
  title: {
    text: '一周{max|最高气温}{min|最低气温}预报',
    top: '4%',
    left: 'center',
    textStyle: {
      fontSize: 16,
      rich: {
        max: { color: '#f68d3b', fontSize: 16},
        min: { color: '#8ec2f2', fontSize: 16}
      }
    }
  },
  grid: {
    top: '16%',
    right: '4%',
    left: '4%',
    bottom: '8%'
  },
  xAxis: {
    show: false,
    type: 'category',
    boundaryGap: false,
    data: ['1', '2', '3', '4', '5', '6', '7'],
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  series: [
    {
      name: '低温',
      type: 'line',
      // symbol: 'none',
      symbol: 'circle',
      stack: 'confidence-band',
      label: { 
        show: true, 
        color: '#000000', 
        position: 'bottom',
        formatter: '{c}℃'
      },
      itemStyle: { color: '#8ec2f2' },
      // lineStyle: { normal: { opacity: 0 } },
      lineStyle: { color: '#8ec2f2', width: 1 },
      smooth: true,
      data: [21, 22, 17, 15, 16, 21, 20]
    },
    {
      name: '高温',
      type: 'line',
      // symbol: 'none',
      symbol: 'circle',
      stack: 'confidence-band',
      label: { 
        show: true, 
        color: '#000000',
        position: 'top',
        formatter: '{c}℃'
      },
      itemStyle: { color: '#f68d3b' },
      // lineStyle: { normal: { opacity: 0 } },
      lineStyle: { color: '#f68d3b', width: 1 },
      areaStyle: {
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
                color: 'rgba(246, 141, 59, 0.5)'
              },
              {
                offset: 1,
                color: 'rgba(142, 194, 242, 0.1)'
              },
            ],
            globalCoord: false
          }
        }
      },
      smooth: true,
      data: [25, 28, 25, 22, 22, 24, 26]
    },
  ]
};
