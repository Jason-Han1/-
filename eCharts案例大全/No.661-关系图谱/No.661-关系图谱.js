option = {
    xAxis: {
        show: false,
        type: "value"
    },
    yAxis: {
        show: false,
        type: "value"
    },
    tooltip: {
        formatter: "{b}"
    },
    series: [{
        type: "graph",
        layout: "none",
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [0, 20],
        edgeLabel: {
            normal: {
                show: true,
                position: "middle",
                textStyle: {
                    fontSize: 14
                },
                formatter: "{c}次"
            }
        },
        zoom: 0.9,
        focusNodeAdjacency: true, // 指定的节点以及其所有邻接节点高亮
        roam: false, // 是否可拖拽

        lineStyle: {
            normal: {
                width: 2,
                shadowColor: "none",
                color: "#142F54",
                curveness: 0.1
            }
        },
        symbolSize: [100, 70],
        symbol: "roundRect",
        label: {
            show: true,
            formatter: function(params) {
                let c = params.data.username || "";
                let b = params.data.name;
                var str = "";
                if (c === "") {
                    str = "{p|" + b + "}";
                } else {
                    str = "{n|" + c + "}\n{p|" + b + "}";
                }
                return str;
            },
            rich: {
                p: {
                    fontSize: 14,
                    color: "#142F54",
                    align: "center"
                },
                n: {
                    height: 25,
                    fontSize: 16,
                    color: "#142F54",
                    align: "center"
                }
            }
        },
        itemStyle: {
            normal: {
                color: "#F2F2F2",
                borderColor: "#707070",
                borderWidth: 2,
                shadowColor: "rgba(225,225,225,0.4)",
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        data: [{
                import: true,
                level: "first",
                username: "张立",
                name: "15625698563",
                itemStyle: {
                    normal: {
                        color: "#EE6F0B"
                    }
                },
                x: 0,
                y: 0
            },
            {
                import: false,
                level: "sconed",
                username: "李宏伟",
                name: "17825690251",
                x: -200,
                y: 100
            },
            {
                import: false,
                level: "sconed",
                // username: "访问时间2",
                name: "15569865236",
                x: 200,
                y: 100
            },
            {
                import: false,
                level: "third",
                // username: "目的端IP1",
                name: "13256981457",
                x: -100,
                y: 200
            },
            {
                import: true,
                level: "third",
                username: "张磊",
                name: "17814589651",
                itemStyle: {
                    normal: {
                        color: "#EE6F0B"
                    }
                },
                x: 100,
                y: 200
            }
        ],

        links: [{
                source: "15625698563",
                value: "5165 ",
                target: "17825690251"
            },
            {
                source: "17825690251",
                value: "5165 ",
                target: "15625698563"
            },
            {
                source: "15625698563",
                value: "5165 ",
                target: "15569865236"
            },
            {
                source: "15569865236",
                value: "5165 ",
                target: "13256981457"
            },
            {
                source: "17825690251",
                value: "5165 ",
                target: "13256981457"
            },
            {
                source: "17825690251",
                value: "5165 ",
                target: "17814589651"
            },
            {
                source: "15569865236",
                value: "5165 ",
                target: "17814589651"
            }
        ]
    }]
};