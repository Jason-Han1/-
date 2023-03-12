// 桑基图数据格式要求如下↓，nodes中的节点需要和links互相对应，node表示图
// 上的节点，link对应节点间的关系，如需自定义节点颜色需要在数据中单独设置
// 否则只能设置某层节点的颜色，由于link连线中只有source和target两个节点关系
// 所以鼠标滑过高亮从第一层到最后一层的节点需求无法实现，在level中可以单独
// 设置某个层级的样式

// tips：修改代码的话请点击上方↑克隆，莫要在我的版本基础上再改动了哈
var nodes = [
    {
        id: 'end',
    },
];
var links = [];
for (let j = 0; j < 5; j++) {
    nodes.push({
        id: 'one' + j,
    });
    links.push({
        source: 'one' + j,
        target: 'two' + j,
        value: 1,
    });
}
for (let j = 0; j < 5; j++) {
    nodes.push({
        id: 'two' + j,
    });
    links.push({
        source: 'two0',
        target: 'three' + j,
        value: 1,
    });
}
for (let j = 0; j < 10; j++) {
    nodes.push({
        id: 'three' + j,
        type: 'L2',
    });
    if (j < 5) {
        links.push({
            source: 'two0',
            target: 'right' + j,
            value: 1,
        });
    }
}
for (let j = 0; j < 2; j++) {
    nodes.push({
        id: 'four' + j,
    });
    links.push(
        {
            source: 'three' + j,
            target: 'four1',
            value: 1,
        },
        {
            source: 'three' + (j + 1),
            target: 'four2',
            value: 1,
        }
    );
}

console.log(JSON.stringify(nodes));
console.log(JSON.stringify(links));
links.push(
    {
        source: 'four1',
        target: 'end',
        value: 1,
    },
    {
        source: 'four2',
        target: 'end',
        value: 1,
    }
);
nodes = [
    { id: 'end',  level: 3},

    { id: 'one0', level: 0},
    { id: 'one1' , level: 0},
    { id: 'one2',  level: 0},
    { id: 'one3',  level: 0},
    { id: 'one4' , level: 0},

    { id: 'two0', level: 1 },
    { id: 'two1', level: 1  },
    { id: 'two2', level: 1  },
    { id: 'two3', level: 1  },
    { id: 'two4', level: 1  },

    { id: 'three0',level: 3  },
    { id: 'three1',  level: 3 },
    { id: 'three2',level: 3 },
    { id: 'three3',level: 3  },
    { id: 'three4', level: 1 },
    { id: 'three5', level: 1 },
    { id: 'three6',level: 1 },
    { id: 'three7', level: 1 },
  
   
    { id: 'four1' },
    { id: 'four2' },
];
links = [
    { source: 'one0', target: 'two0', value: 1 },
    { source: 'one1', target: 'two1', value: 1 },
    { source: 'one2', target: 'two2', value: 1 },
    { source: 'one3', target: 'two3', value: 1 },
    { source: 'one4', target: 'two4', value: 1 },

    { source: 'two0', target: 'three0', value: 1 },
    { source: 'two0', target: 'three1', value: 1 },
    { source: 'two0', target: 'three2', value: 1 },
    { source: 'two0', target: 'three3', value: 1 },
    { source: 'two0', target: 'three4', value: 1 },
    { source: 'two0', target: 'right0', value: 1 },
    { source: 'two0', target: 'right1', value: 1 },
    { source: 'two0', target: 'right2', value: 1 },
    { source: 'two0', target: 'right3', value: 1 },
    { source: 'two0', target: 'right4', value: 1 },

    { source: 'two1', target: 'three5', value: 1 },
    { source: 'two1', target: 'three4', value: 1 },
    { source: 'two2', target: 'three6', value: 1 },
    { source: 'two3', target: 'three7', value: 1 },
    { source: 'two4', target: 'three7', value: 1 },
    { source: 'three0', target: 'four1', value: 1 },
    { source: 'three1', target: 'four2', value: 1 },
    { source: 'three1', target: 'four1', value: 1 },
    { source: 'three2', target: 'four1', value: 1 },
    { source: 'three3', target: 'four1', value: 1 },
    { source: 'three4', target: 'four1', value: 1 },
    { source: 'three5', target: 'four2', value: 1 },
    { source: 'three6', target: 'four2', value: 1 },
    { source: 'three7', target: 'four2', value: 1 },
    { source: 'four1', target: 'end', value: 1 },
    { source: 'four2', target: 'end', value: 1 },
];

