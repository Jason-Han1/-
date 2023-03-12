var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [116.4551,40.2539],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [113.5107,23.2196],
    '阳泉': [121.4648,31.2891],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028],
    '齐齐哈尔':[123.97,47.33],
   '三亚':[110.20,20.02],
   '白城':[122.83,45.62],
  '开封':[114.35,34.79],
   '九江':[115.97,29.71],
   '延吉':[129.52,42.93],
   '牡丹江':[129.36,44.35],
   '南阳':[112.52,33.00],
   '伊宁':[81.33,43.91],
   '信阳':[114.07,32.13],
     '潢川':[115.04,32.13],
   '湛江':[110.3,21.2],
   '洛杉矶':[71.24311, 48.052713],
   '韩国':[126.9779692,40.566535],
   '日本':[135.4648,38.2891],
   '美国':[133.4648,33.2891],
};
// var BEIJING=[
//     [{name:'牡丹江'}, {name:'延吉',value:0}],
//     [{name:'延吉'}, {name:'丹东',value:0}],
//     [{name:'丹东'}, {name:'大连',value:0}],
//     [{name:'大连'}, {name:'青岛',value:0}],
//      [{name:'青岛'}, {name:'上海',value:0}],
//     [{name:'上海'}, {name:'福州',value:0}],
//     [{name:'福州'}, {name:'广州',value:0}],
//   // [{name:'海口'}, {name:'三亚',value:0}],
// ]; //1纵
// var NANJING=[
//     [{name:'哈尔滨'}, {name:'长春',value:0}],
//     [{name:'长春'}, {name:'沈阳',value:0}],
//     [{name:'沈阳'}, {name:'天津',value:0}],
//     [{name:'天津'}, {name:'济南',value:0}],
//     [{name:'济南'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'南京',value:0}],
//     [{name:'南京'}, {name:'上海',value:0}],
   
