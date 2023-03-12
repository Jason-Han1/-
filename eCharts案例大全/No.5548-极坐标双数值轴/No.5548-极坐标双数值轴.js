  var data = []
  for (var i = 0; i <= 360; i++) {
      var s = i;
      var r = 5 * (1 + Math.sin(s / 180 * Math.PI))
      data.push([r, s]);
  }
  options = [{
      title: {
          text: '极坐标双数值轴'
      },
      legend: {
          data: ['line', 'bar']
      },
      polar: {},
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      angleAxis: {
          type: 'value',
          startAngle: 0
      },
      radiusAxis: {},
      series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          data: data,
          color: ['#d60600'],
          areaStyle: {}
      }]
  }]