// Asia 
var hazards = [
    {name:'Earthquake',value:34131},
    {name:'Flood',value:11383},
    {name:'Storm',value:5617},
    {name:'Landslide',value:5180},
    {name:'Drought',value:1140},
    {name:'Extreme temperature',value:958},
    {name:'Tsunami',value:950},
    // {name:'Epidemic',value:841},
    {name:'Volcanic',value:281},
    {name:'Wildfire',value:222},
    // {name:'Insect infestation',value:19},
    // {name:'Impact',value:1},
];
var chains = [
    {source:'Earthquake',target:'Tsunami',value:429},
    {source:'Landslide',target:'Flood',value:457},
    {source:'Storm',target:'Flood',value:302},
    {source:'Earthquake',target:'Flood',value:167},
    {source:'Earthquake',target:'Landslide',value:84},
    {source:'Landslide',target:'Storm',value:130},
    {source:'Earthquake',target:'Epidemic',value:8},
    {source:'Epidemic',target:'Flood',value:16},
    {source:'Drought',target:'Storm',value:5},
    {source:'Drought',target:'Flood',value:4},
    {source:'Earthquake',target:'Volcanic',value:5},
    {source:'Volcanic',target:'Tsunami',value:7},
    {source:'Earthquake',target:'Storm',value:4},
    {source:'Extreme temperature',target:'Landslide',value:2},
    {source:'Extreme temperature',target:'Flood',value:2},
    {source:'Landslide',target:'Drought',value:2},
    {source:'Landslide',target:'Tsunami',value:2},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 500;
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
            width: chains.value / 18,
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
            // layout:'none',
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
