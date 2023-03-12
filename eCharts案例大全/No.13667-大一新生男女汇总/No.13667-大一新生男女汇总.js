
app.title = '水印 - ECharts 性别统计'

var builderJson = {
  "all":500,
  "charts": {
    "传媒": 394,
    "体育": 33,
    "信息技术": 95,
    "化学": 128,
    "历史文化":96,
    "外国语": 298,
    "政法": 145,
    "教育科学":346,
    "数学":35,
    "文学": 176,
    "旅游与地理科学": 172,
    "物理": 108,
    "环境科学与工程": 114,
    "经济":183,
    "管理": 257,
    "美术": 258,
    "音乐": 90,
    "计算机":153
  },
  "components": {
    "传媒": 122,
    "体育": 171,
    "信息技术":80,
    "化学":28,
    "历史文化":18,
    "外国语":37,
    "政法":31,
    "教育科学":151,
    "数学": 29,
    "文学": 24,
    "旅游与地理科学": 38,
     "物理": 48,
     "环境科学与工程":49,
     "经济": 51,
     "管理":52,
     "美术": 117,
     "音乐": 30,
     "计算机": 103
  },
  "ie": 9743
};

var downloadJson = {
  "传媒学院": 0.76,
    "信息技术学院": 0.16,
     "化学学院": 0.54,
  "历史文化学院": 0.82,
  "外国语学院": 0.84,
   "政法学院": 0.89,
    "教育科学学院":0.82,
     "数学学院": 0.84,
      "文学院": 0.88,
       "旅游与地理科学学院":0.82,
        "物理学院": 0.70,
         "环境科学与工程学院":0.70,
          "经济学院":0.78,
           "管理学院": 0.83,
            "美术学院": 0.69,
             "音乐学院":0.75,
              "计算机学院": 0.58,
  "生命科学学院": 0.88
};

var themeJson = {
  "传媒学院": 0.24,
  "体育学院":0.84,
  "信息技术学院":0.46,
  "化学学院": 0.18,  
  "历史文化学院":0.16,
  "外国语学院":0.11, 
   "政法学院":0.18,
  "教育科学学院": 0.10, 
   "数学学院": 0.16,
  "文学院": 0.12, 
   "旅游与地理科学学院": 0.18,
  "物理学院":0.31, 
  "环境科学与工程学院": 0.30,
   "经济学院": 0.22,
  "管理学院":0.17, 
   "美术学院":0.31,
  "计算机学院":0.40, 
  "生命科学学院": 0.12
};

var waterMarkText = 'ECHARTS';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);

option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    tooltip: {},
    title: [{
        text: '大一新生男女汇总',
        subtext: '总计 ' + builderJson.all,
        x: '25%',
        textAlign: 'center'
    }, {
        text: '各学院女生占比',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%',
        textAlign: 'center'
    }, {
        text: '各学院男生占比',
        subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
        }, 0),
        x: '75%',
        y: '50%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }, {
        top: '55%',
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        xAxisIndex: 1,
        yAxisIndex: 1,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        silent: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '25%'],
        data: Object.keys(downloadJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
            }
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '75%'],
        data: Object.keys(themeJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: themeJson[key]
            }
        })
    }]
}