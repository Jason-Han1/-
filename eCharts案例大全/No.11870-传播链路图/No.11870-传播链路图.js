option = {
    title: {
        text: "",
        subtext: "",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'true',
        bottom: 20,
        data: []
    }],
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '暨南大学',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 50
        },
        data: [
            
            {
                "name": "中药学",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学（暨大中科先进班）",
                "symbolSize": 6,
                "category": "test2",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学院",
                "category": "test",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            },
            {
                "name": "test",
                "category": "中医学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            },
            {
                "name": "test2",
                "category": "test",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            }
        ],
        links: [
            {
                "source": "药学院",
                "target": "中药学"
            },


            {
                "source": "药学院",
                "target": "药学"
            },
            {
                "source": "药学院",
                "target": "药学（暨大中科先进班）"
            },
            {
                "source": "药学院",
                "target": "test"
            },
            {
                "source": "药学院",
                "target": "test2"
            },
            {
                "source": "test",
                "target": "test2"
            },
        ],
        categories: [{
                'name': '中医学院'
            },
            {
                'name': '药学院'
            },
            {
                'name': 'test'
            },
            {
                'name': 'test2'
            },
        ],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: false,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                // curveness: 0,
                type: "solid"
            }
        }
    }]
};