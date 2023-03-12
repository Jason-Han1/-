option = {
    title: {
        text: 'topology'
    },
    tooltip: {},
    legend: {
        show: true,
        data: [{
            name: '集群1'
        }, {
            name: '集群2'
        }, {
            name: '集群3'
        }]
    },
    series: [{
        name: 'topology',
        type: 'graph',
        layout: 'force',
        edgeSymbol:['arrow'],
        draggable: true,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                    fontSize: '12rem',
                }
            }
        },
        roam: true,
        focusNodeAdjacency: true,
        categories: [{
            name: '集群1'
        }, {
            name: '集群2'
        }, {
            name: '集群3'
        }, ],
        data: [{
                category: 0,
                name: "服务器1",
                tooltip:{
                    formatter:'{b}<br />192.168.1.1'
                }
            },
            {
                category: 0,
                name: "服务器2",
                tooltip:{
                    formatter:'{b}<br />192.168.1.2'
                }
            },
            {
                category: 0,
                name: "服务器3",
                tooltip:{
                    formatter:'{b}<br />192.168.1.3'
                }
            },
            {
                category: 1,
                name: "服务器4"
            },
            {
                category: 1,
                name: "服务器5"
            },
            {
                category: 1,
                name: "服务器6"
            },
            {
                category: 2,
                name: "电脑1"
            },
            {
                category: 2,
                name: "电脑2"
            },
            {
                category: 2,
                name: "电脑3"
            },
        ],
        force: {
            edgeLength: 50,
            repulsion: 500,
            gravity: 0.1
        },
        links: [{
                source: '服务器1',
                target: '服务器2',
            },
            {
                source: '服务器1',
                target: '服务器3'
            },
            {
                source: '服务器1',
                target: '电脑1'
            },
            {
                source: '服务器2',
                target: '电脑2'
            },
            {
                source: '服务器4',
                target: '电脑3'
            }
        ],
        emphasis: {
            lineStyle: {
                width: 5
            }
        }
    }],
};