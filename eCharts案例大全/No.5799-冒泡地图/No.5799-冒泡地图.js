var mapName = 'china'
var data = [{
        name: "北京",
        value: 3
    },
    {
        name: "天津",
        value: 0
    },
    {
        name: "河北",
        value: 0
    },
    {
        name: "山西",
        value: 0
    },
    {
        name: "内蒙古",
        value: 0
    },
    {
        name: "辽宁",
        value: 1
    },
    {
        name: "吉林",
        value: 0
    },
    {
        name: "黑龙江",
        value: 0
    },
    {
        name: "上海",
        value: 0
    },
    {
        name: "江苏",
        value: 0
    },
    {
        name: "浙江",
        value: 2
    },
    {
        name: "安徽",
        value: 0
    },
    {
        name: "福建",
        value: 4
    },
    {
        name: "江西",
        value: 0
    },
    {
        name: "山东",
        value: 0
    },
    {
        name: "河南",
        value: 0
    },
    {
        name: "湖北",
        value: 1
    },
    {
        name: "湖南",
        value: 0
    },
    {
        name: "重庆",
        value: 0
    },
    {
        name: "四川",
        value: 0
    },
    {
        name: "贵州",
        value: 0
    },
    {
        name: "云南",
        value: 0
    },
    {
        name: "西藏",
        value: 0
    },
    {
        name: "陕西",
        value: 0
    },
    {
        name: "甘肃",
        value: 0
    },
    {
        name: "青海",
        value: 0
    },
    {
        name: "宁夏",
        value: 0
    },
    {
        name: "新疆",
        value: 0
    },
    {
        name: "广东",
        value: 0
    },
    {
        name: "广西",
        value: 0
    },
    {
        name: "海南",
        value: 0
    },
];
    
var geoCoordMap = {};

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {
    tooltip: {
          padding: 4,
          enterable: true,
          transitionDuration: 1,
          textStyle: {
            color: '#000',
            decoration: 'none',
          },
          extraCssText:'box-shadow:2px 2px 8px rgba(204,204,204,0.8)',
          backgroundColor:'#fff',
          borderRadius: 6,
          textStyle:{
            color:'black',
          },
          padding:[5,10],
          formatter: function(params) {
            return params.name+':'+params.value[2]+'单'
          }

        },
   
    geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              borderWidth: 1,
              areaColor: '#e3e3e3',
              borderColor: '#e3e3e3',
            },
            emphasis: {
              areaColor: '#e3e3e3',
              borderColor: '#e3e3e3',
            }
          }
        },
    series: [{
          name: '散点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data:convertData(data),
          rippleEffect: {
            period: 3.5, //波纹秒数
            brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
            scale: 8//波纹范围
          },
          symbolSize: function(val) {
            if(val[2] == 1 || val[2] == 2){
              return 4
            }else if(val[2] == 3){
              return 4.5
            }else if(val[2] == 4) {
              return 5
            }else if(val[2] == 5) {
              return 5.5
            }else if(val[2] == 6) {
              return 6
            }else if(val[2] == 7) {
              return 6.5
            }else if(val[2] > 7) {
              return 7
            }
            // return 7
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: function (e) {
                if(e.value[2] == 0){
                  return 'transparent'
                }else if(e.value[2] == 1){
                  return '#76A3FF'
                }else if(e.value[2] == 2){
                  return '#7CDE9A'
                }else if(e.value[2] == 3){
                  return '#FF7F33'
                }else {
                  return '#F53B3B'
                }
              },
            }
          }
        },
        ]
};