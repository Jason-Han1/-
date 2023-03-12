var waterMarkText = '三国';

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

var data = [{
    name: '吕布',
    value: 10000,
    textStyle: {
        normal: {
            color: 'black'
        },
        emphasis: {
            color: 'red'
        }
    }
}, {
    name: '赵云',
    value: 9900
}, {
    name: '典韦',
    value: 9900
}, {
    name: '关羽',
    value: 9000
}, {
    name: '马超',
    value: 8900
}, {
    name: '张飞',
    value: 8900
}, {
    name: '黄忠',
    value: 8500
}, {
    name: '许褚',
    value: 8400
}, {
    name: '姜维',
    value: 8300
}]

var maskImage = new Image();
maskImage.src = '/asset/get/s/data-1500255880404-H1gqIqYrZ.png';

option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    title: {
        text: "三国名将",
        link: 'https://github.com/ecomfe/echarts-wordcloud',
        subtext: '一吕二赵三典韦，四关五马六张飞，七黄八许九姜维',
        sublink: 'http://data-visual.cn',
    },
    tooltip: {},
    series: [{
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 50],
        rotationRange: [0, 0],
        //shape: 'diamond',//词云形成的图形
        maskImage: maskImage,//自定义词云形成图形
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: data
    }]
};