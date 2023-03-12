
var plantCap = [{
    name: '2018Ⅰ～Ⅲ类',
    value: '56.36'
}, {
    name: '2019Ⅰ～Ⅲ类',
    value: '59.53'
}, {
    name: '2020Ⅰ～Ⅲ类',
    value: '71.93'
}, {
    name: '2018Ⅳ～Ⅴ类',
    value: '37.05'
}, {
    name: '2019Ⅳ～Ⅴ类',
    value: '35.71'
}, {
    name: '2020Ⅳ～Ⅴ类',
    value: '25.33'
}, {
    name: '2018劣Ⅴ类',
    value: '6.58'
}, {
    name: '2019劣Ⅴ类',
    value: '4.72'
}, {
    name: '2020劣Ⅴ类',
    value: '2.78'
}];
var datalist = [{
    offset: [50, 60],
    symbolSize: 120,
    opacity: .95,
   	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#29c0fb'
    }, {
        offset: 1,
        color: '#2dc5b9'
    }]),
}, {
    offset: [50, 70],
    symbolSize: 95,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#35d17e'
    }, {
        offset: 1,
        color: '#49ddb2'
    }]),
}, {
    offset: [68, 80],
    symbolSize: 90,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e5d273'
    }, {
        offset: 1,
        color: '#e4a37f'
    }]),
}, {
    offset: [30, 40],
    symbolSize: 90,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#29c0fb'
    }, {
        offset: 1,
        color: '#2dc5b9'
    }]),
}, {
    offset: [30, 40],
    symbolSize: 65,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#35d17e'
    }, {
        offset: 1,
        color: '#49ddb2'
    }]),
}, {
    offset: [20, 30],
    symbolSize: 68,
    opacity: .7,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e5d273'
    }, {
        offset: 1,
        color: '#e4a37f'
    }]),
}, {
    offset: [6, 7],
    symbolSize: 65,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#29c0fb'
    }, {
        offset: 1,
        color: '#2dc5b9'
    }]),
}, {
    offset: [4, 7],
    symbolSize: 65,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#35d17e'
    }, {
        offset: 1,
        color: '#49ddb2'
    }]),
}, {
    offset: [2, 7],
    symbolSize: 65,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e5d273'
    }, {
        offset: 1,
        color: '#e4a37f'
    }]),
}];
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name+'\n'+item.value,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    lineHeight: 17,
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    backgroundColor: '#20203e',
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [{
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: datas
    }]
};