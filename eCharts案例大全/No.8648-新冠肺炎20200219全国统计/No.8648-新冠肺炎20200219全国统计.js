var name_title = '新冠肺炎20200220全国统计';
var subname = '数据爬取国家疾控中心';
var nameColor = ' rgb(55, 75, 113)';
var name_fontFamily = '等线';
var subname_fontSize = 15;
var name_fontSize = 18;
var mapName = 'china';
var data = [
 { name: '北京', value: 396 },
 { name: '天津', value: 131 },
 { name: '河北', value: 308 },
 { name: '山西', value: 132 },
 { name: '内蒙古', value: 75 },
 { name: '辽宁', value: 121 },
 { name: '吉林', value: 91 },
 { name: '黑龙江', value: 479 },
 { name: '上海', value: 334 },
 { name: '江苏', value: 631 },
 { name: '浙江', value: 1203 },
 { name: '安徽', value: 988 },
 { name: '福建', value: 293 },
 { name: '江西', value: 934 },
 { name: '山东', value: 748 },
 { name: '河南', value: 1267 },
 { name: '湖北', value: 62662 },
 { name: '湖南', value: 1011 },
 { name: '广东', value: 1333 },
 { name: '广西', value: 246 },
 { name: '海南', value: 168 },
 { name: '重庆', value: 567 },
 { name: '四川', value: 525 },
 { name: '贵州', value: 146 },
 { name: '云南', value: 174 },
 { name: '西藏', value: 1 },
 { name: '陕西', value: 245 },
 { name: '甘肃', value: 91 },
 { name: '青海', value: 18 },
 { name: '宁夏', value: 71 },
 { name: '新疆', value: 76 },
 { name: '台湾', value: 24 },
 { name: '香港', value: 68 },
 { name: '澳门', value: 10 },
];

