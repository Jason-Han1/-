option = {
    tooltip: {
        formatter: "{c}"
    },
    series: [{
        type: "graph",
        layout: "circular",
        focusNodeAdjacency: true, // 指定的节点以及其所有邻接节点高亮
        roam: false, // 是否可拖拽
        symbolSize: [100, 100],
        categories: "categories",
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: "none",
                color: "#142F54",
                // curveness: 0.1
            }
        },
        label: {
            show: true,
        },
        data: [{
                name: "15625698563",
            },
            {
                name: "17825690251",
            },
            {
                name: "15569865236",
            },
            {
                name: "13256981457",
            },
            {
                name: "17814589651",
            }
        ],

        links: [{
                source: "15625698563",
                value: "支付宝:123",
                target: "17825690251"
            },
            {
                source: "17825690251",
                value: "身份证：123 ",
                target: "15625698563"
            },
            {
                source: "15625698563",
                value: "身份证：222 ",
                target: "15569865236"
            },
            {
                source: "15569865236",
                value: "身份证：236 ",
                target: "13256981457"
            },
            {
                source: "17825690251",
                value: "手机号：1832222XXXX ",
                target: "13256981457"
            },
            {
                source: "17825690251",
                value: "手机号：1861111XXXX ",
                target: "17814589651"
            },
            {
                source: "15569865236",
                value: "支付宝:456789 ",
                target: "17814589651"
            }
        ]
    }]
};