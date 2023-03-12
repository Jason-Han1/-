option = {
    color:['#7db0f4','#f7ad64','#64dbf7'],
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize:100,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500,
                symbolSize:50,
                itemStyle:{
                    color:'#e75368',
                    shadowBlur:10,
                    shadowColor:'rgba(231,83,104)'
                }
            }],
            // links: [],
            links: [ {
                source: '节点4',
                target: '节点3',
                label:{
                    show:true,
                    formatter:'法人',
                    color:'#558fe7'
                }
            }],
            lineStyle: {
                color:'#cce1fd'
            }
        }
    ]
};