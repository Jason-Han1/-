// Oceania
var hazards = [
    {name:'Flood',value:550},
    {name:'Storm',value:392},
    {name:'Tsunami',value:355},
    {name:'Landslide',value:306},
    {name:'Earthquake',value:222},
    {name:'Wildfire',value:149},
    {name:'Volcanic',value:40},
    {name:'Drought',value:35},
    // {name:'Epidemic',value:20},
    {name:'Extreme temperature',value:12},
    // {name:'Insect infestation',value:5},
];
var chains = [
    {source:'Earthquake',target:'Tsunami',value:30},
    {source:'Storm',target:'Flood',value:18},
    {source:'Landslide',target:'Flood',value:12},
    {source:'Earthquake',target:'Landslide',value:7},
    {source:'Landslide',target:'Tsunami',value:12},
    {source:'Landslide',target:'Storm',value:9},
    {source:'Earthquake',target:'Flood',value:1},
    {source:'Earthquake',target:'Volcanic',value:2},
    {source:'Volcanic',target:'Tsunami',value:4},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 20;
    node.label = {
        normal: {
            show: node.name,
        },
    };
});
// 设置连接线的宽度及其他属性
chains.forEach(function (chains) {
    chains.lineStyle = {
        normal: {
            width: chains.value/2,
            opacity: 0.5,
        },
    };
});
option = {
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: 'hazards Interaction',
            type: 'graph', //设置图形类别 关系图
            layout: 'circular',
            circular: {
                // 设置环形布局是否旋转标签
                rotateLabel: true,
            },
            data: hazards,
            links: chains,
            roam: true,
            label: {
                normal: {
                    fontSize:20,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            itemStyle: {
                normal: {
                    color: '#0f3475',
                },
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#1551c2',
                            },
                            {
                                offset: 1,
                                color: '#7be0ff',
                            },
                        ],
                        globalCoord: false,
                    },
                    curveness: 0.3,
                    opacity: 0.2,
                },
            },
        },
    ],
};
