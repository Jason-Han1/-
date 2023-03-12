  var data = []
  var data2 = []
  var data3 = []
  for (var i = 0; i <= 360; i++) {
      var s = i;
      var r = 5 * (1 + Math.sin(s / 180 * Math.PI))
      data.push([r, s]);
  }
  for (var i = 1; i <= 360; i++) {
      var s = i;
      var r = 5 * (1 + Math.sin(s / 180 * Math.PI))
      data2.push(r)
      data3.push(s)
  }
  var data4 = []
  var data5 = []
  for (var i = 1; i <= 100; i++) {
      var s = i / 100 * 360;
      var r = 5 * (1 + Math.sin(s / 180 * Math.PI))
      data5.push(r)
      data4.push({
          max: 10
      }) //不给name值会有默认的undefined
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
  }, {
      title: {
          text: '极坐标心型'
      },
      angleAxis: {
          //data:data3,
          type: 'category',
          //若不给圆弧那条数据 就要指定类型 category 区别value有0的概念不会添加0对应的数值要给0赋值，这个不用
          startAngle: 0
      },
      radiusAxis: {},
      polar: {},
      series: [{
          type: 'bar',
          data: data2,
          coordinateSystem: 'polar',
          name: '心型',
          color: ['#d60600'],
          // areaStyle:{}
      }],
  }, {
      title: {
          text: '基础雷达图心型'
      },
      tooltip: {},
      legend: {
          data: ['心']
      },
      radar: {
          shape: 'circle',
          startAngle: 180,
          indicator: data4
      },
      series: [{

          type: 'radar',
          areaStyle: {
              normal: {}
          },
          data: [{
              value: data5,
              name: '心'
          }]
      }]
  }]