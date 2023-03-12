// Africa
var hazards = [
    {name:'Flood',value:4574},
    // {name:'Epidemic',value:2512},
    // {name:'Drought',value:1076},
    {name:'Storm',value:840},
    {name:'Landslide',value:332},
    {name:'Earthquake',value:194},
    // {name:'Extreme temperature',value:77},
    {name:'Tsunami',value:70},
    // {name:'Insect infestation',value:59},
    // {name:'Wildfire',value:54},
    // {name:'Volcanic',value:26},
    // {name:'Animal accident',value:1},
];
var chains = [
    {source:'Earthquake',target:'Tsunami',value:70},
    {source:'Landslide',target:'Flood',value:26},
    {source:'Storm',target:'Flood',value:13},
    {source:'Earthquake',target:'Flood',value:9},
    {source:'Earthquake',target:'Landslide',value:3},
    {source:'Landslide',target:'Storm',value:4},
];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 70;
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
            width: chains.value /3,
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
