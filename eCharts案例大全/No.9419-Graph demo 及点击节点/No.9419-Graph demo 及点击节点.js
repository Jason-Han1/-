option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
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
            x: 50,
            y: 500
        }, {
            name: '节点5',
            x: 550,
            y: 50
        }, {
            name: '节点6',
            x: 550,
            y: 500
        }],
        links: [{
            source: '节点1',
            target: '节点3'
        }, {
            source: '节点2',
            target: '节点3'
        }, {
            source: '节点2',
            target: '节点4'
        }, {
            source: '节点1',
            target: '节点4'
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    }]
};


myChart.on('click', (params)=>{
    console.log(params)
    if (params.dataType === "node") {
        alert('点击在节点')
    }
    
    if (params.dataType === "edge") {
        alert("点击在线上")
    }
})