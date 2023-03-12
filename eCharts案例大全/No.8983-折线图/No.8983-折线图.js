 // 数据
  var dateBase = new Date();
  var year = dateBase.getFullYear();
  var dottedBase = +dateBase + 1000 * 3600 * 24;
//   var weekCategory = ['六月','七月','八月','九月','十月'];
  var weekCategory = [];
  var radarData = [];
  var radarDataAvg = [];
  var maxData = 12000;
  var weekMaxData = [];
  var weekLineData = [];


  // 周数据
  for (var i = 0; i < 7; i++) {
    // 日期
    var date = new Date(dottedBase -= 1000 * 3600 * 24);
    weekCategory.unshift([
      date.getMonth() + 1,
      date.getDate()
    ].join('/'));

    // 折线图数据
    weekMaxData.push(maxData);
    var distance = Math.round(Math.random() * 11000 + 500);
    weekLineData.push(distance);

    // 雷达图数据
    // 我的指标
    var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
    var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
    var hour = +(distance / 1000 / averageSpeed).toFixed(1);
    var radarDayData = [distance, averageSpeed, maxSpeed, hour];
    radarData.unshift(radarDayData);

    // 平均指标
    var distanceAvg = Math.round(Math.random() * 8000 + 4000);
    var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
    var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
    var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
    var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
    radarDataAvg.unshift(radarDayDataAvg);
  }

  // 颜色设置
  var color = {
    linearBtoG: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#1c98e8'
      }, {
        offset: 1,
        color: '#28f8de'
      }]
    },
    areaBtoG: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: 'rgba(22,192,145,1)'
      }, {
        offset: 1,
        color: 'rgba(22,192,145,.2)'
      }]
    }
  };

  var option = {
    grid: {
      left: 90,
      right: 80,
      bottom: 40,
      top: '60%',
    },
    xAxis: {
      type: 'category',
      position: 'bottom',
      axisLine: true,
      axisLabel: {
        color: 'rgba(255,255,255,.8)',
        fontSize: 12
      },
      data: weekCategory,
    },
    yAxis: {
      name: 'km/h',
      nameLocation: 'end',
      nameGap: 24,
      nameTextStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 14
      },
      max: maxData,
      splitNumber: 4,

      axisLine: {
        lineStyle: {
          opacity: 0
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff',
          opacity: .1
        }
      },
      axisLabel: {
        color: 'rgba(255,255,255,.8)',
        fontSize: 12

      }
    },
    series: [{
      
      name: '每日跑步里程',
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#fff'
        }
      },
      lineStyle: {
        normal: {
          color: color.linearBtoG,
          width: 3
        }
      },
      areaStyle: {
        normal: {
          color: color.areaBtoG,
        }
      },
      data: weekLineData,
      lineSmooth: true,
      
      tooltip: {
        position: 'top',
        formatter: '{c} m',
        //backgroundColor: 'rgba(28,152,232,.2)',
        padding: 6
      }
    }, {//可控制前景折线图位置
      name: '占位前景',
      height:'50%',
      width:'90%',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: '#fff',
          opacity: 0
        },
      },
      silent: true,
      barWidth: '50%',
      data: weekMaxData,
      animation: false
    }, {
        //背景柱图
      name: '占位背景',
      width:'100%',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#215665',
                    opacity:.3,
                }, {
                    offset: 1,
                    color: '#215665',
                    opacity:0,
          }]),
          opacity: .2
        },
      },
      height:'50%',
      silent: true,
      barWidth: '50%',
      barGap: 0,
      data: weekMaxData,
      animation: false
    }],
    backgroundColor: '#383546',
  };