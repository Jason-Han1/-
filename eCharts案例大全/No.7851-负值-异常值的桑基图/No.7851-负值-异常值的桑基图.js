option = {
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
    series: {
        type: 'sankey',
        layout: 'none',
        focusNodeAdjacency: 'allEdges',
        lineStyle: {
            borderColor: '#ddd',
            borderWidth: 1,
            color: 'source',
        },
        bottom: 100,
        data: [{
            name: 'a',
            itemStyle: {color: 'red'},
            value: 15
        }, {
            name: 'b',
            itemStyle: {color: 'green'},
            //value: 10
        }, {
            itemStyle: {color: 'yellow'},
            name: 'a1'
        }, {
            itemStyle: {color: 'blue'},
            name: 'a2'
        }, {
            itemStyle: {color: 'steelblue'},
            name: 'b1'
        }, {
            itemStyle: {color: 'black'},
            name: 'c'
        }],
        links: [{
            source: 'a',
            target: 'a1',
            value: 5
        }, {
            source: 'a',
            target: 'a2',
            value: 3
        }, {
            source: 'b',
            target: 'b1',
            value: 8
        }, {
            source: 'b',
            target: 'c',
            value: -2
        }, {
            source: 'a',
            target: 'b1',
            value: 3
        }, {
            source: 'b1',
            target: 'a1',
            value: 1
        }, {
            source: 'b1',
            target: 'c',
            value: 5
        }]
    }
};
