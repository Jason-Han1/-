var parentJson = null;
var parentInfo = [
  {
    cityName: '四川',
    level: 'city',
    code: 510000,
  },
];
getGeoJson(510000);
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
      name: '乐山市',
      cityCode: '511100',
      value: '1372',
    },
    {
      name: '自贡市',
      cityCode: '510300',
      value: '851',
    },
    {
      name: '广元市',
      cityCode: '510800',
      value: '720',
    },
    {
      name: '眉山市',
      cityCode: '511400',
      value: '1139',
    },
    {
      name: '宜宾市',
      cityCode: '511500',
      value: '772',
    },
    {
      name: '攀枝花市',
      cityCode: '510400',
      value: '8143',
    },
    {
      name: '凉山彝族自治州',
      cityCode: '513400',
      value: '723',
    },
    {
      name: '达州市',
      cityCode: '511700',
      value: '705',
    },
    {
      name: '雅安市',
      cityCode: '511800',
      value: '448',
    },
    {
      name: '泸州市',
      cityCode: '510500',
      value: '1194',
    },
    {
      name: '巴中市',
      cityCode: '511900',
      value: '560',
    },
    {
      name: '广安市',
      cityCode: '511600',
      value: '373',
    },
    {
      name: '成都市',
      cityCode: '510100',
      value: '4543',
    },
    {
      name: '内江市',
      cityCode: '511000',
      value: '716',
    },
    {
      name: '遂宁市',
      cityCode: '510900',
      value: '521',
    },
    {
      name: '德阳市',
      cityCode: '510600',
      value: '1075',
    },
    {
      name: '阿坝藏族羌族自治州',
      lr: '421',
      cityCode: '513200',
      value: '285',
    },
    {
      name: '绵阳市',
      cityCode: '510700',
      value: '1180',
    },
    {
      name: '资阳市',
      cityCode: '512000',
      value: '682',
    },
    {
      name: '南充市',
      cityCode: '511300',
      value: '1352',
    },
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
          'rgba(24, 100, 141,0.9)',
          'rgba(33, 122, 168,0.8)',
          'rgba(28, 138, 187,0.7)',
          'rgba(34, 156, 199,0.8)',
        ],
        show: true,
      },

      series: [
        {
          name: '地图',
          type: 'map',
          map: 'Map',
          roam: true, //是否可缩放
          zoom: 1, //缩放比例
          aspectScale: 0.9, //长宽比0.75
          data: mapData,
          itemStyle: {
            normal: {
              show: true,
              areaColor: '#2E98CA',
              borderColor: 'rgb(185, 220, 227)',
              borderWidth: '1',
            },
          },
          label: {
            normal: {
              show: true, //显示省份标签
              textStyle: {
                color: 'rgb(249, 249, 249)', //省份标签字体颜色
                fontSize: 12,
              },
            },
            emphasis: {
              //对应的鼠标悬浮效果
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

//echarts点击事件
myChart.on('click', (params) => {
  clearTimeout(timeFn);
  timeFn = setTimeout(function () {
    // 无下级地图数据时不下钻
    if (!params.value) {
      alert('暂无数据');
      return;
    }
    //如果当前是最后一级，那就直接return
    if (parentInfo[parentInfo.length - 1].code == params.data.cityCode) {
      return;
    }
    let data = params.data;
    parentInfo.push({
      cityName: data.name,
      level: data.level,
      code: data.cityCode,
    });
    getGeoJson(data.cityCode);
  }, 250);
});

// 绑定双击事件，返回上级地图
myChart.on('dblclick', function (params) {
  clearTimeout(timeFn);
  if (parentInfo.length < 1) {
    return;
  }
  if (parentInfo.length === 1) {
    getGeoJson(parentInfo[parentInfo.length - 1].code);
    return;
  }
  parentInfo.pop();
  getGeoJson(parentInfo[parentInfo.length - 1].code);
});
