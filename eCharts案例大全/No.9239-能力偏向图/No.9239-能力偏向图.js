option = {
    backgroundColor: '#33333C',
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        indicator: [{
                text: '力量',
                max: 100,
                color: '#F9641A'
            },
            {
                text: '速度',
                max: 100,
                color: '#8A98FF'
            },
            {
                text: '攻击',
                max: 100,
                color: '#CB71FF'
            },
            {
                text: '防御',
                max: 100,
                color: '#1ADD5D'
            },
            {
                text: '辅助',
                max: 100,
                color: '#12EAFF'
            },
            {
                text: '打野',
                max: 100,
                color: '#FFE715'
            }
        ],
        name: {
            show: true,
            textStyle: {
                fontWeight: "bold",
                fontSize: 14,
            }
        },
        length: 50,
        center: ['50%', '50%'],
        radius: 110,
        splitArea: {
            show: true,
            areaStyle: {
                color: ["#33333c"] // 图表背景网格的颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#5b5b5c' // 图表背景网格线的颜色
            }
        }
    }],
    series: [{
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        symbol: "none", // 去掉图表中各个图区域的边框线拐点
        itemStyle: {
            normal: {
                lineStyle: {
                    color: "#87cefa",
                    width: 2
                },
                areaStyle: {
                    color: "#87cefa",
                    type: 'default',
                    opacity: 0.4, // 图表中各个图区域的透明度
                    shadowColor: "#73a0c1", //阴影颜色
                    shadowOffsetX: 10, //阴影水平方向上的偏移距离。
                    shadowOffsetY: 10, //阴影垂直方向上的偏移距离
                    shadowBlur: 50, //图形阴影的模糊大小。
                }
            }
        },
        data: [{
            value: [80, 40, 15, 55],
            name: "分析"
        }]
    }]
};