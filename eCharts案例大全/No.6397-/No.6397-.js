
var plantCap = [{
    name: '具有相关企业资质证书',
    value: '22342个'
}, {
    name: '三年内无违法违规记录',
    value: '29821个'
}, {
    name: '企业注册资产超过300w',
    value: '12919个'
}, {
    name: '不接受联合投标',
    value: '22314个'
}, {
    name: '本项目不得转包、分包',
    value: '22903个'
}, {
    name: '具有独立承担民事责任能力',
    value: '22391个'
}, {
    name: '投标人财产没有处于被接管、冻结或处于破产状态',
    value: '15781个'
}];

var datalist = [{
    offset: [50, 50],
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
    offset: [38, 70],
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
    offset: [23, 43],
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
    offset: [68, 40],
    symbolSize: 90,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#277aec'
    }, {
        offset: 1,
        color: '#57c5ec'
    }]),
}, {
    offset: [38, 20],
    symbolSize: 65,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e54948'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [56, 15],
    symbolSize: 68,
    opacity: .7,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#11c46e'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [65, 75],
    symbolSize: 65,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#ff4141'
    }, {
        offset: 1,
        color: '#ff8989'
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
