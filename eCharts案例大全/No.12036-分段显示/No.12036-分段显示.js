option = {
    grid: {
      containLabel: true,
      left: 0,
      right: 10,
      bottom: 30,
    },
    tooltip: {
      show: true,
    },
    xAxis: {
      type: 'category',
    
       data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
         '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
 
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgb(237, 232, 249)',
        },
      },
 
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [{
       data: [1820, 932, 1901, 2934, 1290, 1330, 320, 423, 1289, 2345, 2235, 3234, 3200, 234, 123, 1465, 67, 78, 435, 824, 354, 546, 446, 346, 46, 673, 36, 903, 2896, 3534],
      type: 'line',
      symbolSize: 8,
      itemStyle: {
        borderWidth: 2,
      },
    }],
    visualMap: [
      {
        show: false,
        pieces: [{
          gt: 0,
          lt: 1800,
          color: '#673CD1',
        },{
          gte: 1800,
          lt: 2800,
          color: 'green',
        }],
        outOfRange: {
          color: '#FF5D1D',
        },
      },
    ],
  }