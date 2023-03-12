  option = {
      tooltip: {
          trigger: 'axis',
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
          data: ['12月01', '12月02', '12月03', '12月04', '12月05', '12月06', '12月07', '12月08', '12月09', '12月10', '12月11', '12月12']
      },
      yAxis: [{
          type: 'value',
          scale: true,
          name: '百分比(%)',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
      }],
      series: [{
              name: '商品动销趋势（%）',
              type: 'line',
              data: [40, 62, 51, 44, 30, 40, 61, 51, 44, 40, 41, 35]
          },
          {
              name: '库存周转趋势（%）',
              type: 'line',
              data: [19, 22, 31, 24, 20, 22, 20, 41, 34, 30, 23, 19]
          }
      ]
  };

  myChart.setOption(option);

  function randomData() {
      return Math.round(Math.random() * 1000);
  }