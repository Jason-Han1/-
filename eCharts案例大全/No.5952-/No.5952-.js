var plantCap = [{
    name: '供电能\n力不足',
    value: '154'
}, {
    name: '网架结构\n不合理',
    value: '115'
}, {
    name: '电能质\n量问题',
    value: '113'
}, {
    name: '设备\n老化',
    value: '95'
}, {
    name: '落实国\n家政策',
    value: '92'
}];

var datalist = [{
    offset: [35, 73],
    symbolSize: 125,
    values: 40,
    opacity: 1,
    fontSize: 24,
    fontColor: '#7A4602',
    color: 'rgba(255,210,122, 1)',
    borderColor: 'rgba(255,210,122,.4)'
}, {
    offset: [75, 73],
    symbolSize: 95,
    opacity: 1,
    values: 30,
    fontSize: 18,
    fontColor: '#71741E',
    color: 'rgba(234,238,132, 1)',
    borderColor: 'rgba(234,238,132,.4)'
}, {
    offset: [13, 35],
    symbolSize: 80,
    opacity: 1,
    values: 20,
    fontSize: 18,
    fontColor: '#02514C',
    color: 'rgba(127,255,247, 1)',
    borderColor: 'rgba(127,255,247,.4)'
}, {
    offset: [56, 40],
    symbolSize: 70,
    opacity: 1,
    values: 10,
    fontSize: 17,
    fontColor: '#9F2EB6',
    color: 'rgba(232,180,242, 1)',
    borderColor: 'rgba(232,180,242,.4)'
}, {
    offset: [74, 20],
    symbolSize: 62,
    opacity: 1,
    fontSize: 14,
    values: 5,
    fontColor: '#1E5597',
    color: 'rgba(114,217,255, 1)',
    borderColor: 'rgba(114,217,255,.4)'
}, ];
var datas = [];
var data2 = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name,
        value: itemToStyle.offset,
        data: itemToStyle.values,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: itemToStyle.fontSize,
                    color: itemToStyle.fontColor,
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                borderColor: itemToStyle.borderColor,
                opacity: itemToStyle.opacity
            }
        },
    })
    data2.push({
        name: item.name,
        value: itemToStyle.offset,
        data: itemToStyle.values,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: itemToStyle.fontSize,
                    color: itemToStyle.fontColor,
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                borderColor: itemToStyle.borderColor,
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.data.name.replace('\n', '') + ' : ' + params.data.data
        }
    },
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
                borderWidth: '15',
                borderType: 'solid',
            }
        },
        data: data2
    }]
};

myChart.on('click', function(params) {
    if (params) {
        data2.map((item, index) => {
            if (params.dataIndex === index) {
                data2[index].itemStyle.normal.color = 'red';
            } else {
                data2[index].itemStyle.normal.color = datas[index].itemStyle.normal.color;
            }
        })
        myChart.setOption(option)
    }

})