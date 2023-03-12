var builderJson = {
    "all": 10887,
    "charts": {
        "南山区": 8237,
        "福田区": 7164,
        "宝安区": 5561,
        "光明区": 2778,
        "龙华区": 2355,
        "罗湖区": 4405,
        "龙岗区": 4842,
        "盐田区": 2090,
        "坪山区": 1762,
        "大鹏区": 1593,
    },
    "ie": 9743
};

var downloadJson = {
    "南山区": 8237,
    "福田区": 7164,
    "宝安区": 5561,
    "光明区": 2778,
    "龙华区": 2355,
    "罗湖区": 4405,
    "龙岗区": 4842,
    "盐田区": 2090,
    "坪山区": 1762,
    "大鹏区": 1593,
};


// var waterMarkText = 'ECHARTS';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
// ctx.fillText(waterMarkText, 0, 0);

option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    tooltip: {},
    title: [{
        text: '分析深圳各行政区所参与制定国家标准数量情况',
        subtext: '总计 ' + builderJson.all,
        left: '50%',
        top: 80,
        textAlign: 'center'
    }],
    grid: [{
        top: 150,
        width: '50%',
        bottom: 150,
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: builderJson.all,
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
            data: Object.keys(builderJson.charts).map(function(key) {
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
            data: Object.keys(builderJson.charts).map(function(key) {
                return builderJson.all - builderJson.charts[key];
            })
        },

        {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '45%'],
            data: Object.keys(downloadJson).map(function(key) {
                return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                }
            })
        }
    ]
};