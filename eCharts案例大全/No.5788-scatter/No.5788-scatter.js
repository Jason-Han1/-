var plantCap = [
    ['h', 'A', 10]
];
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

    },

];

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
        bottom: 30
    },


    xAxis: [{
        type: 'category',
        gridIndex: 0,
        // min: 0,
        show: true,
        // max: 100,
        nameLocation: 'middle',
        data: ['h', 'm'],
        // nameGap: 30
        axisLabel:{
            color:'#ccc',
        },
    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        // min: 0,
        show: true,
        // max: 100,
        nameLocation: 'middle',
        data: ['A', 'B'],
        // nameGap: 30
    }],
    series: [{
        type: 'effectScatter', //scatter
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
        // data: datas
        data: [['h', 'A', 10],['h', 'B', 10],['m', 'A', 10],['h', 'B', 10],],
    }]

}