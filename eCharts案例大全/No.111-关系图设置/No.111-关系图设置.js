var listData = [
    {
        name: '根节点1',
        value: 0,
        draggable: false,
        fixed: true,
        x: 100, //myChart.getWidth() - 100
        y: myChart.getHeight() / 2,
        list: [
            {
                name: '节点1',
                value: 1,
                list: [
                    { name: '节点1-1-1', value: '1-1-1' },
                    { name: '节点1-1-2', value: '1-1-2' },
                    { name: '节点1-1-3', value: '1-1-3' },
                    { name: '节点1-1-4', value: '1-1-4' },
                    { name: '节点1-1-5', value: '1-1-5' },
                ],
            },
            {
                name: '节点2',
                value: 2,
                list: [
                    { name: '节点1-2-1', value: '1-2-1' },
                    { name: '节点1-2-2', value: '1-2-2' },
                    { name: '节点1-2-3', value: '1-2-3' },
                    { name: '节点1-2-4', value: '1-2-4' },
                    { name: '节点1-2-5', value: '1-2-5' },
                ],
            },
            {
                name: '节点3',
                value: 3,
                list: [
                    { name: '节点1-3-1', value: '1-3-1' },
                    { name: '节点1-3-2', value: '1-3-2' },
                    { name: '节点1-3-3', value: '1-3-3' },
                    { name: '节点1-3-4', value: '1-3-4' },
                    {
                        name: '节点1-3-51111',
                        value: '1-3-5111',
                        list: [
                            { name: '节点1-3-111', value: '1-3-1' },
                            { name: '节点1-3-2111', value: '1-3-2' },
                            { name: '节点1-3-311', value: '1-3-3' },
                            { name: '节点1-3-4111', value: '1-3-4' },
                            { name: '节点1-3-511', value: '1-3-5' },
                        ]
                    },
                ],
            },
        ],
    },
];
var listSon = listData[0].list; //除一级节点外
var legend = []; //二级节点列表 [val]
var categories = []; //二级节点列表 {name:val}
var list = [];
var links = []; // source: '源节点名称', target: '目标节点名称'
listSon.forEach((item) => {
    legend.push(item.name);
    categories.push({ name: item.name });
});

handleList(JSON.parse(JSON.stringify(listData)), 0);
handleLinks(JSON.parse(JSON.stringify(listData)), 0);

//  计算list
function handleList(arr, idx, color, category) {
    arr.forEach((item, index) => {
        if (item.name === null) {
            return false;
        }
        // 设置节点大小
        let symbolSize = 10;
        // 每个节点所对应的文本标签的样式。
        let label = null;
        if (idx === 0) {
            //根节点
            symbolSize = 130;
            label = {
                position: 'inside',
                rotate: 0,
                fontSize: 22,
                fontWeight: 'bold',
                color: '#FFFFFF',
            };
        } else if (idx === 1) {
            //一级节点
            symbolSize = 60;
            label = {
                position: 'right',
                rotate: 0,
                fontSize: 15,
                distance: 0,
                fontWeight: 'bold',
                color: '#F4BE18',
            };
        } else {
            symbolSize = 20;
            label = {
                fontSize: 12,
                color: '#D0C7AD',
            };
        }

        //浮窗 前面圆颜色设置
        if (idx === 0) {
            //根节点
            bgcolor = 'blue';
        } else {
            //一级节点
            bgcolor = 'red';
        }
        let itemStyle = null;
        if (item.list && item.list.length !== 0) {
            //非子节点
            itemStyle = {
                borderColor: '#000',
                color: bgcolor,
            };
        } else {
            //子节点
            itemStyle = {
                color: 'transparent',
                borderColor: '#ccc',
            };
        }
        //实现节点发光效果
        itemStyle = Object.assign(itemStyle, {
            shadowColor: 'rgba(202, 144, 3, 0.5)',
            shadowBlur: 20,
        });

        if (idx == 1) {
            category = item.name;
        }
        let obj = {
            name: item.name,
            symbolSize: symbolSize,
            category: category,
            label,
            color: bgcolor,
            itemStyle,
        };
        obj = Object.assign(item, obj);
        list.push(obj);
        if (item.list && item.list.length > 0) {
            handleList(item.list, idx + 1, color, category);
        }
    });
}
// 计算links
function handleLinks(arr, index) {
    arr.forEach((item) => {
        if (item.list) {
            item.list.forEach((item2, eq) => {
                let lineStyle = null;
                if (index === 0) {
                    //一级二级中间节点的线
                    lineStyle = {
                        normal: {
                            color: 'rgba(255,255,255,0.3)', //线
                            width: 3,
                        },
                    };
                } else {
                    lineStyle = {
                        normal: {
                            color: 'rgba(255,255,255,0.5)', //线
                            width: 1,
                        },
                    };
                }
                let obj = {
                    source: item.name,
                    target: item2.name,
                    value: 1111, //连接线上文字
                    lineStyle,
                };
                links.push(obj);
                if (item2.list && item.list.length > 0) {
                    handleLinks(item.list, index + 1);
                }
            });
        }
    });
}

option = {
    backgroundColor: '#020f3c',
    tooltip: {},
    toolbox: {
        show: true,
        left: 'right',
        right: 20,
        top: 'bottom',
        bottom: 20,
    },
    legend: {
        show: true,
        data: legend,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        // inactiveColor: "#fff",
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        left: 'right',
        right: 20,
        top: 20,
        bottom: 80,
        // itemWidth: 12,
        // itemHeight: 12,
        pageIconColor: '#00f6ff',
        pageIconInactiveColor: '#fff',
        pageIconSize: 12,
        pageTextStyle: {
            color: '#fff',
            fontSize: 12,
        },
    },
    selectedMode: 'false',
    bottom: 20,
    left: 0,
    right: 0,
    confine: true,
    top: 0,
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: '知识图谱',
            type: 'graph',
            hoverAnimation: true,
            layout: 'force',
            force: {
                repulsion: [-2, 100], //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity: 0.03, //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength: [20, 200], //边的两个节点之间的距离，这个距离也会受 repulsion:[10, 50]值越小则长度越长
                layoutAnimation: true,
            },
            nodeScaleRatio: 0.6,
            draggable: true,
            roam: false, //鼠标缩放和平移
            symbol: 'circle',
            data: list,
            links: links,
            categories: categories,
            cursor: 'pointer',
            focusNodeAdjacency: true,
            scaleLimit: {
                //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                min: 0, //最小的缩放值
                max: 9, //最大的缩放值
            },
            // edgeSymbol: ['circle', 'arrow'],
            // edgeSymbolSize: [4, 8],
            edgeLabel: {
                //连接线上文字
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10,
                    },
                    formatter: '{c}',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    distance: 10,
                },
            },
            lineStyle: {
                normal: {
                    width: 1.5,
                    curveness: 0,
                    type: 'solid',
                },
            },
        },
    ],
};
