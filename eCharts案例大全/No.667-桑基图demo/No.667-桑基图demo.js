// 桑基图数据格式要求如下↓，nodes中的节点需要和links互相对应，node表示图
// 上的节点，link对应节点间的关系，如需自定义节点颜色需要在数据中单独设置
// 否则只能设置某层节点的颜色，由于link连线中只有source和target两个节点关系
// 所以鼠标滑过高亮从第一层到最后一层的节点需求无法实现，在level中可以单独
// 设置某个层级的样式

// tips：修改代码的话请点击上方↑克隆，莫要在我的版本基础上再改动了哈

var nodes = [
    {
        name: '电网',
        itemStyle: {
            color: '#5AAEF4',
        },
        label: {
            position: 'right',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '光伏',
        itemStyle: {
            color: '#5B6E96',
        },
        label: {
            position: 'right',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '燃气',
        itemStyle: {
            color: '#FFE88E',
        },
        label: {
            position: 'right',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '电',
        itemStyle: {
            color: '#61D9AC',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '照明',
        itemStyle: {
            color: '#A8E0FB',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '电梯',
        itemStyle: {
            color: '#ffdc4c',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: 'OA设备',
        itemStyle: {
            color: '#fc9850',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '电脑及实验设备',
        itemStyle: {
            color: '#e55a55',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '其他设备',
        itemStyle: {
            color: '#6d62e4',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '高效机房',
        itemStyle: {
            color: '#6c9ae7',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '自然冷源',
        itemStyle: {
            color: '#4a6fe2',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '分布式风冷',
        itemStyle: {
            color: '#22c2da',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '空调冷',
        itemStyle: {
            color: '#fc6e6c',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '热水',
        itemStyle: {
            color: '#f4ec59',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '空调热',
        itemStyle: {
            color: '#ffb64d',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '办公',
        itemStyle: {
            color: '#5aaef4',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '酒店',
        itemStyle: {
            color: '#61d9ac',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '商业',
        itemStyle: {
            color: '#5b6e96',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
    {
        name: '运动',
        itemStyle: {
            color: '#a8e0fb',
        },
        label: {
            position: 'left',
            textStyle: {
                fontSize: 18,
                fontWeight: 800,
                color: '#666666',
            },
        },
    },
];
var links = [
    {
        source: '电网',
        target: '电',
        value: 50,
    },
    {
        source: '光伏',
        target: '电',
        value: 1.5,
    },
    {
        source: '燃气',
        target: '空调热',
        value: 3,
    },
    {
        source: '电',
        target: '照明',
        value: 10,
    },
    {
        source: '电',
        target: '电梯',
        value: 5,
    },
    {
        source: '电',
        target: 'OA设备',
        value: 5,
    },
    {
        source: '电',
        target: '电脑及实验设备',
        value: 5,
    },
    {
        source: '电',
        target: '高效机房',
        value: 5,
    },
    {
        source: '电',
        target: '分布式风冷',
        value: 2,
    },
    {
        source: '燃气',
        target: '热水',
        value: 2,
    },
    {
        source: '高效机房',
        target: '空调冷',
        value: 10,
    },
    {
        source: '空调冷',
        target: '热水',
        value: 2,
    },
    {
        source: '分布式风冷',
        target: '空调冷',
        value: 5,
    },
    {
        source: '分布式风冷',
        target: '空调热',
        value: 2,
    },
    {
        source: '照明',
        target: '办公',
        value: 2,
    },
    {
        source: '电梯',
        target: '办公',
        value: 2,
    },
    {
        source: 'OA设备',
        target: '办公',
        value: 2,
    },
    {
        source: '电脑及实验设备',
        target: '办公',
        value: 2,
    },
    {
        source: '电',
        target: '其他设备',
        value: 2,
    },
    {
        source: '其他设备',
        target: '办公',
        value: 2,
    },
    {
        source: '电',
        target: '自然冷源',
        value: 0,
    },
    {
        source: '自然冷源',
        target: '空调冷',
        value: 2,
    },
    {
        source: '热水',
        target: '办公',
        value: 2,
    },
    {
        source: '热水',
        target: '酒店',
        value: 2,
    },
    {
        source: '热水',
        target: '商业',
        value: 2,
    },
    {
        source: '热水',
        target: '运动',
        value: 2,
    },
    {
        source: '空调冷',
        target: '热水',
        value: 2,
    },
    {
        source: '空调冷',
        target: '办公',
        value: 2,
    },
    {
        source: '空调冷',
        target: '酒店',
        value: 2,
    },
    {
        source: '空调冷',
        target: '商业',
        value: 2,
    },
    {
        source: '空调冷',
        target: '运动',
        value: 2,
    },

    {
        source: '空调热',
        target: '办公',
        value: 2,
    },
    {
        source: '空调热',
        target: '酒店',
        value: 2,
    },
    {
        source: '空调热',
        target: '商业',
        value: 2,
    },
    {
        source: '空调热',
        target: '运动',
        value: 2,
    },
];
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
