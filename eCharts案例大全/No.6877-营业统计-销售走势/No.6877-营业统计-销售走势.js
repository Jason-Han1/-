  option = {
      tooltip: {
          trigger: 'axis',
      },
      legend: {
          data: ['实际销售额（元）', '成本（元）', '销售利润（元）']
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
          name: '金额（元）',
          max: 3000,
          min: 0,
          boundaryGap: [0.2, 0.2]
      }],
      series: [{
              name: '实际销售额（元）',
              type: 'line',
              areaStyle: {}, //堆叠图形
              data: [1120, 1132, 1101, 1134, 1980, 2310, 2110, 2111, 1314, 1910, 2301, 2150]
          },
          {
              name: '成本（元）',
              type: 'line',
              areaStyle: {}, //堆叠图形
              data: [1000, 932, 901, 1034, 1900, 2210, 1910, 1811, 1214, 1710, 2201, 1953]
          },
          {
              name: '销售利润（元）',
              type: 'line',
              areaStyle: {}, //堆叠图形
              data: [120, 200, 200, 100, 80, 93, 100, 200, 300, 100, 200, 200]
          },
      ]
  };



  myChart.setOption(option);

  function randomData() {
      return Math.round(Math.random() * 1000);
  }