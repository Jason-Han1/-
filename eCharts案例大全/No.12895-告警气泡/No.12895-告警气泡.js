var plantCap = [{
    name: '紧急告警',
    value: '2'
}, {
    name: '一般告警',
    value: '11'
}, {
    name: '重要告警',
    value: '5'

}];

var datalist = [{
    offset: [80, 53],
    symbolSize: 120,
    opacity: .95,
    color: '#ff0000'//红色
}, {
    offset: [30, 73],
    symbolSize: 90,
    opacity: .88,
    color: '#7aabe2'//蓝色
}, {
    offset: [30, 33],
    symbolSize: 95,
    opacity: .84,
    color: '#ff7123'//橙色


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
                    fontSize: 19
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
                color: '#00acea'
            }
        },
        data: datas
    }]
};