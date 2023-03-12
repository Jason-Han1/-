var plantCap = [
    { name: '1工具', value: 100000, id: '001' }, 
    { name: '2社交', value: 900, id: '002' }, 
    { name: '3汽车', value: 800, id: '003' }, 
    { name: '4母婴', value: 600, id: '004' }, 
    { name: '5理财', value: 300, id: '005' }, 
    { name: '6视听', value: 700, id: '006' }, 
    { name: '7游戏', value: 100, id: '007' }, 
    { name: '8教育', value: 600, id: '008' }, 
    { name: '9健康', value: 600, id: '009' }, 
    { name: '10购物', value: 600, id: '010' }, 
    { name: '健康1', value: 300, id: '011' },
    { name: '健康2', value: 300, id: '012' },
    { name: '健康3', value: 900, id: '013' },
    { name: '健康4', value: 900, id: '014' },
    { name: '健康5', value: 900, id: '015' },
    { name: '健康6', value: 900, id: '016' },
    { name: '健康7', value: 900, id: '017' },
    { name: '健康8', value: 900, id: '018' },
    { name: '健康9', value: 900, id: '019' },
    { name: '健康10', value: 900, id: '020' },
];

var datalist = [
    { offset: 80, color: '#f467ce' }, 
    { offset: 30, color: '#7aabe2' }, 
    { offset: 60, color: '#ff7123' }, 
    { offset: 90, color: '#ffc400' }, 
    { offset: 30, color: '#5e333f' }, 
    { offset: 60, color: '#6b3442' }, 
    { offset: 20, color: '#8a3647' }, 
    { offset: 80, color: '#68333f' }, 
    { offset: 40, color: '#68333f' }, 
    { offset: 70, color: '#68333f' }, 
    { offset: 20, color: '#68333f' },
    { offset: 50, color: '#68333f' },
    { offset: 90, color: '#68333f' },
    { offset: 30, color: '#68333f' },
    { offset: 60, color: '#68333f' },
    { offset: 80, color: '#68333f' },
    { offset: 40, color: '#68333f' },
    { offset: 60, color: '#68333f' },
    { offset: 20, color: '#68333f' },
    { offset: 90, color: '#68333f' },
];

var minSymbolSize = 40, maxSymbolSize = 100, sum = 0, val = [];
for (var i = 0; i < plantCap.length; i++) {
    sum += plantCap[i].value;
    val.push(plantCap[i].value)
}
var datas = [], len = 100/plantCap.length, leftLen = len/2, maxVal = Math.max.apply(this, val);
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    var symbolsize = (item.value/sum)*maxVal;
    if(symbolsize >= maxSymbolSize){
        symbolsize = maxSymbolSize
    }else if(symbolsize < minSymbolSize){
        symbolsize = minSymbolSize
    }
    var offset = [leftLen, itemToStyle.offset, item.id];
    leftLen += len;
    datas.push({
        name: item.value + '\n' + item.name,
        value: offset,
        symbolSize: symbolsize,
        itemStyle: {
            normal: {
                color: itemToStyle.color,
            }
        },
    })
}
option = {
    grid: {
        show: false,
        left: 50,
        right: 50,
        top: 0,
        bottom: 0
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
    }],
    series: [{
        type: 'scatter',
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: 12
                }
            },
        },
        data: datas
    }]
};

myChart.on('click', function(params) {
    console.log(params)
    var id = params.value[2]
    console.log(id)
    // 获取点击，然后重新获取数据，重新渲染option
});
