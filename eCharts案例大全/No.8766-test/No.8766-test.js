function createNodes(count) {
    var nodes = [];
    for (var i = 0; i < count; i++) {
        nodes.push({
            id: i
        });
    }
    return nodes;
}

function createEdges(count) {
    var edges = [];
    if (count === 2) {
        return [[0, 1]];
    }
    for (var i = 0; i < count; i++) {
        edges.push([i, 0]);
    }
    return edges;
}

var datas = [];
for (var i = 0; i < 1; i++) {
    datas.push({
        nodes: createNodes(i + 100),
        edges: createEdges(i + 100)
    });
}

option = {
    series: datas.map(function (item, idx) {
        return {
            type: 'graph',
            layout: 'force',
            // draggable : true,
            data: item.nodes,
            width: '100%',
            height: '100%',
            symbolSize: 50, //图形大小
            focusNodeAdjacency : true,
            roam: true,
            force: {
                gravity: .8,
                repulsion: 750,//相距距离
                edgeLength: [150, 200],
                layoutAnimation: false
            },
            edges: item.edges.map(function (e) {
                return {
                    source: e[0],
                    target: e[1]
                };
            })
        };
    })
};
