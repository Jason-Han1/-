var chartData = [10.11, 20.11, 30.11, 40.22];
var chartName = ['Q1', 'Q2', 'Q3', 'Q4'];
var unit='元';
var chartColor = ['#f467ce', '#7aabe2', '#ff7123', '#ffc400']
var plantCap = []
var size = 1;
for (let i = 0; i < chartData.length; i++) {
    plantCap.push({
        name: chartName[i],
        value: chartData[i]

    })
}


var datalist = [{
    offset: [15, 55],
    symbolSize: chartData[0] * size,
    opacity: 1,
    color: chartColor[0]
}, {
    offset: [40, 40],
    symbolSize: chartData[1] * size,
    opacity: 1,
    color: chartColor[1]
}, {
    offset: [65, 55],
    symbolSize: chartData[2] * size,
    opacity: 1,
    color: chartColor[2]
}, {
    offset: [90, 40],
    symbolSize: chartData[3] * size,
    opacity: 1,
    color: chartColor[3]
}, ];
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
                position: 'bottom',
                textStyle: {
                    fontSize: 11
                },
                formatter: '{a|' + item.value + '}' + '\n\n' + '{b|' + item.name + '}',
                rich: {
                    a: {
                        fontSize: 20,
                        color: '#000',
                        align:'center',
                        fontWeight:'bold',
                        fontFamily: 'Microsoft YaHei',
                        lineHeight: 10
                    },
                    b: {
                        fontSize: 14,
                        align:'center',
                        color: '#000',
                        fontFamily: 'Microsoft YaHei',
                        lineHeight: 10
                    },
                    
                },
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
     title: {
        text: '单位:  '+unit,
        right:0,
        textStyle: {
            color: '#000',
            fontSize:14,
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

                color: '#000',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#000'
            }
        },
        data: datas
    }]
};