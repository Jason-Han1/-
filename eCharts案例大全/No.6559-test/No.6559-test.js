var plantCap = [{
    name: 'A',
    value: '53%'
}, {
    name: 'B',
    value: '46%'
}, {
    name: 'C',
    value: '5T'
}, {
    name: 'D',
    value: '95M'
}, {
    name: 'E',
    value: '57%'
}, {
    name: 'F',
    value: '43%'
}];
var datalist = [{
    offset: [56, 48],
    symbolSize: 110,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(67, 186, 255, 0)',
    }, {
        offset: 1,
        color: 'rgb(67, 186, 255)'
    }])

}, {
    offset: [30, 70],
    symbolSize: 70,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(67, 186, 255, 0)',
    }, {
        offset: 1,
        color: 'rgb(67, 186, 255)'
    }])
}, {
    offset: [5, 43],
    symbolSize: 60,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(27, 96, 255, 0)',
    }, {
        offset: 1,
        color: 'rgb(27, 96, 255)'
    }])

}, {
    offset: [93, 30],
    symbolSize: 70,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(48, 191, 191, 0)',
    }, {
        offset: 1,
        color: 'rgb(48, 191, 191)'
    }])
}, {
    offset: [26, 25],
    symbolSize: 65,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(0, 166, 166, 0)',
    }, {
        offset: 1,
        color: 'rgb(0, 166, 166)'
    }])
}, {
    offset: [75, 75],
    symbolSize: 60,
    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(84, 136, 255, 0)',
    }, {
        offset: 1,
        color: 'rgb(84, 136, 255)'
    }])

}];

var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.value + '\n' + item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 14
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
        type: 'effectScatter',//scatter
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#FFF',
                lineHeight: 15,
                textStyle: {
                    fontSize: '30'
                }
            },
        },
        itemStyle: {
            normal: {
                borderWidth: '1',
                borderType: 'solid',
                borderColor: '#00ffff',
                shadowColor: 'rgba(0, 0, 0, .6)',
                shadowBlur: 10,

            }
        },
        data: datas
    }]

}