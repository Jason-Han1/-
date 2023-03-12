var color = ['#78a355', '#d93a49', '#8e3e1f', '#dea32c', '#50b7c1'];

function roundDatas(num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        var x = Math.cos((360 / num) * i * Math.PI / 180);
        var y = Math.sin((360 / num) * i * Math.PI / 180);
        datas.push({
            x: y * 2,
            y: -x * 2,
            itemStyle: {
                normal: {
                    color: color[i % 5]
                }
            },
        });
    }
    for (var i = 0; i < num; i++) {
        var x = Math.cos((360 / num) * i * Math.PI / 180);
        var y = Math.sin((360 / num) * i * Math.PI / 180);
        datas.push({
            x: y * 2,
            y: -x * 2 + 6,
            itemStyle: {
                normal: {
                    color: color[i % 5]
                }
            },
        });
    }
    for (var i = 0; i < num; i++) {
        var x = Math.cos((360 / num) * i * Math.PI / 180);
        var y = Math.sin((360 / num) * i * Math.PI / 180);
        datas.push({
            x: y * 2,
            y: -x * 2 + 6,
            itemStyle: {
                normal: {
                    color: color[i % 5]
                }
            },
        });
    }
    for (var i = 0; i < num; i++) {
        var x = Math.cos((360 / num) * i * Math.PI / 180);
        var y = Math.sin((360 / num) * i * Math.PI / 180);
        datas.push({
            x: y * 2 + 6,
            y: -x * 2,
            itemStyle: {
                normal: {
                    color: color[i % 5]
                }
            },
        });
    }
    console.log({
        x: y * 2 + 6,
        y: -x * 2,
        itemStyle: {
            normal: {
                color: color[i % 5]
            }
        },
    })
    datas.push({
        x: 0,
        y: 6
    });
    datas.push({
        x: 0,
        y: 0
    });
       datas.push({
        x:6,
        y: 0
    })
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
            symbolSize: 30,
            data: roundDatas(20)
        }
    ]
};