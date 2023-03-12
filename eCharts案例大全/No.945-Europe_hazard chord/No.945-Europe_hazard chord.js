// Europe
var hazards = [
    {name:'Flood',value:2939},
    {name:'Extreme temperature',value:2025},
    {name:'Storm',value:1626},
    {name:'Landslide',value:530},
    {name:'Earthquake',value:365},
    {name:'Wildfire',value:268},
    {name:'Drought',value:230},
    {name:'Tsunami',value:63},
    // {name:'Epidemic',value:39},
    {name:'Volcanic',value:32},
    // {name:'Insect infestation',value:3},
];
var chains = [
    {source:'Landslide',target:'Flood',value:38},
    {source:'Storm',target:'Flood',value:22},
    {source:'Earthquake',target:'Tsunami',value:11},
    {source:'Landslide',target:'Storm',value:11},
    {source:'Earthquake',target:'Landslide',value:2},
    {source:'Landslide',target:'Tsunami',value:4},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 60;
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
            width: chains.value,
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
