option = {
    backgroundColor: '#1a4377',
    title: {
        text: 'Graph 简单示例'
    },
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            edgeLength: [ 100, 200 ]
        },
        data: [{
                "value": "万紫千红",
                "symbolSize": 30,
                "draggable": "true",
                "name": "1966384077",
                "link": "https://admin.p.adm-corp.kuaishou.com/frontend/archives/index.html#/archives/user/profile?userId=1966384077",
            },
            {
                "value": "万丈光芒",
                "symbolSize": 10,
                "draggable": "true",
                "name": "123456",
                "link": "https://admin.p.adm-corp.kuaishou.com/frontend/archives/index.html#/archives/user/profile?userId=1966384077"
            }
        ],
        label: {
            show: true,
            formatter: "{@c}" // 这里没有生效
        },
        edgeLabel: {
            show: true,
            formatter: ({ data: { sideDesc} }) => sideDesc, // 这里也没有生效
        },
        links: [{
            "source": "1966384077",
            "target": "123456",
            "sideDesc": "这是边的描述",
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 5,
            }
        },
    }]
};