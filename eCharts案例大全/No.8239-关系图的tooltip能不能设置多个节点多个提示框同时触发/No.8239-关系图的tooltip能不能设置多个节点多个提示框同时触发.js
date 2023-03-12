option = {
    series : [
        {
            type: 'graph',
            layout: 'circular',
            symbolSize: 50,
            roam: true,
            label: {
                show: true,
                position: 'bottom',
                formatter: params => params.data.value
            },
            edgeSymbol: ['none', 'arrow'],
            data: [{
                name: '1',// use id or key
                value: '节点1',// use display name or value
            }, {
                name: '2',
                value: '节点2',
            }, {
                name: '3',
                value: '节点3',
            }, {
                name: '4',
                value: '节点3',
            }],
            links: [{
                source: '1',
                target: '3'
            }, {
                source: '2',
                target: '3'
            }, {
                source: '1',
                target: '4'
            }, {
                source: '2',
                target: '4'
            }],
        }
    ]
};