const dataValue = [
    {
        name: '数据(一)',
        value: '3.06',
    },
];
option = {
    backgroundColor: '#fff',
    color: ['#73A0FA'],
    tooltip: {
        show: false,
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        min: 1.51,
        max: 1.56,
        axisLabel: {
            formatter: '{value}%',
            color: '#999',
            textStyle: {
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type: '',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    series: [
        {
            name: '数据(一)',
            type: 'line',
            smooth: false,
            symbol: 'none',
            data: [ // 之前的data数据是 [1.544, 1.545, 1.539.....] 数组形式的，现在得修改成[{...}, {...}, {...}] 具体数据如下
                {
                    value: 1.544, // 需要展示的节点
                    symbol: 'circle', // 折线图上小圆点的类型 circle圆形
                    symbolSize: 8, // 小圆点大小
                    itemStyle: {
                        // 配置小圆点的颜色
                        normal: {
                            color: '#666', // 颜色（和你显示文本标签的背景色尽量保持一致）
                        },
                    },
                    label: {
                        // 图形上的文本标签配置项
                        show: true, // 是否展示（不展示的节点数据都设置为false）
                        distance: 10, //文本标签距离小圆点距离 （这里文本标签默认展示在小圆点上面，也可以配置展示的位置）
                        formatter: () => {
                            return '进来'; // 文本标签展示的文字（默认是展示节点的value值，所以需要单独配置）
                        },
                        padding: [2, 5], // 文本标签的内边距（和css的padding一样）
                        backgroundColor: '#666', // 文本标签背景色
                        color: '#fff', // 文本标签字体颜色
                    },
                },
                {
                    value: 1.545, // 需要展示的 另一个节点（配置项同上面一样）
                    symbol: 'circle',
                    symbolSize: 8,
                    label: {
                        show: true,
                        distance: 10,
                        formatter: () => {
                            return '出去';
                        },
                        itemStyle: {
                            normal: {
                                color: 'skyblue',
                            },
                        },
                        padding: [2, 5],
                        backgroundColor: 'skyblue',
                        color: '#fff',
                    },
                },
                {
                    value: 1.539, // 不需要展示的节点（如果需要展示配置项同上）
                    label: {
                        show: false,
                    },
                },
                {
                    value: 1.542, // 不需要展示的节点（如果需要展示配置项同上）
                    label: {
                        show: false,
                    },
                },
                {
                    value: 1.545, // 不需要展示的节点（如果需要展示配置项同上）
                    label: {
                        show: false,
                    },
                },
                {
                    value: 1.546, // 不需要展示的节点（如果需要展示配置项同上）
                    label: {
                        show: false,
                    },
                },
                {
                    value: 1.547, // 不需要展示的节点（如果需要展示配置项同上）
                    label: {
                        show: false,
                    },
                },
            ],
            itemStyle: { // 当前折现下面的渐变色配置项（具体渐变颜色修改一下即可）
                normal: {
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0.1, [
                            {
                                offset: 0.7,
                                color: 'rgba(122,165,250,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(122,165,250,0.4)',
                            },
                        ]),
                    },
                },
            },
        },
    ],
};
