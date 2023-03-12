

var uploadedDataURL = "/asset/get/s/data-1625108618375-WECpFmw4t.json";
// var uploadedDataURL = '/asset/get/s/data-1608555250848-dtMgEcnGa.json';
// var uploadedDataURL = "/asset/get/s/data-1615796884226-kh0LCNa4u.json";
var nameMap = '华东';

window.dataList = [
  { name: '上海市', value: 396 },
  { name: '安徽省', value: 66 },
  { name: '江苏省', value: 222 },
  { name: '浙江省', value: 688 },
  { name: '福建省', value: 75 }
];
var geoCoordMap = {};
var convertData = function (data) {
  console.log('data', data);
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
  console.log('res', res);
  return res;
};

$.get(uploadedDataURL, function (gdMap) {
  console.log(gdMap)
  // return;
  echarts.registerMap(nameMap, gdMap);
  /*获取地图数据*/
  myChart.showLoading();
  var mapFeatures = echarts.getMap(nameMap).geoJson.features;
  myChart.hideLoading();
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.center;
  });
  // console.log(geoCoordMap);
  //GDP
  var optionMap = {
    title: {
      text: '江苏省地图',
      top: '2%',
      textStyle: {
        color: '#000',
        fontSize: 16,
      },
    },
    visualMap: [
      {
        min: 0,
        max: 1000,
        show: false,
        //   text: ['High', 'Low'],
        realtime: false,
        calculable: false,
        seriesIndex: [0],
        inRange: {
          color: [
            'rgb(202,249,130)',
            'rgb(129,211,248)',
            'rgb(255,255,128)',
            'rgb(128,255,255)',
            'rgb(0,255,255)',
            'rgb(128,128,255)',
            'rgb(236,128,141)',
            'rgb(194,128,255)',
            'rgb(245,154,35)',
            'rgb(112,182,3)',
            'rgb(0,182,128)',
            'rgb(99,0,191)',
          ],
        },
      },
      {
        min: 0,
        max: 1000,
        seriesIndex: 1,
        show: true,
        splitNumber: 4,
        right: '2%',
        inRange: {
          color: ['#FF6464', '#FFA85A', '#FFEC6F', '#8BBCFE'].reverse(),
        },
        formatter: function (value) {
          return '';
        },
      },
    ],
    geo: {
      map: nameMap,
      show: false,
      roam: true,
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
    },
    series: [
      {
        // 地图块的相关信息
        type: 'map',
        map: nameMap,
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              fontWeight: 400,
              color: 'rgb(0,0,0) ',
            },
          },
        },
        data: window.dataList,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [40, 40],
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: 10,
              fontWeight: 600,
            },
            formatter(value) {
              return value.data.value[2];
            },
          },
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: 'pink', // 标志颜色
          },
        },
        zlevel: 6,
        data: convertData(window.dataList),
      },
    ],
  };
  myChart.setOption(optionMap, true);
});