  var myMounth = '一月';
  var myHosName = '绍兴市';
  option = null;
  var geoCoordMap = {
       '上海': [121.56701, 31.291864],
    '云南': [102.810131, 24.866015],
    '内蒙古': [111.766857, 40.885146],
    '北京': [116.384578, 39.928811],
    '吉林': [125.344062, 43.831634],
    '四川': [102.89936, 30.577872],
    '天津': [117.39643, 39.231216],
    '宁夏': [106.210873, 37.551682],
    '安徽': [117.102073, 31.842875],
    '山东': [118.426678, 36.251468],
    '山西': [111.877241, 36.548931],
    '广东': [113.422614, 23.534478],
    '广西': [109.154441, 23.873306],
    '新疆': [85.67949, 41.261063],
    '江苏': [119.236159, 33.707878],
    '江西': [115.630289, 27.736011],
    '河北': [115.041576, 38.077123],
    '河南': [113.643381, 34.076112],
    '浙江': [120.11923, 29.360468],
    '海南': [109.743154, 19.122836],
    '湖北': [112.318776, 31.27574],
    '湖南': [111.656473, 27.67051],
    '甘肃': [104.444733, 34.989642],
    '福建': [118.132322, 25.753953],
    '西藏': [87.887166, 31.402071],
    '贵州': [106.946765, 27.013321],
    '辽宁': [122.621262, 41.205508],
    '重庆': [107.020354, 29.682296],
    '陕西': [108.492138, 33.892196],
    '青海': [96.644279, 35.773142],
    '黑龙江': [128.655575, 46.979653],
    '绍兴': [120.583761, 30.03911]
  };

  var BJData = [
 [{name: '绍兴'}, {name: '上海',value:64218}],
 [{name: '绍兴'}, {name: '云南',value:2615}],
 [{name: '绍兴'}, {name: '内蒙古',value:1056}],
 [{name: '绍兴'}, {name: '北京',value:6794}],
 [{name: '绍兴'}, {name: '吉林',value:1967}],
 [{name: '绍兴'}, {name: '四川',value:3496}],
 [{name: '绍兴'}, {name: '天津',value:1653}],
 [{name: '绍兴'}, {name: '宁夏',value:625}],
 [{name: '绍兴'}, {name: '安徽',value:20312}],
 [{name: '绍兴'}, {name: '山东',value:12718}],
 [{name: '绍兴'}, {name: '山西',value:2020}],
 [{name: '绍兴'}, {name: '广东',value:19234}],
 [{name: '绍兴'}, {name: '广西',value:7708}],
 [{name: '绍兴'}, {name: '新疆',value:1163}],
 [{name: '绍兴'}, {name: '江苏',value:31706}],
 [{name: '绍兴'}, {name: '江西',value:9162}],
 [{name: '绍兴'}, {name: '河北',value:5300}],
 [{name: '绍兴'}, {name: '河南',value:15976}],
 [{name: '绍兴'}, {name: '海南',value:414}],
 [{name: '绍兴'}, {name: '湖北',value:6693}],
 [{name: '绍兴'}, {name: '湖南',value:6302}],
 [{name: '绍兴'}, {name: '甘肃',value:913}],
 [{name: '绍兴'}, {name: '福建',value:7248}],
 [{name: '绍兴'}, {name: '西藏',value:107}],
 [{name: '绍兴'}, {name: '贵州',value:5976}],
 [{name: '绍兴'}, {name: '辽宁',value:3132}],
 [{name: '绍兴'}, {name: '重庆',value:2576}],
 [{name: '绍兴'}, {name: '陕西',value:2083}],
 [{name: '绍兴'}, {name: '青海',value:332}],
 [{name: '绍兴'}, {name: '黑龙江',value:2146}]
     
  ];
  var planePath = "path://M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z";
  //    简笔人2
  //    var  planePath="path://M621.855287 587.643358C708.573965 540.110571 768 442.883654 768 330.666667 768 171.608659 648.609267 42.666667 501.333333 42.666667 354.057399 42.666667 234.666667 171.608659 234.666667 330.666667 234.666667 443.22333 294.453005 540.699038 381.59961 588.07363 125.9882 652.794383 21.333333 855.35859 21.333333 1002.666667L486.175439 1002.666667 1002.666667 1002.666667C1002.666667 815.459407 839.953126 634.458526 621.855287 587.643358Z";

  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
              res.push({
                  fromName: dataItem[1].name,
                  toName: dataItem[0].name,
                  coords: [toCoord, fromCoord]
              });
          }
      }
      return res;
  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];
  var mySeries = [];
  [
      [myHosName, BJData]
  ].forEach(function(item, i) {
      mySeries.push({ //线
          name: item[0],
          //                      name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 1,
          effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#fff',
              symbolSize: 4
          },
          lineStyle: {
              normal: {
                  color: color[0],
                  width: 0,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, { //移动 点
          name: item[0],
          //                      name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 2,
          effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 10
          },
          lineStyle: {
              normal: {
                  color: color[1],
                  width: 1,
                  opacity: 0.4,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, { //省份圆点
          name: item[0],
          //                      name: item[0] + ' Top10',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              brushType: 'stroke'
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
              }
          },
          symbolSize: function(val) {
              return val[2] /1000;
          },
          itemStyle: {
              normal: {
                  color: function(params) {
                      var tmp = params.data.value[2]
                      if (tmp < 5000) {
                          return 'green';
                      } else if (tmp > 10000) {
                          return 'red'
                      } else
                          return 'yellow';
                  }
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
          })
      });
  });

  option = {
      backgroundColor: '#404a59',
      title: {
          text: '外省流动人口分布',
          
          left: 'center',
          textStyle: {
              color: '#fff'
          },
          subtextStyle: {
              color: 'yellow',
              fontWeight: 'bold'
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              if (params.seriesIndex == 2 || params.seriesIndex == 5 || params.seriesIndex == 8) {
                  return params.name + '<br>' + params.seriesName + ':' + params.data.value[2] + ' 人次';
              } else if (params.seriesIndex == 1 || params.seriesIndex == 4 || params.seriesIndex == 7) {
                  return params.data.fromName + '→' + params.data.toName;
              }
          }
      },
      legend: {
          orient: 'vertical',
          top: '4%',
          left: 'center',
          data: [myHosName],
          textStyle: {
              color: '#fff'
          },
          selectedMode: 'single'
      },
      geo: {
          map: 'china',
          label: {
              emphasis: {
                  show: false
              }
          },
          roam: true,
          itemStyle: {
              normal: {
                  areaColor: '#323c48',
                  borderColor: '#404a59'
              },
              emphasis: {
                  areaColor: '#2a333d'
              }
          }
      },
      series: mySeries
  };


  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }

  window.onresize = function() {
      myChart.resize();
  }