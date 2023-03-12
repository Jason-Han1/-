option = {
    title: {
        text: '北方明珠城市能力对比',
        subtext: '模拟数据',
        x: '20',
        y: '20',
        textStyle: {
            color: '#ffffff',
            fontFamily: 'Microsoft YaHei',
            fontSize: '16'
        }
    },
    color: ['#46B9B2', '#D372B2'],
    tooltip: {
        trigger: 'item'
    },
    grid: {
        top: '23%'
    },
    backgroundColor: '#17316a',
    legend: {
        show: true,
        padding: [3, 5],
        right: '20',
        y: '20',
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: "horizontal",
        data: ['大连', '青岛'],
        textStyle: {
            fontSize: 14,
            color: '#fff'
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#ffffff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        radius: '80%',
        center: ['50%', '53%'],
        indicator: [{
                name: '基建指数',
                max: 100
            },
            {
                name: '成长指数',
                max: 100
            },
            {
                name: '发展指数',
                max: 100
            },
            {
                name: '创新指数',
                max: 100
            },
            {
                name: '招商引资指数',
                max: 100
            },
            {
                name: '就业指数',
                max: 100
            }
        ]
    },
    series: [{
        name: '大连' + 'vs' + '青岛',
        type: 'radar',
        data: [{
                value: [30, 50, 40, 20, 80, 90],
                name: '大连',
                areaStyle: {
                    normal: {
                        color: '#46B9B2'
                    }
                }
            },
            {
                value: [50, 70, 90, 50, 64, 74],
                name: '青岛',
                areaStyle: {
                    normal: {
                        color: '#D372B2'
                    },
                },
            }
        ]
    }]
}