option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }],
     visualMap: {
    type: 'piecewise',
    show: false,
    dimension: 1,
    pieces: [
      {
        lt: 200,
        gte: 0,
        color: 'red',
      },
      {
        gte: 200,
        color: 'blue',
      },
    ],
  },
};

