var jiangsuMapJson = '/asset/get/s/data-1641366415167-sVovDceF5.json';

var jiangsuOutline = '/asset/get/s/data-1641366419439-UFsbPgpeW.json';


function convertData(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = cityCenter[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
}
const cityCenter = {
  南京市: [118.667413, 31.841544],
  无锡市: [120.201663, 31.474729],
  徐州市: [117.584811, 34.261792],
  常州市: [119.646973, 31.672752],
  苏州市: [120.419585, 31.099379],
  南通市: [120.964608, 32.116212],
  连云港市: [118.978821, 34.500018],
  淮安市: [119.121265, 33.497506],
  盐城市: [120.239998, 33.277631],
  扬州市: [119.321003, 32.693159],
  镇江市: [119.452753, 31.954402],
  泰州市: [120.015176, 32.384882],
  宿迁市: [118.375162, 33.863008],
};
let regions = [
  {
    name: '南京市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(8, 114, 204, 1)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(83, 190, 236, 0.8)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '徐州市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(22, 159, 255, 1)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(22, 159, 255, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '盐城市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(8, 114, 204, 1)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(8, 114, 204, 0.8)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '南通市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(8, 114, 204, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(8, 114, 204, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '淮安市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(22, 159, 255, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(22, 159, 255, 0.65)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '扬州市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(14, 64, 157, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(14, 64, 157, 0.8)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '宿迁市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(14, 64, 157, 0.5)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(14, 64, 157, 0.3)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '常州市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(14, 64, 157, 0.8)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(14, 64, 157, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      color: 'red',
    },
  },
  {
    name: '苏州市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35, 209, 255, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(35, 209, 255, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
  {
    name: '无锡市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35, 209, 255, 1)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(35, 209, 255, 0.8)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
  {
    name: '镇江市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35, 209, 255, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(35, 209, 255, 0.8)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
  {
    name: '泰州市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35, 242, 255, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(35, 242, 255, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
  {
    name: '连云港市',
    itemStyle: {
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35, 242, 255, 0.9)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(35, 242, 255, 0.7)', // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
];
const aspectScale = 1.2;
const zoom = 1;
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const dataMap = [
  {
    name: "南京市",
    value: getRandomNum(0, 100)
  },
  {
    name: "无锡市",
    value: getRandomNum(0, 100)
  },
  {
    name: "徐州市",
    value: getRandomNum(0, 100)
  },
  {
    name: "常州市",
    value: getRandomNum(0, 100)
  },
  {
    name: "苏州市",
    value: getRandomNum(0, 100)
  },
  {
    name: "南通市",
    value: getRandomNum(0, 100)
  },
  {
    name: "连云港市",
    value: getRandomNum(0, 100)
  },
  {
    name: "淮安市",
    value: getRandomNum(0, 100)
  },
  {
    name: "盐城市",
    value: getRandomNum(0, 100)
  },
  {
    name: "扬州市",
    value: getRandomNum(0, 100)
  },
  {
    name: "镇江市",
    value: getRandomNum(0, 100)
  },
  {
    name: "泰州市",
    value: getRandomNum(0, 100)
  },
  {
    name: "宿迁市",
    value: getRandomNum(0, 100)
  }
];
$.getJSON(jiangsuMapJson, function (geoJson) {
  $.getJSON(jiangsuOutline, function (geoJsonOutline) {
    echarts.registerMap('jiangsu', geoJson);
    echarts.registerMap('jiangsuOutline', geoJsonOutline);
    echarts.registerMap('jiangsuOutline2', geoJsonOutline);
    let option = {
      geo: [
        {
          name: 'jiangsu',
          map: 'jiangsu',
          roam: false, //是否允许缩放
          zoom: zoom, //默认显示级别
          z: 199,
          aspectScale: aspectScale, //地图长宽比
          // layoutSize: "100%",
          scaleLimit: {
            //缩放级别
            min: 0.5,
            max: 2,
          },
          label: {
            normal: {
              show: true,
              color: '#fff',
              fontSize: 15,
            },
            emphasis: {
              show: true,
              color: '#fff',
              fontSize: 15,
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#17caf0',
              borderWidth: 2,
              borderType: 'solid',
            },
          },
          emphasis: {
            itemStyle: {
              areaColor: 'rgba(14,64,157,1)',
              shadowColor: 'rgba(254,240,59,0.7)',
              shadowBlur: 30,
              borderColor: 'rgba(254,240,59,0.6)',
              borderWidth: 2,
            },
          },
          regions: regions,
        },
      ],
      series: [
        // outline1
        {
          type: 'map',
          map: 'jiangsuOutline',
          aspectScale: aspectScale, //地图长宽比
          zoom: zoom, //默认显示级别
          z: 99,
          // geoIndex: 0,
          roam: true,
          scaleLimit: {
            //缩放级别
            min: 0.5,
            max: 2,
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(85,184,247,0.2)',
              shadowOffsetX: -10,
              shadowOffsetY: 10,
              areaColor: 'transparent',
              borderColor: '#17caf0',
              borderWidth: 2,
              borderType: 'solid',
            },
          },
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
        },
        //outline12
        {
          type: 'map',
          map: 'jiangsuOutline2',
          aspectScale: aspectScale, //地图长宽比
          zoom: zoom, //默认显示级别
          z: 99,
          roam: true,
          scaleLimit: {
            //缩放级别
            min: 0.5,
            max: 2,
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(85,184,247,0.2)',
              shadowOffsetX: -20,
              shadowOffsetY: 20,
              areaColor: 'transparent',
              borderColor: '#17caf0',
              borderWidth: 2,
              borderType: 'solid',
            },
          },
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
        },
        {
          type: 'effectScatter',
          name: 'Top 5',
          legendHoverLink: true,
          coordinateSystem: 'geo',
          data: convertData(
            dataMap
              .sort(function (a, b) {
                return b.value - a.value;
              })
              .slice(0, 20)
          ),
          symbolSize: 15,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          geoIndex: 0,
          label: {
            normal: {
              formatter: '{b}',
              position: 'left',
              show: false,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgba(255, 225, 0, 1)',
              shadowBlur: 8,
              shadowColor: 'rgba(255, 225, 0, 1)',
            },
          },
          zlevel: 1,
        },
      ],
      animation: false,
    };
    myChart.setOption(option);
    // 监听地图缩放 移动事件
    myChart.on("georoam", function(params) {
      var option = myChart.getOption(); //获得option对象
      if (params.zoom != null && params.zoom != undefined) {
        //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
      } else {
        //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
      }
      myChart.setOption(option); //设置option
    });
    myChart.on("mouseover", function(params) {
      let pointArr = [];
      for (let key in cityCenter) {
        if (key == params.name) {
          pointArr = cityCenter[key];
        }
      }
      // 获取系列
      var seriesModel = myChart.getModel().getSeriesByIndex(0);
      // 获取地理坐标系实例
      var coordSys = seriesModel.coordinateSystem;
      // dataToPoint 相当于 getPosByGeo
      var point = coordSys.dataToPoint(pointArr);
      // pointToData 相当于 getGeoByPos
      //var coord = coordSys.dataToPoint(point);
      console.log(point)
    });
  });
});
