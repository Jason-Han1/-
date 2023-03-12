// South America
var hazards = [
    {name:'Flood',value:2867},
    {name:'Earthquake',value:779},
    {name:'Landslide',value:548},
    // {name:'Extreme temperature',value:337},
    // {name:'Drought',value:289},
    // {name:'Epidemic',value:266},
    {name:'Tsunami',value:228},
    {name:'Storm',value:193},
    // {name:'Volcanic',value:188},
    // {name:'Wildfire',value:124},
    // {name:'Insect infestation',value:4},
];
var chains = [
    {source:'Earthquake',target:'Tsunami',value:101},
    {source:'Landslide',target:'Flood',value:85},
    {source:'Storm',target:'Landslide',value:7},
    {source:'Earthquake',target:'Flood',value:4},
    {source:'Earthquake',target:'Landslide',value:5},
    {source:'Storm',target:'Flood',value:3},
    {source:'Landslide',target:'Tsunami',value:4},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 200;
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
