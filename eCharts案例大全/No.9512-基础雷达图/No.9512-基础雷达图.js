option = {
    backgroundColor:'#fff',
    color:['#ff7632','#2f4554', ],
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        show: true,
        icon: "circle",
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: "horizontal",
        data: ['XX职业年金计划', 'XXX三号职业年金计划'],
        textStyle: {
            fontSize: 14,
            color: '#666'
        },
    },
    radar: {
        name: {
            textStyle: {
                color: '#666',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [{name: '今年收益率',
                max: 100
            },
            {
                name: '最大回撤',
                max: 100
            },
            {
                name: 'Beta',
                max: 100
            },
            {
                name: '标准差',
                max: 100
            },
            {
                name: '波动率',
                max: 100
            },
            {
                name: '信息比率',
                max: 100
            },
            {
                name: '特雷诺指数',
                max: 100
            }
        ],
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['#fff'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。


            }

        },
        
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ccc', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        }

    },

    series: [{
        name: '',
        type: 'radar',
        data: [{
                value: [100, 90, 70, 80, 90, 100, 80],
                name: 'XX职业年金计划',
                areaStyle: {
                    normal: {
                        color: '#ff7632'
                    },
                },


            },
            {
                value: [80, 60, 80, 90, 100, 80, 90],
                name: 'XXX三号职业年金计划',
                areaStyle: {
                    normal: {
                        color: '#4B8659'
                    },
                },
            }
        ]
    }]
};