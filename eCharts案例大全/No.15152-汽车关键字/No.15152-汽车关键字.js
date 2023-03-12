app.title = '水印 - ECharts 下载统计'

var builderJson = {
  "all": 10887,
  "charts": {
    "外观": 3237,
    "质感": 2164,
    "发动机": 7561,
    "软件": 7778,
    "座位": 7355,
    "高端大气": 2405,
    "科技感": 1842,
    "细节": 2090,
    "内饰": 1762,
    "持久": 1593,
    "省油": 2060,
    "拉风": 1537,
    "流线型": 1908,
    "独特": 2107,
    "引擎": 1692,
    "加速度": 1568
  },
  "components": {
    "质量差": 2788,
    "售后糟糕": 9575,
    "阉割版": 9400,
    "噪音": 9466,
    "做工粗糙": 9266,
    "广告过度": 3419,
    "线条过硬": 2984,
    "塑料感": 2739,
    "钥匙": 2744,
    "熄火": 2466,
    "生锈": 3034,
    "抖动": 1945
  },
  "ie": 9743
};

var downloadJson = {
  "XX网": 17365,
  "今日头条": 4079,
  "YY资讯": 6929,
  "汽车之家": 14890,
  "ZZ站点":4232
};

var themeJson = {
  "XX网网站": 1594,
  "YY资讯": 925,
  "ZZ站点": 1608,
  "汽车之家": 721,
  "今日头条": 2179,
  "AA资讯": 1982
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
        text: '正面内容',
        subtext: '总计 ' + builderJson.all,
        x: '25%',
        textAlign: 'center'
    }, {
        text: '正面内容来源',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%',
        textAlign: 'center'
    }, {
        text: '负面内容来源',
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