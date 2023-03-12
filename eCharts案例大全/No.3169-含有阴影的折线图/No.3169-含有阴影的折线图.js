option = {
    xAxis: {
      type: 'value',
      scale: true,
      max: 2017,
      min: 2008,
      splitNumber: 10,
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 9.5,
      min: 6.5,
      splitNumber: 5,
      boundaryGap: [0.2, 0.2],
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top:'10%',
      containLabel: true
    },
    series: [
      {
        // data: [8.0, 7.5, 8.3, 8.3, 9.0, 8.3,8.3, 8.0, 7.6, 7.2],
        type: 'line',
        data: [
          [2008, 8.0],
          [2009, 7.5],
          [2010, 8.3],
          [2011, 8.3],
          [2012, 9.0],
          [2013, 8.3],
          [2014, 8.3],
          [2015, 7.9],
          [2016, 7.6],
          [2017, 7.2],
        ],
        symbol:'none', //去掉折线图中的节点
        smooth: false  //true 为平滑曲线，false为直线
      },
      {
        type: 'line',
        data: [
          [2016, 6.5],
          [2017, 6.0],
        ],
        areaStyle: {
          shadowColor: '#9fc4f0',
          shadowOffsetY: -200,
        },
      },
    ],
    // dataset: {
    //     source: [
    //         [2008, 8.0],
    //         [2009, 7.5],
    //         [2010, 8.3],
    //         [2011, 8.3],
    //         [2012, 9.0],
    //         [2013, 8.3],
    //         [2014, 8.3],
    //         [2015, 7.9],
    //         [2016, 7.6],
    //         [2017, 7.2],
    //     ]
    // }
  };