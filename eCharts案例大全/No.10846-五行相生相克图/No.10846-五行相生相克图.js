
var color = ['#78a355', '#d93a49', '#8e3e1f', '#dea32c', '#50b7c1'];

function roundDatas(num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        var x = Math.cos((360/num) * i * Math.PI / 180);
        var y = Math.sin((360/num) * i * Math.PI / 180);
        datas.push({
            x: y ,
            y: -x ,
            itemStyle: {
                normal: {
                    color: color[i%5]
                }
            },
        });
    }
    console.log(datas)
    return datas;
}

/////linkDatas end//////


option = {
    series: [

        {
            name: '五行',
            type: 'graph',
            //roam: true,//缩放移动
            //draggable: true,
            focusNodeAdjacency: true,
            edgeSymbol: ['', 'arrow'],
            edgeSymbolSize: [3, 15],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 15
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '',
                    fontSize: 46
                }
            },


            symbol: 'circle',
            symbolSize: 10,
            top: '60',
            left: '200',
            width: '400',
            height: '400',
            data: roundDatas(36)
        }
    ]
};