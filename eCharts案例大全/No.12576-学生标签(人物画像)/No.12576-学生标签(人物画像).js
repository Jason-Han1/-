var plantCap = [{
    name: 'SIP',
}, {
    name: 'IPMAN',
}, {
    name: 'mstp',
}, {
    name: 'sdh',
}, {
    name: 'ICT',
}, {
    name: 'DID',
}, {
    name: 'VPN',
}, {
    name: 'IPRAN',
}];
var datalist = [{
    offset: [68, 42],
    symbolSize: 50,
    opacity: .6,
    fontSize: 12,
    color: '#68333f'
}, {
    offset: [45, 55],
    symbolSize: 115,
    opacity: .88,
    color: '#7aabe2'
}, {
    offset: [37, 43],
    symbolSize: 90,
    opacity: .84,
    fontSize: 32,
    color: '#ff7123'
}, {
    offset: [63, 30],
    symbolSize: 90,
    opacity: .8,
    fontSize: 28,
    color: '#ffc400'
}, {
    offset: [26, 60],
    symbolSize: 65,
    opacity: .75,
    fontSize: 24,
    color: '#5e333f'
}, {
    offset: [64, 60],
    symbolSize: 70,
    opacity: .7,
    fontSize: 20,
    color: '#6b3442'
}, {
    offset: [75, 55],
    symbolSize: 60,
    opacity: .68,
    fontSize: 16,
    color: '#8a3647'
}, {
    offset: [56, 48],
    symbolSize: 140,
    opacity: .95,
    color: '#f467ce'
}];
var datas = [];
for (var a = 0; a < plantCap.length; a++) {
    var item = plantCap[a];
    var itemToStyle = datalist[a];
    datas.push({
        name: item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 14,
                    color: '#fff'
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
                borderWidth: '1',
                borderType: 'solid',
                borderColor: '#fff',
                color: '#68b837',
                shadowColor: '#1A47C6',
                shadowBlur: 10
            }
        },
        data: datas
    }]
};