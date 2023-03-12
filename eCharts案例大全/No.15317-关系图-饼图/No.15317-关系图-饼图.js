option = {
    series: [{
        type: 'graph',
        name: '人数',
        layout: 'circular', //图的布局'none' 'circular' 'force'
        focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        draggable: false, //节点是否可拖拽
        circular: {
            rotateLabel: false, //是否旋转标签
        },
        symbol: 'circle', //关系图节点标记的图形。'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: 12,
        edgeSymbol: ['none', 'none'], //边两端的标记类型
        edgeSymbolSize: 10, //边两端的标记大小
        width: 166,
        height: 166,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },
            },
        },
        force: { // 力引导布局相关的配置项
            initLayout: 'circular',
            repulsion: 500,
            gravity: 200,
            edgeLength: 100, //边的两个节点之间的距离
            layoutAnimation: true,
        },
        itemStyle: {
            normal: {
                color: '#154164',
            },
        },
        lineStyle: { //关系边的公用线条样式
            normal: {
                color: '#154164',
                width: 100,
                type: 'solid',
                opacity: 0.5,
            },
        },
        edgeLabel: { //标签
            normal: {
                show: true,
                position: 'middle',
            },
        },
        categories: [{
            name: '人数',
            symbol: 'arrow', //该类目节点标记的图形。
            symbolSize: 100,
        }],
        links: [{
            source: 'n1',
            target: 'n2'
        }, {
            source: 'n2',
            target: 'n3'
        }],
        data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
    }, ]
};