  var geoCoordMap = {
      '黑龙江': [127.9688, 45.368],
      '内蒙古': [110.3467, 41.4899],
      "吉林": [125.8154, 44.2584],
      '北京市': [116.4551, 40.2539],
      "辽宁": [123.1238, 42.1216],
      "河北": [114.4995, 38.1006],
      "天津": [117.4219, 39.4189],
      "山西": [112.3352, 37.9413],
      "陕西": [109.1162, 34.2004],
      "甘肃": [103.5901, 36.3043],
      "宁夏": [106.3586, 38.1775],
      "青海": [101.4038, 36.8207],
      "新疆": [87.9236, 43.5883],
      "西藏": [91.11, 29.97],
      "四川": [103.9526, 30.7617],
      "重庆": [108.384366, 30.439702],
      "山东": [117.1582, 36.8701],
      "河南": [113.4668, 34.6234],
      "江苏": [118.8062, 31.9208],
      "安徽": [117.29, 32.0581],
      "湖北": [114.3896, 30.6628],
      "浙江": [119.5313, 29.8773],
      "福建": [119.4543, 25.9222],
      "江西": [116.0046, 28.6633],
      "湖南": [113.0823, 28.2568],
      "贵州": [106.6992, 26.7682],
      "云南": [102.9199, 25.4663],
      "广东": [113.12244, 23.009505],
      "广西": [108.479, 23.1152],
      "海南": [110.3893, 19.8516],
      '上海': [121.4648, 31.2891]

  };
  var chinaDatas = [
      [{
          name: '黑龙江',
          value: 3751
      }],
      [{
          name: '内蒙古',
          value: 2539
      }],
      [{
          name: '吉林',
          value: 2690
      }],
      [{
          name: '辽宁',
          value: 4351
      }],
      [{
          name: '河北',
          value: 7591
      }],
      [{
          name: '天津',
          value: 1561
      }],
      [{
          name: '山西',
          value: 3729
      }],
      [{
          name: '陕西',
          value: 3876
      }],
      [{
          name: '甘肃',
          value: 2647
      }],
      [{
          name: '宁夏',
          value: 694
      }],
      [{
          name: '青海',
          value: 609
      }],
      [{
          name: '新疆',
          value: 2523
      }],
      [{
          name: '西藏',
          value: 350
      }],
      [{
          name: '四川',
          value: 8375
      }],
      [{
          name: '重庆',
          value: 3124
      }],
      [{
          name: '山东',
          value: 10070
      }],
      [{
          name: '河南',
          value: 9640
      }],
      [{
          name: '江苏',
          value: 8070
      }],
      [{
          name: '安徽',
          value: 6365
      }],
      [{
          name: '湖北',
          value: 5927
      }],
      [{
          name: '浙江',
          value: 5850
      }],
      [{
          name: '福建',
          value: 3973
      }],
      [{
          name: '江西',
          value: 4666
      }],
      [{
          name: '湖南',
          value: 6918
      }],
      [{
          name: '贵州',
          value: 3622
      }],
      [{
          name: '广西',
          value: 4960
      }],
      [{
          name: '海南',
          value: 944
      }],
      [{
          name: '上海',
          value: 2428
      }],
      [{
          name: '广东',
          value: 11521,
          
      }]
  ];
  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i][0].name];
          if (geoCoord) {
              res.push({
                  name: data[i][0].name,
                  value: geoCoord.concat(data[i][0].value)
              });
          }
      }
      return res;
  };

  option = {
      backgroundColor: 'rgb(128,128,128,0)',
      visualMap: [{
          type: 'continuous',
          show: false,
          seriesIndex: 0,
          text: ['bar3D'],
          calculable: true,
          max: 300,
          inRange: {
              color: ['#87aa66', '#eba438', '#d94d4c']
          }
      }],
      geo3D: {
          map: 'china',
          roam: true,
          //突出表示人口最多的省
           regions: [

             {

              name: "广东",

              value: 0,

              itemStyle: {

                areaColor: 'green',

                  label: {

                    show:false

                  

                }

              }

            },

          ],
          //突出表示
          itemStyle: {
              areaColor: 'rgb(5,101,123)',
              opacity: 1,
              borderWidth: 0.8,
              borderColor: 'rgb(62,215,213)'
          },
          label: {
              show: false,
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
              label: {
                  show: true,
                  textStyle: {
                      color: '#fff',
                      fontSize: 3,
                      backgroundColor: 'rgba(0,23,11,0)'
                  }
              }
          },
          light: {
              main: {
                  color: '#fff', //光照颜色
                  intensity: 1.2, //光照强度
                  shadowQuality: 'high', //阴影亮度
                  shadow: false, //是否显示阴影
                  //                        alpha: 55,
                  beta: 10

              },
              ambient: {
                  intensity: 0.3
              }
          }
      },
      series: [{
          name: 'bar3D',
          type: "bar3D",
          coordinateSystem: 'geo3D',
          barSize: 2, //柱子粗细
          shading: 'lambert',
          opacity: 0.1,
          //                bevelSize: 0.3,
          label: {
              show: false,
              formatter: function(data) {
                  //                        console.log(data)
                  var res = data.name + " " + data.value[2]
                  return res
              }
          },
          data: convertData(chinaDatas),
      }]
  }