var hazards = [
    { name: 'Flood', value: 25765 },
    { name: 'Earthquake', value: 38342 },
    { name: 'Drought', value: 3243 },
    { name: 'Extreme temperature', value: 3716 },
    { name: 'Landslide', value: 10784 },
    { name: 'Storm', value: 14478 },
    { name: 'Wildfire', value: 1156 },
    // { name: 'Epidemic', value: 4012 },
    //{ name: 'Insect infestation', value: 91 },
    { name: 'Volcanic', value: 742 }, //实则原来的Volcanic activity，加了voe和vor 三个加起来
    { name: 'Tsunami', value: 3089 },
    // { name: 'Mass movement (dry)', value: 47 }, //加到eq
    // { name: 'Volcanic Erupt', value: 255 }, //又加到vo activity
    // { name: 'Volcanic runup', value: 41 }, //加到vo erupt
    // { name: 'Animal accident', value: 1 },
    // { name: 'Impact', value: 1 },
];
var chains = [
    { source: 'Flood', target: 'Storm', value: 486 },
    { source: 'Flood', target: 'Landslide', value: 530 },
    { source: 'Storm', target: 'Landslide', value: 288 },
    { source: 'Earthquake', target: 'Storm', value: 58 },
    { source: 'Earthquake', target: 'Tsunami', value: 625 },
    { source: 'Earthquake', target: 'Landslide', value: 70 }, //将mmdry加进去
    { source: 'Earthquake', target: 'Flood', value: 121 }, //加了mmdry进来
    // { source: 'Epidemic', target: 'Volcanic Erupt', value: 1 },
    // { source: 'Epidemic', target: 'Flood', value: 505 },
    // { source: 'Epidemic', target: 'Storm', value: 70 },
    { source: 'Extreme temperature', target: 'Wildfire', value: 36 },
    { source: 'Flood', target: 'Extreme temperature', value: 25 },
    { source: 'Earthquake', target: 'Extreme temperature', value: 25 },
    { source: 'Earthquake', target: 'Drought', value: 24 },
    { source: 'Tsunami', target: 'Volcanic', value: 33 },//原先是ts-voe
    // { source: 'Epidemic', target: 'Landslide', value: 10 },
    // { source: 'Epidemic', target: 'Volcanic activity', value: 3 },
    { source: 'Extreme temperature', target: 'Storm', value: 12 },
    { source: 'Flood', target: 'Drought', value: 293 },
    // { source: 'Epidemic', target: 'Wildfire', value: 7 },
    { source: 'Epidemic', target: 'Drought', value: 145 },
    { source: 'Epidemic', target: 'Earthquake', value: 31 },
    { source: 'Flood', target: 'Wildfire', value: 11 },
    // { source: 'Volcanic activity', target: 'Volcanic Erupt', value: 24 },
    { source: 'Tsunami', target: 'Landslide', value: 10 },
    // { source: 'Volcanic Erupt', target: 'Tsunami', value: 16 },//加上去ts-vo了，为什么会这样？
    { source: 'Wildfire', target: 'Drought', value: 9 },
    { source: 'Storm', target: 'Drought', value: 59 },
    { source: 'Storm', target: 'Wildfire', value: 8 },
    { source: 'Epidemic', target: 'Insect infestation', value: 11 },
    { source: 'Flood', target: 'Volcanic', value: 17 }, //原先是fl-voa，还加上fl-voe
    { source: 'Insect infestation', target: 'Drought', value: 4 },
    // { source: 'Flood', target: 'Insect infestation', value: 7 },
    { source: 'Extreme temperature', target: 'Landslide', value: 13 },
    { source: 'Volcanic', target: 'Landslide', value: 2 },
    // { source: 'Earthquake', target: 'Volcanic Erupt', value: 7 },
    { source: 'Flood', target: 'Tsunami', value: 2 },
    { source: 'Earthquake', target: 'Volcanic', value: 18 }, //加上eq-voe的 7+5+6
    // { source: 'Volcanic Erupt', target: 'Earthquake', value: 5 },
    // { source: 'Tsunami', target: 'Volcanic activity', value: 5 }, //加上去ts-vo了
    { source: 'Storm', target: 'Volcanic', value: 5 }, //还加了下面的st-voa
    // { source: 'Flood', target: 'Volcanic Erupt', value: 3 },//加上去fl-vo了
    // { source: 'Epidemic', target: 'Extreme temperature', value: 1 },
    // { source: 'Mass movement (dry)', target: 'Landslide', value: 2 },
    // { source: 'Mass movement (dry)', target: 'Flood', value: 1 },
    // { source: 'Impact', target: 'Earthquake', value: 1 },
    { source: 'Extreme temperature', target: 'Drought', value: 4 },
    { source: 'Storm', target: 'Tsunami', value: 19 },
    { source: 'Drought', target: 'Landslide', value: 8 },
    { source: 'Earthquake', target: 'Wildfire', value: 1 },
    { source: 'Wildfire', target: 'Landslide', value: 1 },
    // { source: 'Mass movement (dry)', target: 'Earthquake', value: 1 },
    { source: 'Extreme temperature', target: 'Tsunami', value: 1 },
    // { source: 'Insect infestation', target: 'Storm', value: 1 },
    // { source: 'Storm', target: 'Volcanic activity', value: 2 }, //加上去st-vo了
    // { source: 'Animal accident', target: 'Flood', value: 1 },
    // { source: 'Animal accident', target: 'Epidemic', value: 1 },
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
            circular: {
                // 设置环形布局是否旋转标签
                rotateLabel: true,
            },
            data: hazards,
            links: chains,
            roam: true,
            label: {
                normal: {
                    fontSize:28,
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