var geoCoordMap = {};
var toolTipData = [
 {
  name: '北京',
  value: [
   { name: '确诊', value: 396 },
   { name: '疑似', value: 114 },
   { name: '死亡', value: 4 },
  ],
 },
 {
  name: '天津',
  value: [
   { name: '确诊', value: 131 },
   { name: '疑似', value: 173 },
   { name: '死亡', value: 3 },
  ],
 },
 {
  name: '河北',
  value: [
   { name: '确诊', value: 308 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 5 },
  ],
 },
 {
  name: '山西',
  value: [
   { name: '确诊', value: 132 },
   { name: '疑似', value: 11 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '内蒙古',
  value: [
   { name: '确诊', value: 75 },
   { name: '疑似', value: 16 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '辽宁',
  value: [
   { name: '确诊', value: 121 },
   { name: '疑似', value: 77 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '吉林',
  value: [
   { name: '确诊', value: 91 },
   { name: '疑似', value: 18 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '黑龙江',
  value: [
   { name: '确诊', value: 479 },
   { name: '疑似', value: 1 },
   { name: '死亡', value: 12 },
  ],
 },
 {
  name: '上海',
  value: [
   { name: '确诊', value: 334 },
   { name: '疑似', value: 107 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '江苏',
  value: [
   { name: '确诊', value: 631 },
   { name: '疑似', value: 12 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '浙江',
  value: [
   { name: '确诊', value: 1203 },
   { name: '疑似', value: 26 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '安徽',
  value: [
   { name: '确诊', value: 988 },
   { name: '疑似', value: 7 },
   { name: '死亡', value: 6 },
  ],
 },
 {
  name: '福建',
  value: [
   { name: '确诊', value: 293 },
   { name: '疑似', value: 6 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '江西',
  value: [
   { name: '确诊', value: 934 },
   { name: '疑似', value: 2 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '山东',
  value: [
   { name: '确诊', value: 748 },
   { name: '疑似', value: 30 },
   { name: '死亡', value: 4 },
  ],
 },
 {
  name: '河南',
  value: [
   { name: '确诊', value: 1267 },
   { name: '疑似', value: 103 },
   { name: '死亡', value: 19 },
  ],
 },
 {
  name: '湖北',
  value: [
   { name: '确诊', value: 62662 },
   { name: '疑似', value: 4094 },
   { name: '死亡', value: 2144 },
  ],
 },
 {
  name: '湖南',
  value: [
   { name: '确诊', value: 1011 },
   { name: '疑似', value: 7 },
   { name: '死亡', value: 4 },
  ],
 },
 {
  name: '广东',
  value: [
   { name: '确诊', value: 1333 },
   { name: '疑似', value: 1 },
   { name: '死亡', value: 5 },
  ],
 },
 {
  name: '广西',
  value: [
   { name: '确诊', value: 246 },
   { name: '疑似', value: 67 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '海南',
  value: [
   { name: '确诊', value: 168 },
   { name: '疑似', value: 59 },
   { name: '死亡', value: 4 },
  ],
 },
 {
  name: '重庆',
  value: [
   { name: '确诊', value: 567 },
   { name: '疑似', value: 71 },
   { name: '死亡', value: 6 },
  ],
 },
 {
  name: '四川',
  value: [
   { name: '确诊', value: 525 },
   { name: '疑似', value: 56 },
   { name: '死亡', value: 3 },
  ],
 },
 {
  name: '贵州',
  value: [
   { name: '确诊', value: 146 },
   { name: '疑似', value: 11 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '云南',
  value: [
   { name: '确诊', value: 174 },
   { name: '疑似', value: 58 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '西藏',
  value: [
   { name: '确诊', value: 1 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '陕西',
  value: [
   { name: '确诊', value: 245 },
   { name: '疑似', value: 46 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '甘肃',
  value: [
   { name: '确诊', value: 91 },
   { name: '疑似', value: 1 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '青海',
  value: [
   { name: '确诊', value: 18 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '宁夏',
  value: [
   { name: '确诊', value: 71 },
   { name: '疑似', value: 21 },
   { name: '死亡', value: 0 },
  ],
 },
 {
  name: '新疆',
  value: [
   { name: '确诊', value: 76 },
   { name: '疑似', value: 11 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '台湾',
  value: [
   { name: '确诊', value: 24 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 1 },
  ],
 },
 {
  name: '香港',
  value: [
   { name: '确诊', value: 68 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 2 },
  ],
 },
 {
  name: '澳门',
  value: [
   { name: '确诊', value: 10 },
   { name: '疑似', value: 0 },
   { name: '死亡', value: 0 },
  ],
 },
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function (v) {
 // 地区名称
 var name = v.properties.name;
 // 地区经纬度
 geoCoordMap[name] = v.properties.cp;
});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data);
console.log(toolTipData);
var max = 6000,
 min = 9; // todo
var maxSize4Pin = 35,
 minSize4Pin = 30;

var convertData = function (data) {
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
 title: {
  text: name_title,
  subtext: subname,
  x: 'center',
  textStyle: {
   color: nameColor,
   fontFamily: name_fontFamily,
   fontSize: name_fontSize,
  },
  subtextStyle: {
   fontSize: subname_fontSize,
   fontFamily: name_fontFamily,
  },
 },
 tooltip: {
  trigger: 'item',
  formatter: function (params) {
   if (typeof params.value[2] == 'undefined') {
    var toolTiphtml = '';
    for (var i = 0; i < toolTipData.length; i++) {
     if (params.name == toolTipData[i].name) {
      toolTiphtml += toolTipData[i].name + ':<br>';
      for (var j = 0; j < toolTipData[i].value.length; j++) {
       toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '<br>';
      }
     }
    }
    console.log(toolTiphtml);
    // console.log(convertData(data))
    return toolTiphtml;
   } else {
    var toolTiphtml = '';
    for (var i = 0; i < toolTipData.length; i++) {
     if (params.name == toolTipData[i].name) {
      toolTiphtml += toolTipData[i].name + ':<br>';
      for (var j = 0; j < toolTipData[i].value.length; j++) {
       toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '<br>';
      }
     }
    }
    console.log(toolTiphtml);
    // console.log(convertData(data))
    return toolTiphtml;
   }
  },
 },
 // legend: {
 //     orient: 'vertical',
 //     y: 'bottom',
 //     x: 'right',
 //     data: ['credit_pm2.5'],
 //     textStyle: {
 //         color: '#fff'
 //     }
 // },
 visualMap: {
  show: true,
  min: 1,
  max: 1300,
  left: 'left',
  top: 'bottom',
  text: ['高', '低'], // 文本，默认为数值文本
  calculable: true,
  seriesIndex: [1],
  inRange: {
   // color: ['#3B5077', '#031525'] // 蓝黑
   // color: ['#ffc0cb', '#800080'] // 红紫
   // color: ['#3C3B3F', '#605C3C'] // 黑绿
   // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
   //color: ['#23074d', '#cc5333'] // 紫红
   //color: ['#00467F', '#A5CC82'] // 蓝绿
   color: ['#1710c0', '#0b9df0', '#74add1', '#abd9e9', '#00fea8', '#00ff0d', '#f5f811', '#f09a09'], // 浅蓝
   // color: ['#00467F', '#A5CC82'] // 蓝绿
   // color: ['#00467F', '#A5CC82'] // 蓝绿
   // color: ['#00467F', '#A5CC82'] // 蓝绿
   // color: ['#00467F', '#A5CC82'] // 蓝绿
  },
 },
 /*工具按钮组*/
 toolbox: {
  show: true,
  orient: 'vertical',
  left: 'right',
  top: 'center',
  feature: {
   saveAsImage: {},
  },
 },
 geo: {
  show: true,
  map: mapName,
  label: {
   normal: {
    show: false,
   },
   emphasis: {
    show: false,
   },
  },
  roam: true,
  itemStyle: {
   normal: {
    areaColor: '#031525',
    borderColor: '#3B5077',
   },
   emphasis: {
    areaColor: '#2B91B7',
   },
  },
 },
 series: [
  {
   name: '散点',
   type: 'scatter',
   coordinateSystem: 'geo',
   data: convertData(data),
   symbolSize: function (val) {
    if (val[2] > 1000) {
     return val[2] / 1000;
    } else {
     return val[2] / 50;
    }
   },
   label: {
    normal: {
     formatter: '{b}',
     position: 'right',
     show: true,
    },
    emphasis: {
     show: true,
    },
   },
   itemStyle: {
    normal: {
     color: '#05C3F9',
    },
   },
  },
  {
   type: 'map',
   map: mapName,
   geoIndex: 0,
   aspectScale: 0.75, //长宽比
   showLegendSymbol: false, // 存在legend时显示
   label: {
    normal: {
     show: true,
    },
    emphasis: {
     show: false,
     textStyle: {
      color: '#fff',
     },
    },
   },
   roam: true,
   itemStyle: {
    normal: {
     areaColor: '#031525',
     borderColor: '#3B5077',
    },
    emphasis: {
     areaColor: '#2B91B7',
    },
   },
   animation: false,
   data: data,
  },
  {
   name: '点',
   type: 'scatter',
   coordinateSystem: 'geo',
   symbol: 'pin', //气泡
   symbolSize: function (val) {
    var a = (maxSize4Pin - minSize4Pin) / (max - min);
    var b = minSize4Pin - a * min;
    b = maxSize4Pin - a * max;
    return a * val[2] + b;
   },
   label: {
    normal: {
     formatter: function (obj) {
      return obj.data.value[2];
     },
     show: true,
     textStyle: {
      color: '#fff',
      fontSize: 9,
     },
    },
   },
   itemStyle: {
    normal: {
     color: '#F62157', //标志颜色
    },
   },
   zlevel: 6,
   data: convertData(data),
  },
  {
   name: 'Top 5',
   type: 'effectScatter',
   coordinateSystem: 'geo',
   data: convertData(
    data
     .sort(function (a, b) {
      return b.value - a.value;
     })
     .slice(0, 5)
   ),
   symbolSize: function (val) {
    if (val[2] > 1000) {
     return val[2] / 3000;
    } else {
     return val[2] / 10;
    }
   },
   showEffectOn: 'render',
   rippleEffect: {
    brushType: 'stroke',
   },
   hoverAnimation: true,
   label: {
    normal: {
     formatter: '{b}',
     position: 'right',
     show: true,
    },
   },
   itemStyle: {
    normal: {
     color: 'yellow',
     shadowBlur: 10,
     shadowColor: 'yellow',
    },
   },
   zlevel: 1,
  },
 ],
};
myChart.setOption(option);