// ]; //2
// var SHANGHAI=[
//     [{name:'北京'}, {name:'衡水',value:0}],
//     [{name:'衡水'}, {name:'开封',value:0}],
//     [{name:'开封'}, {name:'九江',value:0}],
//     [{name:'九江'}, {name:'南昌',value:0}],
//     [{name:'南昌'}, {name:'惠州',value:0}],
//     [{name:'惠州'}, {name:'广州',value:0}],
//     ];//3纵
// var XIAN=[
//     [{name:'齐齐哈尔'}, {name:'白城',value:0}],
//     [{name:'白城'}, {name:'承德',value:0}],
//     [{name:'承德'}, {name:'北京',value:0}],
//     [{name:'北京'}, {name:'郑州',value:0}],
//      [{name:'郑州'}, {name:'武汉',value:0}],
//     [{name:'武汉'}, {name:'广州',value:0}],
//      [{name:'广州'}, {name:'海口',value:0}],
//     [{name:'海口'}, {name:'三亚',value:0}],
//     ];//4纵
// var GUANGZHOU=[
//     [{name:'呼和浩特'}, {name:'太原',value:0}],
//     [{name:'太原'}, {name:'南阳',value:0}],
//      [{name:'南阳'}, {name:'南宁',value:0}],
//     [{name:'南宁'}, {name:'北海',value:0}],
//     ];//5纵
// var CHENGDU=[
//     [{name:'呼和浩特'}, {name:'西安',value:0}],
//     [{name:'西安'}, {name:'成都',value:0}],
//      [{name:'成都'}, {name:'昆明',value:0}],
//     //[{name:'北京'}, {name:'郑州',value:0}],
//     ];//6纵
// var WUHAN=[
//     [{name:'兰州'}, {name:'成都',value:0}],
//     [{name:'成都'}, {name:'贵阳',value:0}],
//     [{name:'贵阳'}, {name:'南宁',value:0}],
//     //[{name:''}, {name:'广州',value:0}],
// ]; //7纵
// var SHENYANG=[
//     [{name:'兰州'}, {name:'西宁',value:0}],
//     [{name:'西宁'}, {name:'拉萨',value:0}],
//     ];//8纵
// var SYData = [
//     [{name:'天津'}, {name:'北京',value:0}],
//     [{name:'北京'}, {name:'呼和浩特',value:0}],
//     [{name:'呼和浩特'}, {name:'兰州',value:0}],
//     //[{name:'沈阳'}, {name:'大连',value:10}],
// ];//1横
// var WHData = [
//     [{name:'青岛'}, {name:'济南',value:0}],
//     [{name:'济南'}, {name:'石家庄',value:0}],
//     [{name:'石家庄'}, {name:'太原',value:0}],
// [{name:'太原'}, {name:'银川',value:0}],
// ];//2横
// var NJData = [
//     [{name:'连云港'}, {name:'开封',value:0}],
//     [{name:'连云港'}, {name:'上海',value:0}],
//     [{name:'开封'}, {name:'郑州',value:0}],
//     [{name:'郑州'}, {name:'西安',value:0}],
// [{name:'西安'}, {name:'兰州',value:0}],
// [{name:'兰州'}, {name:'乌鲁木齐',value:0}],
// [{name:'乌鲁木齐'}, {name:'伊宁',value:0}],
// ];//3横
// var BJData = [
//     //[{name:'青岛'}, {name:'上海',value:100}],
//     [{name:'上海'}, {name:'南京',value:0}],
//     //[{name:'北京'}, {name:'沈阳',value:80}],
//   // [{name:'北京'}, {name:'长春',value:10}],
//   // [{name:'北京'}, {name:'哈尔滨',value:10}],
//     [{name:'南京'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'潢川',value:0}],
//     [{name:'潢川'}, {name:'信阳',value:0}],
//   [{name:'信阳'}, {name:'西安',value:0}],
//      //[{name:'北京'}, {name:'郑州',value:0}],
//     //[{name:'北京'}, {name:'济南',value:10}]
// ];//4横
// var CDData = [
//     [{name:'上海'}, {name:'南京',value:0}],
//     [{name:'南京'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'武汉',value:0}],
//      [{name:'武汉'}, {name:'重庆',value:0}],
// //[{name:'成都'}, {name:'拉萨',value:10}],
// ];//5横
// var XIData = [
//     //[{name:'青岛'}, {name:'上海',value:100}],
//     [{name:'杭州'}, {name:'南昌',value:0}],
//     //[{name:'北京'}, {name:'沈阳',value:80}],
//   // [{name:'北京'}, {name:'长春',value:10}],
//   // [{name:'北京'}, {name:'哈尔滨',value:10}],
//     [{name:'南昌'}, {name:'长沙',value:0}],
//     [{name:'长沙'}, {name:'贵阳',value:0}],
//     [{name:'贵阳'}, {name:'重庆',value:0}],
//   [{name:'重庆'}, {name:'成都',value:0}],
//      //[{name:'北京'}, {name:'郑州',value:0}],
//     //[{name:'北京'}, {name:'济南',value:10}]
// ];//6横
// var SHData = [
//   [{name:'上海'},{name:'杭州',value:0}],
//     //[{name:'上海'},{name:'广州',value:100}],
//     [{name:'杭州'},{name:'广州',value:0}],
//     [{name:'广州'},{name:'湛江',value:0}],
//   [{name:'湛江'},{name:'北海',value:0}],
//     [{name:'北海'},{name:'昆明',value:0}],
// ];//7横
// var GZData = [
//     [{name:'广州'},{name:'南宁',value:0}],
//   // [{name:'广州'},{name:'重庆',value:30}],
//   // [{name:'广州'},{name:'贵阳',value:30}],
//   // [{name:'广州'},{name:'拉萨',value:30}],
//   // [{name:'广州'},{name:'长沙',value:30}],
//   // [{name:'广州'},{name:'成都',value:75}],
//   [{name:'南宁'},{name:'昆明',value:0}],
//     // [{name:'广州'},{name:'桂林',value:10}],
//   // [{name:'广州'},{name:'南宁',value:10}],
//   // [{name:'广州'},{name:'海口',value:10}]
// ];//8横
// var SH1Data = [
// [{name:'齐齐哈尔'}, {name:'哈尔滨',value:0}],
// [{name:'哈尔滨'}, {name:'牡丹江',value:0}],
// ];
// var GYData = [
// //[{name:'贵阳'}, {name:'昆明',value:0}],
// //[{name:'昆明'}, {name:'贵阳',value:0}],
// ];
var HData = [
//[{name:'广州'}, {name:'上海',value:0}],
[{name:'广州'}, {name:'南京',value:0}],
[{name:'广州'}, {name:'武汉',value:0}],
//[{name:'广州'}, {name:'西安',value:0}],
[{name:'广州'}, {name:'成都',value:0}],
//[{name:'沈阳'}, {name:'北京',value:0}],
[{name:'上海'}, {name:'广州',value:0}],
//[{name:'上海'}, {name:'北京',value:0}],
[{name:'上海'}, {name:'南京',value:0}],
[{name:'南京'}, {name:'北京',value:0}],
//[{name:'南京'}, {name:'武汉',value:0}],
//[{name:'南京'}, {name:'广州',value:0}],
//[{name:'南京'}, {name:'西安',value:0}],
[{name:'武汉'}, {name:'南京',value:0}],
//[{name:'武汉'}, {name:'成都',value:0}],
//[{name:'武汉'}, {name:'广州',value:0}],
[{name:'武汉'}, {name:'西安',value:0}],
//[{name:'武汉'}, {name:'北京',value:0}],
[{name:'西安'}, {name:'成都',value:0}],
//[{name:'西安'}, {name:'武汉',value:0}],
[{name:'西安'}, {name:'广州',value:0}],
[{name:'西安'}, {name:'南京',value:0}],
//[{name:'西安'}, {name:'北京',value:0}],
//[{name:'成都'}, {name:'西安',value:0}],
[{name:'成都'}, {name:'广州',value:0}],
[{name:'成都'}, {name:'武汉',value:0}],
[{name:'北京'}, {name:'沈阳',value:0}],
[{name:'北京'}, {name:'上海',value:0}],
[{name:'北京'}, {name:'南京',value:0}],
[{name:'北京'}, {name:'西安',value:0}],
[{name:'北京'}, {name:'武汉',value:0}],
];
var BData = [
[{name:'广州'}, {name:'广州',value:80}],
[{name:'沈阳'}, {name:'沈阳',value:80}],
[{name:'上海'}, {name:'上海',value:80}],
[{name:'南京'}, {name:'南京',value:80}],
[{name:'武汉'}, {name:'武汉',value:80}],
[{name:'西安'}, {name:'西安',value:80}],
[{name:'成都'}, {name:'成都',value:80}],
];
var SHANGHAIData =
    [ 
    [{name:'北京'}, {name:'北京',value:120}],
    ];

