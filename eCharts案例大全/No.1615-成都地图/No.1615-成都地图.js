var parentJson = null;
var parentInfo = [
  {
    cityName: '成都市',
    level: 'city',
    code: 510100,
  },
];
getGeoJson(510100);
var timeFn = null;
// 利用高德api获取行政区边界geoJson
// adcode 行政区code 编号
function getGeoJson(adcode) {
  AMapUI.loadUI(['geo/DistrictExplorer'], (DistrictExplorer) => {
    var districtExplorer = new DistrictExplorer();
    districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
      if (error) {
        console.error(error);
        return;
      }
      let Json = areaNode.getSubFeatures();
      if (Json.length > 0) {
        parentJson = Json;
      } else if (Json.length === 0) {
        Json = parentJson.filter((item) => {
          if (item.properties.adcode == adcode) {
            return item;
          }
        });
        if (Json.length === 0) return;
      }
      proceData(Json);
    });
  });
}

//处理数据
function proceData(Json) {
  let mapData = [
    {
      name: '甘孜藏族自治州',
      cityCode: '513300',
      value: '460',
    },
    {
      name: '简阳市',
      cityCode: '511100',
      value: '11372'
    },
    {
      name: '成都市',
      cityCode: '510100',
      value: '4543',
    }
  ];
  Json.map((item) => {
    mapData.forEach((ele) => {
      if (item.properties.adcode == ele.cityCode) {
        ele.level = item.properties.level;
      }
    });
  });
  let mapJson = {};
  //geoJson必须这种格式
  mapJson.features = Json;

  //去渲染echarts
  initEcharts(mapData, mapJson);
}

function initEcharts(mapData, mapJson) {
  let valArr = [];
  mapData.map(function (i) {
    valArr.push(i.value);
  });
  // 计算数据最大与最小值用于数据映射组件
  let max = Math.max.apply(null, valArr);
  let min = Math.min.apply(null, valArr);
  //注册
  echarts.registerMap('Map', mapJson);

  //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
  myChart.setOption(
    {
      backgroundColor: 'rgb(20,28,52)',
      tooltip: {
        trigger: 'item',
      },
      visualMap: {
        type: 'piecewise',
        min: min,
        max: max,
        splitNumber: 5,
        left: 35,
        bottom: 50,
        itemWidth: 21,
        itemHeight: 8,
        showLabel: false,
        orient: 'horizontal',
        text: ['高', '低'],
        itemGap: 2,
        textStyle: {
          color: '#fff',
        },
        inRange: '',
        color: [
          'rgba(7, 83, 114,0.8)',
          'rgba(7, 183, 114,0.8)',
          'rgba(33, 122, 168,0.8)',
          'rgba(28, 138, 187,0.7)',
          '#02e1ff',
        ],
        show: true,
      },
  
      series: [
        // {
        //     name: '青羊a',
        //     type: 'effectScatter',
        //     coordinateSystem: 'geo',
        //     data: [
        //         {
        //           name: "四川",
        //           value:[104.06154145214842, 30.647892249117188, 100]
        //         }
        //     ],
        //     showEffectOn: 'render',
        //     rippleEffect: { brushType: 'stroke' },
        //     hoverAnimation: true,
        //     label: {
        //         normal: { position: 'top', show: true, fontSize: 24 },
        //         emphasis: { color: '#fff', fontSize: 30, position: 'top' },
        //     },
        //     itemStyle: { normal: { color: '#d0cb40' } },
        // },
        //地图点的动画效果
        {
            //  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{
                name: "四川",
                 value:[104.06154145214842, 30.647892249117188, 100]
            }],
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color:  '#a1edf6',
                    shadowBlur: 10
                }
            },
            zlevel: 1
        },
        {
          name: '地图',
          type: 'map',
          map: 'Map',
          roam: true, //是否可缩放
          zoom: 1, //缩放比例
          aspectScale: 0.9, //长宽比0.75
          data: mapData,
          // itemStyle: {
          //   normal: {
          //     show: true,
          //     areaColor: '#a1edf6',
          //     borderColor: '#fff',
          //     borderWidth: '1',
          //   },
          // },
          itemStyle: {
              normal: {
                  borderColor: '#fff',
                  borderWidth: 1,
                  areaColor: "#a1edf6",
                  shadowColor: 'rgba(128, 217, 248, 1)',
                  // shadowColor: 'rgba(255, 255, 255, 1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
              },
              emphasis: {
                  areaColor: '#389BB7',
                  borderWidth: 0
              }
          },
          label: {
            normal: {
              show: true, //显示省份标签
              textStyle: {
                color: '#000', //省份标签字体颜色
                fontSize: 12,
              },
            },
            emphasis: {
              //对应的鼠标悬浮效果
              areaColor:"#02e1ff",
              show: true,
              textStyle: {
                color: '#000',
              },
            },
          },
        },
      ],
    },
    true
  );
  // 单击下钻
}

