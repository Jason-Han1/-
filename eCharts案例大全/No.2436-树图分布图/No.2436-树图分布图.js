option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        color: '#fff',
        backgroundColor: 'skyblue',
        borderColor: 'skyblue',
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'tree',
            symbolSize: 75,
            symbol: 'roundRect',
            edgeShape: 'polyline',
            edgeForkPosition: '50%',
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                    },
                },
            },
            initialTreeDepth: 2,
            orient: 'vertical',

            itemStyle: {
                color: '#FFC125',
                borderColor: '#FFC125',
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
            //线条的颜色
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    color: '#53B5EA',
                    type: 'dashed',
                    width: 1,
                },
            },

            label: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 15,
                    color: '#fff',
                },
            },

            leaves: {
                label: {
                    position: 'inside',
                    color: '#fff',
                },
                itemStyle: {
                    color: '#dfdfdf',
                    borderColor: '#dfdfdf',
                },
            },

            data: [
                {
                    name: '根节点',
                    url: '',
                    // 根节点样式设置
                    itemStyle: {
                        color: '#18a849',
                        borderColor: '#18a849',
                    },
                    children: [
                        {
                            name: '子节点1',
                            children: [
                                {
                                    name: '叶子节点1',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                                {
                                    name: '叶子节点2',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                                {
                                    name: '叶子节点3',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                            ],
                        },
                        {
                            name: '子节点2',
                            children: [
                                {
                                    name: '叶子节点4',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                                {
                                    name: '叶子节点5',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                                {
                                    name: '叶子节点6',
                                    itemStyle: {
                                        color: '#5470C6',
                                        borderColor: '#5470C6',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
