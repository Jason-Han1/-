var geoCoordMap = {
  "吐鲁番": [89.19, 42.91],
  "乌兰乌苏": [85.94, 44.27],
  "格尔木": [94.9, 36.41],
  "西宁市": [101.74, 36.56],
  "玉树州": [96.97, 33.03],
  "龙游县": [118.88, 28.97],
  "称多县": [97.12, 33.35],
  "大通县": [101.67, 36.92],
  "贵德县": [101.47, 36.02],
  "贵南县": [100.75, 35.57],
  "海北": [100.88, 36.96],
  "海东": [102.12, 36.5],
  "海西": [97.37, 37.37],
  "河南县": [100.76, 33.28],
  "化隆县": [102.3, 36.11],
  "黄南州": [102, 35.52],
  "湟源县": [101.28, 36.72],
  "湟中县": [101.57, 36.49],
  "乐都区": [102.38, 36.49],
  "民和县": [102.8, 36.3],
  "囊谦县": [96.47, 32.23],
  "诺木洪": [96.46, 36.43],
  "曲麻莱县": [95.8, 34.13],
  "甘德县": [99.89, 33.95],
  "果洛州": [100.24, 34.47],
  "杂多县": [95.3, 32.89],
  "宁化县": [116.64, 26.26],
  "仙游县": [118.7, 25.37],
  "永春县": [118.3, 25.34],
  "尤溪县": [117.61, 26.23],
  "古田县": [119.52, 26.65],
  "安溪县": [118.58, 24.93],
  "连城县": [116.75, 25.72],
  "龙岩市": [116.81, 24.76],
  "福安市": [119.65, 27.09],
  "霞浦县": [120, 26.89],
  "漳州市": [117.35, 24.52],
  "南靖县": [117.35, 24.51],
  "龙海市": [117.79, 24.44],
  "漳浦": [117.61, 24.12],
  "诏安": [117.16, 23.73],
  "浦城县": [118.55, 27.92],
  "建瓯市": [118.32, 27.05],
  "南平": [118.16, 26.65],
  "明溪县": [117.18, 26.36],
  "大洼县": [122.06, 41],
  "常德市": [111.69, 29.05],
  "锦州市": [121.15, 41.13],
  "开原市": [124.03, 42.53],
  "武冈市": [110.61, 26.73],
  "新民市": [122.83, 42],
  "资兴市": [113.39, 25.95],
  "许昌": [113.81, 34.02],
  "玉林市": [110.14, 22.64],
  "高密市": [119.75, 36.38],
  "扬州市": [119.42, 32.39],
};

var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value*5)
      });
    }
  }
  return res;
};

option = {
  backgroundColor: '#fff',
  
  visualMap: {
    min: 0,
    max: 50,
    calculable: true,
    inRange: {
      symbolSize: [1, 50],
      color: ['#d94e5d']
    },
    textStyle: {
      color: '#000'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#fff',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [{
    name: 'pm2.5',
    type: 'scatter',
    coordinateSystem: 'geo',
    data: convertData([
      { name: "吐鲁番",value: 2 },
      { name: "乌兰乌苏",value: 5 },
      { name: "格尔木",value: 5 },
      { name: "西宁市",value: 5 },
      { name: "玉树州",value: 3 },
      { name: "龙游县",value: 1 },
      { name: "称多县",value: 1 },
      { name: "大通县",value: 1 },
      { name: " 贵德县",value: 1 },
      { name: "贵南县",value: 1 },
      { name: "海北",value: 3 },
      { name: "海东",value: 2 },
      { name: "海西",value: 2 },
      { name: "河南县",value: 1 },
      { name: "化隆县",value: 1 },
      { name: " 黄南州",value: 1 },
      { name: "湟源县",value: 1 },
      { name: "湟中县",value: 1 },
      { name: "乐都区",value: 1 },
      { name: "民和县",value: 1 },
      { name: "囊谦县",value: 2 },
      { name: "诺木洪",value: 3 },
      { name: "曲麻莱县",value: 1 },
      { name: "甘德县",value: 1 },
      { name: " 果洛州",value: 1 },
      { name: "杂多县",value: 1 },
      { name: "宁化县",value: 2 },
      { name: "仙游县",value: 1 },
      { name: "永春县",value: 1 },
      { name: "尤溪县",value: 2 },
      { name: "古田县",value: 1 },
      { name: "安溪县",value: 1 },
      { name: "连城县",value: 2 },
      { name: "龙岩市",value: 1 },
      { name: "福安市",value: 1 },
      { name: "霞浦县",value: 1 },
      { name: "漳州市",value: 3 },
      { name: "南靖县",value: 1 },
      { name: "龙海市",value: 1 },
      { name: "漳浦",value: 1 },
      { name: "诏安",value: 1 },
      { name: "浦城县",value: 1 },
      { name: "建瓯市",value: 1 },
      { name: "南平",value: 4 },
      { name: "明溪县",value: 1 },
      { name: "大洼县",value: 2 },
      { name: "常德市",value: 13 },
      { name: "锦州市",value: 6 },
      { name: "开原市",value: 3 },
      { name: "武冈市",value: 15 },
      { name: "新民市",value: 19 },
      { name: "资兴市",value: 2 },
      { name: "许昌",value: 2 },
      { name: "玉林市",value: 1 },
      { name: "高密市",value: 1 },
      { name: "扬州市",value: 1 },
      
      ]),
    symbolSize: 12,
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      emphasis: {
        borderColor: '#fff',
        borderWidth: 1
      }
    }
  }]
}