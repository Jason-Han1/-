var geoCoordMap = {
    "上海事业部": [121.472644, 31.231706],
    "中南事业部": [106.713478, 26.578343],
    "华北事业部": [116.405285, 39.904989],
    "华南事业部": [113.280637, 23.125178],
    "江苏事业部": [117.184811, 34.261792],
    "浙江事业部": [120.672111, 28.000575],
    "西北事业部": [101.778916, 36.623178]
};

var provienceData = [
    {name: '山东', value: 1, area: '上海事业部'},
    {name: '江西', value: 1, area: '上海事业部'},
    {name: '安徽', value: 1, area: '上海事业部'},
    {name: '福建', value: 1, area: '上海事业部'},
    {name: '浙江', value: 1, area: '上海事业部'},
    {name: '江苏', value: 1, area: '上海事业部'},
    {name: '上海', value: 1, area: '上海事业部'},

    {name: '西藏', value: 2, area: '中南事业部'},
    {name: '重庆', value: 2, area: '中南事业部'},
    {name: '四川', value: 2, area: '中南事业部'},
    {name: '云南', value: 2,area: '中南事业部'},
    {name: '贵州', value: 2,area: '中南事业部'},

    {name: '新疆', value: 3,area: '华北事业部'},
    {name: '宁夏', value: 3,area: '华北事业部'},
    {name: '青海', value: 3,area: '华北事业部'},
    {name: '甘肃', value: 3, area: '华北事业部'},
    {name: '陕西', value: 3,area: '华北事业部'},

    {name: '内蒙古',value: 3, area: '华南事业部'},
    {name: '山西', value: 3,area: '华南事业部'},
    {name: '北京', value: 3,area: '华南事业部'},
    {name: '天津', value: 3,area: '华南事业部'},
    {name: '河北', value: 3,area: '华南事业部'},

    {name: '黑龙江', value: 4,area: '江苏事业部'},
    {name: '吉林', value: 4,area: '江苏事业部'},
    {name: '辽宁', value: 4,area: '江苏事业部'},

    {name: '广西', value: 5,area: '浙江事业部'},
    {name: '湖南', value: 5,area: '浙江事业部'},
    {name: '广东', value: 5,area: '浙江事业部'},
    {name: '湖北', value: 5,area: '浙江事业部'},
    {name: '河南', value: 5, area: '浙江事业部'},
    {name: '海南', value: 5,area: '浙江事业部'},

    {name: '台湾', value: 6,area: '西北事业部'},
    {name: '香港', value: 6,area: '西北事业部'},
    {name: '澳门', value: 6,area: '西北事业部'},
    {name: '南海诸岛', value: 6,area: '西北事业部'},
]

const data = [{
        name: '上海事业部',
        area: '上海事业部',
        type: 'areaCenterCity'
    },
    {
        name: '中南事业部',
        area: '中南事业部',
        type: 'areaCenterCity'
    },
    {
        name: '华北事业部',
        area: '华北事业部',
        type: 'areaCenterCity'
    },
    {
        name: '华南事业部',
        area: '华南事业部',
        type: 'areaCenterCity'
    },
    {
        name: '东北大区',
        area: '东北大区',
        type: '江苏事业部'
    },
    {
        name: '浙江事业部',
        area: '浙江事业部',
        type: 'areaCenterCity'
    },
    {
        name: '西北事业部',
        area: '西北事业部',
        type: 'areaCenterCity'
    },
];


option = {
    backgroundColor: 'red',
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.data.area
      },
      shadowStyle: {
        color: 'rgba(150,150,150,0.1)' // hover颜色
      }
    },
    visualMap: {
      min: 0,
      max: 7,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      calculable: true,
      show: false,
      inRange: {
          color: ['#5cbef9', '#4fa3ef', '#3676de', '#3073f6', '#3181d0', '#3991e7', '#4890f0']
      }
  },
  geo: {
    zoom: 1,
      map: 'china',
      label: {
          emphasis: {
              show: false
          }
      },
      regions: [{
          name: "南海诸岛",
          value: 0,
          itemStyle: {
              normal: {
                  opacity: 0,
                  label: {
                      show: false
                  }
              }
          }
      }],
      itemStyle: {
          normal: {
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0,
              areaColor: {
                  x: 1000,
                  y: 1000,
                  x2: 1000,
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: '#69c5d8' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#126caf' // 50% 处的颜色
                  }],
                  global: true // 缺省为 false
              },
          },
          emphasis: {
              show: false,
              areaColor: '#69c5d8',
          }
      },
      aspectScale: 0.75,
      z: 2
  },
  series: [ {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 20,
            symbolRotate: 35,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false, //不显示提示标签
                formatter: '{c}', //提示标签格式
                backgroundColor: "#fff", //提示标签背景颜色
                borderColor: '#ccc',
                borderWidth: .5,
                textStyle: {
                    color: "#000"
                } //提示标签字体颜色
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
             zlevel: 2
        },{
      zoom: 1,
      type: 'map',
      mapType: 'china',
      label: {
          normal: {
              show: false
          },
          emphasis: {
              show: false
          }
      },
      data: provienceData,
      top: '8.5%',
      aspectScale: .75,
      roam: false,
      itemStyle: {
          normal: {
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              areaColor: {
                  type: 'linear-gradient',
                  x: 1000,
                  y: 600,
                  x2: 1000,
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: '#274d68' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#368de5' // 50% 处的颜色
                  }],
                  global: true // 缺省为 false
              },
          },
          emphasis: {
              show: false,
              areaColor: '#2477c7',
              
          }
      },
      zlevel: 1
  }]
};
function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].area),
                area: data[i].area,
                type: data[i].type,
            });
        }
    }
    return res;
}