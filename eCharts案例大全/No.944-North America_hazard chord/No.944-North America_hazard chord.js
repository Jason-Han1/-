// North America
var hazards = [
    {name:'Storm',value:5344},
    {name:'Landslide',value:3465},
    {name:'Flood',value:3110},
    {name:'Earthquake',value:2134},
    {name:'Drought',value:434},
    {name:'Wildfire',value:298},
    {name:'Tsunami',value:295},
    // {name:'Epidemic',value:276},
    {name:'Extreme temperature',value:271},
    {name:'Volcanic',value:98},
];
var chains = [
    {source:'Storm',target:'Flood',value:276},
    {source:'Landslide',target:'Storm',value:264},
    {source:'Landslide',target:'Flood',value:155},
    {source:'Earthquake',target:'Tsunami',value:53},
    {source:'Earthquake',target:'Volcanic',value:2},
    {source:'Volcanic',target:'Tsunami',value:4},
    {source:'Landslide',target:'Epidemic',value:1},
    {source:'Epidemic',target:'Storm',value:2},
    {source:'Landslide',target:'Volcanic',value:1},
    {source:'Volcanic',target:'Storm',value:2},
    {source:'Landslide',target:'Wildfire',value:1},
    {source:'Wildfire',target:'Storm',value:2},
    {source:'Extreme temperature',target:'Landslide',value:1},
    {source:'Extreme temperature',target:'Storm',value:1},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 150;
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
            width: chains.value/5,
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
