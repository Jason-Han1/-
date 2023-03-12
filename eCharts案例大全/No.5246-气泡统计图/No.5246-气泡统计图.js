var plantCap = [{
    name: '工业',
    value: '222'
}, {
    name: '农业',
    value: '115'
}, {
    name: '互联网',
    value: '113'
}, {
    name: '医疗',
    value: '95'
}, {
    name: '文学',
    value: '92'
}, {
    name: '服装',
    value: '87'
}];
var datalist = [{
    offset: [56, 48],
    symbolSize: 110,

    color: 'rgba(73,188,247,.14)',

}, {

    offset: [30, 70],
    symbolSize: 70,
    color: 'rgba(73,188,247,.14)'
}, {
    offset: [0, 43],
    symbolSize: 60,
    color: 'rgba(73,188,247,.14)'

}, {
    offset: [93, 30],
    symbolSize: 70,
    color: 'rgba(73,188,247,.14)'
}, {
    offset: [26, 19],
    symbolSize: 65,
    color: 'rgba(73,188,247,.14)'
}, {
    offset: [75, 75],
    symbolSize: 60,
    color: 'rgba(73,188,247,.14)'

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
    backgroundColor: "#222222",
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
                color: '#FFF',
                textStyle: {
                    fontSize: '30'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#F30'
            }
        },
        data: datas
    }]

};