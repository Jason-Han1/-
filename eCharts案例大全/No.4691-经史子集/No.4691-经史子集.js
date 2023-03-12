var builderJson = {
  "all": 10887,
  "charts": {
    "经部": 3237,
    "史部": 2164,
    "子部": 7561,
    "集部": 7778,
   
  },
  "components": {
    "苗族": 2788,
    "满族": 9575,
    "黎族": 9400,
    "壮族": 9466,
    "朝鲜族": 9266,
    "新疆族": 3419,
    "蒙古族": 2984,
    
  },
  "ie": 9743
};

var downloadJson = {
  "经部": 17365,
  "史部": 4079,
  "子部": 6929,
  "集部": 14890
};

var themeJson = {
  "苗族": 1594,
  "满族": 925,
  "黎族": 1608,
  "壮族": 721,
  "朝鲜族": 2179,
  "新疆族": 1982,
  "蒙古族": 2984,
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
        text: '经史子集',
        subtext: '总计 ' + builderJson.all,
        left: '25%',
        textAlign: 'center'
    }, {
        text: '经史子集',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        left: '75%',
        textAlign: 'center'
    }, {
        text: '其他来源',
        subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
        }, 0),
        left: '75%',
        top: '50%',
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
            position: 'right',
            show: true
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            color: '#eee'
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
            position: 'right',
            show: true
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
            color: '#eee'
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
            };
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '75%'],
        data: Object.keys(themeJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: themeJson[key]
            };
        })
    }]
};