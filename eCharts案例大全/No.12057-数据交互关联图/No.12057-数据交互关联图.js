
option = {
    title: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 22,
        roam: false,
             focusNodeAdjacency: false,
        draggable : false,
        symbol: 'circle',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return data.name+  '\n' + '(' + data.name + ')';
                },
                color: '#fff',
                position: 'bottom'
            }
        },
        edgeSymbol: ['', 'arrow'],
        edgeSymbolSize: [1, 9],
        
        data: [{
            name: '节点0',
            x: 900,
            y: 400,
            symbol: 'circle',
            symbolSize: 69,
        }, {
            name: '节点1',

        }, {
            name: '节点2',
        }, {
            name: '节点3',
        }, {
            name: '节点4',
        }, {
            name: '节点5',
        }, {
            name: '节点6',
        }, {
            name: '节点7',
        }, {
            name: '节点8',
        }, {
            name: '节点9',
        }, {
            name: '节点10',
        }],
        // links: [],
        links: [{
            source: '节点0',
            target: '节点1'
        }, {
            source: '节点0',
            target: '节点2'
        }, {
            source: '节点0',
            target: '节点3'
        }, {
            source: '节点0',
            target: '节点4'
        }, {
            source: '节点0',
            target: '节点5'
        }, {
            source: '节点0',
            target: '节点6'
        }, {
            source: '节点0',
            target: '节点7'
        }, {
            source: '节点0',
            target: '节点8'
        }, {
            source: '节点0',
            target: '节点9'
        }, {
            source: '节点0',
            target: '节点10'
        }],
      
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0.3,
                color: '#25cfb6'
            }
        },
        force: {
            repulsion: [0, 600],
            edgeLength: [0, 180],
            layoutAnimation: true,
            
        }
    }]
};