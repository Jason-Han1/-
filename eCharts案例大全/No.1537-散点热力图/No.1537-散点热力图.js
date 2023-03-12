let geoJson = {
 type: 'FeatureCollection',
 features: [
  {
   type: 'Feature',
   properties: {},
   geometry: {
    type: 'Polygon',
    coordinates: [
     [
      [379578.425, 3329963.344],
      [379626.441, 3329987.367],
      [379642.444, 3330003.363],
      [380130.421, 3330451.365],
     ],
    ],
   },
  },
 ],
};
echarts.registerMap('test', geoJson);
let datas = [
 [379578.425, 3329963.344, -0.32642],
 [379626.441, 3329987.367, -0.095065],
 [379642.444, 3330003.363, -0.114679],
 [380130.421, 3330451.365, -0.662569],
];

let areaData = [];
datas.map((item) => {
 // 扩大热力图效果
 areaData.push(...new Array(10).fill(item));
});
// 		console.log(areaData)
let mapMax = Math.max(...datas.map((item) => item[2]));
let mapMin = Math.min(...datas.map((item) => item[2]));
// 		console.log(mapMax)
// 		console.log(mapMin)
myChart.setOption(
 {
  backgroundColor: '#050038',
  tooltip: {
   show: true,
   trigger: 'item',
   axisPointer: {
    type: 'shadow',
   },
  },
  visualMap: {
   // bottom: 20,
   // left: 30,
   show: true,
   color: ['#b50097', '#ff4601', '#e8bc09', '#fffc00', '#00fa25', 'rgba(114, 245, 134, 0.1)'],
   min: -10,
   max: 1,
   calculable: true,
   textStyle: {
    color: '#7e7e7e',
    fontSize: 12,
   },
  },
  geo: {
   map: 'test',
   // top: 50,
   // left: 50,
   // bottom: 50,
   // right: 50,
   roam: true,
   // width: '90%',
   // height: '90%',
   zoom: 1.01,
   itemStyle: {
    normal: {
     show: true,
     areaColor: 'rgba(0,0,0,0)',
     borderColor: 'rgb(15, 163, 227)',
     borderWidth: '1',
     shadowColor: 'rgba(63, 218, 255, 0.5)',
     shadowBlur: 20,
    },
    //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
    emphasis: {
     show: true,
     areaColor: '#050038',
     borderColor: '#83BAFF',
    },
   },
  },
  series: [
   {
    mapType: 'nanshan',
    top: 'center',
    left: 'center',
    width: '65%',
    height: '95%',
    // minOpacity: 0.1,
    name: 'PM10',
    type: 'heatmap',
    coordinateSystem: 'geo',
    progressive: 400,
    pointSize: 20,
    blurSize: 30,
    data: areaData,
    // 鼠标移入
    emphasis: {
     show: false,
     itemStyle: {
      areaColor: 'rgb(255,255,0,1)',
     },
    },
   },
  ],
 });