var HAIWAI =
    [ 
    [{name:'伊宁'}, {name:'洛杉矶',value:0}],
    ];
var hanguo=[ [{name:'青岛'}, {name:'韩国',value:0}],];
var riben=[ [{name:'上海'}, {name:'日本',value:0}],];
var meiguo=[ [{name:'上海'}, {name:'美国',value:0}],];
var DIAN =
    [ 
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:''}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    ];
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    console.log(data);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];


var series = [];
[['北京', SHANGHAIData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
       zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: item[0] + ' Top10',
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            brushType: 'stroke'
        },
        
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                formatter: '{b}',
                fontSize: 10
            }
        },
       	symbol: 'pin',
				symbolSize: 50,
        itemStyle: {
            normal: {
                color: 'rgb(255,0,0)',
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

// [['北京', BJData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', SYData]].forEach(function (item, i)
// {   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', DIAN]].forEach(function (item, i)
// {   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
        
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//           "itemStyle": {
// "color": "#FABC61",
// "shadowBlur": 10,
// "shadowColor": "#333"
// },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
[['哈尔滨', HData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
      zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 5,//飞机速度
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: '点',
         symbol:'',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            "period": 10,
             "scale": 3,
             "brushType": "fill"
        },
        label: {
            normal: {
                show: true,
                position: 'insideTopLeft',
                distance:10,
                formatter: '{b}',
                fontSize: 8
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
       "itemStyle": {
"color": "#FABC61",
"shadowBlur": 4,
"shadowColor": "#333"
},
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
[['哈尔滨', BData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
      zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: '点',
         symbol:'',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            "period": 10,
             "scale": 3,
             "brushType": "fill"
        },
        label: {
            normal: {
                show: true,
                position: 'insideTopLeft',
                distance:10,
                formatter: '{b}',
                fontSize: 8
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
       "itemStyle": {
"color": "#FABC61",
"shadowBlur": 4,
"shadowColor": "#333"
},
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
// [['武汉', WHData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['南京', NJData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['西安', XIData]].forEach(function (item, i)
// {
//      series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['成都', CDData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
       
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['北京', BEIJING]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SHANGHAI]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['广州', GUANGZHOU]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['西安', XIAN]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['成都', CHENGDU]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize:4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', SHENYANG]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['南京', NANJING]].forEach(function (item, i)
// {
//     series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['武汉', WUHAN]].forEach(function (item, i)
// {
//     series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SHData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SH1Data]].forEach(function (item, i)
// {
//     //console.log(item,i);
//   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['贵阳', GYData]].forEach(function (item, i)
// {
//     //console.log(item,i);
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 10,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize:3
//         },
//         lineStyle: {
//             normal: {
//                 color: color[i+2],
//                 width: 1,
//                 opacity: 0.6,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//       name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 2,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: true,
//                 position: 'insideTop',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i+2]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['广州', GZData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', HAIWAI]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到欧洲'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', hanguo]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到韩国'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', riben]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到日本'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', meiguo]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到美国'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });

option = {
    backgroundColor: '#404a59',
    title : {
        text: '中国互联网主要节点网络拓扑图',
        //subtext: '数据纯属虚构',
        left: 'center',
        textStyle : {
            color: '#fff',
            fontSize: 30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        }
    },
   /* legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple',
    },*/
    
    geo: {
        map: 'china',
     

        label: {
            
                emphasis: {
                show: true,
                color:'#fff'
            }
        },
        roam: true,
             itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                    }],
                    // globalCoord: true // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        },
    },
    series: series
};var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [116.4551,40.2539],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [113.5107,23.2196],
    '阳泉': [121.4648,31.2891],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028],
    '齐齐哈尔':[123.97,47.33],
   '三亚':[110.20,20.02],
   '白城':[122.83,45.62],
  '开封':[114.35,34.79],
   '九江':[115.97,29.71],
   '延吉':[129.52,42.93],
   '牡丹江':[129.36,44.35],
   '南阳':[112.52,33.00],
   '伊宁':[81.33,43.91],
   '信阳':[114.07,32.13],
     '潢川':[115.04,32.13],
   '湛江':[110.3,21.2],
   '洛杉矶':[71.24311, 48.052713],
   '韩国':[126.9779692,40.566535],
   '日本':[135.4648,38.2891],
   '美国':[133.4648,33.2891],
};
// var BEIJING=[
//     [{name:'牡丹江'}, {name:'延吉',value:0}],
//     [{name:'延吉'}, {name:'丹东',value:0}],
//     [{name:'丹东'}, {name:'大连',value:0}],
//     [{name:'大连'}, {name:'青岛',value:0}],
//      [{name:'青岛'}, {name:'上海',value:0}],
//     [{name:'上海'}, {name:'福州',value:0}],
//     [{name:'福州'}, {name:'广州',value:0}],
//   // [{name:'海口'}, {name:'三亚',value:0}],
// ]; //1纵
// var NANJING=[
//     [{name:'哈尔滨'}, {name:'长春',value:0}],
//     [{name:'长春'}, {name:'沈阳',value:0}],
//     [{name:'沈阳'}, {name:'天津',value:0}],
//     [{name:'天津'}, {name:'济南',value:0}],
//     [{name:'济南'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'南京',value:0}],
//     [{name:'南京'}, {name:'上海',value:0}],
   
// ]; //2
// var SHANGHAI=[
//     [{name:'北京'}, {name:'衡水',value:0}],
//     [{name:'衡水'}, {name:'开封',value:0}],
//     [{name:'开封'}, {name:'九江',value:0}],
//     [{name:'九江'}, {name:'南昌',value:0}],
//     [{name:'南昌'}, {name:'惠州',value:0}],
//     [{name:'惠州'}, {name:'广州',value:0}],
//     ];//3纵
// var XIAN=[
//     [{name:'齐齐哈尔'}, {name:'白城',value:0}],
//     [{name:'白城'}, {name:'承德',value:0}],
//     [{name:'承德'}, {name:'北京',value:0}],
//     [{name:'北京'}, {name:'郑州',value:0}],
//      [{name:'郑州'}, {name:'武汉',value:0}],
//     [{name:'武汉'}, {name:'广州',value:0}],
//      [{name:'广州'}, {name:'海口',value:0}],
//     [{name:'海口'}, {name:'三亚',value:0}],
//     ];//4纵
// var GUANGZHOU=[
//     [{name:'呼和浩特'}, {name:'太原',value:0}],
//     [{name:'太原'}, {name:'南阳',value:0}],
//      [{name:'南阳'}, {name:'南宁',value:0}],
//     [{name:'南宁'}, {name:'北海',value:0}],
//     ];//5纵
// var CHENGDU=[
//     [{name:'呼和浩特'}, {name:'西安',value:0}],
//     [{name:'西安'}, {name:'成都',value:0}],
//      [{name:'成都'}, {name:'昆明',value:0}],
//     //[{name:'北京'}, {name:'郑州',value:0}],
//     ];//6纵
// var WUHAN=[
//     [{name:'兰州'}, {name:'成都',value:0}],
//     [{name:'成都'}, {name:'贵阳',value:0}],
//     [{name:'贵阳'}, {name:'南宁',value:0}],
//     //[{name:''}, {name:'广州',value:0}],
// ]; //7纵
// var SHENYANG=[
//     [{name:'兰州'}, {name:'西宁',value:0}],
//     [{name:'西宁'}, {name:'拉萨',value:0}],
//     ];//8纵
// var SYData = [
//     [{name:'天津'}, {name:'北京',value:0}],
//     [{name:'北京'}, {name:'呼和浩特',value:0}],
//     [{name:'呼和浩特'}, {name:'兰州',value:0}],
//     //[{name:'沈阳'}, {name:'大连',value:10}],
// ];//1横
// var WHData = [
//     [{name:'青岛'}, {name:'济南',value:0}],
//     [{name:'济南'}, {name:'石家庄',value:0}],
//     [{name:'石家庄'}, {name:'太原',value:0}],
// [{name:'太原'}, {name:'银川',value:0}],
// ];//2横
// var NJData = [
//     [{name:'连云港'}, {name:'开封',value:0}],
//     [{name:'连云港'}, {name:'上海',value:0}],
//     [{name:'开封'}, {name:'郑州',value:0}],
//     [{name:'郑州'}, {name:'西安',value:0}],
// [{name:'西安'}, {name:'兰州',value:0}],
// [{name:'兰州'}, {name:'乌鲁木齐',value:0}],
// [{name:'乌鲁木齐'}, {name:'伊宁',value:0}],
// ];//3横
// var BJData = [
//     //[{name:'青岛'}, {name:'上海',value:100}],
//     [{name:'上海'}, {name:'南京',value:0}],
//     //[{name:'北京'}, {name:'沈阳',value:80}],
//   // [{name:'北京'}, {name:'长春',value:10}],
//   // [{name:'北京'}, {name:'哈尔滨',value:10}],
//     [{name:'南京'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'潢川',value:0}],
//     [{name:'潢川'}, {name:'信阳',value:0}],
//   [{name:'信阳'}, {name:'西安',value:0}],
//      //[{name:'北京'}, {name:'郑州',value:0}],
//     //[{name:'北京'}, {name:'济南',value:10}]
// ];//4横
// var CDData = [
//     [{name:'上海'}, {name:'南京',value:0}],
//     [{name:'南京'}, {name:'合肥',value:0}],
//     [{name:'合肥'}, {name:'武汉',value:0}],
//      [{name:'武汉'}, {name:'重庆',value:0}],
// //[{name:'成都'}, {name:'拉萨',value:10}],
// ];//5横
// var XIData = [
//     //[{name:'青岛'}, {name:'上海',value:100}],
//     [{name:'杭州'}, {name:'南昌',value:0}],
//     //[{name:'北京'}, {name:'沈阳',value:80}],
//   // [{name:'北京'}, {name:'长春',value:10}],
//   // [{name:'北京'}, {name:'哈尔滨',value:10}],
//     [{name:'南昌'}, {name:'长沙',value:0}],
//     [{name:'长沙'}, {name:'贵阳',value:0}],
//     [{name:'贵阳'}, {name:'重庆',value:0}],
//   [{name:'重庆'}, {name:'成都',value:0}],
//      //[{name:'北京'}, {name:'郑州',value:0}],
//     //[{name:'北京'}, {name:'济南',value:10}]
// ];//6横
// var SHData = [
//   [{name:'上海'},{name:'杭州',value:0}],
//     //[{name:'上海'},{name:'广州',value:100}],
//     [{name:'杭州'},{name:'广州',value:0}],
//     [{name:'广州'},{name:'湛江',value:0}],
//   [{name:'湛江'},{name:'北海',value:0}],
//     [{name:'北海'},{name:'昆明',value:0}],
// ];//7横
// var GZData = [
//     [{name:'广州'},{name:'南宁',value:0}],
//   // [{name:'广州'},{name:'重庆',value:30}],
//   // [{name:'广州'},{name:'贵阳',value:30}],
//   // [{name:'广州'},{name:'拉萨',value:30}],
//   // [{name:'广州'},{name:'长沙',value:30}],
//   // [{name:'广州'},{name:'成都',value:75}],
//   [{name:'南宁'},{name:'昆明',value:0}],
//     // [{name:'广州'},{name:'桂林',value:10}],
//   // [{name:'广州'},{name:'南宁',value:10}],
//   // [{name:'广州'},{name:'海口',value:10}]
// ];//8横
// var SH1Data = [
// [{name:'齐齐哈尔'}, {name:'哈尔滨',value:0}],
// [{name:'哈尔滨'}, {name:'牡丹江',value:0}],
// ];
// var GYData = [
// //[{name:'贵阳'}, {name:'昆明',value:0}],
// //[{name:'昆明'}, {name:'贵阳',value:0}],
// ];
var HData = [
//[{name:'广州'}, {name:'上海',value:0}],
[{name:'广州'}, {name:'南京',value:0}],
[{name:'广州'}, {name:'武汉',value:0}],
//[{name:'广州'}, {name:'西安',value:0}],
[{name:'广州'}, {name:'成都',value:0}],
//[{name:'沈阳'}, {name:'北京',value:0}],
[{name:'上海'}, {name:'广州',value:0}],
//[{name:'上海'}, {name:'北京',value:0}],
[{name:'上海'}, {name:'南京',value:0}],
[{name:'南京'}, {name:'北京',value:0}],
//[{name:'南京'}, {name:'武汉',value:0}],
//[{name:'南京'}, {name:'广州',value:0}],
//[{name:'南京'}, {name:'西安',value:0}],
[{name:'武汉'}, {name:'南京',value:0}],
//[{name:'武汉'}, {name:'成都',value:0}],
//[{name:'武汉'}, {name:'广州',value:0}],
[{name:'武汉'}, {name:'西安',value:0}],
//[{name:'武汉'}, {name:'北京',value:0}],
[{name:'西安'}, {name:'成都',value:0}],
//[{name:'西安'}, {name:'武汉',value:0}],
[{name:'西安'}, {name:'广州',value:0}],
[{name:'西安'}, {name:'南京',value:0}],
//[{name:'西安'}, {name:'北京',value:0}],
//[{name:'成都'}, {name:'西安',value:0}],
[{name:'成都'}, {name:'广州',value:0}],
[{name:'成都'}, {name:'武汉',value:0}],
[{name:'北京'}, {name:'沈阳',value:0}],
[{name:'北京'}, {name:'上海',value:0}],
[{name:'北京'}, {name:'南京',value:0}],
[{name:'北京'}, {name:'西安',value:0}],
[{name:'北京'}, {name:'武汉',value:0}],
];
var BData = [
[{name:'广州'}, {name:'广州',value:80}],
[{name:'沈阳'}, {name:'沈阳',value:80}],
[{name:'上海'}, {name:'上海',value:80}],
[{name:'南京'}, {name:'南京',value:80}],
[{name:'武汉'}, {name:'武汉',value:80}],
[{name:'西安'}, {name:'西安',value:80}],
[{name:'成都'}, {name:'成都',value:80}],
];
var SHANGHAIData =
    [ 
    [{name:'北京'}, {name:'北京',value:120}],
    ];

var HAIWAI =
    [ 
    [{name:'伊宁'}, {name:'洛杉矶',value:0}],
    ];
var hanguo=[ [{name:'青岛'}, {name:'韩国',value:0}],];
var riben=[ [{name:'上海'}, {name:'日本',value:0}],];
var meiguo=[ [{name:'上海'}, {name:'美国',value:0}],];
var DIAN =
    [ 
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:''}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
     [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    [{name:'丹东'}, {name:'丹东',value:40}],
    ];
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    console.log(data);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];


var series = [];
[['北京', SHANGHAIData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
       zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: item[0] + ' Top10',
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            brushType: 'stroke'
        },
        
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                formatter: '{b}',
                fontSize: 10
            }
        },
       	symbol: 'pin',
				symbolSize: 50,
        itemStyle: {
            normal: {
                color: 'rgb(255,0,0)',
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

// [['北京', BJData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', SYData]].forEach(function (item, i)
// {   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', DIAN]].forEach(function (item, i)
// {   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
        
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//           "itemStyle": {
// "color": "#FABC61",
// "shadowBlur": 10,
// "shadowColor": "#333"
// },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
[['哈尔滨', HData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
      zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 5,//飞机速度
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: '点',
         symbol:'',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            "period": 10,
             "scale": 3,
             "brushType": "fill"
        },
        label: {
            normal: {
                show: true,
                position: 'insideTopLeft',
                distance:10,
                formatter: '{b}',
                fontSize: 8
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
       "itemStyle": {
"color": "#FABC61",
"shadowBlur": 4,
"shadowColor": "#333"
},
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
[['哈尔滨', BData]].forEach(function (item, i)
{
      series.push(
    {
        //name: item[0] + ' Top10',
       type: 'lines',
      zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: 'rgb(255,255,0)',
                width: 1.5,
                opacity: 1,
                curveness: 0.0
            }
        },
        data: convertData(item[1])
    },
    {   
        name: '点',
         symbol:'',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 0,
        rippleEffect: {
            "period": 10,
             "scale": 3,
             "brushType": "fill"
        },
        label: {
            normal: {
                show: true,
                position: 'insideTopLeft',
                distance:10,
                formatter: '{b}',
                fontSize: 8
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
       "itemStyle": {
"color": "#FABC61",
"shadowBlur": 4,
"shadowColor": "#333"
},
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
// [['武汉', WHData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['南京', NJData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['西安', XIData]].forEach(function (item, i)
// {
//      series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['成都', CDData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
       
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['北京', BEIJING]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SHANGHAI]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['广州', GUANGZHOU]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['西安', XIAN]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['成都', CHENGDU]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize:4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['沈阳', SHENYANG]].forEach(function (item, i)
// {
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['南京', NANJING]].forEach(function (item, i)
// {
//     series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['武汉', WUHAN]].forEach(function (item, i)
// {
//     series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SHData]].forEach(function (item, i)
// {
//       series.push({
//         name: item[0] + ' Top10',
//         type: 'lines',
//         zlevel: 1,
//         lineStyle: {
//             normal: 
//             {
//                 color: 'rgb(255,255,0)',
//                 width: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['上海', SH1Data]].forEach(function (item, i)
// {
//     //console.log(item,i);
//   series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['贵阳', GYData]].forEach(function (item, i)
// {
//     //console.log(item,i);
//     series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 10,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize:3
//         },
//         lineStyle: {
//             normal: {
//                 color: color[i+2],
//                 width: 1,
//                 opacity: 0.6,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {
//       name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 2,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: true,
//                 position: 'insideTop',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i+2]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['广州', GZData]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//       zlevel: 2,
//         symbol: ['none', 'none'],
//         symbolSize: 0,
//         effect: {
//             show: true,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//             normal: {
//                 color: 'rgb(255,255,0)',
//                 width: 1.5,
//                 opacity: 1,
//                 curveness: 0.0
//             }
//         },
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', HAIWAI]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到欧洲'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', hanguo]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到韩国'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', riben]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到日本'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });
// [['hehe', meiguo]].forEach(function (item, i)
// {
//       series.push(
//     {
//         //name: item[0] + ' Top10',
//       type: 'lines',
//         symbol: ['none', 'arrow'],
//             symbolSize: 10,
//             zlevel: 1,
//         effect: {
//             show: false,
//             period: 5,//飞机速度
//             trailLength: 0,
//             symbol: 'arrow',
//             symbolSize: 4
//         },
//         lineStyle: {
//                 color: '#25cfb6',
//                 width: 1,
//                 opacity: 0.9,
//                 curveness: .0
//             },
//              label: {
//                         show: true,
//                         position: 'middle',
//                         formatter:'到美国'
//                     },
            
//         data: convertData(item[1])
//     },
//     {   
//         name: item[0] + ' Top10',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         zlevel: 0,
//         rippleEffect: {
//             brushType: 'stroke'
//         },
//         label: {
//             normal: {
//                 show: false,
//                 position: 'insideBottom',
//                 formatter: '{b}',
//                 fontSize: 8
//             }
//         },
//         symbolSize: function (val) {
//             return val[2] / 8;
//         },
//         itemStyle: {
//             normal: {
//                 color: color[i]
//             }
//         },
//         data: item[1].map(function (dataItem) {
//             return {
//                 name: dataItem[1].name,
//                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//             };
//         })
//     });
// });

option = {
    backgroundColor: '#404a59',
    title : {
        text: '中国互联网主要节点网络拓扑图',
        //subtext: '数据纯属虚构',
        left: 'center',
        textStyle : {
            color: '#fff',
            fontSize: 30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        }
    },
   /* legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple',
    },*/
    
    geo: {
        map: 'china',
     

        label: {
            
                emphasis: {
                show: true,
                color:'#fff'
            }
        },
        roam: true,
             itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                    }],
                    // globalCoord: true // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        },
    },
    series: series
};