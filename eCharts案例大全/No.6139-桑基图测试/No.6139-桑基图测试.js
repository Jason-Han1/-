var color = [{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#7BB1FF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#4185FF' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FF7E7C' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FF6061' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFD18B' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FDAD59' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#9F9BFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#816BFF' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#00CFBF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#05C398' // 100% 处的颜色
    }],
}];

dataname = ['男', '女', '体育特长生', '艺术特长生', '管弦乐类', '民乐类', '舞蹈类', '声乐类', '田径', '游泳', '排球', '击剑'];
linkssource = ['男', '男', '女', '女', '体育特长生', '体育特长生', '体育特长生', '体育特长生', '艺术特长生', '艺术特长生', '艺术特长生', '艺术特长生']
linkstarget = ['体育特长生', '艺术特长生', '体育特长生', '艺术特长生', '管弦乐类', '民乐类', '舞蹈类', '声乐类', '田径', '游泳', '排球', '击剑']
linkvalue = [55, 44, 45, 56, 28, 27, 23, 22, 29, 28, 22, 21]

var colorList = [];
for (var i = 0; i < dataname.length; i++) {
    if (i <= 4) {
        colorList[i] = color[i]
    } else {
        colorList[i] = color[i % 5]
    }
}

var data = []
for (var i = 0; i < dataname.length; i++) {
    data.push({
        name: dataname[i],
        itemStyle: {
            color: colorList[i]
        }
    })
}
var links = [];
for (var i = 0; i < linkssource.length; i++) {
    links.push({
        source: linkssource[i],
        target: linkstarget[i],
        value: linkvalue[i],
    })
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} :{c}人"

    },
    series: {
        type: 'sankey',
        layout: 'none',
        data: data,
        links: links,
        label: {
            normal: {
                color: "#656565",
                fontSize: 14,
            }
        },
        itemStyle: {
            borderWidth: 0,
        },
        lineStyle: {
            color: 'source',
            opacity: 0.25
        }

    }
};