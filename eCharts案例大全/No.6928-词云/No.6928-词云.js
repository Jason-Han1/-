// 插件例子： https://ecomfe.github.io/echarts-wordcloud/example/optionKeywords.html
// 插件地址：https://github.com/ecomfe/echarts-wordcloud

var keywords = {
    "visualMap": 22199,
    "continuous": 10288,
    "contoller": 620,
    "series": 274470,
    "gauge": 12311,
    "detail": 1206,
    "piecewise": 4885,
    "textStyle": 32294,
    "markPoint": 18574,
    "pie": 38929,
    "roseType": 969,
    "label": 37517,
    "emphasis": 12053,
    "yAxis": 57299,
    "name": 15418,
    "type": 22905,
    "gridIndex": 5146,
};

var data = [];
for (var name in keywords) {
    data.push({
        name: name,
        value: Math.sqrt(keywords[name])
    })
}

option = {
    backgroundColor: '#fff',
    series: [{
        type: 'wordCloud',
        sizeRange: [10, 100],
        rotationRange: [0, 0],
        rotationStep: 45,
        gridSize: 2,
        drawOutOfBound: true,
        shape: 'pentagon',
        textStyle: {
            normal: {
                color: '#1457A0'
            }
        },
        data: data.sort(function(a, b) {
            return b.value - a.value;
        })
    }]
}