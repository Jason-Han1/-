  option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          },
          lineStyle: {
              type: 'solid',
              color: 'red'
          },
          crossStyle: {
              type: 'solid',
              color: 'red'
          }
      },
      grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          name:'亮度标准差',
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
      },
      yAxis: [{
          type: 'value',
          scale: true,
          name: '点击率(%)',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
      }],
      series: [{
          symbol:'none',
          color: ['transparent'],
          name: '点击率（%）',
          type: 'line',
          data: [40, 62, 51, 44, 30, 40, 61, 51, 44, 40, 41, 35]
      }]
  };

  myChart.setOption(option);

  function randomData() {
      return Math.round(Math.random() * 1000);
  }