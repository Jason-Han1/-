var _data = [
    {
        name: '根节点',
        type: 'root',
        children: [
            {
                name: '子节点1',
                type: 'sub',
                children: [
                    {
                        name: '叶子节点1',
                        type: 'sub',
                        children: [
                            {
                                name: '叶叶节点1',
                                type: 'sub',
                                children: [
                                    {
                                        name: '叶叶叶节点1',
                                        type: 'final',
                                        children: [],
                                    },
                                    {
                                        name: '叶叶叶节点2',
                                        type: 'sub',
                                        children: [],
                                    },
                                ],
                            },
                            {
                                name: '叶叶节点2',
                                type: 'sub',
                                children: [],
                            },
                            {
                                name: '叶叶节点3',
                                type: 'sub',
                                children: [],
                            },
                        ],
                    },
                    {
                        name: '叶子节点2',
                        children: [],
                    },
                    {
                        name: '叶子节点3',
                        children: [],
                    },
                ],
            },
            {
                name: '子节点2',
                type: 'sub',
                children: [
                    {
                        name: '叶子节点4',
                        type: 'sub',
                        children: [],
                    },
                    {
                        name: '叶子节点5',
                        type: 'final',
                        children: [],
                    },
                    {
                        name: '叶子节点6',
                        type: 'sub',
                        children: [],
                    },
                ],
            },
        ],
    },
];
// 递归处理
function recursionFun(data) {
    for (let i = 0; i < data.length; i++) {
        // 根据type标识符判断当前阶段是否需要竖向
        if (data[i].type == 'final') {
            data[i].name = data[i].name.split('').join('\n') // 每个字换行
            data[i].symbolSize = [30, 95];
        }
        if (data[i].children.length > 0) {
            recursionFun(data[i].children);
        }
    }
    return data;
}
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: [
        {
            type: 'tree',
            data: recursionFun(_data),
            initialTreeDepth: 100, //默认树展开的层数
            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '20%',
            symbolSize: [90, 30], //设置框的大小
            symbol: 'rect', // 节点标记形状
            edgeShape: 'polyline', //设置连接线曲线还是折线，默认情况下是曲线，curve曲线 polyline直线
            orient: 'vertical', //树整体的方向horizontal横向 vertical竖向
            expandAndCollapse: true,
            itemStyle: {
                color: '#fff',
                borderColor: '#333',
                borderWidth: 0.1,
                overflow: 'truncate',
            },
            //lable 设置含有子节点的样式
            label: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 15,
                    color: '#333',
                },
                verticalAlign: 'middle',
                align: 'center',
                height: 290,
                width: 210,
            },
            leaves: {
                // 设置末节点的样式
                label: {
                    position: 'inside',
                    color: '#333',
                    verticalAlign: 'middle',
                    align: 'center',
                    height: 290,
                    width: 100,
                },
            },
            lineStyle: {
                color: '#7b7b7b', //连接线的颜色
                width: 1,
            },
            animationDurationUpdate: 750,
        },
    ],
};
