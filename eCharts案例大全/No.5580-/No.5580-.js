option = {
    geo3D: {
      map: 'china',
      boxHeight: 10,
      environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, color: '#00aaff'
        }, {
          offset: 0.7, color: '#998866'
        }, {
          offset: 1, color: '#998866'
        }], false),
      itemStyle: {
        borderWidth: 1,
      },
      label: {
          show: false
      },
      viewControl: {
        //   projection: 'orthographic',
        alpha: 70,
        beta: 0,
      }
    },
    series: []
};