// var links = [
//     {
//         source: '电网',
//         target: '电',
//         value: 1,
//     },
//     {
//         source: '光伏',
//         target: '电',
//         value: 1,
//     },
//     {
//         source: '燃气',
//         target: '空调热',
//         value: 3,
//     },
//     {
//         source: '电',
//         target: '照明',
//         value: 1,
//     },
//     {
//         source: '电',
//         target: '电梯',
//         value: 1,
//     },
//     {
//         source: '电',
//         target: 'OA设备',
//         value: 1,
//     },
//     {
//         source: '电',
//         target: '电脑及实验设备',
//         value: 1,
//     },
//     {
//         source: '电',
//         target: '高效机房',
//         value: 1,
//     },
//     {
//         source: '电',
//         target: '分布式风冷',
//         value: 1,
//     },
//     {
//         source: '燃气',
//         target: '热水',
//         value: 1,
//     },
//     {
//         source: '高效机房',
//         target: '空调冷',
//       value: 1,
//     },
//     {
//         source: '空调冷',
//         target: '热水',
//         value: 2,
//     },
//     {
//         source: '分布式风冷',
//         target: '空调冷',
//         value: 1,
//     },
//     {
//         source: '分布式风冷',
//         target: '空调热',
//         value: 2,
//     },
//     {
//         source: '照明',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '电梯',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: 'OA设备',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '电脑及实验设备',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '电',
//         target: '其他设备',
//         value: 2,
//     },
//     {
//         source: '其他设备',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '电',
//         target: '自然冷源',
//         value: 0,
//     },
//     {
//         source: '自然冷源',
//         target: '空调冷',
//         value: 2,
//     },
//     {
//         source: '热水',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '热水',
//         target: '酒店',
//         value: 2,
//     },
//     {
//         source: '热水',
//         target: '商业',
//         value: 2,
//     },
//     {
//         source: '热水',
//         target: '运动',
//         value: 2,
//     },
//     {
//         source: '空调冷',
//         target: '热水',
//         value: 2,
//     },
//     {
//         source: '空调冷',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '空调冷',
//         target: '酒店',
//         value: 2,
//     },
//     {
//         source: '空调冷',
//         target: '商业',
//         value: 2,
//     },
//     {
//         source: '空调冷',
//         target: '运动',
//         value: 2,
//     },

//     {
//         source: '空调热',
//         target: '办公',
//         value: 2,
//     },
//     {
//         source: '空调热',
//         target: '酒店',
//         value: 2,
//     },
//     {
//         source: '空调热',
//         target: '商业',
//         value: 2,
//     },
//     {
//         source: '空调热',
//         target: '运动',
//         value: 2,
//     },
// ];
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: {
        type: 'sankey',
        layout: 'none',
        top: 50,
        left: 50,
        right: 50,
        nodeGap: 14,
        layoutIterations: 0, // 自动优化列表，尽量减少线的交叉，为0就是按照数据排列
        data: nodes, // 节点
        links: links, // 节点之间的连线
        draggable: false,
        focusNodeAdjacency: 'allEdges', // 鼠标划上时高亮的节点和连线，allEdges表示鼠标划到节点上点亮节点上的连线及连线对应的节点
        // tooltip: {
        //   formatter: function(params) {
        //     if (params.data.source) {
        //       return `${params.data.source}：${params.data.value}`;
        //     } else {
        //       return `${params.name}：${params.value}`;
        //     }
        //   }
        // },
        levels: [
            {
                depth: 0,
                itemStyle: {
                    color: '#F27E7E',
                },
                lineStyle: {
                    color: 'source',
                    opacity: 0.2,
                },
            },
            {
                depth: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.2,
                },
            },
            {
                depth: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.2,
                },
            },
            {
                depth: 3,
                label: {
                    fontSize: 12,
                },
            },
        ],
        label: {
            fontSize: 14,
            color: '#666',
        },
        itemStyle: {
            normal: {
                borderWidth: 0,
            },
        },
    },
};
