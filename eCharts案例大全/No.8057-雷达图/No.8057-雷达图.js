option = {
    backgroundColor:"#23243a",
    legend: {
        data: ['成都AG超玩会六角图', '类目2'],
        icon: 'circle',
        right: '10',
        textStyle: {
            color: "rgba(250,250,250,0.6)",
            fontSize: 16
        }
    },
    radar: [{
        radius: '60%',
        name: {
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            }
        },
        indicator: [{
                name: '场均主宰',
                min: 0
            },
            {
                name: 'KDA',
                min: 0
            },
            {
                name: '场均击杀',
                min: 0
            },
            {
                name: '场均经济',
                min: 0
            },
            {
                name: '场均输出',
                min: 0
            },
            {
                name: '场均推塔',
                min: 0
            }
        ],
        center: ['50%', '50%'], // 位置
        shape: 'circle', //形状
        splitArea: {
            areaStyle: {
                color: 'transparent', //圆环颜色
                shadowColor: 'aqua', // 圆颜色
                shadowBlur: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: '#08585F' // 分割线
            }
        },
        splitLine: {
            lineStyle: {
                color: '#08585F', //圆线
                width: 2
            }
        }
    }],
    series: [{
        type: 'radar',
        data: [{
                value: [0.72, 8.76, 12.11, 6.09, 33, 6],
                name: '成都AG超玩会六角图',
                itemStyle: {
                    color: '#327BFA',
                    opacity: 0
                },
                lineStyle: {
                    width: 0,
                    type: 'dotted'
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(50, 123, 250, 0.7)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(50, 123, 250, 0.3)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            },
            {
                value: [0.72, 8.76, 12.11, 6.09, 33, 6],
               
            }
        ]
    }]
}