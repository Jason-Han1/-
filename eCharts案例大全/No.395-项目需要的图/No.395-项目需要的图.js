var plantCap = [{
    name: '一线',
    value: '154'
}, {
    name: '二线',
    value: '115'
}, {
    name: '三线',
    value: '113'
}, {
    name: '四线',
    value: '95'
}, {
    name: '六线',
    value: '92'
}, {
    name: '五线',
    value: '87'
}, {
    name: '七线',
    value: '87'
}, {
    name: '八线',
    value: '60'
}];

var datalist = [{
    offset: [56, 48],
    symbolSize: 154,
    opacity: .95,
    color: 'rgba(104,184,55, 1)'
},  {
    offset: [20, 43],
    symbolSize: 115,
    opacity: .84,
    color: 'rgba(104,184,55, 0.95)'
}, {
    offset: [83, 35],
    symbolSize: 113,
    opacity: .8,
    color: 'rgba(104,184,55, 0.95)'
}, {
    offset: [36, 30],
    symbolSize: 95,
    opacity: .75,
    color: 'rgba(104,184,55, 0.90)'
}, {
    offset: [64, 20],
    symbolSize: 92,
    opacity: .7,
    color: 'rgba(104,184,55, 0.90)'
}, {
    offset: [35, 45],
    symbolSize: 87,
    opacity: .68,
    color: 'rgba(104,184,55, 0.85)'
}, {
    offset: [80, 52],
    symbolSize: 60,
    opacity: .7,
    color: 'rgba(104,184,55, 0.80)'
},{
    offset: [40, 65],
    symbolSize: 60,
    opacity: .88,
    color: 'rgba(104,184,55, 0.95)'
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
                    fontSize: 14,
                    color:'#fff'
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
                borderWidth: '4',
                borderType: 'solid',
                borderColor: '#fff',
                color: '#68b837',
                shadowColor: '#68b837',
                shadowBlur: 10
            }
        },
        data: datas
    }]
};