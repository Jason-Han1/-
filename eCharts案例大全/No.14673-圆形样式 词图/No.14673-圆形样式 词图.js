var plantCap = [{
    name: '四川',
    value: '120',

}, {
    name: '河北',
    value: '115',

}, {
    name: '江苏',
    value: '113',

}, {
    name: '河南',
    value: '95',

}, {
    name: '上海',
    value: '92',

}, {
    name: '北京',
    value: '87',

}, {
    name: '深圳',
    value: '87',

}, {
    name: '广州',
    value: '60',

}]

var datalist = [{
    offset: [60, 50],
    symbolSize: 84,
    opacity: .95,
    fontSize: '18'
}, {
    offset: [55, 42],
    symbolSize: 80,
    opacity: .88,
    fontSize: '17.1'
}, {
    offset: [65, 43],
    symbolSize: 71,
    opacity: .84,
    fontSize: '15.2'
}, {
    offset: [56, 57],
    symbolSize: 60,
    opacity: .8,
    fontSize: '12.85'
}, {
    offset: [64, 57],
    symbolSize: 58,
    opacity: .75,
    fontSize: '12.43'
}, {
    offset: [54, 50],
    symbolSize: 55,
    opacity: .7,
    fontSize: '11.8'
}, {
    offset: [66, 50.5],
    symbolSize: 50,
    opacity: .68,
    fontSize: '10.7'
}, {
    offset: [52, 55],
    symbolSize: 40,
    opacity: .6,
    fontSize: '8.57'
}]
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name + '\n' + item.value + 'MW',
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: itemToStyle.fontSize
                }
            },

        },
        itemStyle: {
            normal: {
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: '#fff',
        textStyle: {
            color: '#999'
        },
        formatter: (item) => {
            if (item.data[2]) {
                return `${item.data[2]}<br/>  坐标: x ${item.data[0]}  y ${item.data[1]}`;
            }
        }
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30


    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30,
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
                },
                emphasis: {
                    color: '#eea631',
                    opacity: 1
                }
            },
            data: datas
        }

    ]
};