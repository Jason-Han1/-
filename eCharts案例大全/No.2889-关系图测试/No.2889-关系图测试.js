var nodeData = [
    {
        name: '名称一',
        value: 10,
        // x: '50%',
        // y: '50%',
        // category: 1,
        symbol: 'circle',
        symbolSize: 50,
        // fixed: true,
        itemStyle: {
            color: '#e47485',
        },
    },
    {
        name: '名称二',
        value: 30,
        symbolSize: 60,
    },
    {
        name: '名称三',
        value: 40,
        symbolSize: 80,
    },
    {
        name: '名称四',
        value: 50,
        symbolSize: 100,
    },
    {
        name: '名称五',
        value: 60,
        symbolSize: 60,
    },
    {
        name: '名称六',
        value: 70,
        symbolSize: 80,
    },
    {
        name: '名称七',
        value: 80,
        symbolSize: 100,
    },
    {
        name: '名称八',
        value: 90,
        symbolSize: 60,
    },
    {
        name: '名称九',
        value: 100,
        symbolSize: 80,
    },
    {
        name: '名称十',
        value: 110,
        symbolSize: 100,
    },
];

var links = [
    {
        source: '名称一',
        target: '名称二',
    },
    {
        source: '名称一',
        target: '名称三',
    },
    {
        source: '名称一',
        target: '名称四',
    },
    {
        source: '名称一',
        target: '名称五',
    },
    {
        source: '名称一',
        target: '名称六',
    },
    {
        source: '名称一',
        target: '名称七',
    },
    {
        source: '名称一',
        target: '名称八',
    },
    {
        source: '名称一',
        target: '名称九',
    },
    {
        source: '名称一',
        target: '名称十',
    },
];
var option = {
    series: [
        {
            type: 'graph',
            name: '关系图',
            // coordinateSystem: null,   // 使用的坐标系
            // center: [200, 200],
            // zoom: 10,
            layout: 'force',
            draggable: true,
            force: {
                initLayout: 'circular',
                repulsion: 2000, // 节点之间的斥力
                gravity: 0.1, // 节点之间的引力
                edgeLength: [100, 200], // 边的两个节点之间的距离，这个距离会受 repulsion 影响
            },
            roam: true, // 是否开启鼠标缩放和平移漫游
            // edgeSymbol: ['none', 'arrow'],
            itemStyle: {
                color: '#0090d0',
            },
            lineStyle: {
                color: '#aaa',
                width: 2,
                type: 'solid',
            },
            label: {
                position: 'inside',
                show: true,
            },
            edgeLabel: {},
            categories: [
                {
                    symbol: 'circle',
                    name: '名称一',
                },
            ],
            data: nodeData.map(function(item) {
                item.fixed = false
                return item
            }),
            edges: links,
        },
    ],
};

myChart.on('click', function (params) {
    console.log('点击', params);
    var nodeName = params.name;

    myChart.setOption({
        series: [
            {
                name: '关系图',
                data: nodeData.map(function (item, index) {
                    if (item.name === nodeName) {
                        item.itemStyle = {
                            color: 'orange',
                        };
                        item.fixed = false
                    } else if (index !== 0) {
                        item.itemStyle = {};
                        item.fixed = true
                    }
                    
                    

                    return item;
                }),

                edges: links.map(function (item) {
                    if (item.target === nodeName) {
                        item.value = 80;
                    } else {
                        item.value = 100;
                    }

                    return item;
                }),
            },
        ],
    });
});
