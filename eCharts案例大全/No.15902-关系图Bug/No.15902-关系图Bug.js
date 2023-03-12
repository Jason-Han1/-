option = {
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                distance: 5
            }
        },
        edgeSymbol: ['', 'arrow'],
        data: [{
                name: '工业软件',
                x: 10,
                y: 20
            }, {
                name: '生产控制类',
                x: -10,
                y: 20
            }, {
                name: '研发设计类',
                x: -10,
                y: 10
            }
        ],
        links: [{
            source: '智能工厂',
            target: '智能控制系统'
        }, {
            source: '工业软件',
            target: '运营管理类'
        }, {
            source: '工业软件',
            target: '生产控制类'
        }, {
            source: '工业软件',
            target: '研发设计类'
        }]
    }]
}