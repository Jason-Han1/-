app.title = '水印 - ECharts 下载统计'

var builderJson = {
  "all": 119,
  "charts": {
    "软件开发":27,
    "技术工程师":22,
    "其他":22,
    "教师":21,
    "JAVA":12,
    "工程师":4,
    "Android":2,
    "后端开发":2,
    "前端开发":2,
    "数据库开发":2,
    ".net":1,
    "算法":1,
    "游戏策划":1,
    "运营":1
  },
  "components": {
    "教师":32,
    "软件开发":21,
    "其他":16,
    "测试":15,
    "技术工程师":14,
    "产品":7,
    "安卓":2,
    "JAVA":2,
    "工程师":2,
    "数据分析":2,
    "硬件工程师":2,
    "VR":1,
    "后端开发":1,
    "运营":1

  },
  "ie": 9743
};

var downloadJson = {
  "echarts.min.js": 17365,
  "echarts.simple.min.js": 4079,
  "echarts.common.min.js": 6929,
  "echarts.js": 14890
};

var themeJson = {
  "dark.js": 1594,
  "infographic.js": 925,
  "shine.js": 1608,
  "roma.js": 721,
  "macarons.js": 2179,
  "vintage.js": 1982
};

var waterMarkText = '';

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
        text: '在线构建',
        subtext: '总计 ' + builderJson.all,
        x: '25%',
        textAlign: 'center'
    }, {
        text: '各版本下载',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%',
        textAlign: 'center'
    }, {
        text: '主题下载',
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